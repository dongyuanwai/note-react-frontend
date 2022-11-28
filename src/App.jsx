import React, { useEffect, useState } from 'react'

const getList = (query) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('query', query)
      resolve([6, 7, 8, 9, 10])
    }, 3000)
  })
}

function App() {
  const [data, setData] = useState([1, 2, 3, 4, 5])
  const [query, setQuery] = useState('')

  useEffect(() => {
    (async () => {
      const data = await getList(query)
      console.log('data', data)
      setData(data)
    })()
  }, [query])
  return (
    <div className="App">
      {
        data.map((item, index) => <span key={index}>{item}</span>)
      }
      <input onChange={(e) => setQuery(e.target.value)} type="text" placeholder='请输入搜索值' />
    </div>
  )
}

export default App