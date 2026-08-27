export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#070b14] px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-gray-400 transition hover:text-white">← Back to Botify Bot</a>
        <h1 className="mt-8 text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-3 text-sm text-gray-500">Last updated: August 27, 2026</p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">Botify Bot provides AI-powered tools that help businesses manage and automate customer conversations across supported messaging platforms. This Privacy Policy explains how information may be processed when using Botify Bot.</p>
        </section>

        <section className="mt-9">
          <h2 className="text-xl font-semibold">2. Information We Process</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">When you use Botify Bot, we may process account information, messaging data, conversation content, connected-channel information, and technical information required to provide, secure, and maintain the service.</p>
        </section>

        <section className="mt-9">
          <h2 className="text-xl font-semibold">3. How We Use Information</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">Information may be used to provide AI-assisted or automated responses, operate messaging integrations, maintain security, troubleshoot issues, improve reliability, and provide requested features and support.</p>
        </section>

        <section className="mt-9">
          <h2 className="text-xl font-semibold">4. Third-Party Platforms</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">Botify Bot may connect with third-party services such as WhatsApp, Facebook, and Instagram. Use of those platforms is also subject to their respective privacy policies, terms, and platform requirements.</p>
        </section>

        <section className="mt-9">
          <h2 className="text-xl font-semibold">5. Data Security</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">We use reasonable technical and organizational measures designed to protect information processed through Botify Bot. No online service can guarantee absolute security.</p>
        </section>

        <section className="mt-9">
          <h2 className="text-xl font-semibold">6. Data Retention</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">Information is retained only for as long as reasonably necessary to provide the service, satisfy legitimate operational requirements, comply with applicable legal obligations, or resolve disputes.</p>
        </section>

        <section className="mt-9">
          <h2 className="text-xl font-semibold">7. Data Deletion</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">Users may request deletion of eligible personal information through our Data Deletion page or by contacting us at <a href="mailto:support@botifybot.co" className="text-blue-400 transition hover:text-blue-300">support@botifybot.co</a>.</p>
          <a href="/data-deletion" className="mt-3 inline-block text-sm text-blue-400 transition hover:text-blue-300">View Data Deletion Instructions →</a>
        </section>

        <section className="mt-9">
          <h2 className="text-xl font-semibold">8. Contact</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">For privacy questions or requests, contact us at <a href="mailto:support@botifybot.co" className="text-blue-400 transition hover:text-blue-300">support@botifybot.co</a>.</p>
        </section>

        <section className="mt-9">
          <h2 className="text-xl font-semibold">9. Changes to This Policy</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">We may update this Privacy Policy when our services, integrations, or legal requirements change. The latest version will remain available on this page.</p>
        </section>

        <footer className="mt-12 border-t border-white/10 pt-6 text-xs text-gray-600">© 2026 Botify Bot. All rights reserved.</footer>
      </div>
    </main>
  );
}
