import React from 'react';
import type { IconType } from '../../types/icon';
import { TypoGrapher } from '../utilities';

type Props = {
  Icon: IconType;
  title: string;
  desc: string;
};

const Headline: React.FC<Props> = ({ Icon, title, desc }) => {
  return (
    <div>
      <Icon className="h-10 w-10 text-skin-accent" />
      <TypoGrapher className="my-4 prose-h1:mb-0 prose-h1:text-skin-base prose-p:my-2">
        <h1>{title}</h1>
        <p>{desc}</p>
      </TypoGrapher>
    </div>
  );
};

export default Headline;
