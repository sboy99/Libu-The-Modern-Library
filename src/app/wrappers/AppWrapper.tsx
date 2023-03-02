/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Loading } from '../components';
import { useThemeObserver } from '../hooks';
import useUserAuthentication from '../hooks/useUserAuthentication';
import { useTheme } from '../store';
import { Actions } from '../store/features';

type Props = {
  children: JSX.Element;
};

const AppWrapper: React.FunctionComponent<Props> = ({ children }) => {
  useThemeObserver();
  useUserAuthentication();
  const { windowWidth, theme } = useTheme();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  /**
   * * ================useEffects================== *
   */
  useEffect(() => {
    function handleResize() {
      dispatch(Actions.setWindowWidth(Number(window.innerWidth)));
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  /**
   *
   */
  useEffect(() => {
    dispatch(Actions.closeMenu());
  }, [pathname]);

  useEffect(() => {
    if (windowWidth >= 1024) {
      dispatch(Actions.closeSearchBar());
      dispatch(Actions.closeMenu());
    }
  }, [windowWidth]);
  /**
   * * ========================================== *
   */

  return (
    <div className={`relative ${theme}`}>
      <Loading />
      {children}
    </div>
  );
};

export default AppWrapper;
