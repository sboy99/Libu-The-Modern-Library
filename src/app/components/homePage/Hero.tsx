import React from "react";
import { TypoGrapher, UnderlineText, Stripes, Glow } from "../../utilities";
import {
  AcademicCapIcon,
  CodeBracketIcon,
  CommandLineIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
const MainFeat = [
  {
    Icon: AcademicCapIcon,
    title: `Academics`,
  },
  {
    Icon: CommandLineIcon,
    title: `Coding`,
  },
  {
    Icon: CodeBracketIcon,
    title: `Development`,
  },
];

const Hero: React.FC = () => {
  const features = MainFeat.map((feat, indx) => (
    <div
      key={feat.title + indx}
      className="flex items-center gap-x-2 font-lexend font-medium text-skin-muted"
    >
      <feat.Icon className="h-8 w-8" />
      <p>{feat.title}</p>
    </div>
  ));

  return (
    <section itemID="Hero" className="relative z-0 p-4">
      {/* left */}
      <div className="relative p-4 md:p-20">
        <TypoGrapher className="prose-h1:mb-8 prose-h1:text-4xl prose-h4:text-skin-accent-hover prose-p:max-w-xl md:prose-h1:text-5xl">
          <h4>Suitable for every age</h4>
          <h1 className="max-w-lg tracking-tight md:max-w-7xl">
            Books that can feed your Hungry{" "}
            <UnderlineText>Knowledge</UnderlineText>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            facere in similique ducimus aperiam maxime mollitia. Officia.
          </p>
        </TypoGrapher>

        {/* features */}
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
          {features}
        </div>
        {/* actions */}
        <div className="mt-6 flex max-w-xl flex-wrap items-center gap-x-4 gap-y-2 md:mt-12">
          <button className="flex flex-auto items-center justify-center gap-x-2 rounded-md bg-btn-classic py-2 px-6 font-semibold text-skin-inverted outline-none hover:bg-btn-classic-hover">
            Read Now <ChevronRightIcon className="h-5 w-5" />
          </button>
          <button className="relative z-0 flex flex-auto items-center justify-center gap-x-2 rounded-md border border-skin-accent bg-skin-base py-2 px-6 font-semibold text-skin-accent outline-none hover:bg-skin-muted/50">
            Official Blogs <ChevronRightIcon className="h-5 w-5" />
            <Glow
              id="HeroButton"
              className="right-24 w-[170%] translate-x-1/3 "
            />
          </button>
        </div>
      </div>

      {/* decor */}
      <Stripes
        id="HeroStripes"
        className="pointer-events-none absolute inset-x-0 -top-10 -z-10 h-full text-skin-accent/40"
      />
    </section>
  );
};

export default Hero;
