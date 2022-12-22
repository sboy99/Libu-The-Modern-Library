import React from "react";

import { AnimatePresence, motion, Variants } from "framer-motion";

import { useLayout } from "../../store";
import { Stripes } from "../../utilities";
import Login from "./Login";
import Register from "./Register";

type DisplaySignatureType = {
  className?: string;
};

const DisplaySignatureForm: React.FC<DisplaySignatureType> = ({
  className,
}): JSX.Element => {
  const { isSignatureFormOpen: isOpen, signatureOption } = useLayout();

  const signatureFormVarients: Variants = {
    initial: { opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    onEnter: { opacity: 1 },
    onExit: { opacity: 0, transition: { delay: 0.4 } },
  };

  const formVarients: Variants = {
    initial: {
      opacity: 0,
      translateY: 50,
      transition: { ease: "easeInOut" },
    },
    onEnter: {
      opacity: 1,
      translateY: 0,
      transition: { delay: 0.4, duration: 0.4 },
    },
    onExit: {
      opacity: 0,
      translateY: 50,
      transition: { duration: 0.5 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={signatureFormVarients}
          key="signatureForm"
          initial="initial"
          animate="onEnter"
          exit="onExit"
          className={`fixed inset-0 grid h-full w-full place-items-center bg-skin-deep/60 backdrop-blur-md ${
            className && className
          }`}
        >
          {/* Form */}
          <motion.div
            key="formArea"
            variants={formVarients}
            initial="initial"
            animate="onEnter"
            exit="onExit"
            className="relative -z-10 w-full  max-w-sm rounded-md border border-text-base/10 bg-skin-base  p-4"
          >
            <Stripes
              id="authStripe"
              className="pointer-events-none absolute inset-x-0 top-4 -z-10 h-full text-skin-accent/40"
            />
            {signatureOption === "login" ? <Login /> : <Register />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DisplaySignatureForm;
