import React, { useState, useContext } from "react";

const AppContext = React.createContext();

//always make sure you display the children or else you will get a fat big error

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
    console.log("yes");
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    console.log("no");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//Note you are allowed to use any name, in our case we made use of useGlobalContext. Also when using custom hooks always make use of the useSomething without the use first, the function will not work

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
