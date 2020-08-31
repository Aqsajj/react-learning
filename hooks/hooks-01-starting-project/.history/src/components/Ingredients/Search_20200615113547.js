import React, { useState, useEffect } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadedIngredients } = props

  const [inputFilter, setInputFilter] = useState('')

  const query = inputFilter.length === 0 ? ''
    : `?orderBy="title"&equalTo="${inputFilter}"`

  useEffect(() => {
    fetch('https://react-hooks-data-cb7b3.firebaseio.com/ingredients.json' + query)
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
  }, [inputFilter, onLoadedIngredients])

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text"
            value={inputFilter}
            onChange={
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
