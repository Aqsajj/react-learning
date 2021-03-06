import React, { useState, useEffect } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const [inputFilter, setInputFilter] = useState('')
  useEffect(() => { }, [inputFilter])
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
