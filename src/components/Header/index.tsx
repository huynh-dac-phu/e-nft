import { Button } from '@/components/Button';
import Hamburger from '@/assets/svgs/harmburger.svg?react';
import Close from '@/assets/svgs/close.svg?react';
import Logo from '@/assets/svgs/logo.svg?react';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

type Props = {};

const items = ['home', 'items1', 'items2', 'items3', 'items4'];

const Header = ({}: Props) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const handleOpenSidebar = () => {
    setIsOpenSidebar(state => !state);
  };
  const currentPath = 'home';
  const active = 'text-yellow bg-neutral-secondary';

  return (
    <header className="flex h-15 items-center px-5 py-3 text-white">
      <button className="mr-4 cursor-pointer md:hidden" onClick={handleOpenSidebar} role="button">
        <div className="w-6 transform overflow-hidden">
          <div
            className={`flex w-12 transition-all duration-300 ease-in-out ${isOpenSidebar ? 'translate-x-0' : '-translate-x-8'}`}
          >
            <Close className="min-w-8" />
            <Hamburger className="min-w-8" />
          </div>
        </div>
      </button>
      <Logo className="md:mr-6" />
      <nav className="hidden md:block">
        <ul className="flex">
          {items.map(item => (
            <li
              className={`text-neutral hover:active:text-yellow active:bg-neutral-secondary hover:text-yellow hover:bg-neutral-secondary rounded-[100px] px-4.5 py-2 text-sm font-medium uppercase ${item === currentPath ? active : ''} transition-all duration-300 ease-in-out`}
              aria-active="true"
              key={item}
            >
              <a className="block h-full w-full" href="/">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="ml-auto flex gap-2">
        <Button>sign up</Button>
        <Button variant="secondary">log in</Button>
      </div>
      <div className="md:hidden">
        <Sidebar isOpenSidebar={isOpenSidebar} />
      </div>
    </header>
  );
};

export default Header;
