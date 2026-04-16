import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  { value: "12ms", label: "边缘响应" },
  { value: "99.98%", label: "服务可用性" },
  { value: "48h", label: "接入上线周期" },
  { value: "3.4x", label: "自动化效率提升" },
];

const capabilities = [
  {
    eyebrow: "Signal Mesh",
    title: "把实时数据流变成可决策的行动面板",
    description:
      "统一采集设备、业务系统与用户事件，自动完成归并、标注与风险提示，让监控与调度不再割裂。",
  },
  {
    eyebrow: "Ops Intelligence",
    title: "把复杂操作链压缩成可解释的自动化流程",
    description:
      "通过规则、触发器与编排节点，把重复动作收束成一个低延迟、可追踪、可回滚的执行系统。",
  },
  {
    eyebrow: "Secure Runtime",
    title: "把关键基础设施跑在可验证的安全边界里",
    description:
      "从身份、审计到变更记录，所有关键节点均可追踪，适合高要求的企业官网与平台级产品叙事。",
  },
];

const timeline = [
  {
    step: "01",
    title: "Blueprint",
    description: "抽取核心业务链路，确定页面叙事、模块优先级与组件映射。",
  },
  {
    step: "02",
    title: "Compose",
    description: "优先用 shadcn/ui 现有组件拼出骨架，再做品牌化和科技感强化。",
  },
  {
    step: "03",
    title: "Launch",
    description: "补齐响应式、状态反馈与关键 CTA，让官网既能展示，也能转化。",
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(63,110,255,0.22),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(0,226,194,0.14),transparent_22%),linear-gradient(180deg,#050816_0%,#08111f_45%,#050816_100%)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(130,160,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(130,160,255,0.08)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(180deg,rgba(255,255,255,0.8),transparent_90%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(77,121,255,0.28),transparent_60%)] blur-3xl" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-6 md:px-10 lg:px-12">
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

        <div className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-xs tracking-[0.28em] text-cyan-200 uppercase backdrop-blur">
              <span className="size-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.95)]" />
              Future-grade digital infrastructure
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl leading-none font-semibold tracking-[-0.06em] text-white md:text-7xl">
                为高速增长团队打造
                <span className="block bg-[linear-gradient(90deg,#f7fbff_10%,#8edbff_38%,#7a8cff_72%,#d6f5ff_100%)] bg-clip-text text-transparent">
                  科技感强烈的数字门面
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/68 md:text-lg">
                我们把官网做成一块可运行的产品界面，不只是“展示品牌”，而是让访客在第一屏就感受到系统能力、速度、秩序与可信度。
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="border border-cyan-300/40 bg-cyan-300/90 text-slate-950 hover:bg-cyan-200">
                <Link href="#launch">开始构建官网</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="#capabilities">查看系统能力</Link>
              </Button>
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((item) => (
                <Card key={item.label} className="border-white/10 bg-white/[0.04] backdrop-blur-xl">
                  <CardContent className="space-y-2 p-5">
                    <p className="text-3xl font-semibold tracking-[-0.05em] text-white">{item.value}</p>
                    <p className="text-sm text-white/55">{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle,rgba(79,70,229,0.24),transparent_56%)] blur-3xl" />
            <Card className="relative overflow-hidden border-white/10 bg-white/[0.05] backdrop-blur-2xl">
              <CardContent className="p-0">
                <div className="border-b border-white/10 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs tracking-[0.28em] text-cyan-200 uppercase">Live Control Surface</p>
                      <p className="mt-2 text-xl font-medium text-white">Neural Operations Console</p>
                    </div>
                    <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                      System Stable
                    </div>
                  </div>
                </div>

                <div className="space-y-6 p-5">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs tracking-[0.22em] text-white/40 uppercase">Traffic Pulse</p>
                        <p className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white">284K</p>
                      </div>
                      <p className="rounded-full bg-cyan-400/12 px-3 py-1 text-sm text-cyan-200">+18.4% today</p>
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

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs tracking-[0.22em] text-white/40 uppercase">Latency Mesh</p>
                      <div className="mt-4 flex items-center gap-3">
                        <div className="size-24 rounded-full border border-cyan-300/20 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(140,219,255,0.18),rgba(72,89,255,0.95),rgba(140,219,255,0.18))] p-2">
                          <div className="flex size-full items-center justify-center rounded-full bg-[#09111f] text-2xl font-semibold text-white">
                            12
                          </div>
                        </div>
                        <div className="space-y-2 text-sm text-white/60">
                          <p>全球边缘节点动态调度</p>
                          <p>平均回包低于行业基线</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs tracking-[0.22em] text-white/40 uppercase">Security Layer</p>
                      <div className="mt-4 space-y-3">
                        {["Policy sync / 100%", "Audit trail / live", "Fallback routes / ready"].map((item) => (
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
      </section>

      <section id="capabilities" className="relative border-y border-white/10 bg-white/[0.025] py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 md:px-10 lg:grid-cols-[0.72fr_1fr] lg:px-12">
          <div className="space-y-4">
            <p className="text-xs tracking-[0.28em] text-cyan-200 uppercase">Capability Matrix</p>
            <h2 className="text-3xl leading-tight font-semibold tracking-[-0.05em] text-white md:text-5xl">
              用系统化组件把复杂官网做得更锋利、更可信。
            </h2>
            <p className="max-w-xl text-base leading-8 text-white/60">
              页面不是堆叠模块，而是一套经过节奏控制的数字界面。每个区域都从清晰的信息密度和可复用组件开始，再叠加品牌语言。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {capabilities.map((item) => (
              <Card key={item.title} className="border-white/10 bg-black/20 backdrop-blur-xl">
                <CardContent className="flex h-full flex-col gap-5 p-6">
                  <div className="space-y-3">
                    <p className="text-xs tracking-[0.28em] text-cyan-200 uppercase">{item.eyebrow}</p>
                    <h3 className="text-xl leading-tight font-medium text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-7 text-white/60">{item.description}</p>
                  <div className="mt-auto h-px w-full bg-[linear-gradient(90deg,rgba(120,226,255,0.5),transparent)]" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="relative py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 md:px-10 lg:grid-cols-[0.84fr_1.16fr] lg:px-12">
          <Card className="border-white/10 bg-white/[0.035] backdrop-blur-xl">
            <CardContent className="space-y-6 p-6">
              <div>
                <p className="text-xs tracking-[0.28em] text-cyan-200 uppercase">Architecture Pulse</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">从第一屏到转化链路，全站像一个操作系统。</h2>
              </div>
              <p className="text-sm leading-7 text-white/60">
                我们会先把页面拆成可组合模块，再优先映射到 shadcn/ui 的基础组件层，例如
                Card、Tabs、Dialog、Table、Alert、Skeleton 等，最后再补充品牌化细节与高级背景效果。
              </p>
              <div className="grid gap-3 text-sm text-white/68">
                {[
                  "Hero 负责品牌冲击与主 CTA",
                  "Capability 区负责说明产品价值",
                  "Process 区负责建立实现可信度",
                  "Launch 区负责承接转化与下一步动作",
                ].map((item) => (
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
                  如果你想要的不是一个普通官网，而是一套能体现系统能力的数字界面，我们可以直接开工。
                </h2>
                <p className="max-w-2xl text-base leading-8 text-white/62">
                  先确定品牌语调、页面骨架和 shadcn/ui 组件映射，再把视觉系统、动效节奏和转化入口一起落进代码。
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-cyan-100">
                  <Link href="mailto:team@neonmatrix.ai">预约方案评估</Link>
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
