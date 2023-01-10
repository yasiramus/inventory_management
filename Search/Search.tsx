import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import { useState } from "react";

const Search = ({ onSearch }: { onSearch: (searchTerm: string) => void }) => {
  // input value state
  const [wordEntered, setWordEntered] = useState("");

  const handleSearch = (text: { target: { value: string } }) => {
    // grabbing the input value
    const searchWord = text.target.value;

    setWordEntered(searchWord);

    onSearch(searchWord);
  };

  return (
    <>
      <div className="rounded-lg sm:w-3/12 w-4/12 h-12 border border-solid border-gray-300 flex gap-x-3 items-center py-3 px-3.5 mt-3 ml-6 ">
        <div className="pointer-events-none">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-[#4B5563]"
            aria-hidden="true"
          />
        </div>

        <input
          type="search"
          value={wordEntered}
          onChange={handleSearch}
          autoComplete="off"
          className="block w-full outline-none text-sm sm:text-sm"
          placeholder="Search code, contact"
        />
      </div>
    </>
  );
};

export default Search;
