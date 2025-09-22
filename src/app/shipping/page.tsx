import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping | Jennifer Watkins Art",
  description: "Shipping methods, delivery timeframes, fine art packaging, international policies, insurance and tracking for artwork purchases.",
};

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="heading-secondary mb-6">Shipping</h1>
      <p className="text-muted-foreground mb-10">
        We ship original artworks and limited editions worldwide with museum-grade packaging and trusted carriers. Below you will find details on methods, timeframes, packaging, insurance, and tracking for your order.
      </p>

      <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold">Shipping Methods</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Domestic shipments: UPS Ground, FedEx Home Delivery, or USPS Priority based on size and destination.</li>
          <li>Large-format and high-value works: white glove delivery via specialized fine art couriers.</li>
          <li>Crating services: custom wood crates for fragile, large-scale, or international shipments.</li>
        </ul>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold">Estimated Delivery Timeframes</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Domestic (continental U.S.): 3–7 business days after dispatch.</li>
          <li>International: typically 7–14 business days, subject to customs clearance.</li>
          <li>White glove delivery: scheduled service; we will coordinate a delivery window with you.</li>
        </ul>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold">Fine Art Packaging</h2>
        <p className="text-muted-foreground">
          Each piece is prepared using industry-standard archival materials. Works on canvas are corner-protected, wrapped, and boxed; framed works are protected with glassine; and large or fragile pieces may be professionally crated. All packaging is designed to minimize vibration and impact during transit.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold">International Shipping</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Recipient is responsible for duties, VAT, and customs fees as applicable.</li>
          <li>We provide commercial invoices and HS codes as required for customs documentation.</li>
          <li>Certain materials or sizes may be restricted in some countries; we will advise if any limitations apply.</li>
        </ul>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold">Insurance & Liability</h2>
        <p className="text-muted-foreground">
          All shipments are fully insured for the purchase value from our studio to your delivery address. In the rare event of transit damage, please photograph the packaging and artwork upon receipt and contact us within 48 hours so we can initiate a claim and arrange resolution or replacement where possible.
        </p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold">Tracking & Notifications</h2>
        <p className="text-muted-foreground">
          You will receive tracking details by email when your order ships. For white glove deliveries, our logistics partner will contact you to schedule a convenient delivery time.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Shipping Costs</h2>
        <p className="text-muted-foreground">
          Shipping is calculated at checkout based on size, weight, destination, and service level. Custom crating or white glove delivery may incur additional costs, quoted prior to dispatch.
        </p>
      </section>
    </div>
  );
}

