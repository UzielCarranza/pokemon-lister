export const getPokemonType = (type) => {
    return type === "grass" || type === "bug" ? `#4FB06D` : type === "fire" ? `#F07857` : type === "water" ? '#43A5BE'

        : type === "normal" ? `#A8A878` : type === "poison" ? `#A040A0` : type === "electric" ? `#F8D030` : type === "ground" ? `#E0C068` :
            type === "fairy" ? `#F0B6BC` : type === "fighting" ? `#C03028` : type === "psychic" ? `#F85888` : type === "rock" ? `#B8A038` :
                type === "ghost" ? `#705898` : type === "ice" ? `#98D8D8` : type === "dragon" ? `#7038F8` : type === "dark" ? `#705848` :
                    type === "steel" ? `#B8B8D0` : type === "flying" ? `#A890F0`
                        : `#CBD6E2`;

}