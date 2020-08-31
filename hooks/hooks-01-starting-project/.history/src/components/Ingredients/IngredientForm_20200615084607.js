import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {

  const [data, setInputState] = useState(
    // can be an array , a value or object
    // Returns a stateful value, and a function to update it.
    // [{current state snap shot} , {function to update state}]
    {
      title: '',
      amount: ''
    })
  const submitHandler = event => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={data.title}
              onChange={event => {
                const newAmount = event.target.value
                setInputState((prevState) => ({
                  title: event.target.value,
                  amount: newAmount
                })
                )
              }} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={data[0].amount}
              onChange={event => {
                const newAmount = event.target.value
                setInputState((prevState) => ({
                  title: prevState.title,
                  amount: newAmount
                })
                )
              }} />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
