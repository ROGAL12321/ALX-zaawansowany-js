import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MyProfile from 'components/pages/MyProfile/MyProfile';
import NotFound from 'components/pages/NotFound/NotFound';
import App from './components/pages/App/App';

// Lopatologiczny routing
// const getRoute = () => {
//   if (window.location.pathname === '/') return <App />;
//   if (window.location.pathname === '/me') return <MyProfile />;

//   return null;
// };

// Client side routing z biblioteka reaktowa

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="me" element={<MyProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
