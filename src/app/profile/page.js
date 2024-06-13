'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Change this line

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect if user is not logged in
  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {session.user.name}!</p>
    </div>
  );
}
