import { BookOpenIcon } from "@heroicons/react/24/outline";

const Logo = () => {
  return (
    <div className="flex items-center gap-x-2 font-inter text-2xl font-bold text-slate-700 dark:text-slate-200">
      <BookOpenIcon className="h-8 w-8 text-cyan-500 dark:text-yellow-400" />{" "}
      <span>LIBU</span>
    </div>
  );
};

export default Logo;
