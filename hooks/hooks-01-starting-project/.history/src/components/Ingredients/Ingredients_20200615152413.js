import React, { useState, useEffect, useCallback } from 'react';
import IngredientList from '../Ingredients/IngredientList'
import IngredientForm from './IngredientForm';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([])

  const removeIngredientHandler = ingredientId => {
    fetch(`https://react-hooks-data-cb7b3.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: 'DELETE'
    }).then((response) => {
      setUserIngredients(prevState =>
        prevState.filter(ing => ing.id !== ingredientId)
      )
    })
  }

  useEffect(() => {
    console.log('rendering ingredients', userIngredients)
  }, [userIngredients])

  const addIngredientHandler = ingredient => {
    //fetch browser function
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
        { id: responseData.name, ...ingredient } //name has unique id
      ])
    }).catch(err => {
      console.log(err)
    })
  }

  //Allows to wraps a function - 
  const filterIngredientHandler = useCallback(filteredIngredients => {
    setUserIngredients(filteredIngredients)
  }, [])

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />
      <section>
        <Search onLoadedIngredients={filterIngredientHandler} />
        {/* Need to add list here! */}
        <IngredientList ingredients={userIngredients}
          onRemoveIngredient={removeIngredientHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
