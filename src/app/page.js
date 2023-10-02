'use client'
import { NumericFormat } from 'react-number-format';
import styles from './page.module.css'
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';


export default function Home() {


  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [available, setAvailable] = useState('Sim');


  const onSubmit = async (e) => {

    e.preventDefault();

    await axios.post('http://localhost:4000/cadastro', {

      name, description, value, available

    })

    setName('');
    setDescription('');
    setValue('');
    setAvailable('Sim');

  };



  return (
    <main className={styles.main}>

      <h1 className={styles.tit}>Cadastrar Produtos</h1>

      <form onSubmit={onSubmit}  className={styles.form}>
        <label >Nome Produto:
          <input className={styles.input1}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>Descrição Produto:
          <input className={styles.input2}
            type="text"
            value={description}
            onChange={(e) => { setDescription(e.target.value) }}
            required
          
          />
        </label>
        
        <label>Valor Produto:
          <NumericFormat className={styles.input3} prefix={'R$ '} thousandSeparator=","
            value={value}
            onChange={(e) => { setValue(e.target.value) }}
            required

            
          />
        </label>

        <label>
          Disponivel para Venda:
          <select className={styles.select}
              
            value={available}
            onChange={(e) =>{setAvailable(e.target.value)}}
          >
            <option className={styles.option} value='Sim'>Sim</option>
            <option className={styles.option} value='Não' >Não</option>
          </select>
        </label>

        <button className={styles.btn} type="submit">Cadastrar Produto</button>
        
      </form>

      <Link className={styles.pag} href='/lista-produtos'>Ver Produtos Cadastrados</Link>
      

 
    </main>
  )
}


