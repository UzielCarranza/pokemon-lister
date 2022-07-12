import {useEffect, useState} from "react";
import axios from "axios";

export const EvolvesTo = ({url, pokemonName}) => {
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [firstEvolution, setFirstEvolution] = useState(null)
    const [data, setData] = useState(null);
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
            if (selectedPokemon === firstEvolution.chain.species.name) {
                axios.get(`https://pokeapi.co/api/v2/pokemon-form/${firstEvolution.chain.evolves_to[0].species.name}`)
                    .then(res => {
                        setData(res.data)
                    })
                if (data !== null) {
                    setSecondForm({
                        name: firstEvolution.chain.evolves_to[0].species.name,
                        img: data.sprites.front_default
                    })
                }

            }
        }
    }, [data, firstEvolution, selectedPokemon])

    return secondForm !== null ? (
        <div>
            <p>Next Evolution:</p>
            <p>{secondForm.name}</p>
            <img src={secondForm.img} alt="next-form"/>
        </div>
    ) : ' '
}