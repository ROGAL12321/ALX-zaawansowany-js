import React from 'react';
import Main from 'components/layouts/main/Main';
import { RestrictedRoute } from 'utils/AuthorizationRoutes';

function Dashboard() {
  return (
    <RestrictedRoute>
      <Main>Hello from Dashboard</Main>
    </RestrictedRoute>
  );
}

export default Dashboard;
