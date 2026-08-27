export default function Home() {
  const features = [
    {
      title: "AI-Powered Replies",
      text: "Help your business answer customer messages faster with clear, consistent AI-assisted responses.",
    },
    {
      title: "WhatsApp",
      text: "Manage customer conversations and automate replies from one simple mobile experience.",
    },
    {
      title: "Facebook Messenger",
      text: "Stay on top of Messenger conversations and reduce response time for your customers.",
    },
    {
      title: "Instagram",
      text: "Handle Instagram customer messages with a smarter, faster support workflow.",
    },
    {
      title: "Business Instructions",
      text: "Tell Botify Bot how your business should respond, what it should know, and how it should communicate.",
    },
    {
      title: "Built for Mobile",
      text: "Manage conversations, settings, and AI assistance from your phone wherever your business takes you.",
    },
  ];

  const steps = [
    ["01", "Download Botify Bot", "Install the app from the App Store or Google Play."],
    ["02", "Connect your channels", "Connect the messaging platforms your business already uses."],
    ["03", "Configure your AI", "Add business information and define how Botify Bot should respond."],
    ["04", "Start responding smarter", "Use AI assistance to handle customer conversations faster."],
  ];

  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          overflow-x: hidden;
        }

        @keyframes floatCard {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -6px, 0); }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translate3d(0, 16px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes sheen {
          0% { transform: translate3d(-170%, 0, 0) skewX(-18deg); }
          60%, 100% { transform: translate3d(280%, 0, 0) skewX(-18deg); }
        }

        @keyframes ambientOrb {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.42;
          }
          50% {
            transform: translate3d(18px, -10px, 0) scale(1.05);
            opacity: 0.58;
          }
        }

        .warm-frame {
          box-shadow:
            0 0 0 1px rgba(251, 146, 60, 0.18),
            0 0 22px rgba(249, 115, 22, 0.18),
            0 0 44px rgba(239, 68, 68, 0.10);
          transition:
            transform 220ms ease,
            border-color 220ms ease,
            box-shadow 220ms ease,
            background-color 220ms ease;
          transform: translateZ(0);
        }

        .warm-frame-soft {
          box-shadow:
            0 0 0 1px rgba(251, 146, 60, 0.11),
            0 0 14px rgba(249, 115, 22, 0.11),
            0 0 28px rgba(239, 68, 68, 0.06);
          transition:
            transform 220ms ease,
            border-color 220ms ease,
            box-shadow 220ms ease,
            background-color 220ms ease;
          transform: translateZ(0);
        }

        .warm-frame:hover,
        .warm-frame-soft:hover {
          transform: translate3d(0, -3px, 0);
          border-color: rgba(251, 146, 60, 0.34);
        }

        .warm-frame:hover {
          box-shadow:
            0 0 0 1px rgba(251, 146, 60, 0.24),
            0 0 28px rgba(249, 115, 22, 0.24),
            0 0 52px rgba(239, 68, 68, 0.12);
        }

        .warm-frame-soft:hover {
          box-shadow:
            0 0 0 1px rgba(251, 146, 60, 0.16),
            0 0 18px rgba(249, 115, 22, 0.15),
            0 0 34px rgba(239, 68, 68, 0.08);
        }

        .hero-float {
          animation: floatCard 6.8s ease-in-out infinite;
          will-change: transform;
        }

        .reveal-up {
          animation: fadeUp 0.7s ease both;
        }

        .reveal-delay-1 { animation-delay: 0.05s; }
        .reveal-delay-2 { animation-delay: 0.12s; }
        .reveal-delay-3 { animation-delay: 0.20s; }

        .store-button {
          position: relative;
          overflow: hidden;
        }

        .store-button::after {
          content: "";
          position: absolute;
          inset: -40% auto -40% -35%;
          width: 30%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.55),
            transparent
          );
          animation: sheen 5.8s ease-in-out infinite;
          pointer-events: none;
          will-change: transform;
        }

        .ambient-orb {
          animation: ambientOrb 9s ease-in-out infinite;
          will-change: transform, opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation: none !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <a href="#download" className="shrink-0 text-lg font-bold tracking-tight sm:text-xl">
            Botify Bot
          </a>

          <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#how-it-works" className="transition hover:text-white">
              How It Works
            </a>
            <a href="#security" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#download" className="transition hover:text-white">
              Download
            </a>
          </div>

          <a
            href="#download"
            className="shrink-0 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold transition hover:bg-blue-500 sm:px-5 sm:text-sm"
          >
            Get the App
          </a>
        </div>
      </nav>

      <section
        id="download"
        className="relative scroll-mt-20 overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-18 md:pb-32 md:pt-28"
      >
        <div className="ambient-orb pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_12%,rgba(249,115,22,0.17),transparent_30%),radial-gradient(circle_at_72%_34%,rgba(239,68,68,0.13),transparent_34%),radial-gradient(circle_at_28%_24%,rgba(37,99,235,0.18),transparent_32%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="reveal-up reveal-delay-1">
              <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-2 text-xs text-blue-400 sm:px-4 sm:text-sm">
                AI-powered customer conversations
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-5xl md:mt-7 md:text-6xl lg:text-7xl">
                Smarter support.
                <span className="block text-blue-500">One mobile app.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:mt-7 sm:text-lg sm:leading-8">
                Botify Bot helps businesses manage customer conversations across
                WhatsApp, Facebook, and Instagram with AI-powered assistance
                designed for everyday business use.
              </p>

              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
                <a
                  href="#"
                  className="store-button warm-frame w-full rounded-2xl border border-white/10 bg-white px-5 py-3 text-left text-black transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto sm:min-w-52 sm:px-6"
                >
                  <span className="block text-xs">Download on the</span>
                  <span className="block text-lg font-semibold">App Store</span>
                </a>

                <a
                  href="#"
                  className="store-button warm-frame w-full rounded-2xl border border-white/10 bg-white px-5 py-3 text-left text-black transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto sm:min-w-52 sm:px-6"
                >
                  <span className="block text-xs">GET IT ON</span>
                  <span className="block text-lg font-semibold">Google Play</span>
                </a>
              </div>

              <p className="mt-4 text-xs text-gray-600">
                Official store links will be added after publication.
              </p>

              <div className="mt-7 grid gap-2 text-sm text-gray-500 sm:flex sm:flex-wrap sm:gap-x-7 sm:gap-y-3">
                <span>✓ Built for businesses</span>
                <span>✓ AI-assisted replies</span>
                <span>✓ Multi-channel support</span>
              </div>
            </div>

            <div className="hero-float relative mx-auto w-full max-w-xl lg:mx-0">
              <div className="absolute -inset-8 rounded-full bg-blue-600/10 blur-3xl" />

              <div className="warm-frame relative rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-2.5 shadow-2xl shadow-black/30 sm:rounded-[2rem] sm:p-4">
                <div className="rounded-[1.1rem] border border-white/10 bg-[#0b111d] p-4 sm:rounded-[1.5rem] sm:p-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs text-gray-500">Botify Bot</p>
                      <p className="mt-1 font-semibold">Business Inbox</p>
                    </div>
                    <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                      AI Active
                    </div>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div className="max-w-[92%] sm:max-w-[85%] rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs text-gray-500">Customer</p>
                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        Hi, is this product available today?
                      </p>
                    </div>

                    <div className="ml-auto max-w-[94%] sm:max-w-[88%] rounded-2xl rounded-tr-md border border-blue-500/20 bg-blue-500/10 p-4">
                      <p className="text-xs text-blue-400">Botify Bot</p>
                      <p className="mt-2 text-sm leading-6 text-gray-200">
                        Yes, it is available. I can also help you with the price,
                        delivery details, or any other question.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-2 pt-2 sm:grid-cols-3 sm:gap-3">
                      {[
                        ["WhatsApp", "Connected"],
                        ["Facebook", "Ready"],
                        ["Instagram", "Ready"],
                      ].map(([name, status]) => (
                        <div
                          key={name}
                          className="warm-frame-soft rounded-xl border border-white/10 bg-black/10 p-3"
                        >
                          <p className="truncate text-xs font-medium text-gray-300">
                            {name}
                          </p>
                          <p className="mt-1 text-[11px] text-gray-600">
                            {status}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.015] px-4 py-6 sm:px-6 sm:py-7">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-3 text-center text-xs text-gray-500 sm:gap-x-10 sm:gap-y-4 sm:text-sm">
          <span>WhatsApp</span>
          <span className="text-white/15">•</span>
          <span>Facebook Messenger</span>
          <span className="text-white/15">•</span>
          <span>Instagram</span>
          <span className="text-white/15">•</span>
          <span>AI Assistance</span>
        </div>
      </section>

      <section id="features" className="reveal-up reveal-delay-2 px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              Features
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Everything your business needs to respond smarter.
            </h2>
            <p className="mt-5 leading-7 text-gray-400">
              A simple mobile experience for customer conversations, AI assistance,
              and connected messaging channels.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 md:gap-5 lg:mt-14 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="warm-frame-soft rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-orange-400/45 hover:bg-white/[0.05] sm:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/15 text-sm font-bold text-blue-400">
                  ✓
                </div>
                <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="reveal-up reveal-delay-2 border-y border-white/10 bg-white/[0.015] px-4 py-16 sm:px-6 sm:py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-9 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                How It Works
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                From download to smarter replies in a few steps.
              </h2>
              <p className="mt-5 leading-7 text-gray-400">
                Botify Bot is designed to keep setup simple so businesses can
                focus on customers instead of complicated tools.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {steps.map(([number, title, text]) => (
                <div
                  key={number}
                  className="warm-frame-soft rounded-2xl border border-white/10 bg-[#0b111d] p-5 sm:p-6"
                >
                  <div className="text-sm font-bold text-blue-400">{number}</div>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="security" className="reveal-up reveal-delay-3 px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="warm-frame mx-auto max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-blue-600/[0.04] p-5 sm:p-8 md:p-12">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                Privacy & Trust
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Clear policies. Responsible access.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-gray-400">
                Botify Bot provides clear privacy, terms, and data deletion
                information so businesses can understand how the service works
                before connecting their messaging channels.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-1">
              <a
                href="/privacy"
                className="warm-frame-soft rounded-2xl border border-white/10 bg-black/10 p-4 transition hover:border-orange-400/45 sm:p-5"
              >
                <p className="font-semibold">Privacy Policy</p>
                <p className="mt-2 text-sm text-gray-500">
                  Learn how information is handled.
                </p>
              </a>

              <a
                href="/terms"
                className="warm-frame-soft rounded-2xl border border-white/10 bg-black/10 p-4 transition hover:border-orange-400/45 sm:p-5"
              >
                <p className="font-semibold">Terms of Service</p>
                <p className="mt-2 text-sm text-gray-500">
                  Review the terms for using Botify Bot.
                </p>
              </a>

              <a
                href="/data-deletion"
                className="warm-frame-soft rounded-2xl border border-white/10 bg-black/10 p-4 transition hover:border-orange-400/45 sm:p-5"
              >
                <p className="font-semibold">Data Deletion</p>
                <p className="mt-2 text-sm text-gray-500">
                  See how to request deletion of your data.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-sm text-gray-500 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-medium text-gray-300">Botify Bot</p>
            <p className="mt-1">AI-powered customer conversations.</p>
          </div>

          <div className="flex flex-wrap gap-5">
            <a href="/privacy" className="transition hover:text-gray-300">
              Privacy
            </a>
            <a href="/terms" className="transition hover:text-gray-300">
              Terms
            </a>
            <a href="/data-deletion" className="transition hover:text-gray-300">
              Data Deletion
            </a>
          </div>

          <p>© 2026 Botify Bot. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
