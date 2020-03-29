import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';

import api from '../../services/api';

import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon() {

  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault()
    
    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile')

    } catch (err) {
      alert('Login failed, try again')
    }
  }

  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>
        
        <form onSubmit={handleLogin}>

          <h1>Make your logon</h1>
          <input 
          placeholder="Your ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          />
          <button className="button" type="submit">Enter</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041"/>
            I Don't have an account
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes"/>
    </div>
  )
}