import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Instagram, MapPin, Phone, Menu, X, Facebook, Youtube } from "lucide-react";

import logoAsset from "@/assets/qeelo-logo.png.asset.json";
const logo = logoAsset.url;
import coneOnly from "@/assets/qeelo-cone-only.png";
import scoopPink from "@/assets/qeelo-scoop-pink-only.png";
import scoopOrange from "@/assets/qeelo-scoop-orange-only.png";
import scoopPista from "@/assets/qeelo-scoop-pista-only.png";
import plate from "@/assets/qeelo-plate.png";
import handShaker from "@/assets/qeelo-hand-shaker.png";

import pistachio from "@/assets/flavor-pistachio.jpg";
import rose from "@/assets/flavor-rose.jpg";
import chocolate from "@/assets/flavor-chocolate.jpg";
import mango from "@/assets/flavor-mango.jpg";
import vanilla from "@/assets/flavor-vanilla.jpg";
import matcha from "@/assets/flavor-matcha.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qeelo,  Ice Cream Made With Passion · Lahore" },
      {
        name: "description",
        content:
          "Qeelo is a playful Lahore-born ice cream brand. Big smiles, bold scoops, and our signature palette tasting board.",
      },
    ],
  }),
  component: HomePage,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "How it's made?", href: "#story" },
  { label: "Our flavors", href: "#flavors" },
  { label: "The Palette", href: "#palette" },
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

function HomePage() {
  return (
    <div id="home" className="relative min-h-screen bg-transparent text-cream font-sans overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,107,107,0.16),transparent_30%),radial-gradient(circle_at_85%_0%,rgba(184,161,255,0.16),transparent_30%)]" />
      <Navbar />
      <Hero />
      <Marquee />
      <Story />
      <Flavors />
      <PaletteSection />
      <Locations />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-sage/70 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-24 md:h-28 flex items-center justify-between">
        <a
          href="#home"
          className="group flex items-center -my-2 transition-transform duration-300 hover:scale-105"
        >
          <img
            src={logo}
            alt="Qeelo Ice Cream"
            className="h-16 md:h-20 lg:h-24 w-auto drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-cream/95 font-semibold text-[15px] hover:text-sunny transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sunny after:transition-all after:duration-300 hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#flavors"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-sunny text-ink font-bold px-6 py-3 hover:scale-105 hover:shadow-[0_0_0_4px_rgba(255,209,102,0.28)] transition-all shadow-lift"
        >
          Order now <ArrowRight className="h-4 w-4" />
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-cream"
          aria-label="menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-sage-deep border-t border-cream/10 px-6 py-4 flex flex-col gap-4">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-cream text-lg font-medium">
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 80]);
  const rotate = useTransform(scrollY, [0, 600], [0, -6]);
  return (
    <section className="relative min-h-[82vh] lg:min-h-[88vh] overflow-hidden">
      {/* dotted trail decoration */}
      <svg
        className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[60%] h-[60%] pointer-events-none opacity-90"
        viewBox="0 0 800 500"
        fill="none"
        aria-hidden
      >
        <path
          id="trail"
          d="M20 380 C 180 460, 320 250, 460 320 S 780 180, 780 60"
          stroke="url(#g)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="2 18"
        />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F5C518" />
            <stop offset="100%" stopColor="#F5C518" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-8 md:pt-10 pb-10 lg:pb-12 grid lg:grid-cols-[0.95fr_0.9fr] gap-4 lg:gap-6 xl:gap-8 items-center">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-sunny font-script text-2xl md:text-3xl mb-4 px-3 py-1 rounded-full border border-sunny/30 bg-sunny/10 backdrop-blur">
              Hello, sweet friend
            </span>
            <h1 className="font-display text-cream leading-[0.95] tracking-[-0.04em] text-[40px] sm:text-[50px] md:text-[64px] lg:text-[76px] xl:text-[84px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)]">
              ICE CREAM
              <br />
              MADE WITH
              <br />
              <span className="text-sunny">PASSION</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 md:mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#flavors"
              className="rounded-full border-2 border-sunny text-cream font-bold px-8 py-4 hover:bg-sunny hover:text-ink transition-all duration-300 hover:scale-[1.02]"
            >
              Our flavors
            </a>
            <a
              href="#story"
              className="text-sunny font-semibold underline underline-offset-4 hover:text-cream transition-colors"
            >
              How it&apos;s made? →
            </a>
          </motion.div>

          {/* Mobile-only falling scoops hero */}
          <motion.div
            className="lg:hidden relative flex justify-center my-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative w-[240px] sm:w-[280px] h-[320px] sm:h-[380px] drop-shadow-[0_30px_45px_rgba(0,0,0,0.35)]">

              <motion.img
                src={coneOnly}
                alt="Empty waffle cone"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] z-0"
                initial={{ y: -30, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 140, damping: 12, delay: 0.1 }}
              />
              <motion.img
                src={scoopPink}
                alt="Pink strawberry scoop"
                className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-[68%] z-10 drop-shadow-[0_10px_16px_rgba(0,0,0,0.2)]"
                initial={{ y: -300, opacity: 0, rotate: -12, scale: 0.6 }}
                animate={{ y: 0, opacity: 1, rotate: [0, 4, -2, 0], scale: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.6, rotate: { duration: 3.6, delay: 1.1, repeat: Infinity, ease: "easeInOut" } }}
              />
              <motion.img
                src={scoopOrange}
                alt="Orange mango scoop"
                className="absolute bottom-[38%] left-1/2 -translate-x-1/2 w-[62%] z-20 drop-shadow-[0_10px_16px_rgba(0,0,0,0.2)]"
                initial={{ y: -360, opacity: 0, rotate: 10, scale: 0.6 }}
                animate={{ y: 0, opacity: 1, rotate: [0, -4, 2, 0], scale: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 10, delay: 1.1, rotate: { duration: 4, delay: 1.8, repeat: Infinity, ease: "easeInOut" } }}
              />
              <motion.img
                src={scoopPista}
                alt="Green pistachio scoop"
                className="absolute bottom-[54%] left-1/2 -translate-x-1/2 w-[56%] z-30 drop-shadow-[0_10px_16px_rgba(0,0,0,0.2)]"
                initial={{ y: -420, opacity: 0, rotate: -8, scale: 0.6 }}
                animate={{ y: 0, opacity: 1, rotate: [0, 5, -3, 0], scale: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 10, delay: 1.6, rotate: { duration: 4.4, delay: 2.3, repeat: Infinity, ease: "easeInOut" } }}
              />
              <Sprinkles startDelay={2.4} count={60} />
              <HandShaker delay={2.0} scale={0.9} />
            </div>
          </motion.div>

          {/* Little quote plate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-5 lg:mt-10 flex items-center gap-6 max-w-lg rounded-[28px] border border-cream/15 bg-cream/10 p-4 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.15)]"
          >

            <div className="relative shrink-0">
              <motion.img
                animate={{ rotate: 360 }}
                transition={{ duration: 12, ease: "linear", repeat: Infinity }}
                src={plate}
                alt="Plate of colorful scoops"
                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full ring-4 ring-cream/20 shadow-lift animate-[spin_20s_linear_infinite]"
              />
            </div>
            <p className="text-cream/90 text-[15px] leading-relaxed">
              You can&apos;t buy happiness, but you can buy ice cream,
              and that&apos;s pretty much the same thing. The best time
              for a&nbsp;Qeelo&nbsp;is always.
            </p>
          </motion.div>
        </div>

        {/* Hero cone with falling scoops */}
        <motion.div
          style={{ y, rotate }}
          className="hidden lg:flex relative justify-center lg:justify-end self-center lg:-mt-3"
        >

          <div className="relative w-[250px] sm:w-[300px] md:w-[340px] lg:w-[360px] xl:w-[400px] h-[300px] sm:h-[400px] md:h-[460px] lg:h-[500px] xl:h-[540px] drop-shadow-[0_40px_60px_rgba(0,0,0,0.35)]">
            {/* Cone */}
            <motion.img
              src={coneOnly}
              alt="Empty waffle cone"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] z-0"
              initial={{ y: -40, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 140, damping: 12, delay: 0.1 }}
            />
            {/* Pink scoop — lands first */}
            <motion.img
              src={scoopPink}
              alt="Pink strawberry scoop"
              className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-[68%] z-10 drop-shadow-[0_12px_20px_rgba(0,0,0,0.2)]"
              initial={{ y: -400, opacity: 0, rotate: -12, scale: 0.6 }}
              animate={{ y: 0, opacity: 1, rotate: [0, 4, -2, 0], scale: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.6, rotate: { duration: 3.6, delay: 1.1, repeat: Infinity, ease: "easeInOut" } }}
            />
            {/* Orange scoop — lands second */}
            <motion.img
              src={scoopOrange}
              alt="Orange mango scoop"
              className="absolute bottom-[38%] left-1/2 -translate-x-1/2 w-[62%] z-20 drop-shadow-[0_12px_20px_rgba(0,0,0,0.2)]"
              initial={{ y: -460, opacity: 0, rotate: 10, scale: 0.6 }}
              animate={{ y: 0, opacity: 1, rotate: [0, -4, 2, 0], scale: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 10, delay: 1.1, rotate: { duration: 4, delay: 1.8, repeat: Infinity, ease: "easeInOut" } }}
            />
            {/* Pista scoop — lands last */}
            <motion.img
              src={scoopPista}
              alt="Green pistachio scoop"
              className="absolute bottom-[54%] left-1/2 -translate-x-1/2 w-[56%] z-30 drop-shadow-[0_12px_20px_rgba(0,0,0,0.2)]"
              initial={{ y: -520, opacity: 0, rotate: -8, scale: 0.6 }}
              animate={{ y: 0, opacity: 1, rotate: [0, 5, -3, 0], scale: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 10, delay: 1.6, rotate: { duration: 4.4, delay: 2.3, repeat: Infinity, ease: "easeInOut" } }}
            />
            <Sprinkles startDelay={2.4} count={110} />
            <HandShaker delay={2.0} scale={1.15} />
          </div>
        </motion.div>



        {/* stats */}
        <div className="hidden lg:flex absolute right-10 top-32 flex-col gap-6 z-10">
          {/* <StatBlock number="16" label="cafes" />
          <StatBlock number="23" label="food trucks" /> */}
        </div>
      </div>
    </section>
  );
}

function StatBlock({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-right">
      <div className="font-display text-sage-dark text-5xl leading-none">{number}</div>
      <div className="text-cream/90 text-sm mt-1">{label}</div>
    </div>
  );
}

type SprinkleKind = "choco" | "pink" | "yellow" | "cream" | "sage" | "cookie" | "candy";

function HandShaker({ delay = 2, scale = 1 }: { delay?: number; scale?: number }) {
  return (
    <motion.img
      src={handShaker}
      alt=""
      aria-hidden
      className="absolute z-50 pointer-events-none select-none drop-shadow-[0_18px_25px_rgba(0,0,0,0.35)]"
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
  // A realistic radial burst from the top of the scoop stack:
  // particles explode outward, then fall under gravity with rotation,
  // small bounce, and fade — looping in bursts.
  const palette: Record<SprinkleKind, string> = {
    choco: "#3A1F10",
    pink: "#F4A6C0",
    yellow: "#F5C518",
    cream: "#FFF6E5",
    sage: "#A8C293",
    cookie: "#B8814A",
    candy: "#E85A7A",
  };
  const kinds: SprinkleKind[] = [
    "choco", "choco", "choco", "cookie", "cookie",
    "pink", "yellow", "candy", "cream", "sage",
  ];

  const rand = (seed: number) => {
    const x = Math.sin(seed * 999.13) * 43758.5453;
    return x - Math.floor(x);
  };

  // Physics constants (in px, tuned for the hero container height ~600px).
  const G = 900; // gravity px/s^2

  const particles = Array.from({ length: count }, (_, i) => {
    const kind = kinds[i % kinds.length];
    const r1 = rand(i + 1);
    const r2 = rand(i + 7);
    const r3 = rand(i + 13);
    const r4 = rand(i + 21);
    const r5 = rand(i + 33);
    const depth = r5; // 0 = back, 1 = front — drives size, opacity, blur

    // Radial burst: mostly upper hemisphere, biased outward+up.
    const angle = -Math.PI * 0.15 - r1 * Math.PI * 0.7; // -0.15π to -0.85π
    const speed = 90 + r2 * 220 + depth * 60; // px/s
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;

    const life = 1.6 + r3 * 0.9; // seconds airborne
    // Simulate ballistic path at 5 sample points then a small bounce.
    const samples = [0, 0.2, 0.45, 0.75, 1];
    const xs = samples.map((t) => vx * t * life);
    const ys = samples.map((t) => vy * t * life + 0.5 * G * (t * life) ** 2);
    // gentle bounce/settle after landing
    const bounceY = ys[4] - 12 - r4 * 10;
    const restY = ys[4] + 6;

    const size = kind === "choco"
      ? 5 + r2 * 4
      : kind === "cookie"
      ? 4 + r3 * 5
      : 3 + r4 * 3;
    const long = kind === "pink" || kind === "yellow" || kind === "candy";
    const width = long ? size * 0.7 : size;
    const height = long ? size * 2.6 : size;

    const rotate0 = r1 * 360;
    const rotateEnd = rotate0 + (r2 - 0.5) * 1440;

    const cycle = 3.4 + r3 * 0.4; // burst cadence
    const delay = startDelay + rand(i + 55) * 0.35; // slight stagger inside a burst

    return {
      i, kind, xs, ys, bounceY, restY,
      width, height, rotate0, rotateEnd,
      cycle, delay, depth, long,
    };
  });

  return (
    <div
      className="pointer-events-none absolute inset-0 z-40"
      style={{ perspective: 600 }}
    >
      {particles.map((p) => {
        const bg = palette[p.kind];
        const isRound = p.kind === "cream" || p.kind === "sage";
        const radius = p.kind === "choco" ? 1.5
          : p.kind === "cookie" ? 2
          : isRound ? 999
          : 999;
        const scale = 0.7 + p.depth * 0.6;
        const opacityPeak = 0.55 + p.depth * 0.45;
        return (
          <motion.span
            key={p.i}
            className="absolute block will-change-transform"
            style={{
              // Origin: top-center of scoop stack (matches shaker tip).
              left: "50%",
              top: "18%",
              width: p.width,
              height: p.height,
              borderRadius: radius,
              background: bg,
              boxShadow: p.kind === "choco"
                ? "0 1px 2px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)"
                : p.kind === "cookie"
                ? "0 1px 2px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.25)"
                : "0 1px 2px rgba(0,0,0,0.18)",
              filter: p.depth < 0.25 ? "blur(0.4px)" : undefined,
              transform: `scale(${scale})`,
            }}
            initial={{ x: 0, y: 0, opacity: 0, rotate: p.rotate0 }}
            animate={{
              x: [...p.xs, p.xs[4], p.xs[4]],
              y: [...p.ys, p.bounceY, p.restY],
              opacity: [0, opacityPeak, opacityPeak, opacityPeak, opacityPeak * 0.9, opacityPeak * 0.5, 0],
              rotate: [p.rotate0, p.rotateEnd * 0.4, p.rotateEnd * 0.75, p.rotateEnd, p.rotateEnd, p.rotateEnd + 8, p.rotateEnd + 12],
            }}
            transition={{
              duration: 2.1,
              delay: p.delay,
              times: [0, 0.08, 0.32, 0.6, 0.82, 0.9, 1],
              // easeOut for the initial burst; gravity handled by y-samples.
              ease: [0.22, 0.61, 0.36, 1],
              repeat: Infinity,
              repeatDelay: p.cycle,
            }}
          />
        );
      })}
    </div>
  );
}

function Marquee() {
  const words = ["Fresh Daily", "Made in Lahore", "Small Batch", "Palette Ready", "Instagram Worthy", "Gen Z Approved"];
  return (
    <div className="bg-[linear-gradient(90deg,#FFD166_0%,#FFB36B_100%)] text-ink py-5 overflow-hidden border-y-4 border-sage-dark shadow-[inset_0_-12px_24px_rgba(0,0,0,0.08)]">
      <div className="flex gap-16 whitespace-nowrap animate-[marquee_35s_linear_infinite]">
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl uppercase tracking-wide">
            {w} <span className="text-coral mx-4">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-[linear-gradient(135deg,rgba(47,61,35,0.95),rgba(69,91,49,0.95))] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,209,102,0.16),transparent_26%)]" />
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center relative z-10">
        <div>
          <span className="font-script text-sunny text-3xl">Our story</span>
          <h2 className="font-display text-cream text-4xl md:text-6xl mt-3 leading-[1]">
            Three siblings,
            <br />
            one <span className="text-sunny">obsession</span>.
          </h2>
          <p className="text-cream/85 mt-6 text-[17px] leading-relaxed">
            Qeelo&nbsp;was born in Lahore, from late-night kitchen experiments,
            far too many spoons, and a dream to serve ice cream that looks
            as joyful as it tastes. Every scoop is churned in small batches
            with real fruit, real cream, and a lot of love.
          </p>
          <p className="text-cream/85 mt-4 text-[17px] leading-relaxed">
            We built the signature <b className="text-sunny">Qeelo Palette</b>{" "}
            so you can taste four flavors at once, because choosing just
            one is impossible.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-sunny/20 rounded-full blur-3xl" />
          <img src={plate} alt="Qeelo scoops" className="relative w-full max-w-md mx-auto rounded-[32px] border border-cream/15 bg-cream/10 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.28)]" />
        </motion.div>
      </div>
    </section>
  );
}

function Flavors() {
  return (
    <section id="flavors" className="py-24 md:py-32 bg-sage/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,107,107,0.14),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(184,161,255,0.14),transparent_30%)]" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-script text-sunny text-3xl">Our flavors</span>
            <h2 className="font-display text-cream text-5xl md:text-7xl leading-[0.95] mt-2">
              PICK YOUR
              <br />
              <span className="text-sunny">SCOOP.</span>
            </h2>
          </div>
          <p className="text-cream/85 max-w-sm text-[16px]">
            Six signatures on rotation — and always one wild seasonal we&apos;re
            secretly obsessed with this week.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLAVORS.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="group rounded-[32px] bg-cream text-ink overflow-hidden shadow-lift border border-sage-dark/10 backdrop-blur-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={f.img}
                  alt={f.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="font-display text-xl">{f.name}</div>
                  <div className="text-sm text-ink/60 mt-1">{f.tag}</div>
                </div>
                <button
                  className="h-12 w-12 rounded-full bg-sunny grid place-items-center hover:bg-coral hover:text-cream transition-all duration-300 hover:rotate-12"
                  aria-label={`Order ${f.name}`}
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

function PaletteSection() {
  return (
    <section id="palette" className="py-24 md:py-32 bg-[linear-gradient(135deg,#24331C_0%,#2E3E22_55%,#1A2410_100%)] relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-sunny/10 rounded-full blur-3xl" />
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
        <span className="font-script text-sunny text-3xl">Signature experience</span>
        <h2 className="font-display text-cream text-5xl md:text-7xl mt-2 leading-[0.95]">
          THE QEELO
          <br />
          <span className="text-sunny">PALETTE.</span>
        </h2>
        <p className="text-cream/80 max-w-2xl mx-auto mt-6 text-[17px]">
          A hand-pressed disposable tasting board with 4 wells for scoops
          and a center hollow for your cone. Designed to be sturdy, budget-friendly,
          and — most importantly — insta-worthy.
        </p>

        <div className="mt-16 relative flex justify-center">
          {/* palette illustration */}
          <svg viewBox="0 0 500 340" className="w-full max-w-2xl">
            <defs>
              <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="12" stdDeviation="10" floodOpacity="0.35" />
              </filter>
            </defs>
            {/* palette body */}
            <path
              d="M60 170 C 60 60, 180 20, 280 30 C 400 40, 470 110, 460 200 C 450 280, 360 320, 260 310 C 220 306, 210 280, 170 280 C 120 280, 60 260, 60 170 Z"
              fill="#FFF6E5"
              filter="url(#soft)"
            />
            {/* thumb hole */}
            <circle cx="150" cy="230" r="22" fill="#34432A" />
            {/* scoop wells */}
            {[
              { cx: 200, cy: 130, fill: "#F4C6D6" },
              { cx: 290, cy: 105, fill: "#C7E6B5" },
              { cx: 380, cy: 145, fill: "#F5C518" },
              { cx: 340, cy: 225, fill: "#E8A87C" },
            ].map((s, i) => (
              <motion.circle
                key={i}
                cx={s.cx}
                cy={s.cy}
                r="45"
                fill={s.fill}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, type: "spring", stiffness: 120 }}
              />
            ))}
          </svg>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto text-left">
          {[
            ["01", "4 scoops", "Pick a rainbow — one bite of everything."],
            ["02", "Eco disposable", "Sturdy pressed paper, easy to hold."],
            ["03", "Made to share", "Or don't. We won't tell."],
          ].map(([n, t, d]) => (
            <div key={n} className="border-t border-sunny/40 pt-5 rounded-[20px] bg-white/5 p-4">
              <div className="font-display text-sunny text-3xl">{n}</div>
              <div className="font-display text-cream text-xl mt-2">{t}</div>
              <div className="text-cream/70 mt-2 text-sm">{d}</div>
            </div>
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
    <section id="contact" className="py-24 md:py-32 bg-sage/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,209,102,0.14),transparent_24%)]" />
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <span className="font-script text-sunny text-3xl">Find us</span>
          <h2 className="font-display text-cream text-5xl md:text-7xl mt-2 leading-[0.95]">
            COME SAY
            <br />
            <span className="text-sunny">HI.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {spots.map((s) => (
            <div
              key={s.name}
              className="rounded-[28px] bg-sage-deep/80 border border-cream/10 p-8 hover:border-sunny hover:-translate-y-1 transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
            >
              <MapPin className="h-8 w-8 text-sunny" />
              <div className="font-display text-cream text-2xl mt-4">{s.name}</div>
              <div className="text-cream/70 mt-1">{s.city}</div>
              <div
                className={`inline-block mt-5 px-3 py-1 rounded-full text-xs font-bold ${
                  s.status === "Now open"
                    ? "bg-sunny text-ink"
                    : "bg-cream/10 text-cream/80"
                }`}
              >
                {s.status}
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
    <footer className="bg-[linear-gradient(135deg,#1B2410_0%,#23321A_100%)] text-cream/85 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,209,102,0.12),transparent_30%)]" />
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
          <div>
            <img src={logo} alt="Qeelo Ice Cream" className="h-28 w-auto drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)]" />
            <p className="mt-4 text-sm max-w-xs">
              Handmade in Lahore. Served with sprinkles, always.
            </p>
          </div>
          <div>
            <div className="font-display text-cream mb-3">Visit</div>
            <p className="text-sm">MM Alam Road, Gulberg III<br />Lahore, Pakistan</p>
          </div>
          <div>
            <div className="font-display text-cream mb-3">Contact</div>
            <p className="text-sm flex items-center gap-2"><Phone className="h-4 w-4" /> +92 300 000 0000</p>
            <p className="text-sm mt-1">hello@qeelo.pk</p>
          </div>
          <div>
            <div className="font-display text-cream mb-3">Follow</div>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full bg-cream/10 grid place-items-center hover:bg-sunny hover:text-ink transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between text-xs text-cream/60 gap-3">
          <div>© {new Date().getFullYear()} Qeelo Ice Cream. All rights reserved.</div>
          <div>Made with 🍦 in Lahore</div>
        </div>
      </div>
    </footer>
  );
}