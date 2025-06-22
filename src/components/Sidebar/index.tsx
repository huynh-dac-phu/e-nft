type Props = {
  isOpenSidebar: boolean;
};

const items = ['home', 'items1', 'items2', 'items3', 'items4'];

const Sidebar = ({ isOpenSidebar }: Props) => {
  const currentPath = 'home';
  const active = 'text-yellow bg-neutral-secondary rounded-full';

  return (
    <nav
      className={`bg-black-tertiary absolute top-15 bottom-0 left-0 z-1 h-[calc(100dvh-60px)] w-full transition-all duration-300 ${isOpenSidebar ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <ul className="flex flex-col gap-4 p-5">
        {items.map(item => (
          <li
            className={`text-neutral h-12 w-full text-center text-sm leading-12 font-medium uppercase ${item === currentPath ? active : ''} active:text-yellow active:bg-neutral-secondary rounded-full transition-all duration-300`}
            key={item}
          >
            <a className="block h-full w-full" href={`#${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
