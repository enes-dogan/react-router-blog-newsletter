import { useFetcher } from 'react-router-dom';

export default function NewsletterSignup() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="post" action="newsletter" className="newsletter">
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}
