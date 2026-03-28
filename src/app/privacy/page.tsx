import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Daylen Hicks",
  description: "Privacy policy for digital services provided by Daylen Hicks.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 md:px-12 py-32">
      <a href="/" className="text-sm text-muted hover:text-accent transition-colors mb-8 inline-block">
        &larr; Back to Home
      </a>

      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted mb-12">Last updated: March 28, 2026</p>

      <div className="space-y-8 text-sm text-muted leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">1. Information I Collect</h2>
          <p className="mb-3">When you use this website or engage my services, I may collect:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li><strong className="text-foreground">Contact information</strong> — name, email address, and any details you provide through the contact form or booking system</li>
            <li><strong className="text-foreground">Business information</strong> — business name, website URL, and account credentials you share for service delivery</li>
            <li><strong className="text-foreground">Usage data</strong> — basic analytics such as page views and referral sources (collected via Vercel Analytics, if enabled)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">2. How I Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>To respond to your inquiries and deliver contracted services</li>
            <li>To send appointment confirmations and project updates</li>
            <li>To send invoices and process payments</li>
            <li>To improve this website and my services</li>
          </ul>
          <p className="mt-3">
            I will never sell, rent, or share your personal information with third parties for
            marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">3. Third-Party Services</h2>
          <p className="mb-3">This site and my services use the following third-party tools:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li><strong className="text-foreground">Resend</strong> — for sending email notifications (contact form, booking confirmations)</li>
            <li><strong className="text-foreground">Calendly</strong> — for appointment scheduling</li>
            <li><strong className="text-foreground">Vercel</strong> — for website hosting</li>
          </ul>
          <p className="mt-3">
            Each of these services has its own privacy policy governing how they handle data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">4. Cookies</h2>
          <p>
            This website does not use tracking cookies or advertising pixels. Third-party embeds
            (such as Calendly) may set their own cookies — refer to their respective privacy
            policies for details.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">5. Data Retention</h2>
          <p>
            Contact form submissions and booking data are retained only as long as necessary to
            deliver services and respond to inquiries. Client project files and credentials are
            deleted within 30 days of project completion unless ongoing maintenance is agreed upon.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
            <li>Request a copy of the personal data I hold about you</li>
            <li>Request deletion of your personal data</li>
            <li>Request corrections to inaccurate data</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, email me at{" "}
            <a href="mailto:daylenhicks10@gmail.com" className="text-accent hover:underline">
              daylenhicks10@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">7. Children&apos;s Privacy</h2>
          <p>
            My services are not directed at individuals under the age of 13. I do not knowingly
            collect personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">8. Changes to This Policy</h2>
          <p>
            I may update this Privacy Policy from time to time. Changes will be posted on this page
            with an updated &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">9. Contact</h2>
          <p>
            Questions about this policy? Email me at{" "}
            <a href="mailto:daylenhicks10@gmail.com" className="text-accent hover:underline">
              daylenhicks10@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
