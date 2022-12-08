import { data } from "../../../data";
import { PaintBrushIcon } from "@heroicons/react/24/solid";
import ThemePallete from "../theme/ThemePallete";
import { useTheme } from "../../../store";

const { Themes } = data;

const Theme = () => {
  const { title } = useTheme();
  const theme = Themes.map((theme) => (
    <ThemePallete
      key={theme.title}
      title={theme.title}
      code={theme.code}
      colors={theme.colors}
    />
  ));

  return (
    <div className="divider-y">
      {/* Current theme */}
      <div className="flex gap-2 pt-2 pb-4">
        {/* left */}
        <div className="rounded-lg  bg-skin-accent p-2 text-skin-inverted">
          <PaintBrushIcon className="h-12 w-12" />
        </div>
        {/* right desc */}
        <div className="">
          <h3 className="text-xl font-bold tracking-tight text-skin-accent">
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
    </div>
  );
};

export default Theme;
