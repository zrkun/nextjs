import { NextResponse } from 'next/server';

export const revalidate = 300;

export async function GET() {
  const agent_catalog = [
    { id: 1, name: '学习辅助', remark: '学习工具与资料', value: 0 },
    { id: 2, name: '校园服务', remark: '校务相关服务', value: 0 }
  ];
  const super_agent = [{ value: 'bot-101' }];
  return NextResponse.json({ agent_catalog, super_agent });
}


