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
  const [pokemonData, setPokemonData] = useState({
    status: 'idle',
    pokemon: null,
  })

  const incrementCount = () => setCount(count + 1)
  useEffect(() => {
    const populatePokemonData = async () => {
      const pokemon = await fetchPokemon(count)

      setPokemonData({
        status: 'success',
        pokemon,
      })
    }

    populatePokemonData()
  }, [count])
  return (
    <div>
      <button onClick={incrementCount}>{count}</button>
      {pokemonData.status === 'success' && (
        <div>
          <p>Pokemon info:</p>
          <code>{pokemonData.pokemon.name}</code>
        </div>
      )}
    </div>
  )
}

function Usage() {
  return <Pokemon />
}
Usage.title = 'Pokemon: UseEffect Fetch'

export default Usage
