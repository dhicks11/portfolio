"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendBookingEmail } from "@/app/actions/booking";

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
];

const meetingTypes = [
  { value: "consultation", label: "Consultation", duration: "30 min" },
  { value: "project-discussion", label: "Project Discussion", duration: "45 min" },
  { value: "coffee-chat", label: "Coffee Chat", duration: "15 min" },
  { value: "interview", label: "Interview", duration: "60 min" },
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function Scheduler() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState(meetingTypes[0].value);
  const [form, setForm] = useState({ name: "", email: "", note: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const calendarDays = useMemo(() => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const days: (number | null)[] = [];

    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);

    return days;
  }, [currentMonth, currentYear]);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const dayOfWeek = date.getDay();
    // Disable past dates and weekends
    if (date < new Date(today.getFullYear(), today.getMonth(), today.getDate())) return true;
    if (dayOfWeek === 0 || dayOfWeek === 6) return true;
    return false;
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getFullYear() === currentYear
    );
  };

  const isToday = (day: number) => {
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth &&
      today.getFullYear() === currentYear
    );
  };

  const handleDateClick = (day: number) => {
    if (isDateDisabled(day)) return;
    setSelectedDate(new Date(currentYear, currentMonth, day));
    setSelectedTime(null);
  };

  const selectedMeetingType = meetingTypes.find((t) => t.value === selectedType);

  const formatSelectedDate = () => {
    if (!selectedDate) return "";
    return selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getGoogleCalendarUrl = () => {
    if (!selectedDate || !selectedTime || !selectedMeetingType) return "";

    // Parse time like "9:00 AM" into hours/minutes
    const [timePart, meridiem] = selectedTime.split(" ");
    const [hourStr, minStr] = timePart.split(":");
    let hour = parseInt(hourStr);
    const min = parseInt(minStr);
    if (meridiem === "PM" && hour !== 12) hour += 12;
    if (meridiem === "AM" && hour === 12) hour = 0;

    const start = new Date(selectedDate);
    start.setHours(hour, min, 0, 0);

    // Parse duration like "30 min" or "60 min"
    const durationMin = parseInt(selectedMeetingType.duration);
    const end = new Date(start.getTime() + durationMin * 60 * 1000);

    const fmt = (d: Date) =>
      d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: `${selectedMeetingType.label} with ${form.name || "Guest"}`,
      dates: `${fmt(start)}/${fmt(end)}`,
      details: form.note
        ? `Meeting booked via portfolio.\n\nNote: ${form.note}`
        : "Meeting booked via portfolio.",
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  };

  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime || !form.name || !form.email) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const result = await sendBookingEmail({
        name: form.name,
        email: form.email,
        note: form.note,
        date: formatSelectedDate(),
        time: selectedTime,
        meetingType: selectedMeetingType?.label || "",
        duration: selectedMeetingType?.duration || "",
      });

      if (result.success) {
        setStatus("sent");
      } else {
        setStatus("error");
        setErrorMsg(result.error || "Something went wrong.");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleReset = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setForm({ name: "", email: "", note: "" });
    setStatus("idle");
  };

  // Step tracking
  const step = !selectedDate ? 1 : !selectedTime ? 2 : status === "sent" ? 4 : 3;

  return (
    <div className="space-y-6">
      {/* Step indicators */}
      <div className="flex items-center gap-2 text-xs font-mono text-muted">
        {[
          { n: 1, label: "Date" },
          { n: 2, label: "Time" },
          { n: 3, label: "Details" },
          { n: 4, label: "Confirmed" },
        ].map(({ n, label }, i) => (
          <div key={n} className="flex items-center gap-2">
            {i > 0 && (
              <div
                className={`w-8 h-px ${step >= n ? "bg-accent" : "bg-card-border"} transition-colors`}
              />
            )}
            <div
              className={`flex items-center gap-1.5 transition-colors ${
                step >= n ? "text-accent" : "text-muted/50"
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border transition-colors ${
                  step >= n
                    ? "border-accent bg-accent/10"
                    : "border-card-border"
                }`}
              >
                {step > n ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                ) : (
                  n
                )}
              </span>
              <span className="hidden sm:inline">{label}</span>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Confirmation screen */}
        {status === "sent" ? (
          <motion.div
            key="confirmed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bento-card p-8 md:p-10 text-center space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Meeting Requested!</h3>
              <p className="text-muted max-w-sm mx-auto">
                I&apos;ll confirm your{" "}
                <span className="text-foreground">{selectedMeetingType?.label}</span> on{" "}
                <span className="text-foreground">{formatSelectedDate()}</span> at{" "}
                <span className="text-foreground">{selectedTime}</span> via email.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-primary text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <line x1="12" y1="14" x2="12" y2="18" />
                  <line x1="10" y1="16" x2="14" y2="16" />
                </svg>
                Add to Google Calendar
              </a>
              <button onClick={handleReset} className="btn-pill btn-outline text-sm">
                Schedule Another
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="scheduler"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Left: Calendar + Meeting Type */}
            <div className="space-y-6">
              {/* Meeting type selector */}
              <div className="bento-card p-6">
                <label className="block text-xs uppercase tracking-widest text-muted mb-3 font-medium">
                  Meeting Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {meetingTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setSelectedType(type.value)}
                      className={`text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                        selectedType === type.value
                          ? "border-accent bg-accent/10 text-foreground"
                          : "border-card-border text-muted hover:border-muted/50"
                      }`}
                    >
                      <span className="block font-medium">{type.label}</span>
                      <span className="text-xs opacity-60">{type.duration}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Calendar */}
              <div className="bento-card p-6">
                {/* Month nav */}
                <div className="flex items-center justify-between mb-5">
                  <button
                    onClick={prevMonth}
                    className="w-8 h-8 rounded-lg border border-card-border flex items-center justify-center text-muted hover:text-foreground hover:border-accent transition-colors"
                    aria-label="Previous month"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <h4 className="font-semibold text-lg">
                    {MONTHS[currentMonth]} {currentYear}
                  </h4>
                  <button
                    onClick={nextMonth}
                    className="w-8 h-8 rounded-lg border border-card-border flex items-center justify-center text-muted hover:text-foreground hover:border-accent transition-colors"
                    aria-label="Next month"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {DAYS.map((d) => (
                    <div
                      key={d}
                      className="text-center text-xs font-medium text-muted py-1"
                    >
                      {d}
                    </div>
                  ))}
                </div>

                {/* Day grid */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, i) => (
                    <div key={i} className="aspect-square">
                      {day !== null && (
                        <button
                          onClick={() => handleDateClick(day)}
                          disabled={isDateDisabled(day)}
                          className={`w-full h-full rounded-lg text-sm font-medium transition-all ${
                            isSelected(day)
                              ? "bg-accent text-background font-bold"
                              : isToday(day)
                              ? "border border-accent text-accent"
                              : isDateDisabled(day)
                              ? "text-muted/25 cursor-not-allowed"
                              : "text-foreground hover:bg-accent/10 hover:text-accent"
                          }`}
                        >
                          {day}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Time slots + Details form */}
            <div className="space-y-6">
              {/* Time slots */}
              <AnimatePresence>
                {selectedDate && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="bento-card p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <label className="block text-xs uppercase tracking-widest text-muted font-medium">
                        Available Times
                      </label>
                      <span className="text-xs text-muted font-mono">
                        {selectedDate.toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto pr-1">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`px-3 py-2.5 rounded-lg text-xs font-mono font-medium transition-all ${
                            selectedTime === time
                              ? "bg-accent text-background"
                              : "border border-card-border text-muted hover:border-accent hover:text-accent"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Details form */}
              <AnimatePresence>
                {selectedDate && selectedTime && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="bento-card p-6 space-y-4"
                  >
                    <label className="block text-xs uppercase tracking-widest text-muted font-medium">
                      Your Details
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                      />
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <textarea
                      placeholder="Anything you'd like me to know beforehand? (optional)"
                      value={form.note}
                      onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
                      rows={3}
                      className="w-full bg-background border border-card-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                    />

                    {/* Summary */}
                    <div className="bg-background rounded-xl border border-card-border p-4 text-sm space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted">Type</span>
                        <span className="font-medium">{selectedMeetingType?.label}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Duration</span>
                        <span className="font-medium">{selectedMeetingType?.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Date</span>
                        <span className="font-medium font-mono text-xs">
                          {selectedDate.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Time</span>
                        <span className="font-medium font-mono text-xs">{selectedTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        onClick={handleSubmit}
                        disabled={!form.name || !form.email || status === "sending"}
                        className="btn-pill btn-primary justify-center disabled:opacity-50"
                      >
                        {status === "sending" ? (
                          "Booking..."
                        ) : (
                          <>
                            Confirm Booking
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                          </>
                        )}
                      </button>
                      {status === "error" && (
                        <span className="text-red-400 text-sm">{errorMsg}</span>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Empty state when no date selected */}
              {!selectedDate && (
                <div className="bento-card p-8 flex flex-col items-center justify-center text-center min-h-[200px]">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <p className="text-muted text-sm">
                    Pick a date on the calendar to see available time slots
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
