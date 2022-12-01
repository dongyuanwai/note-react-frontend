import React, { useEffect, useState, useMemo } from 'react'

function App() {
  const [count,setCount] = useState(0)
  const handleClick = ()=>{
    setTimeout(()=>{
      console.log("这是count的值"+count)
    },3000)
  }
  return (
    <div className="App">
      <button onClick={()=>setCount(count+1)}>点击{count}此</button>
      <button onClick={handleClick}>展示点击次数</button>
      <h1>开始项目</h1>
    </div>
  )
}

export default App