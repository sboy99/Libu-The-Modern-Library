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
        <div className="pointer-events-none absolute inset-2 pl-2 text-light-text dark:text-dark-text">
          <MagnifyingGlassIcon className="h-6 w-6" />
        </div>
        <Combobox.Input
          ref={focus}
          placeholder="Search books"
          className={`w-full rounded-full border-none bg-light-bg-deep px-4 py-2 pl-12 text-light-text placeholder:text-placeholder-light focus:ring-light-ring dark:bg-dark-bg dark:text-dark-text dark:placeholder:text-placeholder-dark  dark:focus:ring-dark-ring`}
          onChange={(event) => setQuery(event.target.value)}
        />
        {/* Key suggesion */}
        <div className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-dark-bg px-3 py-0.5 font-medium text-light-bg-deep dark:bg-light-bg-deep dark:text-dark-bg-deep sm:block">
          ctrl + /
        </div>
      </div>
      <Combobox.Options
        className={`absolute inset-x-0 top-full mt-2  rounded-lg bg-light-bg p-4 text-light-text dark:bg-dark-bg dark:text-dark-text md:mt-4`}
      >
        {filteredPeople.length > 0 ? (
          filteredPeople.map((person) => (
            <Combobox.Option key={person} value={person}>
              {({ active }) => (
                <div
                  className={`cursor-pointer py-2 px-4 ${
                    active &&
                    `rounded-md bg-light-bg-accent font-semibold text-dark-text dark:bg-dark-bg-accent dark:text-light-text `
                  }`}
                >
                  {person}
                </div>
              )}
            </Combobox.Option>
          ))
        ) : (
          <div className="flex w-full items-center justify-center font-medium capitalize text-placeholder-light dark:text-placeholder-dark ">
            No Options Matched
          </div>
        )}
      </Combobox.Options>
    </Combobox>
  );
};
export default Searchbar;
