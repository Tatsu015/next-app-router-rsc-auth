import { auth } from "@/auth";
import SignIn from "@/components/signin";
import SignOut from "@/components/signout";

export default async function Home() {
  const session = await auth();
  console.log("session");
  console.log(session);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {session ? (
          <div>
            success login
            <SignOut />
          </div>
        ) : (
          <SignIn />
        )}
      </main>
    </div>
  );
}
