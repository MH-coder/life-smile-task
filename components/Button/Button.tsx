// React Imports
import { ReactNode } from "react";

// Framwork Imports
import Link from "next/link";

type Props = {
  link?: string;
  clickHandler?: () => void;
  children: ReactNode;
  disabled?: boolean;
};

const LinkButton = ({
  link = undefined,
  clickHandler,
  children,
  disabled = false,
}: Props) => {
  return link !== undefined ? (
    <Link
      href={{ pathname: link }}
      className="bg-amber-600 px-8 py-4 rounded-full text-white max-w-fit"
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={clickHandler}
      className="bg-amber-600 px-8 py-4 rounded-full text-white max-w-fit disabled:bg-gray-500"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default LinkButton;
