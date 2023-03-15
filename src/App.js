import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


const allCategories = items.map((item)=> item.category);
const uniqueAllCategories = ['all',...new Set(allCategories)];

console.log(uniqueAllCategories);

function App() {
  const [menuItems,setMenuItems] = useState(items);
  const [categories,setCategories] = useState(uniqueAllCategories);

  const filterItems = (category) =>{
    if(category === 'all'){
      setMenuItems(items);
    }
    else{
      const arr = items.filter((item)=>{
        return item.category === category;
      })
      setMenuItems(arr);
    }
  }
  return (<main>
    <section className='menu section'>
        <div className="title">
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} categories={categories}/>
        <Menu items={menuItems}/>
    </section>
  </main>);
}

export default App;
