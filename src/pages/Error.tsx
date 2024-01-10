import { useRouteError } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation.tsx';
import PageContent from '../components/PageContent.tsx';

export default function ErrorPage() {
  const error = useRouteError() as {
    status: number;
    data: string;
  };

  let title = 'An error occured';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    const parsedErrorData = JSON.parse(error.data) as { message: string };
    message = parsedErrorData.message;
  }

  if (error.status === 404) {
    title = 'Not found.';
    message = 'Could not find resource or page.';
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
