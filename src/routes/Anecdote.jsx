/* eslint-disable react/prop-types */
const Anecdote = ({anecdote}) => {
    return (
        <div>
            <h1>{anecdote.content}</h1>
            <p>Has {anecdote.votes}</p>
            <p>For more info see <a href={anecdote.info}>{anecdote.info}</a></p>
        </div>
    )
}

export default Anecdote