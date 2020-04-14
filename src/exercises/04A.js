// Pokemon: Fetching Data
import React, {useState, useEffect} from 'react'

// 🐨 1. you'll want fetchPokemon, and useEffect
// you can use `useEffect` to fetch data on component mount.
// https://reactjs.org/docs/hooks-reference.html#useeffect

const fetchPokemon = async pokemonId => {
  const pokemon = await window
    .fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(res => res.json())

  return pokemon
}

function Pokemon() {
  const [count, setCount] = useState(0)

  // 🐨 2. create a `pokemonData and setPokemonData` with `useState()`
  // 🐨 3. create a `useEffect` callback here which
  //    uses the `fetchPokemon` to populate data in to the pokemonDataState

  // By default, effects run after every render. This is normally what
  // you want, but if you want you can optimize things by ensuring they
  // are only called when you specifically want to.
  // 💯 add a second argument to your `useEffect` which lists an
  // array of variables. We can do this because we only want it to run when count changes.
  // You can also pass an empty array if you want to run the effect only during the initial render.

  // 🐨 4. Render the pokemon name below the button, if the request has been resolved successfully:

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
