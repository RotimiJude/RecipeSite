import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import './Searchbar.css'

export default function Searchbar() {
    const [term, setTerm] = useState('')
    const history = useHistory()

    const handleSearch = (e) => {
        e.preventDefault()

        history.push(`/search?q=${term}`)


    }
  return (
    <div className='searchbar'>
        <form onSubmit={handleSearch}>
            <label htmlFor='search'>
                <input
                type='text'
                id='search'
                onChange={(e) => setTerm(e.target.value)}
                value={term}
                required/>
            </label>

        </form>
    </div>
  )
}
