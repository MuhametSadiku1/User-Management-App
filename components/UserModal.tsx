"use client";

import { useState } from "react";

interface AddUserModalProps {
  onClose: () => void;
  onAddUser: (user: User) => void;
}

interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
}

export default function AddUserModal({
  onClose,
  onAddUser,
}: AddUserModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Name and Email are required!");
      return;
    }

    const newUser: User = {
      id: Date.now(),
      name,
      email,
      company: { name: "Local User" },
    };

    onAddUser(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-400 p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name *"
            className="border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email *"
            className="border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
