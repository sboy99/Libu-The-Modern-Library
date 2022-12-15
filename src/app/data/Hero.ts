import {
  Square3Stack3DIcon,
  SparklesIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

type Incentive = {
  Icon: typeof Square3Stack3DIcon;
  title: string;
  desc: string;
};

export const Incentatives: Incentive[] = [
  {
    Icon: Square3Stack3DIcon,
    title: `Plenty of Collection`,
    desc: `Accusamus accusantium, sint nisi tempore nostrum dolores maiores laboriosam inventore. Reprehenderit, omnis debitis. Ipsam culpa alias quisquam quas, adipisci dignissimos iusto maiores perferendis nobis.`,
  },
  {
    Icon: SparklesIcon,
    title: `100% fresh and new`,
    desc: `Accusamus accusantium, sint nisi tempore nostrum dolores maiores laboriosam inventore. Reprehenderit, omnis debitis. Ipsam culpa alias quisquam quas, adipisci dignissimos iusto maiores perferendis nobis.`,
  },
  {
    Icon: ArrowPathIcon,
    title: `Available 24X7`,
    desc: `Accusamus accusantium, sint nisi tempore nostrum dolores maiores laboriosam inventore. Reprehenderit, omnis debitis. Ipsam culpa alias quisquam quas, adipisci dignissimos iusto maiores perferendis nobis.`,
  },
];
