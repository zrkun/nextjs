"use client";

import { Card, Flex, Image, Typography, message } from 'antd';
import type { BotItem } from '@/api/modules/botChat';
import { useEffect, useState } from 'react';

type Props = { item: BotItem; isLogin?: boolean; isMobile?: boolean };

export default function BotCardItem({ item, isLogin, isMobile }: Props) {
  const [login, setLogin] = useState<boolean>(typeof isLogin === 'boolean' ? isLogin : false);
  const [mobile, setMobile] = useState<boolean>(typeof isMobile === 'boolean' ? isMobile : false);

  useEffect(() => {
    if (typeof isLogin === 'boolean') {
      setLogin(isLogin);
      return;
    }
    if (typeof window !== 'undefined') {
      setLogin(!!window.getToken?.(window.config?.tokenKey as string));
    }
  }, [isLogin]);

  useEffect(() => {
    if (typeof isMobile === 'boolean') {
      setMobile(isMobile);
      return;
    }
    if (typeof window === 'undefined') return;
    const compute = () => setMobile(window.innerWidth < 768);
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, [isMobile]);
  return (
    <Card
      hoverable={!mobile}
      onClick={() => {
        if (!login) {
          message.warning('请先登录');
          return;
        }
        if (item.dataSource === 1 && item.authAccessUrl) {
          window.open(item.authAccessUrl, 'agent');
        } else {
          const url = !window.config?.mockLogin ? `/botChat` : `/publicBotChat`;
          window.open(`${url}?botId=${item.botId}`, url);
        }
      }}
    >
      <Flex gap="14px" align={!item?.description ? 'center' : undefined}>
        <Image className="rounded-full" src={item.iconUrl} preview={false} alt="" width={48} height={48} fallback={'/vercel.svg'} />
        <Flex vertical className="flex-1 min-w-0">
          <Typography.Text className="text-#0F1D34 text-16px font-600 leading-20px flex-1 min-w-0" ellipsis>
            {item.botName}
          </Typography.Text>
          <Typography.Paragraph className="text-#66768A text-14px leading-22px mb-0! mt-8px" ellipsis={{ rows: 2 }}>
            {item.description}
          </Typography.Paragraph>
        </Flex>
      </Flex>
    </Card>
  );
}


