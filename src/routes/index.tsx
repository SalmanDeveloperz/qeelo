import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Facebook, Instagram, MapPin, Menu, Phone, Youtube, X } from "lucide-react";

import logoAsset from "@/assets/qeelo-logo.png.asset.json";
import coneOnly from "@/assets/qeelo-cone-only.png";
import handShaker from "@/assets/qeelo-hand-shaker.png";
import paletteIcecream from "@/assets/qeelo-transparent.png";
import scoopOrange from "@/assets/qeelo-scoop-orange-only.png";
import scoopPink from "@/assets/qeelo-scoop-pink-only.png";
import scoopPista from "@/assets/qeelo-scoop-pista-only.png";

import chocolate from "@/assets/flavor-chocolate.jpg";
import mango from "@/assets/flavor-mango.jpg";
import matcha from "@/assets/flavor-matcha.jpg";
import pistachio from "@/assets/flavor-pistachio.jpg";
import rose from "@/assets/flavor-rose.jpg";
import vanilla from "@/assets/flavor-vanilla.jpg";

const logo = logoAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qeelo Ice Cream Â· Lahore" },
      {
        name: "description",
        content:
          "Qeelo is a Lahore-born ice cream brand with playful scoops, signature palettes, and an immersive dessert experience.",
      },
    ],
  }),
  component: HomePage,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Palette", href: "#palette" },
  { label: "How it's made?", href: "#story" },
  { label: "Our flavors", href: "#flavors" },
  { label: "Contact", href: "#contact" },
];

const FLAVORS = [
  { name: "Pistachio Kulfi", img: pistachio, tag: "Signature" },
  { name: "Gulab Rose", img: rose, tag: "Local" },
  { name: "Belgian Chocolate", img: chocolate, tag: "Classic" },
  { name: "Chaunsa Mango", img: mango, tag: "Seasonal" },
  { name: "Madagascar Vanilla", img: vanilla, tag: "Classic" },
  { name: "Matcha Cloud", img: matcha, tag: "New" },
];

const PALETTE_STORIES = [
  {
    name: "Pistachio Kulfi",
    note: "Signature",
    image: scoopPista,
    accent: "#BDE7B7",
    glow: "rgba(189, 231, 183, 0.22)",
    description:
      "Nutty, cool, and deeply Lahore. This is the flavor that anchors the whole brand with calm confidence.",
  },
  {
    name: "Gulab Rose",
    note: "Local",
    image: scoopPink,
    accent: "#FF8FB1",
    glow: "rgba(255, 143, 177, 0.24)",
    description:
      "Soft rose perfume, creamy body, and a gentle floral finish that feels like dessert with a memory.",
  },
  {
    name: "Chaunsa Mango",
    note: "Seasonal",
    image: scoopOrange,
    accent: "#FFB36B",
    glow: "rgba(255, 179, 107, 0.24)",
    description:
      "Bright, sunny, and juicy â€” the kind of scoop that makes the whole page feel alive when it lands.",
  },
  {
    name: "Belgian Chocolate",
    note: "Classic",
    image: chocolate,
    accent: "#8A4E2C",
    glow: "rgba(138, 78, 44, 0.22)",
    description:
      "Deep cocoa richness with a silky finish. It adds contrast, weight, and a little dramatic edge.",
  },
  {
    name: "Madagascar Vanilla",
    note: "Classic",
    image: vanilla,
    accent: "#FFF1D2",
    glow: "rgba(255, 241, 210, 0.22)",
    description:
      "Simple done beautifully â€” warm vanilla, creamy texture, and the quiet luxury every menu needs.",
  },
  {
    name: "Matcha Cloud",
    note: "New",
    image: matcha,
    accent: "#C7E6B5",
    glow: "rgba(199, 230, 181, 0.24)",
    description:
      "Clean, modern, and just a little unexpected. It keeps the whole collection feeling current and premium.",
  },
];

function HomePage() {
  return (
    <div id="home" className="relative min-h-screen overflow-x-hidden bg-transparent text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,196,79,0.18),transparent_30%),radial-gradient(circle_at_85%_0%,rgba(255,143,145,0.13),transparent_28%)]" />
      <Navbar />
      <Hero />
      <PaletteSection />
      <Story />
      <Marquee />
      <Flavors />
      <Locations />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#07110ce6] backdrop-blur-xl">
      <div className="relative mx-auto flex h-24 max-w-[1400px] items-center justify-between px-6 md:h-28 md:px-10">
        <a href="#home" className="group flex items-center transition-transform duration-300 hover:scale-[1.03]">
          <img src={logo} alt="Qeelo Ice Cream" className="h-16 w-auto md:h-20 lg:h-24" />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[15px] font-semibold uppercase tracking-[0.2em] text-cream/90 transition-colors hover:text-sunny after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-sunny after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#flavors"
          className="hidden items-center gap-2 rounded-full border border-sunny/35 bg-sunny/15 px-6 py-3 font-bold text-cream transition-all hover:scale-[1.03] hover:bg-sunny/25 hover:text-sunny md:inline-flex"
        >
          Order now <ArrowRight className="h-4 w-4" />
        </a>
        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-white/10 bg-white/10 p-2 text-cream lg:hidden"
          aria-label="menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-4 border-t border-white/5 bg-[#07110cfa] px-6 py-5 lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-cream"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 70]);
  const rotate = useTransform(scrollY, [0, 700], [0, -5]);

  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <svg
        className="pointer-events-none absolute left-1/3 top-1/2 h-[60%] w-[60%] -translate-y-1/2 opacity-90"
        viewBox="0 0 800 500"
        fill="none"
        aria-hidden
      >
        <path
          d="M20 380 C 180 460, 320 250, 460 320 S 780 180, 780 60"
          stroke="url(#g)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="2 18"
        />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F8C44F" />
            <stop offset="100%" stopColor="#F8C44F" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-8 px-6 pb-14 pt-8 md:px-10 lg:grid-cols-[1.02fr_0.98fr] lg:pb-16 lg:pt-10">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="mb-4 inline-block rounded-full border border-sunny/30 bg-sunny/10 px-3 py-1 text-sunny backdrop-blur"
              style={{
                fontFamily: '"Caveat Brush", cursive',
                fontSize: "1.75rem",
                lineHeight: 1.2,
              }}
            >
              Hello, sweet friend
            </span>
            <h1 className="text-[42px] leading-[0.92] tracking-[-0.05em] drop-shadow-[0_10px_20px_rgba(0,0,0,0.18)] sm:text-[54px] md:text-[66px] lg:text-[78px] xl:text-[90px]">
              ICE CREAM
              <br />
              MADE WITH
              <br />
              <span className="text-sunny">PASSION</span>
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-cream/82 md:text-[18px]">
              Hand-crafted in Lahore with real cream, real fruit, and a playful taste-first attitude.
              Scroll down for the signature palette experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4 md:mt-10"
          >
            <a
              href="#flavors"
              className="rounded-full border-2 border-sunny px-8 py-4 font-bold text-cream transition-all duration-300 hover:scale-[1.02] hover:bg-sunny hover:text-ink"
            >
              Our flavors
            </a>
            <a
              href="#palette"
              className="text-sunny font-semibold underline underline-offset-4 transition-colors hover:text-cream"
            >
              See the palette â†’
            </a>
          </motion.div>

          <motion.div
            className="relative my-10 flex justify-center lg:hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            <HeroShowpiece compact />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-5 flex max-w-lg items-center gap-6 rounded-[28px] border border-cream/15 bg-cream/10 p-4 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.15)] lg:mt-10"
          >
            <div className="relative shrink-0">
              <RotatingPalette className="h-40 w-40 md:h-48 md:w-48" />
            </div>
            <p className="text-[15px] leading-relaxed text-cream/90">
              You can&apos;t buy happiness, but you can buy ice cream, and that&apos;s pretty much the same thing.
            </p>
          </motion.div>
        </div>

        <motion.div style={{ y, rotate }} className="relative hidden justify-center lg:flex lg:justify-end">
          <HeroShowpiece />
        </motion.div>
      </div>
    </section>
  );
}

function HeroShowpiece({ compact = false }: { compact?: boolean }) {
  const sizeClass = compact ? "h-[340px] w-[260px] sm:h-[390px] sm:w-[300px]" : "h-[540px] w-[400px] xl:h-[600px] xl:w-[450px]";
  return (
    <div className={`relative ${sizeClass} drop-shadow-[0_32px_56px_rgba(0,0,0,0.36)]`}>
      <motion.img
        src={coneOnly}
        alt="Empty waffle cone"
        className="absolute bottom-0 left-1/2 z-0 w-[70%] -translate-x-1/2"
        initial={{ y: compact ? -25 : -40, opacity: 0, scale: 0.92 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 12, delay: 0.1 }}
      />
      <motion.img
        src={scoopPink}
        alt="Pink strawberry scoop"
        className="absolute bottom-[18%] left-1/2 z-10 w-[68%] -translate-x-1/2 drop-shadow-[0_12px_18px_rgba(0,0,0,0.2)]"
        initial={{ y: compact ? -320 : -400, opacity: 0, rotate: -10, scale: 0.6 }}
        animate={{ y: 0, opacity: 1, rotate: [0, 4, -2, 0], scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 10,
          delay: 0.55,
          rotate: { duration: 3.6, delay: 1.1, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.img
        src={scoopOrange}
        alt="Orange mango scoop"
        className="absolute bottom-[38%] left-1/2 z-20 w-[62%] -translate-x-1/2 drop-shadow-[0_12px_18px_rgba(0,0,0,0.2)]"
        initial={{ y: compact ? -380 : -460, opacity: 0, rotate: 10, scale: 0.6 }}
        animate={{ y: 0, opacity: 1, rotate: [0, -4, 2, 0], scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 10,
          delay: 1.0,
          rotate: { duration: 4, delay: 1.7, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.img
        src={scoopPista}
        alt="Green pistachio scoop"
        className="absolute bottom-[54%] left-1/2 z-30 w-[56%] -translate-x-1/2 drop-shadow-[0_12px_18px_rgba(0,0,0,0.2)]"
        initial={{ y: compact ? -440 : -520, opacity: 0, rotate: -8, scale: 0.6 }}
        animate={{ y: 0, opacity: 1, rotate: [0, 5, -3, 0], scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 10,
          delay: 1.45,
          rotate: { duration: 4.4, delay: 2.2, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <Sprinkles startDelay={2.3} count={compact ? 60 : 110} />
      <HandShaker delay={2.0} scale={compact ? 0.9 : 1.15} />
    </div>
  );
}

function PaletteSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.index);
        if (!Number.isNaN(index)) setActiveIndex(index);
      },
      { threshold: 0.6 },
    );

    panelRefs.current.forEach((panel) => {
      if (panel) observer.observe(panel);
    });

    return () => observer.disconnect();
  }, []);

  const activeStory = PALETTE_STORIES[activeIndex];

  return (
    <section
      id="palette"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#24331C_0%,#2E3E22_55%,#1A2410_100%)] py-24 md:py-32"
    >
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sunny/10 blur-3xl" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-xl">
            <span className="font-script text-3xl text-sunny">Signature experience</span>
            <h2 className="mt-2 text-5xl leading-[0.95] text-cream md:text-7xl">
              THE QEELO
              <br />
              <span className="text-sunny">PALETTE.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-cream/82">
              Scroll through each scoop like a film reel. Every panel shifts the mood, the color, and the hero image —
              the same show-don&apos;t-tell energy that makes premium launches feel alive.
            </p>
          </div>
          <div className="lg:sticky lg:top-28">
            <div className="rounded-[30px] border border-cream/10 bg-black/15 p-5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
              <div className="text-xs uppercase tracking-[0.3em] text-cream/55">Now featured</div>
              <div className="mt-2 text-2xl font-bold text-cream">{activeStory.name}</div>
              <div className="mt-1 inline-flex rounded-full bg-sunny px-3 py-1 text-xs font-bold text-ink">
                {activeStory.note}
              </div>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/75">
                This section changes with scroll, so the site feels alive and editorial instead of static.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-4 lg:sticky lg:top-32 lg:self-start">
            {PALETTE_STORIES.map((story, index) => (
              <button
                key={story.name}
                onClick={() => {
                  panelRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className={`w-full rounded-[24px] border px-5 py-4 text-left transition-all duration-300 ${
                  index === activeIndex
                    ? 'border-sunny bg-sunny/15 text-cream shadow-[0_14px_36px_rgba(0,0,0,0.24)]'
                    : 'border-cream/10 bg-white/5 text-cream/75 hover:border-sunny/40 hover:bg-white/8'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-cream/55">{story.note}</div>
                    <div className="mt-1 text-xl font-bold">{story.name}</div>
                  </div>
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: story.accent }} />
                </div>
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {PALETTE_STORIES.map((story, index) => (
              <motion.article
                key={story.name}
                ref={(element) => {
                  panelRefs.current[index] = element;
                }}
                data-index={index}
                initial={{ opacity: 0.4, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.55 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-[36px] border border-cream/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
              >
                <div
                  className="grid min-h-[70vh] lg:grid-cols-[0.95fr_1.05fr]"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02)), radial-gradient(circle at 20% 20%, ${story.glow}, transparent 40%)`,
                  }}
                >
                  <div className="flex flex-col justify-between p-7 md:p-10">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-cream/55">{story.note}</div>
                      <h3 className="mt-3 text-4xl leading-none text-cream md:text-6xl">{story.name}</h3>
                      <p className="mt-6 max-w-md text-[16px] leading-relaxed text-cream/82">{story.description}</p>
                    </div>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[20px] border border-cream/10 bg-black/18 p-4">
                        <div className="text-sm uppercase tracking-[0.24em] text-cream/50">Texture</div>
                        <div className="mt-2 text-lg font-bold text-cream">Creamy, dense, scoopable</div>
                      </div>
                      <div className="rounded-[20px] border border-cream/10 bg-black/18 p-4">
                        <div className="text-sm uppercase tracking-[0.24em] text-cream/50">Mood</div>
                        <div className="mt-2 text-lg font-bold text-cream">Editorial, premium, playful</div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-center overflow-hidden p-8">
                    <div
                      className="absolute inset-0 opacity-80"
                      style={{
                        background: `radial-gradient(circle at 50% 45%, ${story.glow}, transparent 42%)`,
                      }}
                    />
                    <motion.div
                      initial={{ y: 40, opacity: 0, scale: 0.92 }}
                      whileInView={{ y: 0, opacity: 1, scale: 1 }}
                      viewport={{ once: false, amount: 0.6 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="relative flex h-full w-full max-w-[420px] items-center justify-center"
                    >
                      <div className="absolute inset-x-8 bottom-6 h-24 rounded-full bg-black/15 blur-2xl" />
                      <img
                        src={story.image}
                        alt={story.name}
                        className="relative z-10 w-[78%] drop-shadow-[0_25px_45px_rgba(0,0,0,0.35)]"
                      />
                      <img
                        src={coneOnly}
                        alt=""
                        aria-hidden
                        className="absolute bottom-0 left-1/2 z-0 w-[64%] -translate-x-1/2 opacity-95"
                      />
                      <div className="absolute left-4 top-6 rounded-full border border-cream/10 bg-black/18 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-cream/60">
                        Scroll to reveal
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function Story() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(47,61,35,0.95),rgba(69,91,49,0.95))] py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,209,102,0.16),transparent_26%)]" />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 px-6 md:px-10 md:grid-cols-2">
        <div>
          <span className="font-script text-3xl text-sunny">Our story</span>
          <h2 className="mt-3 text-4xl leading-[1] text-cream md:text-6xl">
            Three siblings,
            <br />
            one <span className="text-sunny">obsession</span>.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-cream/85">
            Qeelo was born in Lahore, from late-night kitchen experiments, far too many spoons, and a dream to serve
            ice cream that looks as joyful as it tastes.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-cream/85">
            We built the signature Qeelo Palette so you can taste four flavors at once, because choosing just one is
            impossible.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-full bg-sunny/20 blur-3xl" />
          <RotatingPalette className="relative mx-auto w-full max-w-md rounded-[32px] border border-cream/15 bg-cream/10 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.28)]" />
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = [
    "Fresh Daily",
    "Made in Lahore",
    "Small Batch",
    "Palette Ready",
    "Instagram Worthy",
    "Gen Z Approved",
  ];

  return (
    <div className="overflow-hidden border-y-4 border-sage-dark bg-[linear-gradient(90deg,#FFD166_0%,#FFB36B_100%)] py-5 text-ink shadow-[inset_0_-12px_24px_rgba(0,0,0,0.08)]">
      <div className="flex gap-16 whitespace-nowrap animate-[marquee_35s_linear_infinite]">
        {[...words, ...words, ...words].map((word, index) => (
          <span key={index} className="text-2xl font-semibold uppercase tracking-wide md:text-3xl">
            {word} <span className="mx-4 text-coral">âœ¦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Flavors() {
  return (
    <section id="flavors" className="relative overflow-hidden bg-sage/90 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,107,107,0.14),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(184,161,255,0.14),transparent_30%)]" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-script text-3xl text-sunny">Our flavors</span>
            <h2 className="mt-2 text-5xl leading-[0.95] text-cream md:text-7xl">
              PICK YOUR
              <br />
              <span className="text-sunny">SCOOP.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[16px] text-cream/85">
            Six signatures on rotation â€” and always one wild seasonal we&apos;re secretly obsessed with this week.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FLAVORS.map((flavor, index) => (
            <motion.div
              key={flavor.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.7 }}
              className="group overflow-hidden rounded-[32px] border border-sage-dark/10 bg-cream text-ink shadow-lift backdrop-blur-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={flavor.img}
                  alt={flavor.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <div className="text-xl font-bold">{flavor.name}</div>
                  <div className="mt-1 text-sm text-ink/60">{flavor.tag}</div>
                </div>
                <button
                  className="grid h-12 w-12 place-items-center rounded-full bg-sunny transition-all duration-300 hover:rotate-12 hover:bg-coral hover:text-cream"
                  aria-label={`Order ${flavor.name}`}
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Locations() {
  const spots = [
    { name: "MM Alam Road", city: "Lahore", status: "Now open" },
    { name: "Packages Mall", city: "Lahore", status: "Coming soon" },
    { name: "Emporium", city: "Lahore", status: "Coming soon" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-sage/90 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,209,102,0.14),transparent_24%)]" />
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-14 text-center">
          <span className="font-script text-3xl text-sunny">Find us</span>
          <h2 className="mt-2 text-5xl leading-[0.95] text-cream md:text-7xl">
            COME SAY
            <br />
            <span className="text-sunny">HI.</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {spots.map((spot) => (
            <div
              key={spot.name}
              className="rounded-[28px] border border-cream/10 bg-sage-deep/80 p-8 shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-sunny"
            >
              <MapPin className="h-8 w-8 text-sunny" />
              <div className="mt-4 text-2xl font-bold text-cream">{spot.name}</div>
              <div className="mt-1 text-cream/70">{spot.city}</div>
              <div
                className={`mt-5 inline-block rounded-full px-3 py-1 text-xs font-bold ${
                  spot.status === "Now open" ? "bg-sunny text-ink" : "bg-cream/10 text-cream/80"
                }`}
              >
                {spot.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(135deg,#1B2410_0%,#23321A_100%)] pt-20 pb-10 text-cream/85">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,209,102,0.12),transparent_30%)]" />
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <img src={logo} alt="Qeelo Ice Cream" className="h-28 w-auto" />
            <p className="mt-4 max-w-xs text-sm">Handmade in Lahore. Served with sprinkles, always.</p>
          </div>
          <div>
            <div className="mb-3 font-bold text-cream">Visit</div>
            <p className="text-sm">
              MM Alam Road, Gulberg III
              <br />
              Lahore, Pakistan
            </p>
          </div>
          <div>
            <div className="mb-3 font-bold text-cream">Contact</div>
            <p className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" /> +92 337 7534199
            </p>
            <p className="mt-1 text-sm">qeelocloud@gmail.com</p>
          </div>
          <div>
            <div className="mb-3 font-bold text-cream">Follow</div>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 transition-colors hover:bg-sunny hover:text-ink"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/60 md:flex-row md:justify-between">
          <div>Â© {new Date().getFullYear()} Qeelo Ice Cream. All rights reserved.</div>
          <div>Made with ðŸ¦ in Lahore</div>
        </div>
      </div>
    </footer>
  );
}

function RotatingPalette({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      className={`relative flex items-center justify-center ${className}`}
    >
      <img
        src={paletteIcecream}
        alt="Qeelo palette illustration"
        className="h-full w-full rounded-[24px] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.32)]"
      />
    </motion.div>
  );
}

function HandShaker({ delay = 2, scale = 1 }: { delay?: number; scale?: number }) {
  return (
    <motion.img
      src={handShaker}
      alt=""
      aria-hidden
      className="pointer-events-none absolute z-50 select-none drop-shadow-[0_18px_25px_rgba(0,0,0,0.35)]"
      style={{
        width: `${34 * scale}%`,
        top: "-10%",
        left: "56%",
        transformOrigin: "92% 8%",
      }}
      initial={{ x: 100, y: -180, rotate: -48, opacity: 0 }}
      animate={{
        x: [100, 8, 8, 8, 8, 8, 100],
        y: [-180, -8, -8, -8, -8, -8, -180],
        rotate: [-48, -16, -8, -14, -8, -12, -48],
        opacity: [0, 1, 1, 1, 1, 1, 0],
      }}
      transition={{
        duration: 6,
        delay,
        times: [0, 0.14, 0.32, 0.5, 0.68, 0.86, 1],
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1.4,
      }}
    />
  );
}

function Sprinkles({ count = 80, startDelay = 0 }: { count?: number; startDelay?: number }) {
  type SprinkleKind = "choco" | "pink" | "yellow" | "cream" | "sage" | "cookie" | "candy";

  const palette: Record<SprinkleKind, string> = {
    choco: "#3A1F10",
    pink: "#F4A6C0",
    yellow: "#F5C518",
    cream: "#FFF6E5",
    sage: "#A8C293",
    cookie: "#B8814A",
    candy: "#E85A7A",
  };
  const kinds: SprinkleKind[] = useMemo(
    () => ["choco", "choco", "choco", "cookie", "cookie", "pink", "yellow", "candy", "cream", "sage"],
    [],
  );

  const rand = (seed: number) => {
    const x = Math.sin(seed * 999.13) * 43758.5453;
    return x - Math.floor(x);
  };

  const gravity = 900;
  const particles = Array.from({ length: count }, (_, index) => {
    const kind = kinds[index % kinds.length];
    const r1 = rand(index + 1);
    const r2 = rand(index + 7);
    const r3 = rand(index + 13);
    const r4 = rand(index + 21);
    const r5 = rand(index + 33);
    const depth = r5;

    const angle = -Math.PI * 0.15 - r1 * Math.PI * 0.7;
    const speed = 90 + r2 * 220 + depth * 60;
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;

    const life = 1.6 + r3 * 0.9;
    const samples = [0, 0.2, 0.45, 0.75, 1];
    const xs = samples.map((t) => vx * t * life);
    const ys = samples.map((t) => vy * t * life + 0.5 * gravity * (t * life) ** 2);
    const bounceY = ys[4] - 12 - r4 * 10;
    const restY = ys[4] + 6;

    const size =
      kind === "choco" ? 5 + r2 * 4 : kind === "cookie" ? 4 + r3 * 5 : 3 + r4 * 3;
    const long = kind === "pink" || kind === "yellow" || kind === "candy";
    const width = long ? size * 0.7 : size;
    const height = long ? size * 2.6 : size;
    const rotate0 = r1 * 360;
    const rotateEnd = rotate0 + (r2 - 0.5) * 1440;
    const cycle = 3.4 + r3 * 0.4;
    const delay = startDelay + rand(index + 55) * 0.35;

    return {
      index,
      kind,
      xs,
      ys,
      bounceY,
      restY,
      width,
      height,
      rotate0,
      rotateEnd,
      cycle,
      delay,
      depth,
    };
  });

  return (
    <div className="pointer-events-none absolute inset-0 z-40" style={{ perspective: 600 }}>
      {particles.map((particle) => {
        const bg = palette[particle.kind];
        const isRound = particle.kind === "cream" || particle.kind === "sage";
        const radius = particle.kind === "choco" ? 1.5 : particle.kind === "cookie" ? 2 : isRound ? 999 : 999;
        const scale = 0.7 + particle.depth * 0.6;
        const opacityPeak = 0.55 + particle.depth * 0.45;

        return (
          <motion.span
            key={particle.index}
            className="absolute block will-change-transform"
            style={{
              left: "50%",
              top: "18%",
              width: particle.width,
              height: particle.height,
              borderRadius: radius,
              background: bg,
              boxShadow:
                particle.kind === "choco"
                  ? "0 1px 2px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)"
                  : particle.kind === "cookie"
                    ? "0 1px 2px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.25)"
                    : "0 1px 2px rgba(0,0,0,0.18)",
              filter: particle.depth < 0.25 ? "blur(0.4px)" : undefined,
              transform: `scale(${scale})`,
            }}
            initial={{ x: 0, y: 0, opacity: 0, rotate: particle.rotate0 }}
            animate={{
              x: [...particle.xs, particle.xs[4], particle.xs[4]],
              y: [...particle.ys, particle.bounceY, particle.restY],
              opacity: [0, opacityPeak, opacityPeak, opacityPeak, opacityPeak * 0.9, opacityPeak * 0.5, 0],
              rotate: [
                particle.rotate0,
                particle.rotateEnd * 0.4,
                particle.rotateEnd * 0.75,
                particle.rotateEnd,
                particle.rotateEnd,
                particle.rotateEnd + 8,
                particle.rotateEnd + 12,
              ],
            }}
            transition={{
              duration: 2.1,
              delay: particle.delay,
              times: [0, 0.08, 0.32, 0.6, 0.82, 0.9, 1],
              ease: [0.22, 0.61, 0.36, 1],
              repeat: Infinity,
              repeatDelay: particle.cycle,
            }}
          />
        );
      })}
    </div>
  );
}

