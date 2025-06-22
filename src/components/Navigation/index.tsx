import Cashback from '@/assets/svgs/nav/cashback.svg?react';
import Ranking from '@/assets/svgs/nav/race.svg?react';
import VideoNFT from '@/assets/svgs/nav/video.svg?react';
import HowToBuy from '@/assets/svgs/nav/play.svg?react';
import NewNFTs from '@/assets/svgs/nav/live.svg?react';
import Roadmaps from '@/assets/svgs/nav/minigame.svg?react';

type Props = {};
const navs = [
  {
    name: 'free to earn',
    icon: <Cashback />,
  },
  {
    name: 'Ranking',
    icon: <Ranking />,
  },
  {
    name: 'Video NFT',
    icon: <VideoNFT />,
  },
  {
    name: 'How to buy',
    icon: <HowToBuy />,
  },
  {
    name: 'New NFTS',
    icon: <NewNFTs />,
  },
  {
    name: 'Roadmaps',
    icon: <Roadmaps />,
  },
];

function Navigation({}: Props) {
  return (
    <div className="bg-black-tertiary mb-10">
      <ul className="mx-auto flex h-23 items-center justify-between lg:max-w-[1128px]">
        {navs.map(nav => (
          <li key={nav.name} className="flex flex-1 cursor-pointer flex-col items-center gap-2">
            {nav.icon}
            <span className="px-1 text-center text-xs leading-3 font-medium text-white uppercase">
              {nav.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
