import React from 'react';

type LayoutType = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutType) => {
  return (
    <>
      <div>Head</div>
      <div>{children}</div>
      <div>Footer</div>
    </>
  );
};

export default Layout;
