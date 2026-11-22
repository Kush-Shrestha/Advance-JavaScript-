import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section>
      <h1>frontend-lab</h1>
      <p>A small React app with routing, a theme and login state.</p>
      <Link to="/users">See the users</Link>
    </section>
  );
}
