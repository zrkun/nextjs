export {};

declare global {
  interface Window {
    config?: { tokenKey: string; mockLogin?: boolean };
    login?: (mock?: boolean) => Promise<void>;
    removeToken?: (key: string) => void;
    casLogout?: () => void;
    getToken?: (key: string) => string | null | undefined;
  }
}


