import React, { useState, useEffect, useCallback, useReducer } from 'react';
import IngredientList from '../Ingredients/IngredientList'
import IngredientForm from './IngredientForm';
import Search from './Search';

// reducer is defined outside class component
const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients
    case 'ADD':
      return [...currentIngredients, action.ingredient]
    case 'DELETE':
      return currentIngredients.filter(ing => ing.id !== action.id)
    default:
      throw new Error()
  }
}
const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, [])
  //const [userIngredients, setUserIngredients] = useState([])

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
    dispatch({
      type: 'SET',
      ingredients: filteredIngredients
    })
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
