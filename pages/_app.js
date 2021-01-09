import '../styles/app.scss';

import { Footer, Header } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />

      <Component {...pageProps} />
      
      <Footer />
    </>
  );
}

export default MyApp
