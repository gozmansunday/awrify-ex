"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import qs from "query-string";

// Local imports
import useDebounce from "@/hooks/useDebounce";
import { Input } from "./ui/input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 100);

  useEffect(() => {
    const query = {
      title: debouncedValue
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query: query,
    });

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div>
      <Input
        className="max-w-xl h-12 px-4 rounded-xl bg-dark border-none focus-visible:ring-0"
        placeholder="Search for a song."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};

export default SearchInput;