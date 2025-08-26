"use client";

import { Avatar, Button, Dropdown, Flex, Typography, message } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

type Props = { userName?: string };

export default function HeaderUser({ userName }: Props) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(!!window.getToken?.(window.config?.tokenKey as string));
  }, []);

  if (isLogin) {
    return (
      <>
        <Avatar size="large" src="/vercel.svg" />
        <Dropdown
          trigger={["click"]}
          placement="bottomRight"
          menu={{
            items: [{ key: 'logout', label: <span>退出登录</span> }],
            onClick: ({ key }: { key: string }) => {
              if (key === 'logout') {
                window.removeToken?.(window.config?.tokenKey as string);
                setIsLogin(false);
                if (!window.config?.mockLogin) {
                  window.casLogout?.();
                } else {
                  message.success('退出登录成功');
                  window.location.reload();
                }
              }
            }
          }}
        >
          <Flex align="center" gap="8px">
            <Button className="p-0 text-#1D2023" type="text" iconPosition="end" icon={<CaretDownOutlined />}>
              <Typography.Text className="max-w-78px!" ellipsis>
                {userName ?? ''}
              </Typography.Text>
            </Button>
          </Flex>
        </Dropdown>
      </>
    );
  }

  return (
    <Button
      color="default"
      variant="filled"
      onClick={async () => {
        console.log('login');
        // await window.login?.(window.config?.mockLogin);
        // if (window.config?.mockLogin) {
        //   window.location.reload();
        // }
      }}
    >
      未登录
    </Button>
  );
}


