export type BotItem = {
  botId: string;
  typeId: number;
  iconUrl: string;
  description?: string;
  botName: string;
  dataSource?: number;
  authAccessUrl?: string;
};

export type BotListByTypeParams = {
  page_index?: number;
  page_size?: number;
  typeId?: number;
};

export async function botListByType(_: BotListByTypeParams): Promise<{ records: BotItem[] }> {
  void _; // mark as used to satisfy linter for unused param in mock
  return { records: [] };
}

export type DictTypesParams = {
  types: Array<'agent_catalog' | 'super_agent'>;
};

export type AgentCatalogItem = {
  id: number;
  name: string;
  remark?: string;
  value?: number;
};

export type SuperAgentItem = {
  value: string;
};

export async function dictTypes(_: DictTypesParams): Promise<{ agent_catalog: AgentCatalogItem[]; super_agent: SuperAgentItem[] }> {
  void _; // mark as used to satisfy linter
  return { agent_catalog: [], super_agent: [] };
}

export async function getUserInfo(): Promise<{ userName: string; name: string; userRoleType: number }> {
  return { userName: "", name: "", userRoleType: 0 };
}

import type { INavigationListItem } from './admin';

export async function navigaitonList(): Promise<INavigationListItem[]> {
  return [];
}


