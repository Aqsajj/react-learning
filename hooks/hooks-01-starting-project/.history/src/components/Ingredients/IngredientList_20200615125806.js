import React from 'react';

import './IngredientList.css';

const IngredientList = props => {
  const deleteHandler = ingredientId => {
    fetch(`https://react-hooks-data-cb7b3.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: 'DELETE'
    })
      .then(response => {
        console.log("TCL: response", response)
        return response.json()
      }).then(responseData => {
        console.log("TCL: responseData", responseData)
        const loadedIngredients = []
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          })
        }
        console.log("TCL: Ingredients -> loadedIngredients", loadedIngredients)

        onLoadedIngredients(loadedIngredients)
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {props.ingredients.map(ig => (
          <li key={ig.id} onClick={
            () => { }
            //props.onRemoveItem.bind(this, ig.id)
          }>
            <span>{ig.title}</span>
            <span>{ig.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
