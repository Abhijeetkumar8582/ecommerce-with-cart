import '@/styles/globals.css';
import { Provider } from 'react-redux';
import NavBar from './NavBar';
import store from './Redux/Store';


export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NavBar/>
      <Component {...pageProps} />
    </Provider>
  );
}
