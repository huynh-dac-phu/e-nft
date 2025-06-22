import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import News from '@/components/News';
import Slider from '@/components/Slider';
import Wrapper from '@/layouts/wrapper';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Navigation />
      <Wrapper>
        <Slider />
        <News />
      </Wrapper>
      <Wrapper hasTopBorder>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
