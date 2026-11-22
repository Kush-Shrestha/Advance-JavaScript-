import UserCard from '../components/UserCard.jsx';
import { USERS } from '../data/users.js';

export default function Users() {
  return (
    <section>
      <h1>Users</h1>
      <ul className="cards">
        {USERS.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </section>
  );
}
