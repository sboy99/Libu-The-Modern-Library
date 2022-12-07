import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../../../store";
import { Actions } from "../../../store/features";
import { useDispatch } from "react-redux";

const ToggleTheme: React.FC = (): JSX.Element => {
  const { darkMode } = useTheme();
  const dispatch = useDispatch();

  const handleChange = (): void => {
    dispatch(Actions.toggleTheme());
  };
  const icon = darkMode ? (
    <MoonIcon className="h-4 w-4 text-amber-400 sm:h-5 sm:w-5" />
  ) : (
    <SunIcon className="h-4 w-4 text-cyan-500 sm:h-5 sm:w-5" />
  );

  return (
    <button
      type="button"
      onClick={handleChange}
      className="peer relative inline-flex cursor-pointer items-center"
    >
      <div
        className={`relative h-4 w-11 rounded-full border-skin-base bg-skin-muted sm:h-5 sm:w-12`}
      >
        <span
          className={`absolute top-1/2 left-0 -translate-y-1/2 rounded-full border border-skin-accent bg-skin-base p-1 transition-all sm:-left-1 ${
            darkMode && `!translate-x-5 sm:!translate-x-7`
          } `}
        >
          {icon}
        </span>
      </div>
    </button>
  );
};

export default ToggleTheme;
