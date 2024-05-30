/* eslint-disable react/prop-types */
import { Link, Routes, Route } from "react-router-dom"
import About from '../routes/About'
import AnecdoteList from '../routes/AnecdoteList'
import CreateNew from '../routes/CreateNew'
import Anecdote from "../routes/Anecdote"

const Menu = (props) => {
    const padding = {
      paddingRight: 5
    }
    return (
      <>
        <div>
          <Link style={padding} to='/' >anecdotes</Link>
          <Link style={padding} to='/create' >create new</Link>
          <Link style={padding} to='/about' >about</Link>
        </div>

        <Routes>
          <Route path="/" element={ <AnecdoteList anecdotes={props.anecdotes} /> } />
          <Route path="/create" element={ < CreateNew addNew={props.addNew} /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/anecdotes/:id" element={ <Anecdote anecdote={props.anecdote} /> } />
        </Routes>
      </>
    )
}

export default Menu