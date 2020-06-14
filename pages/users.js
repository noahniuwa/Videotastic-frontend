import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch'

function Users() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/users/all', {credentials: 'include'})
    .then(res => {
      return res.json()
    })
    .then(result => {
      
      if (result.error) {
        throw result.error
      } 
      setData(result)
    })
    .catch(err => {
      console.log(err)
      setData([err])
    })
    
  }, []);

  if (data[0] === 'Unauthorized') {
    return ('error')
  } 

  return (
  <div>
    Welcome to Next.js!
    <list>  
      { 
        data.map(item => {
          console.log(item)
          return <li key={Math.random()}>
            <strong>User: </strong>{item.user_name}
          </li>
        })
      } 
    </list>
  </div>
  )
}

export default Users