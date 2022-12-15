import React from "react";
// import { Dialog, Transition } from "@headlessui/react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { TypoGrapher } from "../../utilities";
import { BoltIcon } from "@heroicons/react/24/solid";
import { useApi, useLayout } from "../../store";

const Loading: React.FC = () => {
  const { isLoading } = useApi();
  const { isFallingBack } = useLayout();

  const content = (
    <TypoGrapher
      proseSize="prose-sm"
      className="grid place-items-center prose-h1:mb-0 prose-p:max-w-sm"
    >
      <span className="relative mb-3 text-skin-base">
        <BoltIcon className="h-12 w-12" />
        <BoltIcon className="absolute inset-0 h-12 w-12 animate-ping !text-skin-accent" />
      </span>
      <h1>Keep Calm</h1>
      <p className="text-center text-base font-medium">
        Working hark with blazing speed. Meanwhile just chill out. Keep patience
      </p>
    </TypoGrapher>
  );

  const loaderVarients: Variants = {
    initial: { opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } },
    onEnter: { opacity: 1 },
    onExit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {(isLoading || isFallingBack) && (
        <motion.div
          key="loader"
          variants={loaderVarients}
          initial="initial"
          animate="onEnter"
          exit="onExit"
          className="fixed inset-0 z-50 grid h-screen w-full place-content-center bg-skin-base/50 p-2 backdrop-blur-md"
        >
          {/* message */}
          {content}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
