import { useState } from 'react'

export const Search = (props) => {
    const [toggleLike, setToggleLike] = useState(false)

    return (
        <div id="searchContainer">
            <input type="text" placeholder='Search recipe' id='search' onChange={(e) => {props.searchHandler(e.target.value)}}/>
            <div id="heartDiv">
                <span className={toggleLike ? 'material-symbols-outlined liked':'material-symbols-outlined'} id='favorite' onClick={ (e) => {
                    props.searchByLikeHandler(!toggleLike)
                    setToggleLike(!toggleLike)
                }}
                >favorite</span>
            </div>
        </div>
    )
}