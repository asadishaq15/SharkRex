import React from 'react';
import Navbar222 from '../Components/Navbar/Navbar';



const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar222 />
      {children}
    </>
  );
};

export default MainLayout;