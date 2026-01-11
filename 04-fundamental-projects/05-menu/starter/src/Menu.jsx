import React from 'react';
import Menuitem from './Menuitem';

const Menu = ({ data }) => {
  return (
    <div className='section-center'>
      {data.map((items) => {
        return <Menuitem key={items.id} {...items} />;
      })}
    </div>
  );
};

export default Menu;
