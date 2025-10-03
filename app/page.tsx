"use client";

import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import AddUserModal from "@/components/UserModal";

interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
}

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (newUser: User) => {
    setUsers((prev) => [newUser, ...prev]);
  };

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      <input
        type="text"
        placeholder="Search by name or email..."
        className="border p-2 w-full mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex justify-end mb-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          + Add User
        </button>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((u) => (
          <UserCard key={u.id} user={u} />
        ))}
      </div>

      {isModalOpen && (
        <AddUserModal
          onClose={() => setIsModalOpen(false)}
          onAddUser={handleAddUser}
        />
      )}
    </div>
  );
}
