import React from 'react';
import Button from '../Button';

type Props = {};

const Slider = (props: Props) => {
  return (
    <div>
      <div className="flex">
        <h4>New NFT Collections</h4>
        <div className="ml-auto">
          <Button />
          <Button />
        </div>
      </div>
      
    </div>
  );
};

export default Slider;
