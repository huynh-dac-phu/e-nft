import { ABOUT_US, CONTACTS, PRODUCTS, RESOURCES } from '@/constants/footer';
import Install from '@/assets/imgs/install.png';

type Props = { title: string; list: string[]; children?: React.ReactNode };

const FooterBlock = ({ title, list, children }: Props) => {
  return (
    <div className="flex-1/2">
      <h6 className="font-barlow mb-3 text-lg font-[900] uppercase italic">{title}</h6>
      <ul>
        {list.map(item => (
          <li className="font-neue text-neutral mb-2 text-xs last:mb-0" key={item}>
            <a href="">{item}</a>
          </li>
        ))}
      </ul>
      <div>{children}</div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 gap-x-4 gap-y-6 py-10 lg:grid-cols-4">
      <FooterBlock title="about us" list={ABOUT_US} />
      <FooterBlock title="products" list={PRODUCTS} />
      <FooterBlock title="resources" list={RESOURCES} />
      <FooterBlock title="contact us" list={CONTACTS}>
        <a className="mt-6 inline-block" href="">
          <img className="h-11 object-cover" src={Install} alt="install app" />
        </a>
      </FooterBlock>
    </footer>
  );
};

export default Footer;
