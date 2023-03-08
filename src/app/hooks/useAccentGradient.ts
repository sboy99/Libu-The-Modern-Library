import colors from 'tailwindcss/colors';
import { useTheme } from '../store';

interface accentGrad {
  from: string;
  to: string;
}

export const useAccentGradient = (): accentGrad => {
  const { theme } = useTheme();
  let from = ``;
  let to = ``;

  if (theme === `defaultLight`) {
    from = colors.cyan[500];
    to = colors.cyan[700];
  }
  if (theme === `defaultDark`) {
    from = colors.yellow[300];
    to = colors.yellow[400];
  }

  return { from, to };
};
