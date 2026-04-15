"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { apiRequest } from "@/lib/api";

type HealthData = {
  status: "ok";
  timestamp: string;
};

export default function HomePage() {
  const [health, setHealth] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchHealth() {
    try {
      setLoading(true);
      setError(null);
      const data = await apiRequest<HealthData>("/api/health");
      setHealth(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : "请求失败";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void fetchHealth();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10">
      <section className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Next.js Clean Template</h1>
          <p className="text-sm text-slate-600 md:text-base">
            这是一个已清理的基础模板
            4 和 shadcn/ui。
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>你可以从这里开始</CardTitle>
            <CardDescription>先扩展页面，再抽象业务模块。</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>1. 在 `app/` 下添加页面与布局</p>
            <p>2. 在 `components/` 中组织通用组件</p>
            <p>3. 在 `lib/` 封装业务逻辑与请求层（已提供 `lib/api`）</p>
            <p>4. 可访问 `/api/health` 验证 API 模块已就绪</p>
            <div className="rounded-md border border-slate-200 bg-white p-3 text-sm">
              {loading && <p>健康检查中...</p>}
              {!loading && error && <p className="text-red-600">请求失败：{error}</p>}
              {!loading && !error && health && (
                <div className="space-y-1">
                  <p>API 状态：{health.status}</p>
                  <p>返回时间：{new Date(health.timestamp).toLocaleString()}</p>
                </div>
              )}
              <div className="pt-2">
                <Button size="sm" variant="outline" onClick={() => void fetchHealth()}>
                  重新请求 /api/health
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <Link href="https://nextjs.org/docs" target="_blank">
                  Next.js Docs
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://ui.shadcn.com/docs" target="_blank">
                  shadcn/ui Docs
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
