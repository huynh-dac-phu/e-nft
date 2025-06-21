import { ABOUT_US, CONTACTS, PRODUCTS, RESOURCES } from '../../constants/footer'

type Props = {title: string, list: string[]}

const FooterBlock = ({ title, list}: Props) => {
  return <ul>
    <h6>{title}</h6>
    <ul>
      {list.map(item => <li key={item}>{item}</li>)}
    </ul>
  </ul>
}

const Footer = () => {
  return (
    <footer className='flex gap-2'>
      <FooterBlock title='about us' list={ABOUT_US}/>
      <FooterBlock title='products' list={PRODUCTS}/>
      <FooterBlock title='resources' list={RESOURCES}/>
      <FooterBlock title='contact us' list={CONTACTS}/>
    </footer>
  )
}

export default Footer