import React from 'react';
import './categories.styles.scss'
import categories from './categories.json'
import CategoryItem from './components/category-item/category-item';

function App() {
  return (
    <div className='categories-container'>
        {categories.map(({id, title, imageUrl}) => (
          <CategoryItem category={{id, title, imageUrl}}/>
        ))}
    </div>
  );
}

export default App;
