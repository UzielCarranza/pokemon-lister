export const Pagination = ({PokePerPage, totalPokes, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPokes / PokePerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <ul>
                {pageNumbers.map(number => (
                    <li
                        key={number}>
                        <button
                            onClick={() => paginate(number)}
                        >
                            page: {number}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )


}