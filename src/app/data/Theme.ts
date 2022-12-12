export const validThemes = ["defaultLight", "defaultDark"];
export const validNames = ["Default Light", "Default Dark"];

export type ThemeType = {
  title: string;
  code: string;
  colors: {
    bg: string;
    text: string;
    textMuted: string;
    button: string;
  };
};

export const Themes: Array<ThemeType> = [
  {
    title: `Default Light`,
    code: `defaultLight`,
    colors: {
      bg: "#ffffff",
      text: "#1f2937",
      textMuted: "#4b5563",
      button: "#06b6d4",
    },
  },
  {
    title: `Default Dark`,
    code: `defaultDark`,
    colors: {
      bg: "#1e293b",
      text: "#ffffff",
      textMuted: "#e2e8f0",
      button: "#facc15",
    },
  },
];
