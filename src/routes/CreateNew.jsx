/* eslint-disable react/prop-types */
import { useField } from "../hooks/index"

const CreateNew = (props) => {
    const author = useField('text')
    const info = useField('text')
    const content = useField('text')

    const authorv2 = (({reset, ...rest}) => rest) (author)
    const infov2 = (({reset, ...rest}) => rest) (info)
    const contentv2 = (({reset, ...rest}) => rest) (content)
  
    const handleSubmit = (e) => {
      e.preventDefault()
      props.addNew({
        content: content.value,
        author: author.value,
        info: info.value,
        votes: 0
      })
    }

    const onReset = () => {
      author.reset()
      info.reset()
      content.reset()
    }
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input name='content' {...contentv2} />
          </div>
          <div>
            author
            <input name='author' {...authorv2} />
          </div>
          <div>
            url for more info
            <input name='info' {...infov2} />
          </div>
          <button>create</button>
          <button type="button" onClick={onReset} >Reset</button>
        </form>
      </div>
    )
  
}

export default CreateNew