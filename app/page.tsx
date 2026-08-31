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
      text: "Tell Botify bot Ltd how your business should respond, what it should know, and how it should communicate.",
    },
    {
      title: "Built for Mobile",
      text: "Manage conversations, settings, and AI assistance from your phone wherever your business takes you.",
    },
  ];

  const steps = [
    ["01", "Download Botify bot Ltd", "Install the app from the App Store or Google Play."],
    ["02", "Connect your channels", "Connect the messaging platforms your business already uses."],
    ["03", "Configure your AI", "Add business information and define how Botify bot Ltd should respond."],
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
            transform: translate3d(16px, -10px, 0) scale(1.05);
            opacity: 0.58;
          }
        }

        @keyframes ledPulse {
          0%, 100% {
            box-shadow:
              0 0 0 1px rgba(249, 115, 22, 0.26),
              0 0 18px rgba(249, 115, 22, 0.18),
              0 0 38px rgba(239, 68, 68, 0.10),
              0 0 80px rgba(249, 115, 22, 0.08);
          }
          50% {
            box-shadow:
              0 0 0 1px rgba(251, 146, 60, 0.42),
              0 0 24px rgba(249, 115, 22, 0.28),
              0 0 56px rgba(239, 68, 68, 0.18),
              0 0 110px rgba(249, 115, 22, 0.14);
          }
        }

        @keyframes ledPulseSoft {
          0%, 100% {
            box-shadow:
              0 0 0 1px rgba(249, 115, 22, 0.20),
              0 0 12px rgba(249, 115, 22, 0.12),
              0 0 28px rgba(239, 68, 68, 0.06),
              0 0 58px rgba(249, 115, 22, 0.05);
          }
          50% {
            box-shadow:
              0 0 0 1px rgba(251, 146, 60, 0.34),
              0 0 18px rgba(249, 115, 22, 0.20),
              0 0 38px rgba(239, 68, 68, 0.12),
              0 0 80px rgba(249, 115, 22, 0.10);
          }
        }

        .warm-frame {
          box-shadow:
            0 0 0 1px rgba(249, 115, 22, 0.22),
            0 0 18px rgba(249, 115, 22, 0.16),
            0 0 34px rgba(239, 68, 68, 0.08),
            0 0 70px rgba(249, 115, 22, 0.07);
          transform: translateZ(0);
        }

        .warm-frame-soft {
          box-shadow:
            0 0 0 1px rgba(249, 115, 22, 0.16),
            0 0 10px rgba(249, 115, 22, 0.10),
            0 0 22px rgba(239, 68, 68, 0.05),
            0 0 46px rgba(249, 115, 22, 0.04);
          transform: translateZ(0);
        }

        .animated-outline,
        .animated-outline-soft,
        .animated-outline-light {
          position: relative;
          border: 1px solid transparent !important;
          background-origin: border-box;
          background-clip: padding-box, border-box;
          transform: translateZ(0);
        }

        .animated-outline {
          background-image:
            linear-gradient(rgba(11,17,29,0.96), rgba(11,17,29,0.96)),
            linear-gradient(
              135deg,
              rgba(249,115,22,0.34),
              rgba(251,146,60,0.96),
              rgba(239,68,68,0.90),
              rgba(249,115,22,0.34)
            );
        }

        .animated-outline-soft {
          background-image:
            linear-gradient(rgba(11,17,29,0.90), rgba(11,17,29,0.90)),
            linear-gradient(
              135deg,
              rgba(249,115,22,0.24),
              rgba(251,146,60,0.72),
              rgba(239,68,68,0.72),
              rgba(249,115,22,0.24)
            );
        }

        .animated-outline-light {
          background-image:
            linear-gradient(#ffffff, #ffffff),
            linear-gradient(
              135deg,
              rgba(249,115,22,0.38),
              rgba(251,146,60,0.98),
              rgba(239,68,68,0.96),
              rgba(249,115,22,0.38)
            );
        }

        .interactive-card {
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            opacity 220ms ease;
          will-change: transform;
        }

        .interactive-card:hover {
          transform: translate3d(0, -4px, 0);
          box-shadow:
            0 0 0 1px rgba(251,146,60,0.28),
            0 0 22px rgba(249,115,22,0.22),
            0 0 44px rgba(239,68,68,0.12),
            0 0 90px rgba(249,115,22,0.10);
        }

        .hero-float {
          animation: floatCard 7s ease-in-out infinite;
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

        .glow-breathe {
          animation: ledPulse 4.2s ease-in-out infinite;
        }

        .glow-breathe-soft {
          animation: ledPulseSoft 4.6s ease-in-out infinite;
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
          <a
            href="#home"
            className="flex shrink-0 items-center gap-2.5 text-lg font-bold tracking-tight sm:text-xl"
          >
            <img
              src="data:image/webp;base64,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"
              alt="Botify bot Ltd logo"
              className="h-9 w-9 rounded-lg object-cover sm:h-10 sm:w-10"
            />
            <span>Botify bot Ltd</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#home" className="transition hover:text-white">
              Home
            </a>
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#how-it-works" className="transition hover:text-white">
              How It Works
            </a>
            <a href="#privacy" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#download" className="transition hover:text-white">
              Download
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
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
        id="home"
        className="relative scroll-mt-24 overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-18 md:pb-32 md:pt-28"
      >
        <div className="ambient-orb pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_12%,rgba(249,115,22,0.20),transparent_30%),radial-gradient(circle_at_72%_34%,rgba(239,68,68,0.15),transparent_34%),radial-gradient(circle_at_28%_24%,rgba(37,99,235,0.18),transparent_32%)]" />

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
                Botify bot Ltd helps businesses manage customer conversations across
                WhatsApp, Facebook, and Instagram with AI-powered assistance
                designed for everyday business use.
              </p>

              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
                <a
                  href="#"
                  className="store-button warm-frame animated-outline-light interactive-card w-full rounded-2xl border border-white/10 bg-white px-5 py-3 text-left text-black transition hover:opacity-95 sm:w-auto sm:min-w-52 sm:px-6"
                >
                  <span className="block text-xs">Download on the</span>
                  <span className="block text-lg font-semibold">App Store</span>
                </a>

                <a
                  href="#"
                  className="store-button warm-frame animated-outline-light interactive-card w-full rounded-2xl border border-white/10 bg-white px-5 py-3 text-left text-black transition hover:opacity-95 sm:w-auto sm:min-w-52 sm:px-6"
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
              <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.22),rgba(239,68,68,0.10),transparent_72%)] blur-3xl" />

              <div className="warm-frame animated-outline glow-breathe relative rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-2.5 shadow-2xl shadow-black/30 sm:rounded-[2rem] sm:p-4">
                <div className="rounded-[1.1rem] border border-white/10 bg-[#0b111d] p-4 sm:rounded-[1.5rem] sm:p-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs text-gray-500">Botify bot Ltd</p>
                      <p className="mt-1 font-semibold">Business Inbox</p>
                    </div>
                    <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                      AI Active
                    </div>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div className="animated-outline-soft glow-breathe-soft interactive-card max-w-[92%] rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.04] p-4 sm:max-w-[85%]">
                      <p className="text-xs text-gray-500">Customer</p>
                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        Hi, is this product available today?
                      </p>
                    </div>

                    <div className="animated-outline-soft glow-breathe-soft interactive-card ml-auto max-w-[94%] rounded-2xl rounded-tr-md border border-blue-500/20 bg-blue-500/10 p-4 sm:max-w-[88%]">
                      <p className="text-xs text-blue-400">Botify bot Ltd</p>
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
                          className="warm-frame-soft animated-outline-soft glow-breathe-soft interactive-card rounded-xl border border-white/10 bg-black/10 p-3"
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

      <section id="features" className="reveal-up reveal-delay-2 scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 md:py-24">
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
                className="warm-frame-soft animated-outline-soft glow-breathe-soft interactive-card rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition sm:p-6"
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
        className="reveal-up reveal-delay-2 scroll-mt-24 border-y border-white/10 bg-white/[0.015] px-4 py-16 sm:px-6 sm:py-20 md:py-24"
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
                Botify bot Ltd is designed to keep setup simple so businesses can
                focus on customers instead of complicated tools.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {steps.map(([number, title, text]) => (
                <div
                  key={number}
                  className="warm-frame-soft animated-outline-soft glow-breathe-soft interactive-card rounded-2xl border border-white/10 bg-[#0b111d] p-5 sm:p-6"
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


      <section
        id="download"
        className="reveal-up reveal-delay-3 scroll-mt-24 border-y border-white/10 bg-white/[0.015] px-4 py-16 sm:px-6 sm:py-20 md:py-24"
      >
        <div className="warm-frame animated-outline glow-breathe mx-auto max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-blue-600/[0.04] p-5 sm:p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                Download
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Get Botify bot Ltd on your phone.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-gray-400">
                The official App Store and Google Play links will be added here after publication.
              </p>
            </div>

            <div className="grid gap-3 sm:flex sm:flex-wrap sm:gap-4 lg:justify-end">
              <a
                href="#"
                className="store-button warm-frame animated-outline-light interactive-card w-full rounded-2xl border border-white/10 bg-white px-5 py-3 text-left text-black transition hover:opacity-95 sm:w-auto sm:min-w-52 sm:px-6"
              >
                <span className="block text-xs">Download on the</span>
                <span className="block text-lg font-semibold">App Store</span>
              </a>

              <a
                href="#"
                className="store-button warm-frame animated-outline-light interactive-card w-full rounded-2xl border border-white/10 bg-white px-5 py-3 text-left text-black transition hover:opacity-95 sm:w-auto sm:min-w-52 sm:px-6"
              >
                <span className="block text-xs">GET IT ON</span>
                <span className="block text-lg font-semibold">Google Play</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="privacy" className="reveal-up reveal-delay-3 scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="warm-frame animated-outline glow-breathe mx-auto max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-blue-600/[0.04] p-5 sm:p-8 md:p-12">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                Privacy & Trust
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Clear policies. Responsible access.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-gray-400">
                Botify bot Ltd provides clear privacy, terms, and data deletion
                information so businesses can understand how the service works
                before connecting their messaging channels.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-1">
              <a
                href="/privacy"
                className="warm-frame-soft animated-outline-soft glow-breathe-soft interactive-card rounded-2xl border border-white/10 bg-black/10 p-4 transition sm:p-5"
              >
                <p className="font-semibold">Privacy Policy</p>
                <p className="mt-2 text-sm text-gray-500">
                  Learn how information is handled.
                </p>
              </a>

              <a
                href="/terms"
                className="warm-frame-soft animated-outline-soft glow-breathe-soft interactive-card rounded-2xl border border-white/10 bg-black/10 p-4 transition sm:p-5"
              >
                <p className="font-semibold">Terms of Service</p>
                <p className="mt-2 text-sm text-gray-500">
                  Review the terms for using Botify bot Ltd.
                </p>
              </a>

              <a
                href="/data-deletion"
                className="warm-frame-soft animated-outline-soft glow-breathe-soft interactive-card rounded-2xl border border-white/10 bg-black/10 p-4 transition sm:p-5"
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


      <section
        id="contact"
        className="reveal-up reveal-delay-3 scroll-mt-24 border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 md:py-24"
      >
        <div className="warm-frame animated-outline glow-breathe mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[0.025] p-5 sm:p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                Contact Us
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Get in touch with Botify bot Ltd.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-gray-400">
                For business, support, privacy, or data-related enquiries, contact us using the details provided here.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="warm-frame-soft animated-outline-soft glow-breathe-soft rounded-2xl border border-white/10 bg-[#0b111d] p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                  Business email
                </p>
                <a
                  href="mailto:support@botifybot.co"
                  className="mt-2 inline-block break-all text-base font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  support@botifybot.co
                </a>

                <div className="mt-5 border-t border-white/10 pt-5">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                    Phone
                  </p>
                  <a
                    href="tel:+447412845318"
                    className="mt-2 inline-block text-base font-semibold text-gray-200 transition hover:text-white"
                  >
                    +44 7412 845318
                  </a>
                </div>
              </div>

              <div className="warm-frame-soft animated-outline-soft glow-breathe-soft rounded-2xl border border-white/10 bg-[#0b111d] p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                  Company number
                </p>
                <p className="mt-2 text-base font-semibold text-gray-200">
                  17424187
                </p>
              </div>

              <div className="warm-frame-soft animated-outline-soft glow-breathe-soft rounded-2xl border border-white/10 bg-[#0b111d] p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                  Address
                </p>
                <address className="mt-2 not-italic text-base leading-7 text-gray-300">
                  Diamond Court, Water Street, Bakewell, DE45 1EW
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-sm text-gray-500 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-medium text-gray-300">Botify bot Ltd</p>
            <p className="mt-1">AI-powered customer conversations.</p>
            <p className="mt-1 text-xs text-gray-600">Company number: 17424187</p>
            <p className="mt-1 max-w-md text-xs leading-5 text-gray-600">Diamond Court, Water Street, Bakewell, DE45 1EW</p>
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
            <a
              href="mailto:support@botifybot.co"
              className="transition hover:text-gray-300"
            >
              Support
            </a>
          </div>

          <p>© 2026 Botify bot Ltd. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
