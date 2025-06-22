import AngleLeft from '@/assets/svgs/angle-left.svg?react';
import AngleRight from '@/assets/svgs/angle-right.svg?react';
import ButtonIcon from '@/components/Button/ButtonIcon';
import Heading from '@/components/Heading';

const Control = ({
  title,
  className,
  onNext,
  onPrev,
}: {
  title: string;
  className?: string;
  onNext?: () => void;
  onPrev?: () => void;
}) => {
  return (
    <div className={`flex ${className}`}>
      <Heading>{title}</Heading>
      <div className="ml-auto flex gap-2">
        <ButtonIcon onClick={onPrev}>
          <AngleLeft />
        </ButtonIcon>
        <ButtonIcon onClick={onNext}>
          <AngleRight />
        </ButtonIcon>
      </div>
    </div>
  );
};

export default Control;
