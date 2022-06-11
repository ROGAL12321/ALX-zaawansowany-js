import { GlobalProvider } from 'contexts/global';

import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp;