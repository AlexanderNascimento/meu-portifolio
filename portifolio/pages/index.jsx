import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../Components/Header/Header'
import Hstyles from '../styles/Header.module.css'


export default function Home(Props) {
  return (
    <>
    <Header img={Props.info.avatar_url} login={Props.info.login}></Header>
    <div className={styles.container}>
      <h1>{Props.info.login}</h1>
      <h1>HABILIDADES</h1>
    <div className={styles.card}>
      
      <div>
        <ul>
        <h4>soft Skills</h4>
          <li>ingles instrumental</li>
          <li>trabalho em equipe</li>
          <li>organização</li>
          <li>comunicativo</li>
          <li>pontualidade</li>
        </ul>
      </div>

      <div>
          <ul> 
          <h4>Skills</h4>
          <li>Javascript</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>PHP</li>
          <li>React/ Nextjs</li>
          <li>Vuejs</li>
          <li>API</li>
        </ul>
      </div>
      </div>

      <h1>FORMAÇÃO ACADEMICA</h1>
      <div className={styles.card}>
      <ul>
        <li>Ciencia da computação - UNINOVE 2021</li>
        <li>Formação React - ALURA 2021</li>
      </ul>
      </div>

    </div>

    </>
  )
}
export async function getStaticProps(){

  const response = await fetch('https://api.github.com/users/emerson-douglas').then(res=> res.json())
  
  return{
    props: {
      info: response,
    }
  }
}
