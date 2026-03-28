import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Daylen Hicks",
  description: "Terms of service for digital services provided by Daylen Hicks.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 md:px-12 py-32">
      <a href="/" className="text-sm text-muted hover:text-accent transition-colors mb-8 inline-block">
        &larr; Back to Home
      </a>

      <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
      <p className="text-sm text-muted mb-12">Last updated: March 28, 2026</p>

      <div className="prose-custom space-y-8 text-sm text-muted leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">1. Overview</h2>
          <p>
            These Terms of Service (&quot;Terms&quot;) govern the purchase and delivery of digital services
            provided by Daylen Hicks (&quot;Provider,&quot; &quot;I,&quot; &quot;me&quot;), operating as a sole proprietor
            based in North Carolina. By purchasing or engaging any service, you (&quot;Client,&quot; &quot;you&quot;)
            agree to these Terms in full.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">2. Services</h2>
          <p>
            Services offered include but are not limited to: Google Business Profile setup, monthly
            SEO retainers, AI automation setup, AI literacy workshops, and website design/redesign.
            The specific scope, deliverables, and timeline for each engagement will be outlined in a
            written proposal or invoice sent before work begins.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">3. Payments</h2>
          <p>
            All prices are listed in USD. Payment is due upon invoice unless otherwise agreed in
            writing. For one-time services, full payment is required before delivery begins. For
            recurring services (e.g., monthly SEO retainer), payment is due at the start of each
            billing cycle. Late payments may result in paused service delivery.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">4. Project Timeline & Delivery</h2>
          <p>
            Estimated timelines are provided in good faith but are not guaranteed. Delays caused by
            the Client (e.g., late content delivery, delayed feedback, access issues) may extend the
            timeline. I will communicate proactively about any changes to the expected delivery date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">5. Client Responsibilities</h2>
          <p>
            You agree to provide timely access to any accounts, content, credentials, and feedback
            needed to complete the work. You are responsible for the accuracy of all information
            and content you provide. You confirm you have the right to use any materials (logos,
            images, copy) you supply.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">6. Intellectual Property</h2>
          <p>
            Upon full payment, you own all deliverables created specifically for your project
            (website code, copy, designs). I retain the right to display the work in my portfolio
            and marketing materials unless we agree otherwise in writing. Any pre-existing tools,
            templates, or frameworks I use remain my intellectual property.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">7. Revisions</h2>
          <p>
            Each project includes up to two rounds of revisions within the agreed scope. Additional
            revisions or scope changes beyond the original proposal will be billed separately at an
            agreed-upon rate.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">8. Limitation of Liability</h2>
          <p>
            I am not liable for any indirect, incidental, or consequential damages arising from the
            use of delivered services, including but not limited to lost revenue, lost data, or
            business interruption. My total liability shall not exceed the amount paid for the
            specific service in question.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">9. Termination</h2>
          <p>
            Either party may terminate a recurring service with 14 days&apos; written notice. For
            one-time projects, see the Refund Policy. Upon termination, I will deliver all
            completed work up to the termination date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of North Carolina. Any disputes will
            be resolved in the courts of Guilford County, North Carolina.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">11. Contact</h2>
          <p>
            Questions about these Terms? Email me at{" "}
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
