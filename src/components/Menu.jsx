/* eslint-disable react/prop-types */
import { Link, Routes, Route } from "react-router-dom"
import About from '../routes/About'
import AnecdoteList from '../routes/AnecdoteList'
import CreateNew from '../routes/CreateNew'

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
          <Route  path="/" element={<AnecdoteList anecdotes={props.anecdotes} />} />
          <Route  path="/create" element={< CreateNew />} />
          <Route  path="/about" element={<About />} />
        </Routes>
      </>
    )
}

export default Menu