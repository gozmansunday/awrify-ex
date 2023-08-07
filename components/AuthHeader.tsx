import Link from "next/link";
import { GiCompactDisc } from "react-icons/gi";

const AuthHeader = () => {
  return (
    <header className="bg-darkest py-4">
      <div className="container mx-auto px-4 flex">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-lightest rounded-full p-1">
            <GiCompactDisc className="text-darkest text-3xl md:text-4xl" />
          </div>
          <h2 className="font-clash font-bold text-xl md:text-2xl">Awrify</h2>
        </Link>
      </div>
    </header>
  );
};

export default AuthHeader;