export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <a
          href="/"
          className="mb-12 inline-block text-sm text-gray-400 transition hover:text-white"
        >
          ← Back to Botify Bot
        </a>

        <h1 className="text-4xl font-bold md:text-5xl">Privacy Policy</h1>

        <p className="mt-4 text-gray-400">
          Last updated: August 2026
        </p>

        <div className="mt-12 space-y-10 leading-7 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">
              1. Introduction
            </h2>
            <p className="mt-3">
              Botify Bot provides AI-powered tools that help businesses manage
              and automate customer conversations across supported messaging
              platforms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              2. Information We Process
            </h2>
            <p className="mt-3">
              When you use Botify Bot, we may process account information,
              messaging data, conversation content, and technical information
              required to provide and maintain the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              3. How We Use Information
            </h2>
            <p className="mt-3">
              Information is processed to provide automated responses, operate
              integrations, improve service reliability, maintain security,
              and provide requested features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              4. Third-Party Platforms
            </h2>
            <p className="mt-3">
              Botify Bot may connect with third-party services such as
              WhatsApp, Facebook, and Instagram. Use of those platforms is also
              subject to their respective privacy policies and terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              5. Data Security
            </h2>
            <p className="mt-3">
              We use reasonable technical and organizational measures designed
              to protect information processed through Botify Bot.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              6. Data Deletion
            </h2>
            <p className="mt-3">
              Users may request deletion of their information through our Data
              Deletion page.
            </p>

            <a
              href="/data-deletion"
              className="mt-3 inline-block text-blue-400 hover:text-blue-300"
            >
              View Data Deletion Instructions →
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              7. Changes to This Policy
            </h2>
            <p className="mt-3">
              This Privacy Policy may be updated when our services or legal
              requirements change. The latest version will always be available
              on this page.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-sm text-gray-500">
          © 2026 Botify Bot. All rights reserved.
        </div>
      </div>
    </main>
  );
}