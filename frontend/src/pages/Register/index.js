import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Register() {

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[whatsapp, setWhatsapp] = useState('');
  const[city, setCity] = useState('');
  const[uf, setUf] = useState('');

  const history = useHistory();

  
  async function handleRegister(e) {
    e.preventDefault();
  
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }

    try {
      const response = await api.post('ongs', data)
      
      alert(`Yor access ID : ${response.data.id}`);
      history.push('/');
    } catch (err) {
      alert('Error in register')
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Sign Up</h1>
          <p>Create your account and help people find cases of your NGO. </p>

          <Link className="back-link" to="/register">
            <FiArrowLeft size={16} color="#E02041" />
            I don't have an account
          </Link>

        </section>

        <form onSubmit={handleRegister} >
          <input 
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          />
          
          <input type="email" 
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
          
          <input 
          type="WhatsApp"
          placeholder="Whatsapp"
          value={whatsapp}
          onChange={e => setWhatsapp(e.target.value)}
          />
 
          <div className="input-group">
            <input 
            placeholder="Cidade"
            value={city}
            onChange={e => setCity(e.target.value)}
            />
            <input 
            placeholder="UF"
            value={uf}
            onChange={e => setUf(e.target.value)} 
            style={{ width: 80 }} 
            />
          </div>

          <button className="button" type="submit">Register</button>

        </form>
      </div>
    </div>

  );

}