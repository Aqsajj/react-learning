import React, { useState } from 'react';
import IngredientList from '../Ingredients/IngredientList'
import IngredientForm from './IngredientForm';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([
  ])

  const addIngredientHandler = ingredient => {
    // fetch browser function
    fetch('https://react-hooks-data-cb7b3.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response)
      return response.json()
    }).then(responseData => {
      setUserIngredients(prevIngredients => [
        ...prevIngredients,
        { id: responseData.name, ...ingredient }// name has unique id
      ])
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientList ingredients={userIngredients} />
      </section>
    </div>
  );
}

export default Ingredients;
