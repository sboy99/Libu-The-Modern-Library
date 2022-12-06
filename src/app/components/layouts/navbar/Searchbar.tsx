import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { useState, useRef, useEffect } from "react";
import { Combobox } from "@headlessui/react";

const people = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
];

const Searchbar: React.FC = (): JSX.Element => {
  const focus = useRef<HTMLInputElement>(null);
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (
        focus.current &&
        event.key === "/" &&
        (event.metaKey || event.ctrlKey)
      ) {
        focus.current.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <Combobox
      as="div"
      className={`relative mx-auto w-full max-w-2xl md:px-4`}
      onChange={setSelectedPerson}
    >
      <div className="relative">
        {/* Magnifying Glass */}
        <div className="pointer-events-none absolute inset-2 pl-2 text-slate-700 dark:text-slate-100">
          <MagnifyingGlassIcon className="h-6 w-6" />
        </div>
        <Combobox.Input
          ref={focus}
          placeholder="Search books"
          className={`w-full rounded-full border-none bg-slate-200/50 px-4 py-2 pl-12 text-slate-700 placeholder:text-slate-500 focus:ring-slate-50 dark:bg-slate-700 dark:text-slate-200 placeholder:dark:text-slate-400 dark:focus:ring-slate-500/50`}
          onChange={(event) => setQuery(event.target.value)}
        />
        {/* Key suggesion */}
        <div className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-slate-700 px-3 py-0.5 font-medium text-slate-200 dark:bg-slate-200 dark:text-slate-700 sm:block">
          ctrl + /
        </div>
      </div>
      <Combobox.Options
        className={`absolute inset-x-0 top-full mt-2  rounded-lg bg-white p-4 text-slate-700 dark:bg-slate-700 dark:text-slate-200 md:mt-4`}
      >
        {filteredPeople.length > 0 ? (
          filteredPeople.map((person) => (
            <Combobox.Option key={person} value={person}>
              {({ active }) => (
                <div
                  className={`cursor-pointer py-2 px-4 ${
                    active &&
                    `rounded-md bg-cyan-500 font-semibold text-white dark:bg-yellow-400 dark:text-slate-700 `
                  }`}
                >
                  {person}
                </div>
              )}
            </Combobox.Option>
          ))
        ) : (
          <div className="flex w-full items-center justify-center font-medium capitalize text-slate-500 dark:text-slate-400">
            No Options Matched
          </div>
        )}
      </Combobox.Options>
    </Combobox>
  );
};
export default Searchbar;
