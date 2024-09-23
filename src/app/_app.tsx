import '../globals.css';
import { ImageProvider } from '../../context/ImageContext';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <ImageProvider>
      <Component {...pageProps} />
    </ImageProvider>
  );
}
export default MyApp;
