import { useState, useReducer } from 'react'
import './App.css'
import { Form } from './components/form'
import { Search } from './components/search'
import { List } from './components/list'

function reducer(recipes, action) {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [...recipes, { ...action.payload, isLike: false , dataId: Date.now() }]
    case 'DELETE_RECIPE':
      return recipes.filter((r) => r.dataId !== action.payload.id)
    case 'FAVORITE_RECIPE':
      return recipes.map((recipe) => recipe.dataId === action.payload.id ? { ...recipe, isLike: !recipe.isLike } : recipe)
    default:
      return recipes
  }
}

function App() {
  const [recipes, dispatch] = useReducer(reducer, [])
  const [toFilter, setToFilter] = useState('')
  const [searchByLike, setSearchByLike] = useState(false)

  function searchHandler(data) {
    setToFilter(data);
  }
  function searchByLikeHandler(data) {
    setSearchByLike(data);
  }
  function addHandler(data) {
    dispatch({ 
      type: 'ADD_RECIPE',
      payload: {
        name: data.name,
        ingredients: data.ingredients,
      }
     })
  }
  function deleteHandler(data) {
    dispatch({ 
      type: 'DELETE_RECIPE',
      payload: {
        id: data,
      }
     })
  }
  function favoriteHandler(data) {
    dispatch({ 
      type: 'FAVORITE_RECIPE',
      payload: {
        id: data,
      }
     })
  }

  const filteredList = recipes.filter((r) =>
    (r.name.toLowerCase().includes(toFilter.toLowerCase()) || r.ingredients.toLowerCase().includes(toFilter.toLowerCase())) &&
    (searchByLike ? r.isLike === true : true)
  )
  
  return (
    <>
      <h1 id="title">Recipes Page Project</h1>
        <Form addHandler={addHandler} />
        <Search searchHandler={ searchHandler } searchByLikeHandler={ searchByLikeHandler } />
        { filteredList.map((r) => (
          <List key={r.dataId} dataId={r.dataId} name={r.name} describe={r.ingredients} isLike={r.isLike} deleteHandler={ deleteHandler } favoriteHandler={ favoriteHandler }/>
        )) }
    </>
  )
}

export default App
