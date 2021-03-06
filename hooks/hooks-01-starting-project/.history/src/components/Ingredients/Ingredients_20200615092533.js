import React, { useState } from 'react';
import IngredientList from '../Ingredients/IngredientList'
import IngredientForm from './IngredientForm';
import Search from './Search';

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([

  ])
  return (
    <div className="App">
      <IngredientForm />

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientList />
      </section>
    </div>
  );
}

export default Ingredients;
