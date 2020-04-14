// Pokemon: Fetching Data
import React, {useState, useEffect} from 'react'

const fetchPokemon = async pokemonId => {
  const pokemon = await window
    .fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(res => res.json())

  return pokemon
}

function Pokemon() {
  const [count, setCount] = useState(0)

  const incrementCount = () => setCount(count + 1)

  return (
    <div>
      <button onClick={incrementCount}>{count}</button>
    </div>
  )
}

function Usage() {
  return <Pokemon />
}
Usage.title = 'Pokemon: UseEffect Fetch'

export default Usage
