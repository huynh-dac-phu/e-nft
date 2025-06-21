

type Props = {};
const navs = ['free to earn', 'Ranking', 'VIdeo-NFT', 'How to buy', 'New NFTS', 'Roadmaps'];

function Navigation({}: Props) {
  return (
    <div>
      <ul className='flex gap-1'>{
        navs.map(nav => <li key={nav}>{nav}</li>)}</ul>
    </div>
  );
}

export default Navigation;
