// import { TimeWatchIcon, PlanetIcon, MagicStickIcon } from "../../assets/icons";
import {
  GlobeAsiaAustraliaIcon,
  CalendarDaysIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

export type IncentiveType = {
  Icon: typeof SparklesIcon;
  title: string;
  desc: string;
};

export const IncentativeList: Array<IncentiveType> = [
  {
    Icon: GlobeAsiaAustraliaIcon,
    title: `Universal books collection`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolores repudiandae numquam perferendis voluptatem doloribus.`,
  },
  {
    Icon: CalendarDaysIcon,
    title: `Extended borrowing time`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error tempora vero quos.`,
  },
  {
    Icon: SparklesIcon,
    title: `New and Latest Publications`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate temporibus alias ratione omnis porro aut laboriosam pariatur?`,
  },
];
