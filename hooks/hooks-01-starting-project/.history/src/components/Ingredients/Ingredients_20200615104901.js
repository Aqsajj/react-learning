import React, { useState, useEffect } from 'react';
import IngredientList from '../Ingredients/IngredientList'
import IngredientForm from './IngredientForm';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([
  ])

  useEffect(() => {  // manage side effects
    fetch('https://react-hooks-data-cb7b3.firebaseio.com/ingredients.json')
      .then(response => {
        console.log(response)
        return response.json()
      }).then(responseData => {
        const loadedIngredients = []
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          })
        }
        console.log("TCL: Ingredients -> loadedIngredients", loadedIngredients)

        setUserIngredients(loadedIngredients)
      }).catch(err => {
        console.log(err)
      })
  }, []);// only runs once

  useEffect(() => {
    console.log(' rendering ingredients', userIngredients)
  }, [userIngredients])

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

  const filterIngredientHandler = filteredIngredients => {
    // fetch browser function
    fetch('https://react-hooks-data-cb7b3.firebaseio.com/ingredients.json', {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response)
      return response.json()
    }).then(responseData => {
      setUserIngredients(prevIngredients => [

      ])
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadedIngredients={filterIngredientHandler} />
        {/* Need to add list here! */}
        <IngredientList ingredients={userIngredients} />
      </section>
    </div>
  );
}

export default Ingredients;
