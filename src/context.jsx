import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  return (
    <AppContext.Provider value={{ isSidebarOpen, closeSidebar, openSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
