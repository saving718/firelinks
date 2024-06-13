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
      {menu.map((menuItem, i) => (
        <li key={i}>{menuItem.title}</li>
      ))}
    </ul>
  );
};

export default Menu;
