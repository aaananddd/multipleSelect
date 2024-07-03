import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
  } from "@headlessui/react";
  import { useState } from "react";
  
  const people = [
    { id: 1, name: "Durward Reynolds" },
    { id: 2, name: "Kenton Towne" },
    { id: 3, name: "Therese Wunsch" },
    { id: 4, name: "Benedict Kessler" },
    { id: 5, name: "Katelyn Rohan" },
  ];
  
  const MultipleValueSelect = () => {
    const [selectedPeople, setSelectedPeople] = useState([people[0], people[1]]);
  
    return (
      <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
        <div className="relative">
          <ListboxButton className="relative w-full cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <span className="block truncate">
              {selectedPeople.map((person) => person.name).join(", ")}
            </span>
          </ListboxButton>
          <ListboxOptions className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {people.map((person) => (
              <ListboxOption
                key={person.id}
                value={person}
                className={({ active, selected }) =>
                  `cursor-pointer select-none relative py-2 pl-10 pr-4 ${
                    active ? "text-blue-900 bg-blue-100" : "text-gray-900"
                  } ${
                    selected ? "font-medium" : "font-normal"
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-semibold" : "font-normal"
                      }`}
                    >
                      {person.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414L9.414 14 7.707 12.293a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l8-8a1 1 0 00-1.414-1.414l-7.293 7.293-1.793-1.793a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l8-8a1 1 0 00-1.414-1.414l-7.293 7.293-1.793-1.793a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l8-8a1 1 0 000-1.414l-7.293 7.293-1.793-1.793a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l8-8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    ) : null}
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    );
  };
  
  export default MultipleValueSelect;
  