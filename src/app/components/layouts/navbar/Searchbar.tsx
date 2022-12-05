import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { useState } from "react";
import { Combobox } from "@headlessui/react";

const people = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
];

const Searchbar: React.FC = (): JSX.Element => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      as="div"
      className={`relative mx-auto w-full max-w-2xl px-4`}
      onChange={setSelectedPerson}
    >
      <div className="relative">
        <div className="pointer-events-none absolute inset-2 pl-2 text-slate-700 dark:text-slate-100">
          <MagnifyingGlassIcon className="h-6 w-6" />
        </div>
        <Combobox.Input
          placeholder="Search books"
          className={`w-full rounded-full border-none bg-slate-200/50 px-4 py-2 pl-12 text-slate-700 placeholder:text-slate-500 focus:ring-slate-50 dark:bg-slate-700 dark:text-slate-200 placeholder:dark:text-slate-400 dark:focus:ring-slate-500/50`}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <Combobox.Options
        className={`absolute inset-x-0 top-full my-4 rounded-lg bg-white p-4 text-slate-700 dark:bg-slate-700 dark:text-slate-200`}
      >
        {filteredPeople.map((person) => (
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
        ))}
      </Combobox.Options>
    </Combobox>
  );
};
export default Searchbar;
