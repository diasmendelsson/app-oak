'use client';
import Link from 'next/link';
import styles from './list.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Page() {

    
    const [cadastros, setCadastros] = useState([]);

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/cadastro');

        setCadastros(res.data);

    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderedPosts = Object.values(cadastros).map(cadastro => {
        return (
            <table
                key={cadastro._id}
                className={styles.card}
                >
        
                       <tr>
                            <th >Nome</th>
                            <th >Valor</th>
                        </tr>
                        <tr>
                            <td >{cadastro.name}</td>
                            <td >{cadastro.value}</td>
                        </tr>
                    
            </table>
    );
    });

    return (

        <main className={styles.main}>

            <div className={styles.container}>

                <h1 className={ styles.tit}>Lista de Produtos</h1>

                <div>
                   {renderedPosts}
                </div>

                <Link className={styles.pag} href='/'>Cadastrar Produto</Link>  
            </div>

        </main>
    )
}
