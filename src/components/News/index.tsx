import { Heading, HeadingControl } from '@/components/Heading';
import Promotion from '@/assets/imgs/promotion.png';
import HotNFT from '@/assets/imgs/hot-nft.png';
import NFTCalendar from '@/assets/imgs/nft-calendar.png';

type Props = {};

const News = ({}: Props) => {
  return (
    <div className="mb-10 flex flex-wrap gap-10 lg:flex-nowrap lg:gap-4">
      <div className="w-full lg:w-150">
        <HeadingControl title="NFT Drops Calendar" className="mb-2" />
        <img
          className="h-42.5 w-full rounded-lg object-cover sm:object-top md:h-55 lg:h-60"
          src={NFTCalendar}
          alt="nft drops calendar"
        />
      </div>
      <div className="flex gap-4">
        <div className="flex flex-1 flex-col gap-2">
          <Heading>Hot nft</Heading>
          <img
            className="aspect-square h-[167px] rounded-lg object-cover md:h-55 lg:h-60"
            src={HotNFT}
            alt="hot nft"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <Heading>promotion</Heading>
          <img
            src={Promotion}
            className="aspect-square h-[167px] rounded-lg object-cover md:h-55 lg:h-60"
            alt="promotion"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
