import { Outlet, useNavigation } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation.tsx';

export default function RootLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';

  return (
    <>
      <MainNavigation />
      <main>
        {isLoading && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
}
