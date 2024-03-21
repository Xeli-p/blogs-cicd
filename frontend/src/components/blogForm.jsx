import { useState } from 'react'

const PostBlogForm = ({ handlePostBlog }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const addBlog = async(event) => {
    event.preventDefault()
    await handlePostBlog({
      author: author,
      title: title,
      url: url
    })
    setAuthor('')
    setTitle('')
    setUrl('')
  }

  return (
    <div>
      <h2>create new blog</h2>
      <form onSubmit={addBlog}>
        <p>title: <input
          id='titleinput'
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder='write title here' /></p>
        <p>author: <input
        id='authorinput'
          value={author}
          onChange={event => setAuthor(event.target.value)}
          placeholder='write author here' /></p>
        <p>url: <input
          id='urlinput'
          value={url}
          onChange={event => setUrl(event.target.value)} 
          placeholder='write url here' /></p>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default PostBlogForm