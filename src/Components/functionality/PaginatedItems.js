import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

// //TODO: NEEDS TO offset TO 1270
// //TODO: BRAKES WHEN GOING TO PAGE 5 FROM OFFSET 60 TO OFFSET 16
// //https://www.npmjs.com/package/react-paginate

// Example items, to simulate fetching from another resources.

const items = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320,
    340, 360, 380, 400, 420, 440, 460, 480, 500, 520, 540, 560, 580, 600, 620, 640, 660, 680,
    700, 720, 740, 760, 780, 800, 820, 840, 860, 880, 900, 920, 940, 960, 980, 1000, 1020, 1040, 1060,
    1080, 1100, 1120, 1140, 1160, 1180, 1200, 1220, 1240, 1260, 1270]

export const PaginatedItems = ({ itemsPerPage, getResultsOfPagination }) => {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = 64;

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
        getResultsOfPagination(`https://pokeapi.co/api/v2/pokemon/?offset=${newOffset}&limit=20`)
    };

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    );
}