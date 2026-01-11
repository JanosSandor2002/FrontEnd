import { useState } from 'react';
import Title from './Title';
import data from './data';
import Menu from './Menu';
import Categories from './Categories';
const allCategories = ['all', ...new Set(data.map((item) => item.category))];
const App = () => {
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setItems(data);
      return;
    }
    const newData = data.filter((item) => item.category === category);
    return setItems(newData);
  };
  return (
    <main>
      <section className='menu'></section>
      <Title text='our menu' />
      <Categories categories={categories} filterItems={filterItems} />
      <Menu data={items} />
    </main>
  );
};
export default App;
