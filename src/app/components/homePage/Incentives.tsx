import React from 'react';
import type { IncentiveType } from '../../data/Incentives';
import { IncentativeList } from '../../data/Incentives';
import { SafeArea, TypoGrapher } from '../utilities';

const Incentives: React.FC = () => {
  const incentives = IncentativeList.map(({ Icon, desc, title }, indx) => (
    <Incentive key={title + indx} Icon={Icon} desc={desc} title={title} />
  ));

  return (
    <section itemID="Incentives" className="mt-8 md:mt-16">
      <SafeArea>
        <div className="grid w-full  grid-cols-fill-72 gap-x-4 gap-y-8  sm:grid-cols-fill-96">
          {incentives}
        </div>
      </SafeArea>
    </section>
  );
};

export default Incentives;

const Incentive: React.FC<IncentiveType> = ({ Icon, desc, title }) => {
  return (
    <div className="flex flex-wrap gap-4 sm:flex-nowrap sm:gap-6">
      {/* icon */}
      <Icon className="-mt-2 h-10 w-10 flex-shrink-0 text-skin-accent " />
      {/* info */}
      <TypoGrapher className="prose-h4:capitalize prose-h4:text-skin-accent-hover prose-p:text-skin-muted">
        {/* title */}
        <h4>{title}</h4>
        {/* desc */}
        <p>{desc}</p>
      </TypoGrapher>
    </div>
  );
};
