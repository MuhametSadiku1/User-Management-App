interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: { street: string; city: string; suite: string; zipcode: string };
}

export default function UserDetails({ user }: { user: User }) {
  return (
    <div className="bg-gray-500 shadow-md rounded-lg p-6 border max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">{user.name}</h1>

      <div className="space-y-2">
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
        <p>
          <strong>Address:</strong> {user.address.street}, {user.address.suite},{" "}
          {user.address.city} {user.address.zipcode}
        </p>
      </div>
    </div>
  );
}
