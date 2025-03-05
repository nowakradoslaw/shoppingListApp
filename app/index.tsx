import MainMenu from '@/navigation/MainMenu';
import AppProvider from '@/context/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <MainMenu />
    </AppProvider>
  );
};

export default App;
