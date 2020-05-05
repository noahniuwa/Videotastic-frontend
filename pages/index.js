import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch'



function HomePage() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3001/users/all')
    .then(res => {
      return res.json()
    })
    .then(result => {
      console.log(result)
      setData(result)
    })
    
  }, []);

  return (
  <div>
    Welcome to Next.js!
    <list>
      { data.map(item => {
      console.log(item)
      return <li key={Math.random()}>
        <strong>User: </strong>{item.user_name}
      </li>
    })} 
    </list>
  </div>
  )
}

export default HomePage