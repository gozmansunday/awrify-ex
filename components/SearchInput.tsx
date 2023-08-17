"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Local imports
import useDebounce from "@/hooks/useDebounce";
import { Input } from "./ui/input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debounced = useDebounce<string>(value, 500);

  return (
    <div>
      <Input />
    </div>
  );
};

export default SearchInput;