import { useState } from 'react'

export const Form = ({ addHandler }) => {
    const [recipe, setRecipe] = useState({ name:'', ingredients:''})
    return (
        <form id="addForm" onSubmit={(e) => {
            e.preventDefault()
            addHandler(recipe)
            setRecipe({ ingredients:'', name:''})
        }}>
            <input type="text" placeholder='Homemade salad' value={recipe.name} onChange={(e) => {setRecipe({ ...recipe, name:e.target.value })}}/>
            <input type="text" placeholder='Tomato, salad, winegret...' value={recipe.ingredients} onChange={(e) => {setRecipe({ ...recipe, ingredients:e.target.value})}}/>
            <button type='submit' disabled={(recipe.name == '') || (recipe.ingredients == '')}>Add Recipe</button>
        </form>
    )
}