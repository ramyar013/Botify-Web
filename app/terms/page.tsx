export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <a
          href="/"
          className="mb-12 inline-block text-sm text-gray-400 transition hover:text-white"
        >
          ← Back to Botify Bot
        </a>

        <h1 className="text-4xl font-bold md:text-5xl">
          Terms of Service
        </h1>

        <p className="mt-4 text-gray-400">
          Last updated: August 2026
        </p>

        <div className="mt-12 space-y-10 leading-7 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">
              1. Acceptance of Terms
            </h2>
            <p className="mt-3">
              By accessing or using Botify Bot, you agree to these Terms of
              Service. If you do not agree to these terms, you should not use
              the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              2. About Botify Bot
            </h2>
            <p className="mt-3">
              Botify Bot provides AI-powered tools that help businesses manage
              and automate customer conversations across supported messaging
              platforms, including WhatsApp, Facebook, and Instagram.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              3. User Responsibilities
            </h2>
            <p className="mt-3">
              You are responsible for using Botify Bot lawfully and for
              ensuring that your use of connected messaging platforms complies
              with applicable laws, platform policies, and third-party terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              4. Acceptable Use
            </h2>
            <p className="mt-3">
              You may not use Botify Bot for unlawful activities, spam,
              harassment, fraud, unauthorized access, or any activity that
              violates the rights of others or the policies of connected
              platforms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              5. AI-Generated Responses
            </h2>
            <p className="mt-3">
              Botify Bot may generate automated responses using artificial
              intelligence. AI-generated content may not always be accurate or
              appropriate, and users remain responsible for how automated
              responses are configured and used.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              6. Third-Party Services
            </h2>
            <p className="mt-3">
              Botify Bot may integrate with third-party services such as Meta
              platforms and other messaging providers. Those services operate
              under their own terms, policies, and availability requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              7. Service Availability
            </h2>
            <p className="mt-3">
              We aim to keep Botify Bot reliable and available, but we do not
              guarantee uninterrupted or error-free operation. Features may be
              updated, modified, or temporarily unavailable when necessary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              8. Privacy and Data
            </h2>
            <p className="mt-3">
              Information processed through Botify Bot is handled according to
              our Privacy Policy and Data Deletion instructions.
            </p>

            <div className="mt-3 flex flex-wrap gap-5">
              <a
                href="/privacy"
                className="text-blue-400 hover:text-blue-300"
              >
                Privacy Policy →
              </a>

              <a
                href="/data-deletion"
                className="text-blue-400 hover:text-blue-300"
              >
                Data Deletion →
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              9. Changes to These Terms
            </h2>
            <p className="mt-3">
              We may update these Terms of Service when our service,
              integrations, or legal requirements change. The latest version
              will be available on this page.
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