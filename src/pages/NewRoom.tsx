import { Link } from 'react-router-dom';
import { Button } from '../components/Button';  
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';

export function NewRoom(){
   return(
        <div id="page-auth">
        
         <aside>
         <img src={illustrationImg} alt='Ilustração simbolizando perguntas e respostas'/>
         <strong>  Crie salas de Q&A ao-vivo</strong>
         <p> Tireas dúvidas da  sua audiencia em tempo-real</p>    
         </aside>
         <main className='main-content'>
              <div>
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