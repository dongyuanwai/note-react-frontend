import React, { useEffect, useState } from 'react'
// 模拟请求
const getList = (query) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('query', query)
      resolve([6, 7, 8, 9, 10])
    }, 3000)
  })
}
// 自定义 hook
const useApi = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5])
  const [query, setQuery] = useState('')

  useEffect(() => {
    (async () => {
      const data = await getList()
      console.log('data', data)
      setData(data)
    })()
  }, [query])

  return [{ data }, setQuery];
}

export default useApi