export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#070b14] px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-gray-400 transition hover:text-white">← Back to Botify bot Ltd</a>
        <h1 className="mt-8 text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-3 text-sm text-gray-500">Last updated: August 28, 2026</p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">By accessing or using Botify bot Ltd, you agree to these Terms of Service. If you do not agree to these terms, you should not use the service.</p>
        </section>

        <section className="mt-9">
          <h2 className="text-xl font-semibold">2. About Botify bot Ltd</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">Botify bot Ltd provides AI-powered tools that help businesses manage and automate customer conversations across supported messaging platforms, including WhatsApp, Facebook, and Instagram. Botify bot Ltd operates under company number 17424187 at Diamond Court, Water Street, Bakewell, DE45 1EW.</p>
        </section>

        <section className="mt-9">
          <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">You are responsible for using Botify bot Ltd lawfully and for ensuring that your use of connected messaging platforms complies with applicable laws, platform policies, and third-party terms.</p>
        </section>

        <section className="mt-9">
          <h2 className="text-xl font-semibold">4. Acceptable Use</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">You may not use Botify bot Ltd for unlawful activity, spam, harassment, fraud, unauthorized access, abuse of third-party platforms, or any activity that violates the rights of others.</p>
        </section>

        <section className="mt-9">
          <h2 className="text-xl font-semibold">5. AI-Generated Responses</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">Botify bot Ltd may generate or assist with responses using artificial intelligence. AI-generated content may not always be accurate or appropriate, and users remain responsible for how automated responses are configured and used.</p>
        </section>

        <section className="mt-9">
          <h2 className="text-xl font-semibold">6. Third-Party Services</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">Botify bot Ltd may integrate with Meta platforms and other third-party messaging providers. Those services operate under their own terms, policies, permissions, and availability requirements.</p>
        </section>

        <section className="mt-9">
          <h2 className="text-xl font-semibold">7. Service Availability</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">We aim to keep Botify bot Ltd reliable and available, but we do not guarantee uninterrupted or error-free operation. Features may be updated, modified, limited, or temporarily unavailable when necessary.</p>
        </section>

        <section className="mt-9">
          <h2 className="text-xl font-semibold">8. Privacy and Data</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">Information processed through Botify bot Ltd is handled according to our Privacy Policy and Data Deletion instructions.</p>
          <div className="mt-3 flex flex-wrap gap-5 text-sm">
            <a href="/privacy" className="text-blue-400 transition hover:text-blue-300">Privacy Policy →</a>
            <a href="/data-deletion" className="text-blue-400 transition hover:text-blue-300">Data Deletion →</a>
          </div>
        </section>

        <section className="mt-9">
          <h2 className="text-xl font-semibold">9. Contact</h2>
          <div className="mt-3 space-y-2 text-sm leading-7 text-gray-300">
            <p>For questions about these Terms, contact <a href="mailto:support@botifybot.co" className="text-blue-400 transition hover:text-blue-300">support@botifybot.co</a>.</p>
            <p><strong className="text-gray-200">Phone:</strong> <a href="tel:+447412845318" className="text-blue-400 transition hover:text-blue-300">+44 7412 845318</a></p>
            <p><strong className="text-gray-200">Company:</strong> Botify bot Ltd</p>
            <p><strong className="text-gray-200">Company number:</strong> 17424187</p>
            <p><strong className="text-gray-200">Address:</strong> Diamond Court, Water Street, Bakewell, DE45 1EW</p>
          </div>
        </section>

        <section className="mt-9">
          <h2 className="text-xl font-semibold">10. Changes to These Terms</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">We may update these Terms of Service when our service, integrations, or legal requirements change. The latest version will remain available on this page.</p>
        </section>

        <footer className="mt-12 border-t border-white/10 pt-6 text-xs text-gray-600">© 2026 Botify bot Ltd. All rights reserved.</footer>
      </div>
    </main>
  );
}
