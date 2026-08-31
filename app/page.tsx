"use client";

import { useEffect, useMemo, useState } from "react";

function BotifyLogoMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const scale =
    size === "sm" ? "h-10 w-10 text-3xl" : size === "lg" ? "h-28 w-28 text-8xl" : "h-14 w-14 text-5xl";
  const head = size === "lg" ? "h-12 w-14" : size === "sm" ? "h-5 w-6" : "h-7 w-8";
  const eye = size === "lg" ? "h-4 w-3" : size === "sm" ? "h-1.5 w-1.5" : "h-2.5 w-2";

  return (
    <div className={`relative isolate flex items-center justify-center ${scale}`} aria-hidden="true">
      <div className="absolute left-[2%] top-[49%] z-10 -translate-y-1/2">
        <div className={`botify-robot-head ${head}`}>
          <div className="botify-robot-face">
            <span className={`botify-robot-eye ${eye}`} />
            <span className={`botify-robot-eye ${eye}`} />
          </div>
          <div className="botify-robot-antenna" />
          <div className="botify-robot-ear" />
        </div>
      </div>

      <span className="relative z-20 font-black leading-none tracking-[-0.08em] text-transparent bg-[linear-gradient(180deg,#f8fbff_10%,#dbeafe_30%,#60a5fa_70%,#2563eb_100%)] bg-clip-text drop-shadow-[0_0_24px_rgba(37,99,235,0.28)]">
        B
      </span>
    </div>
  );
}

function ScrollRobot({ progress }: { progress: number }) {
  const translateY = 22 - progress * 30;
  const rotate = -10 + progress * 20;
  const floatX = Math.sin(progress * 8) * 10;

  return (
    <div
      className="pointer-events-none fixed bottom-4 right-3 z-40 md:bottom-6 md:right-6"
      style={{
        transform: `translate3d(${floatX}px, ${translateY}px, 0) rotate(${rotate}deg)`,
        transition: "transform 120ms linear",
      }}
    >
      <div className="botify-scroll-robot rounded-[1.75rem] border border-white/10 bg-[#0b1220]/92 p-3 shadow-[0_12px_60px_rgba(37,99,235,0.22)] backdrop-blur-xl md:p-4">
        <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_30%_25%,rgba(59,130,246,0.18),transparent_42%),radial-gradient(circle_at_72%_78%,rgba(37,99,235,0.16),transparent_40%)]" />
        <div className="relative flex items-center gap-3">
          <div className="relative">
            <div className="botify-robot-head h-12 w-14">
              <div className="botify-robot-face">
                <span className="botify-robot-eye h-3 w-2.5" />
                <span className="botify-robot-eye h-3 w-2.5" />
              </div>
              <div className="botify-robot-antenna" />
              <div className="botify-robot-ear" />
            </div>
          </div>

          <div className="hidden md:block">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/90">Botify bot Ltd</p>
            <p className="mt-1 text-sm text-gray-300">Your AI assistant is ready.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollProgress = useMemo(() => Math.min(scrollY / 1400, 1), [scrollY]);

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
    <main className="min-h-screen overflow-x-hidden bg-[#060b15] text-white">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          overflow-x: hidden;
          background: #060b15;
        }

        @keyframes floatSlow {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -10px, 0); }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow:
              0 0 0 1px rgba(59,130,246,0.22),
              0 0 18px rgba(59,130,246,0.12),
              0 0 56px rgba(37,99,235,0.10);
          }
          50% {
            box-shadow:
              0 0 0 1px rgba(96,165,250,0.35),
              0 0 26px rgba(59,130,246,0.18),
              0 0 76px rgba(37,99,235,0.16);
          }
        }

        @keyframes borderShimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes eyeBlink {
          0%, 44%, 48%, 100% { transform: scaleY(1); }
          46% { transform: scaleY(0.18); }
        }

        @keyframes antennaBob {
          0%, 100% { transform: translateX(-50%) rotate(0deg); }
          50% { transform: translateX(-50%) rotate(6deg); }
        }

        @keyframes iconDrift {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -5px, 0); }
        }

        .botify-panel {
          position: relative;
          border: 1px solid transparent;
          background:
            linear-gradient(rgba(10,17,30,0.9), rgba(10,17,30,0.9)) padding-box,
            linear-gradient(135deg, rgba(59,130,246,0.22), rgba(255,255,255,0.18), rgba(59,130,246,0.34), rgba(29,78,216,0.18)) border-box;
        }

        .botify-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(120deg, rgba(59,130,246,0.06), transparent 35%, rgba(255,255,255,0.04) 55%, transparent 76%);
          pointer-events: none;
        }

        .botify-panel-soft {
          position: relative;
          border: 1px solid transparent;
          background:
            linear-gradient(rgba(9,15,26,0.92), rgba(9,15,26,0.92)) padding-box,
            linear-gradient(140deg, rgba(59,130,246,0.17), rgba(255,255,255,0.12), rgba(37,99,235,0.22)) border-box;
        }

        .botify-glow {
          animation: pulseGlow 4.5s ease-in-out infinite;
        }

        .botify-float {
          animation: floatSlow 7s ease-in-out infinite;
        }

        .botify-icon-card {
          animation: iconDrift 5.6s ease-in-out infinite;
        }

        .botify-scroll-robot {
          animation: pulseGlow 4.8s ease-in-out infinite;
          position: relative;
          overflow: hidden;
        }

        .botify-robot-head {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: linear-gradient(180deg, #f8fbff 0%, #d8e5ff 100%);
          box-shadow: 0 14px 34px rgba(15, 23, 42, 0.28);
        }

        .botify-robot-head::after {
          content: "";
          position: absolute;
          inset: auto 15% 8% 15%;
          height: 18%;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.07);
          filter: blur(4px);
        }

        .botify-robot-face {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          width: 74%;
          height: 58%;
          border-radius: 999px;
          background: radial-gradient(circle at 50% 40%, #0c1730, #030712 80%);
          box-shadow: inset 0 0 18px rgba(59,130,246,0.12);
        }

        .botify-robot-eye {
          display: inline-block;
          border-radius: 999px;
          background: linear-gradient(180deg, #7dd3fc 0%, #3b82f6 100%);
          box-shadow: 0 0 14px rgba(59,130,246,0.95);
          animation: eyeBlink 6.2s infinite ease-in-out;
        }

        .botify-robot-antenna {
          position: absolute;
          left: 50%;
          top: -18%;
          width: 0.18rem;
          height: 0.9rem;
          border-radius: 999px;
          background: linear-gradient(180deg, #dbeafe 0%, #93c5fd 100%);
          animation: antennaBob 4.2s ease-in-out infinite;
        }

        .botify-robot-antenna::before {
          content: "";
          position: absolute;
          left: 50%;
          top: -0.42rem;
          width: 0.62rem;
          height: 0.62rem;
          border-radius: 999px;
          background: linear-gradient(180deg, #60a5fa 0%, #2563eb 100%);
          box-shadow: 0 0 12px rgba(59,130,246,0.7);
          transform: translateX(-50%);
        }

        .botify-robot-ear {
          position: absolute;
          left: -8%;
          top: 37%;
          width: 0.7rem;
          height: 0.7rem;
          border-radius: 999px;
          background: linear-gradient(180deg, #dbeafe 0%, #93c5fd 100%);
          box-shadow: inset 0 0 0 0.16rem #dfeaff;
        }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          *, *::before, *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <ScrollRobot progress={scrollProgress} />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#060b15]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
          <a href="#download" className="flex items-center gap-3">
            <BotifyLogoMark size="sm" />
            <div>
              <p className="text-base font-bold leading-none tracking-tight sm:text-lg">Botify bot Ltd</p>
              <p className="mt-1 hidden text-[11px] text-gray-500 sm:block">AI-powered customer conversations</p>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm text-gray-300 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#how-it-works" className="transition hover:text-white">How It Works</a>
            <a href="#security" className="transition hover:text-white">Privacy</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>

          <a
            href="#download"
            className="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold transition hover:bg-blue-500 sm:px-5 sm:text-sm"
          >
            Get the App
          </a>
        </div>
      </nav>

      <section id="download" className="relative scroll-mt-24 overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pb-20 md:pb-28 md:pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_68%_14%,rgba(255,255,255,0.09),transparent_24%),radial-gradient(circle_at_74%_36%,rgba(37,99,235,0.14),transparent_30%),radial-gradient(circle_at_48%_78%,rgba(59,130,246,0.10),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
            <div>
              <div className="inline-flex rounded-full border border-blue-500/25 bg-blue-500/10 px-3.5 py-2 text-xs text-blue-300 sm:px-4 sm:text-sm">
                Smarter support for growing businesses
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl">
                One identity.
                <span className="mt-1 block text-blue-500">One smooth mobile experience.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
                Botify bot Ltd helps businesses manage customer conversations across WhatsApp,
                Facebook, and Instagram with a clean, modern AI experience that looks great on
                desktop and mobile.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="#"
                  className="botify-panel botify-glow w-full rounded-2xl bg-white px-5 py-3 text-left text-black transition hover:opacity-95 sm:w-auto sm:min-w-52 sm:px-6"
                >
                  <span className="block text-xs">Download on the</span>
                  <span className="block text-lg font-semibold">App Store</span>
                </a>

                <a
                  href="#"
                  className="botify-panel botify-glow w-full rounded-2xl bg-white px-5 py-3 text-left text-black transition hover:opacity-95 sm:w-auto sm:min-w-52 sm:px-6"
                >
                  <span className="block text-xs">GET IT ON</span>
                  <span className="block text-lg font-semibold">Google Play</span>
                </a>
              </div>

              <div className="mt-7 grid gap-2 text-sm text-gray-500 sm:flex sm:flex-wrap sm:gap-x-7 sm:gap-y-3">
                <span>✓ Smooth scroll</span>
                <span>✓ Mobile responsive</span>
                <span>✓ AI-assisted replies</span>
              </div>
            </div>

            <div className="botify-float relative mx-auto w-full max-w-2xl">
              <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.24),transparent_65%)] blur-3xl" />

              <div className="botify-panel botify-glow relative overflow-hidden rounded-[2rem] bg-[#0a1323]/90 p-3 shadow-[0_24px_100px_rgba(2,6,23,0.55)] sm:p-4">
                <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_70%)]" />

                <div className="relative rounded-[1.55rem] border border-white/10 bg-[#09111e] p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="botify-icon-card rounded-2xl bg-blue-500/10 p-2.5">
                        <BotifyLogoMark size="md" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Botify bot Ltd</p>
                        <p className="mt-1 text-lg font-semibold">Business Inbox</p>
                      </div>
                    </div>
                    <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                      AI Active
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4">
                    <div className="botify-panel-soft rounded-2xl rounded-tl-md bg-white/[0.03] p-4">
                      <p className="text-xs text-gray-500">Customer</p>
                      <p className="mt-2 text-sm leading-6 text-gray-300">Hi, is this product available today?</p>
                    </div>

                    <div className="botify-panel-soft ml-auto rounded-2xl rounded-tr-md bg-blue-500/8 p-4 sm:max-w-[88%]">
                      <p className="text-xs text-blue-300">Botify bot Ltd</p>
                      <p className="mt-2 text-sm leading-6 text-gray-200">
                        Yes, it is available. I can also help with pricing, delivery details,
                        and any other question.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                      {[
                        ["WhatsApp", "Connected"],
                        ["Facebook", "Ready"],
                        ["Instagram", "Ready"],
                      ].map(([name, status], index) => (
                        <div
                          key={name}
                          className="botify-panel-soft rounded-xl bg-[#0b1220] p-3"
                          style={{ animationDelay: `${index * 180}ms` }}
                        >
                          <p className="truncate text-xs font-medium text-gray-300">{name}</p>
                          <p className="mt-1 text-[11px] text-gray-500">{status}</p>
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

      <section id="features" className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">Features</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              A cleaner visual identity across the whole page.
            </h2>
            <p className="mt-5 leading-7 text-gray-400">
              Your logo now fits the site better, the outer square frame is removed,
              and the robot character matches the overall product style.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={feature.title} className="botify-panel-soft rounded-2xl bg-white/[0.03] p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/12">
                    <BotifyLogoMark size="sm" />
                  </div>
                  <span className="text-xs text-blue-300/90">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-white/10 bg-white/[0.015] px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">How It Works</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Smooth, responsive, and easy to understand.
              </h2>
              <p className="mt-5 leading-7 text-gray-400">
                The page is designed to feel smooth while scrolling, with a moving assistant robot
                that gives the page more life without becoming distracting.
              </p>

              <div className="mt-8 botify-panel rounded-3xl bg-[#09111e]/90 p-5 sm:p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-blue-500/10 p-2.5">
                    <BotifyLogoMark size="lg" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Logo integrated with the website</p>
                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      No outer square frame, cleaner branding, and a robot mascot that feels native to the page.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {steps.map(([number, title, text]) => (
                <div key={number} className="botify-panel-soft rounded-2xl bg-[#09111e] p-5 sm:p-6">
                  <div className="text-sm font-bold text-blue-400">{number}</div>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="security" className="px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="botify-panel botify-glow mx-auto max-w-7xl rounded-3xl bg-gradient-to-br from-white/[0.03] to-blue-600/[0.05] p-5 sm:p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">Privacy & Trust</p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">Clear policies. Responsible access.</h2>
              <p className="mt-5 max-w-2xl leading-7 text-gray-400">
                Botify bot Ltd provides clear privacy, terms, and data deletion information so businesses
                can understand how the service works before connecting their messaging channels.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["/privacy", "Privacy Policy", "Learn how information is handled."],
                ["/terms", "Terms of Service", "Review the terms for using Botify bot Ltd."],
                ["/data-deletion", "Data Deletion", "See how to request deletion of your data."],
              ].map(([href, title, text]) => (
                <a key={href} href={href} className="botify-panel-soft rounded-2xl bg-black/10 p-4 transition hover:-translate-y-0.5 sm:p-5">
                  <p className="font-semibold">{title}</p>
                  <p className="mt-2 text-sm text-gray-500">{text}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="botify-panel botify-glow mx-auto max-w-7xl rounded-3xl bg-white/[0.025] p-5 sm:p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">Contact Us</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Get in touch with Botify bot Ltd.</h2>
              <p className="mt-5 max-w-xl leading-7 text-gray-400">
                For business, support, privacy, or data-related enquiries, contact us using the details provided here.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="botify-panel-soft rounded-2xl bg-[#0b111d] p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">Business email</p>
                <a href="mailto:support@botifybot.co" className="mt-2 inline-block break-all text-base font-semibold text-blue-400 transition hover:text-blue-300">
                  support@botifybot.co
                </a>

                <div className="mt-5 border-t border-white/10 pt-5">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">Phone</p>
                  <a href="tel:+447412845318" className="mt-2 inline-block text-base font-semibold text-gray-200 transition hover:text-white">
                    +44 7412 845318
                  </a>
                </div>
              </div>

              <div className="botify-panel-soft rounded-2xl bg-[#0b111d] p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">Company number</p>
                <p className="mt-2 text-base font-semibold text-gray-200">17424187</p>
              </div>

              <div className="botify-panel-soft rounded-2xl bg-[#0b111d] p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">Address</p>
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
          <div className="flex items-start gap-4">
            <BotifyLogoMark size="md" />
            <div>
              <p className="font-medium text-gray-300">Botify bot Ltd</p>
              <p className="mt-1">AI-powered customer conversations.</p>
              <p className="mt-1 text-xs text-gray-600">Company number: 17424187</p>
              <p className="mt-1 max-w-md text-xs leading-5 text-gray-600">Diamond Court, Water Street, Bakewell, DE45 1EW</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-5">
            <a href="/privacy" className="transition hover:text-gray-300">Privacy</a>
            <a href="/terms" className="transition hover:text-gray-300">Terms</a>
            <a href="/data-deletion" className="transition hover:text-gray-300">Data Deletion</a>
            <a href="mailto:support@botifybot.co" className="transition hover:text-gray-300">Support</a>
          </div>

          <p>© 2026 Botify bot Ltd. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
