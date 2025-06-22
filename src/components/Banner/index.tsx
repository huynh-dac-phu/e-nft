import BannerBg from '@/assets/imgs/banner.png';

type Props = {};

const Banner = ({}: Props) => {
  return (
    <div className="relative h-45 lg:h-112.5">
      <img src={BannerBg} className="h-full w-full object-cover" alt="Banner" />
      <ul className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
        {Array.from({ length: 9 }).map((_, index) => (
          <li
            className="[&[aria-active='true']]:bg-yellow h-1 w-[14px] rounded-full bg-white opacity-60 [&[aria-active='true']]:opacity-100"
            aria-active={index === 1}
            key={index}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Banner;
