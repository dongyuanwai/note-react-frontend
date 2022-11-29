import React, { useEffect, useState } from 'react'
import useApi from './useApi'

function App() {
  const [{data},setQuery] = useApi()

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