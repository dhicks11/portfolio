import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy — Daylen Hicks",
  description: "Refund policy for digital services provided by Daylen Hicks.",
};

export default function RefundPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 md:px-12 py-32">
      <a href="/" className="text-sm text-muted hover:text-accent transition-colors mb-8 inline-block">
        &larr; Back to Home
      </a>

      <h1 className="text-4xl font-bold mb-2">Refund Policy</h1>
      <p className="text-sm text-muted mb-12">Last updated: March 28, 2026</p>

      <div className="space-y-8 text-sm text-muted leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">1. One-Time Services</h2>
          <p className="mb-3">
            For one-time projects (Google Business Profile setup, AI automation setup, website
            redesign, workshops):
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>
              <strong className="text-foreground">Before work begins:</strong> Full refund available
              if you cancel before I start the project. Just email me.
            </li>
            <li>
              <strong className="text-foreground">Work in progress:</strong> If you cancel after
              work has started, you will be charged for the work completed to date at a prorated
              rate. All completed deliverables will be provided to you.
            </li>
            <li>
              <strong className="text-foreground">After delivery:</strong> Once the final
              deliverables have been sent and accepted, no refunds will be issued. If you are
              unsatisfied with the work, I will provide up to two rounds of revisions at no
              additional cost to address your concerns.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">2. Monthly Retainer Services</h2>
          <p className="mb-3">For recurring services (Monthly SEO Retainer):</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>
              You may cancel at any time with 14 days&apos; written notice before the next billing
              cycle.
            </li>
            <li>
              The current month&apos;s payment is non-refundable — service continues through the end
              of the paid period.
            </li>
            <li>
              No refunds for prior months of completed service.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">3. Workshops & Sessions</h2>
          <p className="mb-3">For AI Literacy Workshops and speaking engagements:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>
              <strong className="text-foreground">7+ days before:</strong> Full refund or
              reschedule at no cost.
            </li>
            <li>
              <strong className="text-foreground">Less than 7 days:</strong> 50% refund or
              reschedule for a $50 rebooking fee.
            </li>
            <li>
              <strong className="text-foreground">No-show:</strong> No refund.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">4. Satisfaction Guarantee</h2>
          <p>
            I want every client to be happy with the work. If you&apos;re not satisfied with a
            deliverable, reach out within 7 days of delivery and I will work with you to make it
            right — either through revisions or a partial credit toward a future service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">5. How to Request a Refund</h2>
          <p>
            Email{" "}
            <a href="mailto:daylenhicks10@gmail.com" className="text-accent hover:underline">
              daylenhicks10@gmail.com
            </a>{" "}
            with your name, the service purchased, and the reason for your request. I will respond
            within 48 hours. Approved refunds are processed within 5–10 business days.
          </p>
        </section>
      </div>
    </main>
  );
}
