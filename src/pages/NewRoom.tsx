//import { useContext } from 'react';
//import { AuthContext } from '../contexts/AuthContext';

import { Link } from 'react-router-dom';
import { Button } from '../components/Button';  
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';
//import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth';

//import { couldStartTrivia } from 'typescript';



export function NewRoom(){
 //const{user} = useAuth()
  return(
        <div id="page-auth">
        
         <aside>
         <img src={illustrationImg} alt='Ilustração simbolizando perguntas e respostas'/>
         <strong>  Crie salas de Q&A ao-vivo</strong>
         <p> Tireas dúvidas da  sua audiencia em tempo-real</p>    
         </aside>
         <main>
          
              <div className='main-content'>
              <img src={logoImg} alt="Letmeask" />   
             
              <h2> Criar uma nova sala</h2>
              <form>
               <input  
                type="text"
                placeholder='Nome da sala'
                />
                   <Button type="submit">
                     Criar sala
                    </Button> 
              </form>
                <p>
                  Quer entrar em uma sala existente? <Link to="/"> Clique aqui </Link>
                </p>
               </div>
           </main>
      </div>    
    )
}