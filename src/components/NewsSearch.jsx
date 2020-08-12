import React, { useState } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'

const NewsSearch = () => {

  


  const [article, setArticle] = useState([])
  

  const getArticles = async () => {
    await axios.get('http://newsapi.org/v2/everything?q=obama&from=2020-07-12&sortBy=publishedAt&apiKey=56fed1dc6cf34f1ba3d7ff9699de4c0a')
      .then(response => {
        console.log(response.data.articles)
        setArticle(response.data.articles)
      })
      .catch(error => {
      console.log(error)
    })
  }

 const handleChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <>
      <Input
        type="text"
        data-cy="news-search"
        placeholder="Input search term"
        onChange={handleChange}
      />
      <Button onClick={getArticles}
        data-cy="search-submit">
        Search
        </Button>
    </>
  )
}

export default NewsSearch
