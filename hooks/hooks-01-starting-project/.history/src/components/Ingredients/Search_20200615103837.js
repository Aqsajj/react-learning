import React, { useState, useEffect } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const [inputFilter, setInputFilter] = useState('')
  useEffect(() => {
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

        props.onLoadedIngredients(loadedIngredients)
      }).catch(err => {
        console.log(err)
      })
  }, [inputFilter])
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value={inputFilter} onChange={
            event => {
              setInputFilter(event.target.value)
            }
          } />
        </div>
      </Card>
    </section>
  );
});

export default Search;
