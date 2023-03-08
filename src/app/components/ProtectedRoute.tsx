import { useUser } from '@/app/store';
import type { TUserRole } from '@/app/store/interfaces/StoreInterface';
import type { FC, ReactNode } from 'react';
import ErrorPage from '../pages/ErrorPage';

type ProtectedRouteProps = {
  children: ReactNode;
  allowedRoles: TUserRole[];
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  children,
  allowedRoles = ['reader'],
}) => {
  const { user } = useUser();

  if (user && allowedRoles.includes(user.role)) return <>{children}</>;
  return <ErrorPage />;
};

export default ProtectedRoute;
