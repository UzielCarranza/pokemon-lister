import {useEffect, useState} from "react";
import axios from "axios";

export const EvolvesTo = ({url, pokemonName}) => {

    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [firstEvolution, setFirstEvolution] = useState(null)
    const [secondForm, setSecondForm] = useState(null);

    useEffect(() => {
        if (pokemonName !== null) {
            setSelectedPokemon(pokemonName)
            axios.get(`${url}`)
                .then(res => {
                    setFirstEvolution(res.data)

                })
        }
    }, [pokemonName, url])

    useEffect(() => {
        if (firstEvolution !== null) {
            console.log(firstEvolution)
            if (firstEvolution.chain.species !== undefined) {
                // if selected pokemon's name is equal to the pokemon in chain of evolution
                if (selectedPokemon === firstEvolution.chain.species.name && firstEvolution.chain === true) {
                    axios.get(`https://pokeapi.co/api/v2/pokemon-form/${firstEvolution.chain.evolves_to[0].species.name}`)
                        .then(res => {
                            setSecondForm({
                                name: firstEvolution.chain.evolves_to[0].species.name,
                                img: res.data.sprites.front_default
                            })
                        })

                } else{
                    console.log("does not evolves")
                }
            }
            //if it is not the same
            else if (selectedPokemon !== firstEvolution.chain.species.name) {
                // do a get request based on the pokemon's name
                axios.get(`https://pokeapi.co/api/v2/pokemon-species/${selectedPokemon}/`)
                    .then(res => {
                        // if it matches the name of the pokemon to the current evolution
                        if (res.data.name === selectedPokemon) {
                            // do a get request to get the image of the pokemon
                            axios.get(`${res.data.evolution_chain.url}`)
                                .then(res => {
                                    axios.get(`https://pokeapi.co/api/v2/pokemon-form/${res.data.chain.evolves_to[0].evolves_to[0].species.name}`)
                                        .then(res => {
                                            if (res.data.name !== selectedPokemon) {
                                                setSecondForm({
                                                    name: res.data.name,
                                                    img: res.data.sprites.front_default
                                                })
                                            }
                                        })

                                })
                        }

                    })
            }
        }

    }, [firstEvolution, selectedPokemon])

    return secondForm !== null ? (
        <div>
            <p>Next Evolution:</p>
            <p>{secondForm.name}</p>
            <img src={secondForm.img} alt="next-form"/>
        </div>
    ) : ' '
}