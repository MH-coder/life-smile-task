// Project Imports
import LinkButton from "@/components/Button/Button";

export default function Home() {
  return (
    <main className="flex p-20 justify-center">
      <LinkButton link={"/users"}>Users</LinkButton>
    </main>
  );
}
