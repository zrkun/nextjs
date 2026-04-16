import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  { value: "Next 16", label: "App Router 架构" },
  { value: "React 19", label: "现代组件体验" },
  { value: "HTTPS", label: "证书链路可落地" },
  { value: "Auto Deploy", label: "推送即部署" },
];

const capabilities = [
  {
    eyebrow: "Frontend Core",
    title: "把官网底座搭成可长期演进的现代前端工程",
    description:
      "基于 Next.js App Router、React 19、TypeScript 与 Tailwind CSS 4，既能快速起站，也能保持结构清晰、便于持续迭代。",
  },
  {
    eyebrow: "Component System",
    title: "把 shadcn/ui 组件源码真正沉淀进项目本身",
    description:
      "按钮、卡片等基础组件直接落在项目 components/ui 中，方便你复用、扩展、重构，逐步长成自己的设计系统。",
  },
  {
    eyebrow: "Launch Pipeline",
    title: "把本地开发、自动部署和 HTTPS 连成顺滑的上线链路",
    description:
      "从 git push 触发构建，到 Nginx 反向代理、证书配置与 PM2 运行方式，项目已经为实际部署准备了清晰路径。",
  },
];

const timeline = [
  {
    step: "01",
    title: "Bootstrap",
    description: "从干净模板起步，保留页面、组件、API 与工程化能力。",
  },
  {
    step: "02",
    title: "Compose",
    description: "优先用 shadcn/ui 与项目已有封装拼出官网骨架，再做视觉强化。",
  },
  {
    step: "03",
    title: "Ship",
    description: "通过 post-receive、pnpm build 和 PM2 重启，把改动稳定发到线上。",
  },
];

const foundations = [
  "app/ 负责页面、布局与路由入口",
  "components/ui 负责沉淀可复用组件源码",
  "lib/ 负责工具函数与 API 封装",
  "DEPLOY / CERTIFICATE 文档负责上线链路",
];

const statusItems = ["Git push / deploy", "Nginx SSL / active", "PM2 runtime / ready"];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(63,110,255,0.22),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(0,226,194,0.14),transparent_22%),linear-gradient(180deg,#050816_0%,#08111f_45%,#050816_100%)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(130,160,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(130,160,255,0.08)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(180deg,rgba(255,255,255,0.8),transparent_90%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(77,121,255,0.28),transparent_60%)] blur-3xl" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-20 pt-6 md:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/10 py-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-300/10 text-sm font-semibold tracking-[0.28em] text-cyan-200">
              NX
            </div>
            <div>
              <p className="text-sm font-medium text-white/90">Neon Matrix</p>
              <p className="text-xs tracking-[0.24em] text-white/45 uppercase">Adaptive System Interface</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/60 md:flex">
            <Link href="#capabilities" className="transition hover:text-white">
              能力
            </Link>
            <Link href="#architecture" className="transition hover:text-white">
              架构
            </Link>
            <Link href="#launch" className="transition hover:text-white">
              启动
            </Link>
          </nav>
        </header>

        <div className="grid gap-10 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-18">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-xs tracking-[0.28em] text-cyan-200 uppercase backdrop-blur">
              <span className="size-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.95)]" />
              Next.js production starter
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl leading-none font-semibold tracking-[-0.06em] text-white md:text-7xl">
                为产品官网与企业站点打造
                <span className="block bg-[linear-gradient(90deg,#f7fbff_10%,#8edbff_38%,#7a8cff_72%,#d6f5ff_100%)] bg-clip-text text-transparent">
                  炫酷且可上线的前端底座
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/68 md:text-lg">
                这是一个基于 Next.js、React 19、shadcn/ui 与 Tailwind CSS 4 的现代官网模板。它不只负责展示品牌，还把组件体系、自动部署、HTTPS 接入和基础 API 能力一起准备好了。
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="border border-cyan-300/40 bg-cyan-300/90 text-slate-950 hover:bg-cyan-200">
                <Link href="#launch">开始构建站点</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="#architecture">查看项目结构</Link>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
                <p className="text-xs tracking-[0.24em] text-cyan-200 uppercase">Engineering-ready</p>
                <p className="mt-3 text-sm leading-7 text-white/62">
                  从页面、组件、API 到部署链路都已打底，适合继续往企业官网、产品站或品牌站方向演进。
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
                <p className="text-xs tracking-[0.24em] text-cyan-200 uppercase">Component-owned</p>
                <p className="mt-3 text-sm leading-7 text-white/62">
                  shadcn/ui 组件源码落地项目本身，后续二次封装、样式扩展和设计系统沉淀会更顺手。
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle,rgba(79,70,229,0.24),transparent_56%)] blur-3xl" />
            <Card className="relative overflow-hidden border-white/10 bg-white/[0.05] backdrop-blur-2xl">
              <CardContent className="p-0">
                <div className="border-b border-white/10 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs tracking-[0.28em] text-cyan-200 uppercase">Project Snapshot</p>
                      <p className="mt-2 text-xl font-medium text-white">Next.js Launch Console</p>
                    </div>
                    <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                      Ready to Deploy
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 p-5">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs tracking-[0.22em] text-white/40 uppercase">Stack Pulse</p>
                        <p className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white">4 Layers</p>
                      </div>
                      <p className="rounded-full bg-cyan-400/12 px-3 py-1 text-sm text-cyan-200">UI / API / Deploy / SSL</p>
                    </div>
                    <div className="mt-5 flex h-28 items-end gap-2">
                      {[42, 58, 40, 66, 79, 60, 88, 96, 74, 104, 92, 118].map((height, index) => (
                        <div
                          key={height}
                          className="flex-1 rounded-t-full bg-[linear-gradient(180deg,rgba(139,233,255,0.9),rgba(74,95,255,0.16))] shadow-[0_0_22px_rgba(103,232,249,0.16)]"
                          style={{ height: `${height}%`, animationDelay: `${index * 80}ms` }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs tracking-[0.22em] text-white/40 uppercase">Project Anatomy</p>
                      <div className="mt-4 space-y-3 text-sm text-white/65">
                        <p>App Router 驱动页面结构</p>
                        <p>组件与业务层边界清晰</p>
                        <p>可持续扩展为品牌官网</p>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs tracking-[0.22em] text-white/40 uppercase">Runtime Status</p>
                      <div className="mt-4 space-y-3">
                        {statusItems.map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2 text-sm text-white/72"
                          >
                            <span>{item}</span>
                            <span className="size-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item) => (
            <Card key={item.label} className="border-white/10 bg-white/[0.04] backdrop-blur-xl">
              <CardContent className="space-y-2 p-5">
                <p className="text-3xl font-semibold tracking-[-0.05em] text-white">{item.value}</p>
                <p className="text-sm text-white/55">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="capabilities" className="relative border-y border-white/10 bg-white/[0.025] py-20">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs tracking-[0.28em] text-cyan-200 uppercase">Capability Matrix</p>
            <h2 className="text-3xl leading-tight font-semibold tracking-[-0.05em] text-white md:text-5xl">
              用现代工程能力，把官网从“能看”推进到“能长期维护、能快速上线”。
            </h2>
            <p className="text-base leading-8 text-white/60">
              当前项目不只是一个页面壳子，而是一套兼顾开发体验、视觉扩展、部署闭环与线上可访问性的官网起点。
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <Card
                key={item.title}
                className={index === 0 ? "border-white/10 bg-black/20 backdrop-blur-xl lg:col-span-2" : "border-white/10 bg-black/20 backdrop-blur-xl"}
              >
                <CardContent className="flex h-full flex-col gap-5 p-6 md:p-7">
                  <div className="space-y-3">
                    <p className="text-xs tracking-[0.28em] text-cyan-200 uppercase">{item.eyebrow}</p>
                    <h3 className="max-w-xl text-xl leading-tight font-medium text-white md:text-2xl">{item.title}</h3>
                  </div>
                  <p className="max-w-xl text-sm leading-7 text-white/60">{item.description}</p>
                  <div className="mt-auto h-px w-full bg-[linear-gradient(90deg,rgba(120,226,255,0.5),transparent)]" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="relative py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 md:px-10 lg:grid-cols-[0.96fr_1.04fr] lg:px-12">
          <Card className="border-white/10 bg-white/[0.035] backdrop-blur-xl">
            <CardContent className="space-y-6 p-6 md:p-8">
              <div>
                <p className="text-xs tracking-[0.28em] text-cyan-200 uppercase">Architecture Pulse</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">
                  从组件源码到线上域名，这个项目已经具备完整官网骨架。
                </h2>
              </div>
              <p className="text-sm leading-7 text-white/60">
                你可以在 app/ 中扩展页面，在 components/ui 中沉淀基础组件，在 lib/ 中封装请求与工具方法，同时继续沿用自动部署与 HTTPS 文档把站点推到线上。
              </p>
              <div className="grid gap-3 text-sm text-white/68">
                {foundations.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            {timeline.map((item) => (
              <Card key={item.step} className="border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02]">
                <CardContent className="space-y-6 p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-semibold tracking-[-0.05em] text-white/16">{item.step}</span>
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1 text-xs tracking-[0.24em] text-cyan-100 uppercase">
                      phase
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-medium text-white">{item.title}</h3>
                    <p className="text-sm leading-7 text-white/60">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="launch" className="relative pb-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12">
          <Card className="overflow-hidden border-cyan-300/20 bg-[linear-gradient(135deg,rgba(9,17,31,0.94),rgba(18,34,64,0.92),rgba(5,10,22,0.96))] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_80px_rgba(11,17,32,0.7)]">
            <CardContent className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="space-y-5">
                <p className="text-xs tracking-[0.28em] text-cyan-200 uppercase">Launch Sequence</p>
                <h2 className="max-w-3xl text-3xl leading-tight font-semibold tracking-[-0.05em] text-white md:text-5xl">
                  如果你想要的不是一个空白模板，而是一套已经具备工程能力、部署方案和科技感表达的官网起点，这个项目已经可以直接继续打磨。
                </h2>
                <p className="max-w-2xl text-base leading-8 text-white/62">
                  接下来只需要把你的品牌文案、页面结构和业务模块继续落进去，就能从前端工程模板升级成真正可上线的产品官网。
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-cyan-100">
                  <Link href="mailto:team@neonmatrix.ai">继续定制官网</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="https://nextjs.org/docs" target="_blank">
                    查看技术栈
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
