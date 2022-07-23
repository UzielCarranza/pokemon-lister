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
            pages[page] = {
                page: page,
                offset: offset
            }
        }
    }
    return pages;
}


