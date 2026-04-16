"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const systemFacts = [
  "Next.js 16 / App Router",
  "React 19 / TypeScript",
  "shadcn/ui / local source",
  "Deploy hook / PM2 / Nginx SSL",
];

const notes = [
  {
    label: "组件层",
    value: "基础 UI 已经沉淀到项目内部，后续复用、扩展和维护都更直接。",
  },
  {
    label: "部署层",
    value: "从 git push 到 HTTPS 访问，当前项目已经具备真实可落地的上线链路。",
  },
  {
    label: "表达层",
    value: "它更适合作为品牌官网与企业站的起点，而不是一次性展示模板。",
  },
];

function ParticleBackground() {
  const [meteors, setMeteors] = useState<Array<{ id: number; top: string; left: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    setMeteors(
      Array.from({ length: 6 }, (_, index) => ({
        id: index,
        top: `${8 + index * 12}%`,
        left: `${58 + (index % 3) * 14}%`,
        delay: `${index * 1.9}s`,
        duration: `${5.5 + (index % 3) * 1.1}s`,
      })),
    );
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.32),transparent_42%)]" />
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          aria-hidden="true"
          className="meteor-line absolute"
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        />
      ))}
    </div>
  );
}

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative isolate min-h-screen bg-[#f5f5f7] text-[#101114]">
      <ParticleBackground />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.62),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.34),rgba(245,245,247,0.72))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-px bg-black/6" />

      <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
        <div
          className={[
            "mx-auto flex w-full max-w-7xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 md:px-6",
            scrolled
              ? "border border-white/70 bg-white/72 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
              : "border border-transparent bg-transparent",
          ].join(" ")}
        >
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full border border-black/8 bg-white/90 text-sm font-semibold tracking-[0.26em] shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
              NX
            </div>
            <div className="leading-tight">
              <p className="text-sm font-medium text-[#101114]">Neon Matrix</p>
              <p className="text-[11px] tracking-[0.24em] text-black/38 uppercase">System Website</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-black/52 md:flex">
            <Link href="#top" className="transition hover:text-black">
              首页
            </Link>
            <Link href="#manifesto" className="transition hover:text-black">
              理念
            </Link>
            <Link href="#system" className="transition hover:text-black">
              架构
            </Link>
            <Link href="#launch" className="transition hover:text-black">
              启动
            </Link>
          </nav>

          <Button
            asChild
            size="sm"
            className="rounded-full border border-black/6 bg-[#111214] px-5 text-white hover:bg-black"
          >
            <Link href="#launch">开始定制</Link>
          </Button>
        </div>
      </header>

      <section
        id="top"
        className="relative z-10 mx-auto flex min-h-[calc(100svh-2rem)] w-full max-w-7xl flex-col px-6 pb-20 pt-10 md:px-10 lg:px-12"
      >
        <div className="grid flex-1 gap-16 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:py-20">
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-black/8 bg-white/80 px-4 py-2 text-[11px] tracking-[0.3em] text-black/56 uppercase shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur">
                <span className="size-2 rounded-full bg-[#0071e3]" />
                Minimal product website base
              </div>

              <div className="space-y-6">
                <h1 className="max-w-5xl text-5xl leading-[0.9] font-semibold tracking-[-0.08em] text-[#101114] md:text-7xl lg:text-[6.4rem]">
                  一个更像成品的官网起点。
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-black/58 md:text-[1.25rem] md:leading-9">
                  这里不是信息堆砌式模板，而是一套已经整理好工程、组件和部署路径的官网基座。
                  视觉更克制，结构更干净，也更适合继续长成真正的品牌站点。
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full border border-[#0071e3] bg-[#0071e3] px-7 text-white hover:bg-[#0077ed]"
                >
                  <Link href="#launch">继续完善首页</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-black/8 bg-white/76 px-7 text-[#101114] hover:bg-white hover:text-[#101114]"
                >
                  <Link href="#system">查看项目结构</Link>
                </Button>
              </div>
            </div>

            <div className="hidden pt-16 lg:block">
              <p className="text-[11px] tracking-[0.28em] text-black/38 uppercase">Scroll to explore</p>
            </div>
          </div>

          <div className="flex items-end justify-end">
            <div className="w-full max-w-md rounded-[2rem] border border-white/70 bg-white/78 p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
              <div className="space-y-2">
                <p className="text-[11px] tracking-[0.3em] text-black/42 uppercase">Current State</p>
                <p className="text-2xl leading-tight font-medium tracking-[-0.05em] text-[#101114]">
                  页面、组件、部署链路都已落位，后续重点该回到内容本身。
                </p>
              </div>

              <div className="mt-6 space-y-3 border-t border-black/6 pt-5">
                {systemFacts.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-black/5 pb-3 text-sm text-black/58 last:border-b-0 last:pb-0"
                  >
                    <span>{item}</span>
                    <span
                      className="size-2 rounded-full"
                      style={{ opacity: 0.9 - index * 0.15, backgroundColor: "#101114" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="manifesto"
        className="relative z-10 border-t border-black/6 py-24 md:py-28"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[0.72fr_1.28fr] lg:px-12">
          <div className="space-y-4">
            <p className="text-[11px] tracking-[0.32em] text-black/42 uppercase">Manifesto</p>
            <h2 className="text-3xl leading-tight font-semibold tracking-[-0.06em] text-[#101114] md:text-5xl">
              好的官网不急着说太多，
              <span className="block text-black/28">而是先把秩序感建立起来。</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {notes.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.75rem] border border-white/65 bg-white/62 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)] backdrop-blur-xl"
              >
                <p className="text-[11px] tracking-[0.28em] text-black/42 uppercase">{item.label}</p>
                <p className="mt-4 text-base leading-8 text-black/58">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="system"
        className="relative z-10 border-t border-black/6 py-24 md:py-28"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
          <div className="space-y-5">
            <p className="text-[11px] tracking-[0.32em] text-black/42 uppercase">Foundation</p>
            <h2 className="max-w-3xl text-3xl leading-tight font-semibold tracking-[-0.06em] text-[#101114] md:text-5xl">
              先看整体结构，再决定哪些模块复用组件，
              <span className="block text-black/28">哪些地方才值得继续扩展。</span>
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-black/58">
            <p>
              页面与布局在 <span className="text-[#101114]">app/</span>，基础组件沉淀在
              <span className="text-[#101114]"> components/ui</span>，工具与封装放在
              <span className="text-[#101114]"> lib/</span>。
            </p>
            <p>
              这意味着首页继续改造时，不需要从零搭工程，而是先从现有组件体系与部署能力出发，把真正重要的品牌表达补齐。
            </p>
          </div>
        </div>
      </section>

      <section
        id="launch"
        className="relative z-10 border-t border-black/6 pb-24 pt-24 md:pb-28 md:pt-28"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 md:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div className="max-w-3xl space-y-5">
            <p className="text-[11px] tracking-[0.32em] text-black/42 uppercase">Launch</p>
            <h2 className="text-3xl leading-tight font-semibold tracking-[-0.06em] text-[#101114] md:text-5xl">
              下一步不必继续加很多区块，
              <span className="block text-black/28">而是把内容、案例和品牌气质放进去。</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full border border-[#0071e3] bg-[#0071e3] px-7 text-white hover:bg-[#0077ed]"
            >
              <Link href="mailto:team@neonmatrix.ai">继续定制官网</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-black/8 bg-white/76 px-7 text-[#101114] hover:bg-white hover:text-[#101114]"
            >
              <Link href="https://nextjs.org/docs" target="_blank">
                查看技术栈
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
