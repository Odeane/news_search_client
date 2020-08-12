import React, { useState, useEffect } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'

const NewsSearch = () => {

  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  useEffect(() => {
    getArticles()
  }, [query])

  const getArticles = async () => {
    await axios.get(`http://newsapi.org/v2/everything?q=${query}&from=2020-07-12&sortBy=publishedAt&<apiKey>`)
      .then(response => {
        setArticles(response.data.articles)

      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setQuery(search)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          data-cy="news-search"
          placeholder="Input search term"
          onChange={handleChange}
          value={search}
        />
        <Button id='btn' type='submit'
          data-cy="search-submit">
          Search
        </Button>
      </form>
      <div className= 'article'>
        {
          articles.map(article =>
            <div >
            <h2 >{article.author}</h2>
              <h1 >{article.title}</h1>
            </div>
          )
        }
      </div>
    </>
  )
}

export default NewsSearch
