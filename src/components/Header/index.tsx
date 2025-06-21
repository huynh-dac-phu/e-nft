
import Button from '../Button';

type Props = {};

const items = ['HOME', 'items1', 'items2', 'items3', 'items4'];

const Header = (props: Props) => {
  return (
    <header className='flex'>
      <img src="" alt="Logo" />
      <nav>
        <ul className='flex gap-2'>
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </nav>
      <div className='flex gap-1'>
      <Button></Button>
      <Button></Button>
      </div>
    </header>
  );
};

export default Header;
