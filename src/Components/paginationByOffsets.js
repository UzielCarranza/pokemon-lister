export const paginationByOffsets = () => {
    let arr = [];
    let offset = 0;
    let pages = [];
    let page = 0;
    for (let i = 1; i < 1154; i++) {
        if (offset <= 1154) {
            offset = offset + 20
            arr.push(offset)

            page += 1;
            pages.push(page)
        }
    }
    return arr;
}



// import axios from "axios";
// import {useState} from "react";
//
//
// export const PaginationByOffsets = () => {
//
//     const [pokemons, setPokemons] = useState(null);
//     let arr = [];
//     let offset = 0;
//     let pages = [];
//     let page = 0;
//     for (let i = 1; i < 1154; i++) {
//         if (offset <= 1154) {
//             offset = offset + 20
//             arr.push(offset)
//
//             page += 1;
//             pages.push(page)
//         }
//     }
//
//     const getNextPage = url => async () => {
//         const response = await axios.get(url);
//         setPokemons(response.data);
//     }
//     return <>
//         <div className="pokemons-grid">
//             {arr.map((item, i) => (
//                 <button onClick={getNextPage(`https://pokeapi.co/api/v2/pokemon/?offset=${arr[i]}&limit=20`)}
//                         key={arr[i]}>{pages[i]} next: {arr[i]}</button>
//             ))}
//         </div>
//     </>
// }
//
//
