import React from 'react';

type navigationType = {
  title: string;
  to: string;
};

type menuType = {
  menu: navigationType[];
};

const Menu = ({ menu }: menuType) => {
  return (
    <ul>
      {menu.map((menuItem) => (
        <li key={null}>{menuItem.title}</li>
      ))}
    </ul>
  );
};

export default Menu;
