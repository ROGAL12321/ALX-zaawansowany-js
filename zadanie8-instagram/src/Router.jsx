import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainContextProvider } from 'contexts/main';

import MyProfile from 'components/pages/myprofile/MyProfile';
import NotFound from 'components/pages/notfound/NotFound';
import Dashboard from 'components/pages/dashboard/Dashboard';
import Login from 'components/pages/login/Login';
import Register from 'components/pages/register/Register';
import RemindPassword from 'components/pages/remind-password/RemindPassword';
import Home from './components/pages/home/Home';
import AddPost from './components/pages/addpost/AddPost';

function Router() {
  return (
    <MainContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="create" element={<AddPost />} />
          <Route path="remind-password" element={<RemindPassword />} />
          <Route path="me" element={<MyProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MainContextProvider>
  );
}

export default Router;
