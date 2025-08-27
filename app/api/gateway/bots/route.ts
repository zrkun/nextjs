import { NextResponse } from 'next/server';

export const revalidate = 300;

export async function GET() {
  const records = [
    { botId: 'bot-101', typeId: 1, iconUrl: '/vercel.svg', botName: '学习助手', description: '课程问答与资料推荐' },
    { botId: 'bot-202', typeId: 2, iconUrl: '/vercel.svg', botName: '办事向导', description: '校园办事流程咨询' }
  ];
  return NextResponse.json({ records });
}


