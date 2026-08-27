export default function DataDeletion() {
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
          Data Deletion Instructions
        </h1>

        <p className="mt-4 text-gray-400">
          Last updated: August 2026
        </p>

        <div className="mt-12 space-y-10 leading-7 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">
              1. Requesting Data Deletion
            </h2>
            <p className="mt-3">
              If you would like to request deletion of personal data associated
              with your use of Botify Bot, you may contact us and submit a data
              deletion request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              2. Information to Include
            </h2>
            <p className="mt-3">
              Please provide enough information for us to identify your account
              or connected integration. Do not send passwords, access tokens,
              secret keys, or other sensitive credentials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              3. Verification of Requests
            </h2>
            <p className="mt-3">
              We may need to verify that the person making the request is
              authorized to request deletion of the relevant information before
              completing the deletion process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              4. What Will Be Deleted
            </h2>
            <p className="mt-3">
              Subject to applicable legal and technical requirements, we will
              delete or anonymize personal information associated with the
              request, including data that is no longer required to provide the
              service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              5. Retention Exceptions
            </h2>
            <p className="mt-3">
              Certain information may be retained when required by law, for
              security and fraud prevention, dispute resolution, enforcement of
              agreements, or other legitimate compliance purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              6. Connected Meta Accounts
            </h2>
            <p className="mt-3">
              If your Botify Bot account is connected to Facebook, Instagram,
              WhatsApp, or other Meta services, deleting data from Botify Bot
              does not automatically delete information stored directly by
              Meta. You may also need to manage or delete information through
              your Meta account settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              7. Contact
            </h2>
            <p className="mt-3">
              A dedicated support contact for data deletion requests will be
              provided before Botify Bot is publicly launched.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              8. Related Policies
            </h2>

            <div className="mt-3 flex flex-wrap gap-5">
              <a
                href="/privacy"
                className="text-blue-400 hover:text-blue-300"
              >
                Privacy Policy →
              </a>

              <a
                href="/terms"
                className="text-blue-400 hover:text-blue-300"
              >
                Terms of Service →
              </a>
            </div>
          </section>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-sm text-gray-500">
          © 2026 Botify Bot. All rights reserved.
        </div>
      </div>
    </main>
  );
}