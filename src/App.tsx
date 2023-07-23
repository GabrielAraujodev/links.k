
import perfil from './assets/perfil-k.jpg'
import {  FaTelegram,FaInstagram , FaTwitter } from "react-icons/fa";
import './App.css'


function App() {
  

  return (
    <>
   <div className='flex  flex-col justify-center mb-96'>
      <div className=' flex justify-center mb-9 mt-10'>
        <img className='rounded-full h-56 w-56'  src={perfil} alt="" />
      </div>
      <div className='flex justify-center  mb-7 '>

        <h1 className=' text-2xl text-pink-300'> @Bauducco_bau</h1>
      </div>

      <div>
        <div className='flex justify-center  mb-6'>
          <ul className='flex flex-row gap-4  mb-6'> 
           <a href="">  <li> <FaTelegram className='text-3xl text-blue-500 hover:text-fuchsia-400/75'></FaTelegram> </li></a> 
           <a href="">  <li> <FaInstagram className='text-3xl text-pink-500 hover:text-fuchsia-400/75'></FaInstagram> </li></a> 
           <a href="">  <li> <FaTwitter className='text-3xl text-sky-500 hover:text-fuchsia-400/75'></FaTwitter> </li></a> 

          </ul>

        </div>
      </div>

      <div className=''>
        <div className=' flex justify-center'>
          <ul className=' flex flex-col'>
             <a  className='p-6 max-w-sm mx-auto mb-6  w-80 rounded-xl shadow-md flex items-center space-x-4 outline outline-offset-2 outline-blue-500' href=""> <FaTelegram className='text-3xl text-blue-500 hover:text-fuchsia-400/75'></FaTelegram> <li className='text-xl h font-medium text-pink-300'> -   Grupo  Telegram</li></a>
             <a  className='p-6 max-w-sm mx-auto mb-6 w-80 rounded-xl shadow-md flex items-center space-x-4 outline outline-offset-2 outline-pink-500' href=""> <FaInstagram className='text-3xl text-pink-500 hover:text-fuchsia-400/75'></FaInstagram>   <li className='text-xl h font-medium text-pink-300'>  Instagram </li></a>
             <a  className='p-6 max-w-sm mx-auto mb-6  w-80 rounded-xl shadow-md flex items-center space-x-4 outline outline-offset-2 outline-sky-500' href=""> <FaTwitter className=' text-3xl text-sky-500'></FaTwitter> <li className='text-xl h font-medium text-pink-300'>   Twiter</li></a>
 
        
          </ul>

        </div>
      </div>

   
    </div>
    </>
  )
}

export default App
