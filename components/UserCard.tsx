import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
}

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition">
      <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-500 text-sm">{user.company?.name}</p>
      <Link
        href={`/users/${user.id}`}
        className="inline-block mt-3 text-blue-600 hover:underline"
      >
        View Details →
      </Link>
    </div>
  );
}
