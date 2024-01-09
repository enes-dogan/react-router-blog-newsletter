import { Link, useParams } from 'react-router-dom';

export default function EventDetailPage() {
  const { id } = useParams();
  return (
    <>
      <h1>EventDetailPage</h1>
      <p>{id}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
}
