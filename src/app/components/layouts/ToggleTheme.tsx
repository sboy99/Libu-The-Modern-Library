import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../../store";
import { Actions } from "../../store/features";
import { useDispatch } from "react-redux";

const ToggleTheme: React.FC = (): JSX.Element => {
  const { darkMode } = useTheme();
  const dispatch = useDispatch();

  const handleChange = (): void => {
    dispatch(Actions.toggleTheme());
  };
  const icon = darkMode ? (
    <MoonIcon className="h-4 w-4 text-amber-400" />
  ) : (
    <SunIcon className="h-4 w-4 text-sky-500" />
  );

  return (
    <button
      type="button"
      onClick={handleChange}
      className="peer relative inline-flex cursor-pointer items-center"
    >
      <div
        className={`relative h-8 w-14 rounded-full border-white bg-slate-200 dark:border-gray-600 dark:bg-slate-600`}
      >
        <span
          className={`absolute top-1/2 left-[2px] -translate-y-1/2 rounded-full border border-gray-300 bg-white p-1 transition-all ${
            darkMode && `!translate-x-full`
          } `}
        >
          {icon}
        </span>
      </div>
    </button>
  );
};

export default ToggleTheme;
