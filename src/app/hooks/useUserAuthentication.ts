/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useUser } from '../store';
import { getUser } from '../store/api/authentication';

const useUserAuthentication = () => {
  const { authState } = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    if (authState !== 'VERIFIED_AUTHENTIC' && authState !== 'NOT_VERIFIED') {
      dispatch(getUser() as any);
    }
  }, [authState]);
};

export default useUserAuthentication;
