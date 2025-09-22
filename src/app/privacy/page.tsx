import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Jennifer Watkins Art",
  description: "Data collection, cookies, email marketing consent, third-party integrations, user rights, and GDPR compliance for this e-commerce site.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="heading-secondary mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground mb-10">
        This Privacy Policy explains how we collect, use, and share your personal information when you visit our website or make a purchase.
      </p>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold">Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Contact details (name, email, phone, shipping address) when you place an order or contact us.</li>
          <li>Payment information processed securely by our payment provider; we do not store full card details.</li>
          <li>Usage data, device information, and analytics collected via cookies and similar technologies.</li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold">Cookies & Tracking</h2>
        <p className="text-muted-foreground">We use cookies to improve site functionality, analyze traffic, and personalize content. You can manage cookie preferences in your browser settings. Some features may not function properly if cookies are disabled.</p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold">Email Marketing Consent</h2>
        <p className="text-muted-foreground">If you opt into our mailing list, we may send you updates about new works, exhibitions, or promotions. You may unsubscribe at any time via the link in the email or by contacting us.</p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold">Third-Party Integrations</h2>
        <p className="text-muted-foreground">We may use third-party services for payments, analytics, and shipping. These providers process your data in accordance with their own privacy policies. We only share the minimum information necessary to provide our services.</p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold">Data Retention</h2>
        <p className="text-muted-foreground">We retain personal data only as long as necessary to fulfill orders, comply with legal obligations, and resolve disputes.</p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold">Your Rights</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Access, correct, or delete personal information we hold about you.</li>
          <li>Object to or restrict certain types of data processing.</li>
          <li>Request data portability.</li>
        </ul>
        <p className="text-muted-foreground">To exercise these rights, please contact us using the details on the Contact page. For EU/UK residents, you also have the right to lodge a complaint with your local data protection authority (GDPR/UK GDPR).</p>
      </section>

      <section className="space-y-3 mb-10">
        <h2 className="text-xl font-semibold">Security</h2>
        <p className="text-muted-foreground">We implement reasonable safeguards to protect your information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
      </section>

      <p className="text-xs text-muted-foreground">This Privacy Policy is provided for general informational purposes only and does not constitute legal advice.</p>
    </div>
  );
}

