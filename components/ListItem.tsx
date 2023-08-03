"use client";

import { useRouter } from "next/navigation";

interface Props {
  image: string;
  name: string;
  href: string;
}

const ListItem = ({ image, name, href }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    // Add auth before push
    router.push(href);
  };

  return (
    <div>
      
    </div>
  );
};

export default ListItem;