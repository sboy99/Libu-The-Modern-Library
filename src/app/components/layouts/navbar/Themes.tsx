import { data } from "../../../data";
import { MoonIcon } from "@heroicons/react/24/solid";
import { ComputerDesktopIcon, SunIcon } from "@heroicons/react/24/outline";
import ThemePallete from "../theme/ThemePallete";
import { useTheme } from "../../../store";
import { useDispatch } from "react-redux";
import { Actions } from "../../../store/features";
import { useState, useEffect } from "react";

const { Themes } = data;

const Theme = () => {
  const LIGHT_THEME_REGEX = /light/i;

  const dispatch = useDispatch();
  const { title, theme: code } = useTheme();
  const [isLightTheme, setIsLightTheme] = useState(
    LIGHT_THEME_REGEX.test(code)
  );

  useEffect(() => {
    setIsLightTheme(LIGHT_THEME_REGEX.test(code));
  }, [code]);

  function setSystemMode() {
    dispatch(Actions.enableSyncWithSystem());
  }

  const theme = Themes.map((theme) => (
    <ThemePallete
      key={theme.title}
      title={theme.title}
      code={theme.code}
      colors={theme.colors}
    />
  ));

  const modeIcon = isLightTheme ? (
    <SunIcon className="h-12 w-12 p-1" />
  ) : (
    <MoonIcon className="h-12 w-12 p-1" />
  );

  return (
    <div className="divider-y">
      {/* Current theme */}
      <div className="flex gap-2 pt-2 pb-4">
        {/* left */}
        <div className="rounded-lg  bg-skin-accent p-2 text-skin-inverted">
          {modeIcon}
        </div>
        {/* right desc */}
        <div className="">
          <h3 className="text-xl font-bold capitalize tracking-tight text-skin-accent">
            {title}
          </h3>
          <p className="text-sm font-medium leading-4 tracking-tight text-skin-muted">
            Select Theme that matchs your Vive
          </p>
        </div>
      </div>

      {/* Change theme */}
      <div className="py-2">
        <h4 className="font-semibold text-skin-base">Select a Theme</h4>
        {/* theme options */}
        <div className="grid grid-cols-2 gap-2 pt-2">{theme}</div>
      </div>

      {/* sync with system */}
      <div className="flex items-center justify-center border-none pt-2">
        <button
          onClick={setSystemMode}
          className="rounded-md border border-skin-base py-1 px-4 text-skin-base hover:bg-skin-muted/50"
        >
          <div className="flex items-center gap-1 font-medium">
            <ComputerDesktopIcon className="h-8 w-8 p-1" />
            Sync with System
          </div>
        </button>
      </div>
    </div>
  );
};

export default Theme;
