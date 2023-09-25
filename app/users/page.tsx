"use client";
// React Imports
import { useState } from "react";

// Framework Imports
import Image from "next/image";

// Third-Party Imports
import { useDebounce } from "use-debounce";

// Project Imports
import LinkButton from "@/components/Button/Button";
import { useUsersQuery } from "@/utils/useUsersQuery";
import spinner from "@/public/spinner.svg";

// Types
import { User } from "@/types/types";

const User = () => {
  // STATES
  const [pageNumber, setPageNumber] = useState(1);
  const [searchUser, setSearchUser] = useState("");

  //   Debouncing
  const [debouncedSearchValue] = useDebounce(searchUser, 1000);

  // REACT QUERY
  const { data, isLoading, error } = useUsersQuery({
    limit: 10,
    page: pageNumber,
    search: debouncedSearchValue,
  });

  return (
    <div className="p-16 object-contain flex flex-col">
      <LinkButton link={"/"}>Go Back</LinkButton>
      <div className="flex justify-center">
        <input
          type="search"
          className="max-w-xl p-3 outline-none rounded-full pl-5"
          placeholder="search users"
          onChange={(e) => setSearchUser(e.target.value)}
        />
      </div>
      <p className="text-3xl text-white text-center my-6 bg-amber-700/30 py-4">
        Users
      </p>

      {isLoading ? (
        <div className="flex justify-center items-center min-h-[240px]">
          <Image
            priority
            src={spinner}
            alt="spinner"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
      ) : (
        <div className="max-h-[240px] min-h-[240px] overflow-y-auto flex flex-col justify-center items-center text-white">
          {data?.users.length > 0 ? (
            data?.users?.map((user: User) => {
              return (
                <p key={user?.id}>{`${user?.firstName} ${user?.lastName}`}</p>
              );
            })
          ) : (
            <p className="text-3xl text-white text-center">No Users to show!</p>
          )}
        </div>
      )}

      <div className="flex justify-end space-x-6 px-6 mt-8 text-white items-center">
        <LinkButton
          disabled={pageNumber <= 1}
          clickHandler={() => {
            setPageNumber((currentPageNum) => currentPageNum - 1);
          }}
        >
          Previous
        </LinkButton>

        <span className="mx-2">{pageNumber}</span>

        <LinkButton
          disabled={pageNumber >= 3 || data?.total < 10}
          clickHandler={() => {
            setPageNumber((currentPageNum) => currentPageNum + 1);
          }}
        >
          Next
        </LinkButton>
      </div>
    </div>
  );
};

export default User;
