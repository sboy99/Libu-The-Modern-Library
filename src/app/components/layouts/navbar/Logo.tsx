import { BookOpenIcon } from "@heroicons/react/24/outline";

const Logo = () => {
  return (
    <div className="font-inter flex items-center gap-x-2 text-2xl font-bold text-skin-base">
      <BookOpenIcon className="h-8 w-8 text-skin-accent" /> <span>LIBU</span>
    </div>
  );
};

export default Logo;
