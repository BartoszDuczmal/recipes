export const List = (props) => {
    return (
        <div className='task'>
            <div className='recipeText'>
                <p className='recipeTitle'>{props.name}</p>
                <p className='recipeDescribe'>{props.describe}</p>
            </div>
            <div className='icons'>
                <span className={props.isLike ? 'material-symbols-outlined liked':'material-symbols-outlined'} id='favorite' onClick={ (e) => {
                    props.favoriteHandler(props.dataId)
                }}
                >favorite</span>
                <span className="material-symbols-outlined" id='delete' onClick={ (e) => {
                    props.deleteHandler(props.dataId)
                }}
                >delete</span>
            </div>
        </div>
    )
}