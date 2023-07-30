import "./OptionCard.scss";

const OptionCard = () => {
    const xlink = "http://www.w3.org/1999/xlink";
    return (
        <div className="optionCard">
            <div className="container">
                <div className="option">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink={xlink} aria-hidden="true" role="img" className="navbar_icon__mXULJ iconify iconify--material-symbols" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 21q-.825 0-1.413-.588T4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.275-.2.575-.3T12 3.5q.325 0 .625.1t.575.3l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4v-7h-4v7H6Z"></path></svg>
                    <span>Home</span>
                </div>
                <div className="option">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink={xlink} aria-hidden="true" role="img" className="navbar_icon__mXULJ iconify iconify--fluent" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M3 3a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm6.779 1.584l.042.032a2 2 0 1 0-.042-.032ZM6.268 6A2 2 0 1 1 9.73 7.998A2 2 0 0 1 6.268 6ZM2.5 6h2.67a3.013 3.013 0 0 0 .594 3H5.5a2.501 2.501 0 0 0-2.355 1.658a3.733 3.733 0 0 1-.933-.543C1.46 9.51 1 8.616 1 7.5A1.5 1.5 0 0 1 2.5 6Zm8 3a2.5 2.5 0 0 1 2.354 1.658c.34-.139.655-.32.934-.543C14.54 9.51 15 8.616 15 7.5A1.5 1.5 0 0 0 13.5 6h-2.67c.11.313.17.65.17 1a2.99 2.99 0 0 1-.764 2h.264Zm1.387 1.928c.073.176.113.37.113.572c0 1.116-.459 2.01-1.212 2.615C10.047 14.71 9.053 15 8 15c-1.053 0-2.047-.29-2.788-.885C4.46 13.51 4 12.616 4 11.5A1.496 1.496 0 0 1 5.5 10h5a1.5 1.5 0 0 1 1.387.928Z"></path></svg>
                    <span>Community</span>
                </div>
                <div className="option">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink={xlink} aria-hidden="true" role="img" className="navbar_icon__mXULJ iconify iconify--ic" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"></path></svg>
                    <span>Search</span>
                </div>
                <div className="option">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink={xlink} aria-hidden="true" role="img" className="navbar_icon__mXULJ iconify iconify--material-symbols" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.525 10.625q.35-.225.35-.625t-.35-.625L12.65 6.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038l4.875-3.125ZM8 18q-.825 0-1.413-.588T6 16V4q0-.825.588-1.413T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.588 1.413T20 18H8Zm-4 4q-.825 0-1.413-.588T2 20V7q0-.425.288-.713T3 6q.425 0 .713.288T4 7v13h13q.425 0 .713.288T18 21q0 .425-.288.713T17 22H4Z"></path></svg>
                    <span>Courses</span>
                </div>
            </div>
        </div>
    )
}

export default OptionCard