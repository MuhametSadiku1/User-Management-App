"use client";

import { useEffect, useState } from "react";
import UserDetails from "../../../components/UserDetail";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: { street: string; city: string; suite: string; zipcode: string };
}

export default function UserDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [params.id]);

  if (!user) return <p className="p-6 text-gray-500">Loading...</p>;

  return (
    <div className="p-6">
      <UserDetails user={user} />
    </div>
  );
}
