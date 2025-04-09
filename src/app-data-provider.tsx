import React from 'react';
import { fetchAppData } from './redux/app-data-slice';
import { useAppDispatch } from './redux/hooks';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const AppDataProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchAppData());
  }, [dispatch]);

  return <>{children}</>;
};

export default AppDataProvider;