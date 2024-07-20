import {useFetch} from "../../hooks/useFetch"
import {useParams, useHistory} from "react-router-dom"
import { useEffect } from "react"
import './Recipe.css'
import {useTheme} from '../../hooks/useTheme'

export default function Recipe() {
  const {id} = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const {data:recipes, isPending, error} = useFetch(url)
  const history = useHistory()
  const {mode} = useTheme()

  useEffect( ()=> {
    if (error){
        // redirect
        //history.goBack()
        
        setTimeout(() => {
            history.push('/')
        }, 2000)

    }
}, [error, history])
  return (
    <div className={`recipe ${mode}`}>
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {recipes && (<> 
      <h2 className="page-title">{recipes.title}</h2>
      <p>Takes {recipes.cookingTime} to cook.</p>
      <ul>
        {recipes.ingredients.map(ing => <li key={ing}>{ing}</li>)}
      </ul>
      <p className="method">{recipes.method}</p>
      </>)}
    </div>
  )
}
