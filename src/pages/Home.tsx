import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';  
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import {auth, firebase} from '../services/firebase'
import '../styles/auth.scss';

export function Home(){
  const navigate = useNavigate();
  
  function handleCreateRoom(){
    const provider =new firebase.auth.GoogleAuthProvider(); 
    
    auth.signInWithPopup(provider).then(result =>{
      console.log(result);
    })
    navigate('/roms/new');
  }


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