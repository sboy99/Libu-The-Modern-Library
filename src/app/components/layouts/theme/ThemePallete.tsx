import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useDispatch } from "react-redux";

import { ThemeType } from "../../../data/Theme";
import { useTheme } from "../../../store";
import { Actions } from "../../../store/features";

const ThemePallete: React.FC<ThemeType> = ({ title, colors, code }) => {
  const dispatch = useDispatch();

  function setTheme() {
    dispatch(Actions.diableSyncWithSystem());
    dispatch(Actions.setTheme({ code, title }));
  }

  return (
    <button
      onClick={setTheme}
      className="flex w-full flex-col gap-y-1 outline-none focus:ring-skin-base "
    >
      {/* color */}
      <div className=" w-full overflow-hidden rounded-lg border-2 border-skin-base">
        <ColorPallete code={code} title={title} colors={colors} />
      </div>
      {/* desc */}
      <p className="ml-1 flex items-center whitespace-nowrap text-sm font-medium capitalize text-skin-muted">
        {title}
      </p>
    </button>
  );
};

export default ThemePallete;

const ColorPallete: React.FC<ThemeType> = ({ colors, code }) => {
  const { theme } = useTheme();
  const { bg, button, text, textMuted } = colors;
  return (
    <div
      className={`relative h-[4rem] w-full rounded-lg p-2`}
      style={{ backgroundColor: bg }}
    >
      {code === theme && (
        <span className="absolute top-0 right-0 p-1 text-skin-base">
          <CheckCircleIcon className="h-6 w-6" />
        </span>
      )}
      {/* text */}
      <div
        className="h-3 w-16 rounded-full"
        style={{ backgroundColor: text }}
      ></div>
      {/* paragraph  */}
      <div className="mt-[0.35rem] flex items-center gap-1">
        <p
          className="h-[0.3rem] w-12 rounded-full"
          style={{ backgroundColor: textMuted }}
        ></p>
        <p
          className="h-[0.3rem] w-6 rounded-full"
          style={{ backgroundColor: textMuted }}
        ></p>
      </div>
      <p
        className="mt-1 h-[0.3rem] w-20 rounded-full"
        style={{ backgroundColor: textMuted }}
      ></p>
      {/* button */}
      <div
        className="mt-[0.35rem] h-3 w-7 rounded-full"
        style={{ backgroundColor: button }}
      ></div>
    </div>
  );
};
