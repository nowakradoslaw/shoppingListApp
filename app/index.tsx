import React from 'react';
import AppProvider from '@/context/AppProvider';
//components
import AppNavigator from '@/navigations/AppNavigator';

const App = () => {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
};

export default App;
