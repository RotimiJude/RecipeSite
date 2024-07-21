import {useFetch} from "../../hooks/useFetch"
import {useParams, useHistory} from "react-router-dom"
import { useEffect, useState } from "react"
import './Recipe.css'
import {useTheme} from '../../hooks/useTheme'
import { projectFirestore } from "../../firebase/config"

export default function Recipe() {
  const {id} = useParams()
  //  const history = useHistory()
  const {mode} = useTheme()

  const [recipes, setRecipes] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() =>{
    setIsPending(true)

    projectFirestore.collection('recipes').doc(id).get().then((doc) =>{
      if (doc.exists){
        setIsPending(false)
        setRecipes(doc.data())
      }else{
        setIsPending(false)
        setError('could not fine that recipe you are looking for')
      }

    })
  },[id])

//   useEffect( ()=> {
//     if (error){
//         // redirect
//         //history.goBack()
        
//         setTimeout(() => {
//             history.push('/')
//         }, 2000)

//     }
// }, [error, history])
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
