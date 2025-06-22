import { HeadingControl } from '@/components/Heading';
import Slider1 from '@/assets/imgs/slider/slider-1.png';
import Slider2 from '@/assets/imgs/slider/slider-2.png';
import Slider3 from '@/assets/imgs/slider/slider-3.png';
import Slider4 from '@/assets/imgs/slider/slider-4.png';
import Slider5 from '@/assets/imgs/slider/slider-5.png';
import Slider6 from '@/assets/imgs/slider/slider-6.png';
import { useState } from 'react';

const sliders = [Slider1, Slider2, Slider3, Slider4, Slider5, Slider6];
type Props = {};

const Slider = ({}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(sliders);

  const handleNext = () => {
    setCurrentIndex(state => {
      const [last, ...rest] = [...state].reverse();
      return [last, ...rest.reverse()];
    });
  };
  const handlePrev = () => {
    setCurrentIndex(state => {
      const [first, ...rest] = state;
      return [...rest, first];
    });
  };

  return (
    <div className="mb-10">
      <HeadingControl
        title="New NFT Collections"
        className="mb-2"
        onNext={handleNext}
        onPrev={handlePrev}
      />
      <ul className="flex gap-4">
        {currentIndex.map((slider, index) => (
          <li
            className="h-35 w-25.5 min-w-25.5 md:h-55 md:w-1/5 md:min-w-1/5 lg:h-61.25 lg:min-w-45"
            key={index}
          >
            <img
              className="h-full w-full rounded-[7px] object-cover"
              src={slider}
              alt="nft collection"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
