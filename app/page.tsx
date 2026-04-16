import Link from "next/link";
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
    value: "基础 UI 直接沉淀在项目里，后续复用、扩展和重构都更从容。",
  },
  {
    label: "部署层",
    value: "从 git push 到 HTTPS 域名访问，当前项目已经有可落地的上线路径。",
  },
  {
    label: "定位",
    value: "它不是展示型模板，而是适合继续长成产品官网与企业站的稳定起点。",
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f5f7] text-[#101114]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.7),rgba(245,245,247,0.9))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-black/6" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-6 md:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-black/6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-2xl border border-black/8 bg-white/90 text-sm font-semibold tracking-[0.28em] text-[#101114] shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
              NX
            </div>
            <div>
              <p className="text-sm font-medium text-[#101114]">Neon Matrix</p>
              <p className="text-xs tracking-[0.24em] text-black/38 uppercase">Adaptive System Interface</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-black/52 md:flex">
            <Link href="#manifesto" className="transition hover:text-black">
              宣言
            </Link>
            <Link href="#system" className="transition hover:text-black">
              系统
            </Link>
            <Link href="#launch" className="transition hover:text-black">
              启动
            </Link>
          </nav>
        </header>

        <div className="grid flex-1 gap-20 py-20 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:py-28">
          <div className="flex flex-col justify-end">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-black/8 bg-white/72 px-4 py-2 text-[11px] tracking-[0.32em] text-black/62 uppercase backdrop-blur">
                <span className="size-2 rounded-full bg-black/65" />
                Product website framework
              </div>

              <div className="space-y-8">
                <h1 className="max-w-5xl text-6xl leading-[0.9] font-semibold tracking-[-0.08em] text-[#101114] md:text-8xl">
                  这不是一个
                  <span className="block text-black/22">“看起来像官网”</span>
                  的模板。
                </h1>

                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <p className="max-w-sm text-sm leading-7 text-black/34 uppercase">
                    A quiet framework for teams that want the site itself to feel considered.
                  </p>
                  <p className="max-w-xl text-base leading-8 text-black/62 md:text-lg">
                    它更像一套经过收束处理的前端起点。Next.js、React 19、shadcn/ui、
                    自动部署、HTTPS 和基础 API 已经打底，你要做的不是重新搭工程，而是把真正的品牌内容放进去。
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="border border-black/6 bg-[#111214] text-white hover:bg-black"
                >
                  <Link href="#launch">继续打磨这个站</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-black/8 bg-white/72 text-[#101114] hover:bg-white hover:text-[#101114]"
                >
                  <Link href="#system">看项目怎么构成</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-end">
            <div className="w-full max-w-md space-y-6 rounded-[2rem] border border-black/8 bg-white/82 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <div className="space-y-2">
                <p className="text-[11px] tracking-[0.32em] text-black/42 uppercase">System Presence</p>
                <p className="text-2xl font-medium tracking-[-0.04em] text-[#101114]">
                  结构清楚，气质克制，直接可上线。
                </p>
              </div>

              <div className="space-y-3 border-t border-black/6 pt-5">
                {systemFacts.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-black/5 pb-3 text-sm text-black/58 last:border-b-0 last:pb-0"
                  >
                    <span>{item}</span>
                    <span className="size-2 rounded-full bg-black/70" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="manifesto" className="relative border-t border-black/6 py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[0.72fr_1.28fr] lg:px-12">
          <div className="space-y-4">
            <p className="text-[11px] tracking-[0.32em] text-black/42 uppercase">Manifesto</p>
            <h2 className="text-3xl leading-tight font-semibold tracking-[-0.06em] text-[#101114] md:text-5xl">
              好的官网不是把信息塞满，
              <span className="block text-black/26">而是让秩序先出现。</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {notes.map((item) => (
              <div key={item.label} className="space-y-4 border-t border-black/8 pt-5">
                <p className="text-[11px] tracking-[0.28em] text-black/42 uppercase">{item.label}</p>
                <p className="text-base leading-8 text-black/58">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="system" className="relative border-t border-black/6 py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
          <div className="space-y-5">
            <p className="text-[11px] tracking-[0.32em] text-black/42 uppercase">Foundation</p>
            <h2 className="max-w-3xl text-3xl leading-tight font-semibold tracking-[-0.06em] text-[#101114] md:text-5xl">
              从组件源码到服务器配置，
              <span className="block text-black/26">这个起点已经比模板更进一步。</span>
            </h2>
          </div>

          <div className="space-y-4 text-base leading-8 text-black/58">
            <p>
              页面和布局在 <span className="text-[#101114]">app/</span>，
              基础组件在 <span className="text-[#101114]">components/ui</span>，
              工具和 API 封装在 <span className="text-[#101114]">lib/</span>。
            </p>
            <p>
              部署文档已经覆盖裸仓库、post-receive、PM2、Nginx 反向代理与 HTTPS 证书配置。它不是抽象的最佳实践，而是当前项目已经存在的真实路径。
            </p>
          </div>
        </div>
      </section>

      <section id="launch" className="relative border-t border-black/6 pb-24 pt-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 md:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div className="max-w-3xl space-y-5">
            <p className="text-[11px] tracking-[0.32em] text-black/42 uppercase">Launch</p>
            <h2 className="text-3xl leading-tight font-semibold tracking-[-0.06em] text-[#101114] md:text-5xl">
              现在更有价值的事，
              <span className="block text-black/26">不是继续堆模块，而是把你的内容放进来。</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="border border-black/6 bg-[#111214] text-white hover:bg-black"
            >
              <Link href="mailto:team@neonmatrix.ai">继续定制官网</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-black/8 bg-white/72 text-[#101114] hover:bg-white hover:text-[#101114]"
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
