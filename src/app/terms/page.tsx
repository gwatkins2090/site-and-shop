import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Jennifer Watkins Art",
  description: "Purchase terms, payment, returns, authenticity guarantees, limitations of liability, and dispute resolution for art sales.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="heading-secondary mb-6">Terms of Service</h1>
      <p className="text-muted-foreground mb-10">
        These Terms of Service (the “Terms”) govern purchases and use of the website. By placing an order, you agree to these Terms.
      </p>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold">Purchases & Order Acceptance</h2>
        <p className="text-muted-foreground">All orders are offers to purchase artworks or products. We may accept or decline any order at our discretion (for example, due to availability, suspected fraud, or pricing errors). An order is accepted when we send a confirmation email.</p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold">Pricing & Payment</h2>
        <p className="text-muted-foreground">Prices are listed in USD unless otherwise noted and exclude taxes, duties, and shipping. We accept major payment methods shown at checkout. By submitting payment, you authorize us (and our payment processor) to charge your selected method for the total amount.</p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold">Shipping, Title & Risk</h2>
        <p className="text-muted-foreground">Title transfers upon our receipt of full payment and shipment. Risk of loss passes to you upon delivery. All shipments are insured during transit as outlined in our Shipping policy.</p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold">Returns & Exchanges</h2>
        <p className="text-muted-foreground">Original artworks are typically final sale. However, if an item arrives damaged, contact us within 48 hours with photographs and we will assist with a repair, replacement, or refund as appropriate. For limited editions or merchandise, returns may be accepted within 14 days in original condition; shipping charges are non-refundable unless the return is due to our error.</p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold">Authenticity & Provenance</h2>
        <p className="text-muted-foreground">Original artworks are represented as authentic works by the artist. Certificates of authenticity may be included where applicable. We stand behind the integrity and provenance of works sold through this site.</p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold">Intellectual Property</h2>
        <p className="text-muted-foreground">All content on this site, including images, text, and graphics, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written permission.</p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold">Limitation of Liability</h2>
        <p className="text-muted-foreground">To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from your use of the site or purchase of artworks. Our total liability for any claim shall not exceed the amount you paid for the applicable item.</p>
      </section>

      <section className="space-y-3 mb-10">
        <h2 className="text-xl font-semibold">Dispute Resolution & Governing Law</h2>
        <p className="text-muted-foreground">These Terms are governed by the laws of your state of residence in the United States, without regard to conflict-of-law principles. Any disputes shall be resolved through good-faith negotiations; if unresolved, you agree to binding arbitration or small-claims proceedings where permitted by law.</p>
      </section>

      <p className="text-xs text-muted-foreground">This Terms of Service is provided for general informational purposes only and does not constitute legal advice.</p>
    </div>
  );
}

