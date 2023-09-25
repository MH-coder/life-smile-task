// Third-Party Imports
import { useQuery } from "react-query";

// Constants
import { usersApiEndpoint } from "@/constants/userApiEndpoints";

type Props = {
  limit?: number;
  page?: number;
  search?: string;
};

export const useUsersQuery = ({ limit, page = 1, search }: Props) => {
  return useQuery(
    ["users", page, search],
    async () => {
      const response = await fetch(
        search !== ""
          ? `${usersApiEndpoint}/search?q=${search}`
          : `${usersApiEndpoint}/search?q=${search}&limit=${limit}&skip=${page}`
      );
      const users: any = await response.json();

      return users;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};
