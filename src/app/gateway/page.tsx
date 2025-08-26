

import NextImage from 'next/image';
import { Flex } from 'antd';
import HeaderUser from './components/HeaderUser';
import SearchEntry from './components/SearchEntry';
import BotCardItem from './components/BotCardItem';
import ToolCardItem from './components/ToolCardItem';
import styles from './index.module.scss';
import { cookies, headers } from 'next/headers';

type Category = { id: number; name: string; remark?: string };
export const dynamic = 'force-dynamic'; // 避免预渲染阶段执行

export function api(url: string) {
  const base = process.env.API_BASE_URL!; // 例如 https://api.xxx.com
  return fetch(new URL(url, base).toString(), { headers: { 'content-type': 'application/json' } });
}

async function getInitialData(): Promise<{
  toolList: any[];
  botList: { cateName: string; cateDesc?: string; list: any[] }[];
  superAgent: string | undefined;
  categories: Category[];
}> {
  const h = await headers();
  const scheme = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? `${scheme}://${h.get('host')}`;
  const [dictRes, botsRes, toolsRes] = await Promise.all([
    fetch(new URL('/api/gateway/dict-types', base), { next: { revalidate: 300, tags: ['gateway-dict'] } }),
    fetch(new URL('/api/gateway/bots', base),       { next: { revalidate: 300, tags: ['gateway-bots'] } }),
    fetch(new URL('/api/gateway/tools', base),      { next: { revalidate: 300, tags: ['gateway-tools'] } }),
  ]);

  const dict = dictRes.ok ? await dictRes.json() as { agent_catalog: { id: number; name: string; remark?: string }[]; super_agent: { value: string }[] } : { agent_catalog: [], super_agent: [] };
  const bots = botsRes.ok ? await botsRes.json() as { records: any[] } : { records: [] };
  const categories: Category[] = dict.agent_catalog.map(v => ({ id: v.id, name: v.name, remark: v.remark }));
  const botList = bots.records.length ? [{ cateName: '智能体广场', cateDesc: '为校园生活量身打造的工具集', list: bots.records }] : [];
  const toolList: any[] = toolsRes.ok ? await toolsRes.json() : [];
  const superAgent = dict.super_agent?.[0]?.value as string | undefined;

  return { toolList, botList, superAgent, categories };
}

export default async function GatewayPage() {
  const { toolList, botList, superAgent } = await getInitialData();
  const cookieStore = await cookies();
  const isLogin = !!cookieStore.get('token')?.value;
  return (
    <div className="h-full overflow-y-auto overflow-x-hidden">
      <div className={styles.gateway}>
        <Flex justify="space-between" align="center" className="header-wrap">
          <Flex align="center" gap="12px" className="header-logo">
            <NextImage src="/vercel.svg" alt="" width={54} height={54} />
            <span className="w-[4px] h-[4px] rounded-full bg-[#004DA1]"></span>
            <span className="text-[24px] text-[#004DA1] font-[600]">
              AI融合门户
            </span>
          </Flex>
          <Flex align="center" className="header-user" gap="8px">
            <HeaderUser userName={undefined} />
          </Flex>
        </Flex>

        <Flex className="px-[100px] !pt-[86px] main-wrap" vertical>
          <Flex vertical gap="24px" className="default-input">
            <span className="text-[#1D2023] text-[28px] font-[600] leading-[40px] welcome-text">欢迎</span>
            <SearchEntry isLogin={isLogin} superAgent={superAgent} />
          </Flex>

          {botList.length > 0 && botList.map((group, index) => (
            <Flex key={group.cateName} vertical className="w-full">
              <Flex className={` w-full item-wrap ${index === 0 ? '!pt-[90px]' : '!pt-[36px]'}`}>
                <Flex vertical gap="8px" justify="center" align="center" className="w-full">
                  <div className="text-[#0F1D34] text-[24px] font-[600] leading-[22px] item-title">{group.cateName}</div>
                  {group.cateDesc && (
                    <span className="text-[#66768A] text-[14px] leading-[22px]  item-desc">{group.cateDesc}</span>
                  )}
                </Flex>
              </Flex>
              <Flex className="px-[10px] w-full !pt-[26px] item-list" wrap>
                {group.list.map(item => (
                  <div key={item.botId} className="w-1/4 p-2 min-w-[220px]">
                    <BotCardItem item={item} isLogin={isLogin} />
                  </div>
                ))}
              </Flex>
            </Flex>
          ))}

          {toolList.length > 0 && (
            <>
              <Flex className="pt-[36px] w-full item-wrap">
                <Flex vertical gap="8px" justify="center" align="center" className="w-full">
                  <div className="text-[#0F1D34] text-[24px] font-[600] leading-[22px] item-title">热门工具</div>
                  <span className="text-[#66768A] text-[14px] leading-[22px] item-desc">同学们最喜欢的工具</span>
                </Flex>
              </Flex>
              <Flex className="px-[10px] w-full pt-[26px] item-list" wrap>
                {toolList.map(item => (
                  <div key={item.url} className="w-1/4 p-2 min-w-[220px]">
                    <ToolCardItem item={item} isLogin={isLogin} />
                  </div>
                ))}
              </Flex>
            </>
          )}
        </Flex>
      </div>
    </div>
  );
}
