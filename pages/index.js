import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch'
import Link from 'next/link'

function HomePage() {
  
  const [loginInfo, setLoginInfo] = useState({"username": '', "password": ''})
  const [currentUser, setCurrentUser] = useState({username: null})
  
  useEffect(() => {
    fetch('http://localhost:3000/currentuser', {
      credentials: 'include', 
      headers: {
        'Origin': 'http://localhost:3001/'
      },
    })
    .then(res => {
      return res.json()
    })
    .then(json => {
      setCurrentUser({username: json.username})
      if (json.username) {   
        console.log(json) 
        console.log('username')
      } 
      else {
        console.log(json) 
        console.log('nousername')
      }
    })
    .catch(err => {
      console.log(err)
     })
    
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetch('http://localhost:3000/login', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Origin': 'http://localhost:3001/'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(loginInfo) // body data type must match "Content-Type" header
    })
    .then(res => res.json())
    .then(body => {
      setCurrentUser({username: body.username})
      // if(body.jwt) Document.cookie = {'jwt': body.jwt}
    })
    
    setLoginInfo({"username": '', "password": ''})
  }
  
  const handleFormChange = (evt) => {
    let newInfo = Object.assign({}, loginInfo)
    newInfo[evt.target.name] = evt.target.value
    setLoginInfo(newInfo)
  }

  const handleLogOut = () => {
    document.cookie = "jwt="
    setCurrentUser({username: null})
  }
  return (
  <div>
    Welcome to Videotastic{currentUser.username ? ` ${currentUser.username}!` : "!"}
    <form onSubmit={handleSubmit}>
      <div className='hideWhenUser'>
      <label>
        Username: 
        <input onChange={handleFormChange} type="text" name="username" value={loginInfo.username}/>
      </label>
      <label>
        Password: 
        <input onChange={handleFormChange} type="password" name="password" value={loginInfo.password} />
      </label>
      <input type="submit" value="Login" />
      <Link href="/adduser">
        <a><button>Sign Up</button></a>
      </Link>
      </div>
    </form>
    <button className="showWhenUser" onClick={handleLogOut} type="button">Log out</button>
  <style jsx>{`
    .hideWhenUser {
      display: ${currentUser.username ? 'none' : 'inline'};
    }
    .showWhenUser {
      display: ${currentUser.username ? 'inline' : 'none'};
    }
  `}</style>
  </div>
  )
}

export default HomePage