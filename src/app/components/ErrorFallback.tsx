import type { FC } from 'react';
import type { FallbackProps } from 'react-error-boundary';

import {
  ArrowLeftIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/24/outline';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoundedButtons, TypoGrapher } from '../components/utilities';

const errorVarients: Variants = {
  initial: { opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const location = useLocation();
  const navigateTo = useNavigate();

  function backToHome() {
    navigateTo('/', { state: location, replace: true });
    resetErrorBoundary();
  }
  const content: JSX.Element = (
    <TypoGrapher
      proseSize="prose-sm"
      className="prose-h1:mb-0 prose-p:text-base prose-p:font-medium"
    >
      <span>
        <ShieldExclamationIcon className="mb-2 h-20 w-20 animate-pulse text-skin-base" />
      </span>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      {/* action */}
      <div className="relative w-fit ">
        <RoundedButtons
          onClick={backToHome}
          text="Back to Home"
          className="!p-0 text-lg font-semibold capitalize text-skin-base hover:text-skin-accent"
        />
        <ArrowLeftIcon className="pointer-events-none absolute top-[0.1rem] -right-10 h-6 w-6 -translate-y-1/2 animate-poke-left text-skin-base" />
      </div>
    </TypoGrapher>
  );

  return (
    <motion.div
      variants={errorVarients}
      initial="initial"
      animate="animate"
      exit="exit"
      className="grid h-screen w-full place-items-center p-4"
    >
      {content}
    </motion.div>
  );
};

export default ErrorFallback;
