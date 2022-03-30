import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';  
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth';




export function Home(){
  const navigate = useNavigate();
  
  const {user, signInWithGoogle} = useAuth()

  async function handleCreateRoom(){

    if(!user){
      await signInWithGoogle()
    }

    navigate('/roms/new');  
  }


  return(
      <div id="page-auth">
        
       <aside>
         <img src={illustrationImg} alt='Ilustração simbolizando perguntas e respostas'/>
         <strong>  Crie salas de Q&A ao-vivo</strong>
         <p> Tireas dúvidas da  sua audiencia em tempo-real</p>    
       </aside>
        <main> 
         <div  className='main-content'>
            <img src={logoImg} alt="Letmeask" />    
              <button onClick={handleCreateRoom} className="create-room">
                <img src={googleIconImg} alt="Logo do Google" />
                      Crie sua sala com o Google 
              </button>
              <div className="separator"> ou entre em uma sala</div>
              <form>
               <input
                
                type="text"
                placeholder='Digite o codígo da sala'
                />
                   <Button type="submit">
                     entrar na sala
                    </Button> 
              </form>
         </div>
         
        </main>
      </div>    
    )
}