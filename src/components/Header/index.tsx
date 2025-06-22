import Button from '@/components/Button';
import Hamburger from '@/assets/svgs/harmburger.svg?react';
import Close from '@/assets/svgs/close.svg?react';
import Logo from '@/assets/svgs/logo.svg?react';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

type Props = {};

const items = ['HOME', 'items1', 'items2', 'items3', 'items4'];

const Header = ({}: Props) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const handleOpenSidebar = () => {
    setIsOpenSidebar(state => !state);
  };
  return (
    <header className="flex h-15 items-center px-5 py-3 text-white">
      <button className="mr-4 cursor-pointer" onClick={handleOpenSidebar} role="button">
        <div className="w-6 transform overflow-hidden">
          <div
            className={`flex w-12 transition-all duration-300 ease-in-out ${isOpenSidebar ? 'translate-x-0' : '-translate-x-8'}`}
          >
            <Close className="min-w-8" />
            <Hamburger className="min-w-8" />
          </div>
        </div>
      </button>
      <Logo />
      <nav className="hidden">
        <ul className="flex gap-2">
          {items.map(item => (
            <li className="text-neutral text-sm uppercase" aria-active="true" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <div className="ml-auto flex gap-2">
        <Button>sign up</Button>
        <Button variant="secondary">log in</Button>
      </div>
      <Sidebar isOpenSidebar={isOpenSidebar} />
    </header>
  );
};

export default Header;
