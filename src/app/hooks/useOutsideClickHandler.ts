import { RefObject, useEffect } from 'react';

type Callback = () => void;

function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !('nodeType' in e)) {
    throw new Error(`Node expected`);
  }
}

export const useOutsideClickHandler = (
  ref: RefObject<HTMLDivElement>,
  fn: Callback
): void => {
  useEffect(() => {
    function handleClickOutside({ target }: MouseEvent) {
      assertIsNode(target);
      if (ref.current && !ref.current.contains(target)) {
        fn();
      }
    }
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [ref]);
};
