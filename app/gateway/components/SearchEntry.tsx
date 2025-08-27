"use client";

import { Input, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

type Props = { isLogin?: boolean; superAgent?: string };

export default function SearchEntry({ isLogin, superAgent }: Props) {
  const [login, setLogin] = useState<boolean>(!!isLogin);
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof isLogin !== 'boolean') {
      setLogin(!!window.getToken?.(window.config?.tokenKey as string));
    }
  }, [isLogin]);
  return (
    <div
      className="w-772px search-input"
      onClick={() => {
        if (!login) {
          message.warning('请先登录');
          return;
        }
        if (superAgent) {
          const url = !window.config?.mockLogin ? `/botChat` : `/publicBotChat`;
          window.open(`${url}?botId=${superAgent}`, url);
        } else {
          message.warning('请先设置超级智能体智能体');
        }
      }}
    >
      <Input
        readOnly
        className="h-56px"
        placeholder="请输入您想要咨询的问题"
        suffix={<SearchOutlined style={{ color: '#004DA1', fontSize: 28 }} />}
      />
    </div>
  );
}


