import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Award,
  Clock3,
  Facebook,
  Instagram,
  Leaf,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Youtube,
} from "lucide-react";

import logoAsset from "@/assets/qeelo-logo.png.asset.json";
const logo = logoAsset.url;

import paletteIcecream from "@/assets/qeelo-transparent.png";
import storyImage from "@/assets/story.jpg";
import galleryShop from "@/assets/gallery-shop.jpg";
import galleryScoop from "@/assets/gallery-scoop.jpg";
import galleryPalette from "@/assets/gallery-palette.jpg";

import pistachio from "@/assets/flavor-pistachio.jpg";
import rose from "@/assets/flavor-rose.jpg";
import chocolate from "@/assets/flavor-chocolate.jpg";
import mango from "@/assets/flavor-mango.jpg";
import vanilla from "@/assets/flavor-vanilla.jpg";
import matcha from "@/assets/flavor-matcha.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qeelo Ice Cream - Lahore" },
      {
        name: "description",
        content:
          "Qeelo is a Lahore-born ice cream brand serving playful scoops, signature palettes, and feel-good dessert moments.",
      },
    ],
  }),
  component: HomePage,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Story", href: "#story" },
  { label: "Flavors", href: "#flavors" },
  { label: "Palette", href: "#palette" },
  { label: "Visit", href: "#contact" },
];

const HIGHLIGHTS = [
  { value: "Small batch", label: "Made fresh for a softer, richer scoop." },
  { value: "Signature palette", label: "A shareable board that turns tasting into a moment." },
  { value: "Born in Lahore", label: "Local roots, joyful design, and a warm dessert vibe." },
];

const FEATURES = [
  {
    icon: Leaf,
    title: "Real ingredients",
    text: "Fruit-forward flavors, real cream, and a cleaner finish on every spoonful.",
  },
  {
    icon: Award,
    title: "Crafted presentation",
    text: "Designed like a dessert studio, with each scoop treated like part of the story.",
  },
  {
    icon: Clock3,
    title: "Always fresh",
    text: "Built for same-day service, so the texture stays smooth and the flavors stay bright.",
  },
];

const FLAVORS = [
  {
    name: "Pistachio Kulfi",
    img: pistachio,
    tag: "Signature",
    text: "Nutty, creamy, and deeply nostalgic with a modern finish.",
  },
  {
    name: "Gulab Rose",
    img: rose,
    tag: "Local",
    text: "Delicate rose notes balanced for a soft, floral scoop.",
  },
  {
    name: "Belgian Chocolate",
    img: chocolate,
    tag: "Classic",
    text: "Rich cocoa layers with a velvety, indulgent texture.",
  },
  {
    name: "Chaunsa Mango",
    img: mango,
    tag: "Seasonal",
    text: "Juicy and bright, like peak summer in every bite.",
  },
  {
    name: "Madagascar Vanilla",
    img: vanilla,
    tag: "Classic",
    text: "Simple, elegant, and the perfect base for layering.",
  },
  {
    name: "Matcha Cloud",
    img: matcha,
    tag: "New",
    text: "Earthy matcha with a soft, airy sweetness.",
  },
];

const GALLERY = [
  { title: "The shop", img: galleryShop, text: "A warm space designed for easy stops and sweet detours." },
  { title: "Scoops up close", img: galleryScoop, text: "Texture, color, and toppings styled for pure craving appeal." },
  { title: "Palette moment", img: galleryPalette, text: "The tasting board that turns one visit into a full experience." },
];

const LOCATIONS = [
  { name: "MM Alam Road", city: "Lahore", status: "Now open" },
  { name: "Packages Mall", city: "Lahore", status: "Coming soon" },
  { name: "Emporium", city: "Lahore", status: "Coming soon" },
];

function HomePage() {
  return (
    <div id="home" className="relative min-h-screen overflow-x-hidden bg-transparent text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,196,79,0.14),transparent_28%),radial-gradient(circle_at_85%_0%,rgba(255,143,145,0.12),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(182,168,255,0.08),transparent_26%)]" />
      <Navbar />
      <Hero />
      <Marquee />
      <FeatureStrip />
      <Story />
      <Flavors />
      <GallerySection />
      <PaletteSection />
      <Locations />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between rounded-full border border-white/10 bg-white/10 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl md:px-6">
        <a href="#home" className="flex items-center gap-3 transition-transform hover:scale-[1.02]">
          <img
            src={logo}
            alt="Qeelo Ice Cream"
            className="h-12 w-auto drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] md:h-14"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] font-semibold uppercase tracking-[0.22em] text-cream/90 transition-colors hover:text-sunny"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-sunny/20 bg-sunny/15 px-5 py-2.5 text-sm font-bold text-cream transition-all hover:bg-sunny/20 hover:text-sunny"
          >
            Visit us <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-white/10 bg-white/10 p-2 text-cream lg:hidden"
          aria-label="menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-[1400px] rounded-[28px] border border-white/10 bg-[#0f1712]/95 px-5 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-cream/90"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 56]);
  const rotate = useTransform(scrollY, [0, 600], [0, -4]);

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-4 pb-16 pt-12 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-16">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-sunny/20 bg-sunny/10 px-4 py-2 text-sm font-semibold text-sunny backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Lahore's sweetest little brand experience
            </span>

            <h1 className="mt-6 max-w-3xl text-[46px] font-bold leading-[0.92] tracking-[-0.05em] text-cream sm:text-[58px] md:text-[72px] xl:text-[86px]">
              Crafted scoops,
              <br />
              <span className="text-sunny">editorial style.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">
              Qeelo is built like a dessert studio: bold flavors, a signature palette board, and a warm Lahore soul that makes every visit feel special.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#flavors"
              className="inline-flex items-center gap-2 rounded-full bg-sunny px-7 py-4 text-sm font-bold text-ink transition-transform hover:scale-[1.02]"
            >
              Explore flavors <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-white/10 px-7 py-4 text-sm font-bold text-cream backdrop-blur transition-all hover:border-sunny/30 hover:bg-white/10"
            >
              Visit the shop
            </a>
          </motion.div>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {HIGHLIGHTS.map((item, index) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * index, duration: 0.7 }}
                className="rounded-[24px] border border-white/10 bg-white/10 p-4 shadow-[0_16px_36px_rgba(0,0,0,0.16)] backdrop-blur"
              >
                <div className="text-sm uppercase tracking-[0.18em] text-sunny/80">{item.value}</div>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div style={{ y, rotate }} className="relative mx-auto w-full max-w-[600px]">
          <div className="absolute inset-8 rounded-[42px] bg-[radial-gradient(circle_at_50%_30%,rgba(248,196,79,0.24),transparent_35%),radial-gradient(circle_at_50%_70%,rgba(255,143,145,0.16),transparent_32%)] blur-2xl" />
          <div className="relative rounded-[40px] border border-white/10 bg-white/10 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="absolute left-5 top-5 rounded-full border border-sunny/20 bg-sunny/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-sunny">
              Signature palette
            </div>
            <motion.img
              src={paletteIcecream}
              alt="Qeelo palette illustration"
              className="w-full rounded-[30px] object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.25)]"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="absolute -left-2 top-20 hidden rounded-[22px] border border-white/10 bg-[#101b13]/95 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-sunny p-2 text-ink">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-cream">Fresh daily</div>
                <div className="text-xs text-cream/70">Small-batch production</div>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 bottom-12 hidden rounded-[22px] border border-white/10 bg-[#101b13]/95 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-sunny p-2 text-ink">
                <Star className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-cream">Palette ready</div>
                <div className="text-xs text-cream/70">Best for sharing</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureStrip() {
  return (
    <section className="relative z-10 px-4 pb-8 md:px-8">
      <div className="mx-auto grid max-w-[1400px] gap-4 md:grid-cols-3">
        {FEATURES.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.08, duration: 0.7 }}
              className="rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-sunny p-3 text-ink">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cream">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/75">{feature.text}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Marquee() {
  const words = [
    "Fresh daily",
    "Made in Lahore",
    "Signature palette",
    "Small batch",
    "Real fruit",
    "Shareable scoops",
  ];

  return (
    <div className="overflow-hidden border-y border-sunny/20 bg-[linear-gradient(90deg,#F8C44F_0%,#FFB37A_100%)] py-4 text-ink shadow-[inset_0_-12px_24px_rgba(0,0,0,0.08)]">
      <div className="flex whitespace-nowrap" style={{ animation: "marquee 38s linear infinite" }}>
        {[...words, ...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`} className="px-8 text-xl font-bold uppercase tracking-[0.24em] md:text-2xl">
            {word} <span className="mx-2 text-coral">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Story() {
  return (
    <section id="story" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,26,18,0.96),rgba(29,43,33,0.94))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(248,196,79,0.14),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(255,143,145,0.08),transparent_24%)]" />

      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-4 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[36px] bg-sunny/10 blur-3xl" />
          <img
            src={storyImage}
            alt="Qeelo story"
            className="relative aspect-[4/5] w-full rounded-[36px] object-cover shadow-[0_24px_70px_rgba(0,0,0,0.3)]"
          />
          <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#0d170f]/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-sunny backdrop-blur">
            Our story
          </div>
        </motion.div>

        <div>
          <span className="font-script text-3xl text-sunny">The short version</span>
          <h2 className="mt-3 max-w-2xl text-4xl leading-[0.98] tracking-[-0.04em] text-cream md:text-6xl">
            Three siblings,
            <br />
            one beautiful obsession.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">
            Qeelo began in Lahore with late-night recipe experiments, too many tasting spoons, and a goal that never changed: make ice cream that feels joyful before the first bite.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cream/80">
            The palette was born from the idea that dessert should be shared, not just served. It is a compact, playful board with room for multiple moods in one sitting.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { value: "Real fruit", text: "Bright, clean flavor that tastes like the ingredient it came from." },
              { value: "Creamy finish", text: "A soft, luxurious melt that stays rich without feeling heavy." },
              { value: "Made to share", text: "The full Qeelo experience looks amazing at the table and online." },
            ].map((item) => (
              <div
                key={item.value}
                className="rounded-[24px] border border-white/10 bg-white/10 p-5 shadow-[0_16px_36px_rgba(0,0,0,0.16)] backdrop-blur-xl"
              >
                <div className="text-sm uppercase tracking-[0.2em] text-sunny/80">{item.value}</div>
                <p className="mt-3 text-sm leading-relaxed text-cream/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Flavors() {
  return (
    <section id="flavors" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(248,196,79,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,143,145,0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-script text-3xl text-sunny">Our flavors</span>
            <h2 className="mt-2 text-5xl leading-[0.95] tracking-[-0.04em] text-cream md:text-7xl">
              Pick your
              <br />
              <span className="text-sunny">perfect scoop.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
            A small rotation of signature flavors, each styled to feel premium, playful, and easy to fall in love with.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FLAVORS.map((flavor, index) => (
            <motion.article
              key={flavor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.7 }}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#f8f3ea] text-ink shadow-[0_18px_40px_rgba(0,0,0,0.16)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={flavor.img}
                  alt={flavor.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.38),transparent_52%)]" />
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-ink">
                  {flavor.tag}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold tracking-[-0.03em]">{flavor.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{flavor.text}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70">
                    <Star className="h-4 w-4 text-sunny" />
                    Featured scoop
                  </span>
                  <button
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sunny text-ink transition-transform group-hover:scale-105"
                    aria-label={`Order ${flavor.name}`}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,12,0.98),rgba(15,26,18,0.98))]" />
      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="font-script text-3xl text-sunny">Gallery</span>
          <h2 className="mt-2 text-5xl leading-[0.95] tracking-[-0.04em] text-cream md:text-7xl">
            Designed to
            <br />
            look delicious.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/75 md:text-lg">
            Every corner of the experience is meant to photograph beautifully, from the shop mood to the final palette presentation.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75 }}
            className="overflow-hidden rounded-[34px] border border-white/10 bg-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.2)]"
          >
            <img src={galleryShop} alt="Qeelo shop" className="h-full w-full object-cover" />
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {GALLERY.slice(1).map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.08, duration: 0.75 }}
                className="overflow-hidden rounded-[34px] border border-white/10 bg-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.2)]"
              >
                <img src={item.img} alt={item.title} className="h-64 w-full object-cover md:h-72 lg:h-64" />
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-cream">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/75">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PaletteSection() {
  return (
    <section id="palette" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#162217_0%,#253825_55%,#111b13_100%)]" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-sunny/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-4 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <span className="font-script text-3xl text-sunny">Signature experience</span>
          <h2 className="mt-2 text-5xl leading-[0.95] tracking-[-0.04em] text-cream md:text-7xl">
            The Qeelo
            <br />
            <span className="text-sunny">Palette.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
            A hand-pressed tasting board with four scoops and a cone space in the center - playful, sturdy, and built for a table moment people remember.
          </p>

          <div className="mt-8 grid gap-4">
            {[
              "Four flavors, one beautifully shareable board.",
              "Balanced textures that keep each scoop distinct.",
              "Made for gatherings, celebrations, and camera-ready tables.",
            ].map((point) => (
              <div
                key={point}
                className="rounded-[22px] border border-white/10 bg-white/10 px-5 py-4 text-sm leading-relaxed text-cream/80 backdrop-blur-xl"
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[36px] bg-sunny/10 blur-3xl" />
          <div className="rounded-[36px] border border-white/10 bg-white/10 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <svg viewBox="0 0 560 380" className="w-full">
              <defs>
                <filter id="paletteShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="14" stdDeviation="14" floodOpacity="0.35" />
                </filter>
              </defs>
              <path
                d="M78 190 C 78 78, 210 26, 318 36 C 444 48, 522 122, 510 214 C 498 302, 394 336, 280 326 C 238 322, 222 294, 178 294 C 124 294, 78 268, 78 190 Z"
                fill="#FFF7EB"
                filter="url(#paletteShadow)"
              />
              <circle cx="166" cy="246" r="26" fill="#162217" />
              {[
                { cx: 228, cy: 136, fill: "#eeb7bf" },
                { cx: 324, cy: 112, fill: "#c8e4a8" },
                { cx: 412, cy: 154, fill: "#f8c44f" },
                { cx: 362, cy: 236, fill: "#e6a477" },
              ].map((s, index) => (
                <circle key={index} cx={s.cx} cy={s.cy} r="46" fill={s.fill} />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function Locations() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(248,196,79,0.12),transparent_24%),radial-gradient(circle_at_0%_100%,rgba(255,143,145,0.08),transparent_24%)]" />
      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="mb-12 text-center">
          <span className="font-script text-3xl text-sunny">Find us</span>
          <h2 className="mt-2 text-5xl leading-[0.95] tracking-[-0.04em] text-cream md:text-7xl">
            Come say
            <br />
            <span className="text-sunny">hi.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {LOCATIONS.map((location) => (
            <div
              key={location.name}
              className="rounded-[28px] border border-white/10 bg-[#101b13]/85 p-8 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            >
              <MapPin className="h-8 w-8 text-sunny" />
              <h3 className="mt-4 text-2xl font-bold text-cream">{location.name}</h3>
              <p className="mt-1 text-cream/70">{location.city}</p>
              <div
                className={`mt-5 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] ${
                  location.status === "Now open"
                    ? "bg-sunny text-ink"
                    : "bg-white/10 text-cream/80"
                }`}
              >
                {location.status}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[32px] border border-white/10 bg-white/10 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <h3 className="text-3xl font-bold tracking-[-0.03em] text-cream md:text-4xl">
                Want the quickest path to the scoop?
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cream/75 md:text-base">
                Keep this page open and use the contact details below. If you want, I can also add a WhatsApp button or directions link in the next pass.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="tel:+923000000000"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sunny px-5 py-4 text-sm font-bold text-ink transition-transform hover:scale-[1.01]"
              >
                <Phone className="h-4 w-4" />
                +92 300 000 0000
              </a>
              <a
                href="mailto:hello@qeelo.pk"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-4 text-sm font-bold text-cream transition-all hover:border-sunny/30 hover:bg-white/10"
              >
                hello@qeelo.pk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070f0a] pt-16 pb-10 text-cream/84">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(248,196,79,0.12),transparent_30%)]" />
      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src={logo} alt="Qeelo Ice Cream" className="h-24 w-auto drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)]" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              Handmade in Lahore and served with a little bit of theatre, a little bit of joy, and a lot of cream.
            </p>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.22em] text-sunny">Visit</div>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              MM Alam Road, Gulberg III
              <br />
              Lahore, Pakistan
            </p>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.22em] text-sunny">Contact</div>
            <p className="mt-3 flex items-center gap-2 text-sm text-cream/70">
              <Phone className="h-4 w-4" /> +92 300 000 0000
            </p>
            <p className="mt-2 text-sm text-cream/70">hello@qeelo.pk</p>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.22em] text-sunny">Follow</div>
            <div className="mt-4 flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-cream transition-colors hover:bg-sunny hover:text-ink"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-cream/60 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Qeelo Ice Cream. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-sunny" />
            Made with joy in Lahore
          </div>
        </div>
      </div>
    </footer>
  );
}
