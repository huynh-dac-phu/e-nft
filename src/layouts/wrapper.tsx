import React from 'react';

type Props = {
  children: React.ReactNode;
  hasTopBorder?: boolean;
};

const Wrapper = ({ children, hasTopBorder }: Props) => {
  return (
    <div
      className={`mx-auto overflow-hidden px-5 lg:max-w-[1128px] ${hasTopBorder ? 'border-neutral-secondary border-t-[1px]' : ''}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
