import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { utilities } from "../../utilities";
import { BoltIcon } from "@heroicons/react/24/solid";
import { useApi, useTheme } from "../../store";

const { TypoGrapher } = utilities;

const Loading: React.FC = () => {
  const { isLoading, isFallingBack } = useApi();
  const { theme } = useTheme();

  const handleClose = (): void => {};

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

  return (
    <Transition appear show={isLoading || isFallingBack}>
      <Dialog onClose={handleClose} className={`relative z-50 ${theme}`}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Panel className="fixed inset-0 grid h-screen w-full place-content-center bg-skin-base p-2">
            {/* message */}
            {content}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Loading;
