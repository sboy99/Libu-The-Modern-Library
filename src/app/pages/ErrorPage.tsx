import React from "react";
import {
  ArrowLeftIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { motion, Variants } from "framer-motion";
import { utilities } from "../utilities";
import { useLocation, useNavigate } from "react-router";
const { TypoGrapher, RoundedButtons } = utilities;

const errorVarients: Variants = {
  initial: { opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const ErrorPage: React.FC = () => {
  const location = useLocation();
  const navigateTo = useNavigate();

  function backToHome() {
    navigateTo("/", { state: location, replace: true });
  }

  const content: JSX.Element = (
    <TypoGrapher
      proseSize="prose-sm"
      className="prose-h1:mb-0 prose-p:text-base prose-p:font-medium"
    >
      <span>
        <QuestionMarkCircleIcon className="mb-2 h-20 w-20 animate-spin text-skin-base" />
      </span>
      <h1>Page Not Found</h1>
      <p>
        Unfortunately, the page you are looking for does not exist. Please
        navigate to Home
      </p>
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

export default ErrorPage;
