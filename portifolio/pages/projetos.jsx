import styles from '../styles/Home.module.css'
import Header from '../Components/Header/Header'
export default function(props){
    const repo= props.repos
    const displayrepo = repo.map(res=>
        <>

            <h2>{res.repo}</h2>
        <p>{res.description}</p>
        <p style={{color:'white', backgroundColor: res.languageColor, borderRadius:'25%'}}>{res.language}</p> 
        </>
       
        )
    return(
    <>
     <Header img={props.info.avatar_url} login={props.info.login}></Header>
        <div className={styles.container}>
            
               {displayrepo}
        </div>
    </>
   
     
    )
}
export async function getStaticProps(){

  
  const inforesponse = await fetch('https://api.github.com/users/emerson-douglas').then(res=> res.json())
    const response = await fetch('https://gh-pinned-repos.egoist.sh/?username=emerson-douglas').then(res=> res.json())
    
    return{
      props: {
        repos: response,
        info: inforesponse,
      }
    }
  }