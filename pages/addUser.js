import React, { useEffect, useState } from 'react';
import Router from 'next/router'
import fetch from 'node-fetch'
import Joi from '@hapi/joi'

function AddUser() {
  
  const [newUserInfo, setNewUserInfo] = useState({})
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
      if (json.username) Router.push('/')
    })
    .catch(err => {
      console.log(err)
    })    
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const schema = Joi.object({
      id: Joi.allow(null),
      user_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
      first_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
      last_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
      birth_date: Joi.date()
        .required(),
      password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
      repeat_password: Joi.string().required().valid(Joi.ref('password')),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: {allow: false} })
        .required(),
    })
    let {value, error} = schema.validate(newUserInfo, {abortEarly: false})
    
    if (error) alert(error.message)
    else {
      fetch('http://localhost:3000/users', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        // 'Origin': 'http://localhost:3001/'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(newUserInfo) // body data type must match "Content-Type" header
    })
    .then(res => res.json())
    .then(body => {
      console.log(body)
      alert('User registered, taking you to Login page...')
      Router.push('/')
    })
    let resetInfo = {}
    Object.keys(newUserInfo).forEach(key => resetInfo[key] = '')
    setNewUserInfo(resetInfo)
    }
  }
  
  const handleFormChange = (evt) => {
    let newFormInfo = Object.assign({}, newUserInfo)
    newFormInfo[evt.target.name] = evt.target.value
    setNewUserInfo(newFormInfo)
  }

  const handleLogOut = () => {
    document.cookie = "jwt="
    setCurrentUser({username: null})
  }
  return (
  <div>
    Register a new user:
    <form onSubmit={handleSubmit}>
      <label>
        Username: 
        <input onChange={handleFormChange} type="text" name="user_name" value={newUserInfo.user_name}/>
      </label>
      <label>
        First name: 
        <input onChange={handleFormChange} type="text" name="first_name" value={newUserInfo.first_name}/>
      </label>
      <label>
        Last name: 
        <input onChange={handleFormChange} type="text" name="last_name" value={newUserInfo.last_name}/>
      </label>
      <label>
        Birth date: 
        <input onChange={handleFormChange} type="date" name="birth_date" value={newUserInfo.birth_date}/>
      </label>
      <label>
        Email: 
        <input onChange={handleFormChange} type="text" name="email" value={newUserInfo.email}/>
      </label>
      <label>
        Password: 
        <input onChange={handleFormChange} type="password" name="password" value={newUserInfo.password} />
      </label>
      <label>
        Repeat password: 
        <input onChange={handleFormChange} type="password" name="repeat_password" value={newUserInfo.repeat_password} />
      </label>
      <input type="submit" value="Register" />
    </form>
    <button className="showWhenUser" onClick={handleLogOut} type="button">Log out</button>
    <style jsx>{`
      .showWhenUser {
        display: ${currentUser.username ? 'inline' : 'none'}
      }
    `}</style>
  </div>
  )
}

export default AddUser