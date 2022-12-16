import React, { useContext } from 'react';

import { listContext } from '../App';

const Search = () => {

    const [state, dispatch] = useContext(listContext);

    const handleSearch = (e) => {

      e.preventDefault();

      dispatch({

          type:"search",

          payloat:{search:e.target.value}

      })

    }


  return (

    <>

            <input type="text" onChange={handleSearch} value={state.filterText}  className="input__style bg-blue-100" placeholder='search list ...'/>

    </>

  )
}

export default Search
