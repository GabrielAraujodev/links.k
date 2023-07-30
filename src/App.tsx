
import perfil from './assets/perfil.jpg'
import {  FaInstagram , FaTwitter,FaGithub ,FaLinkedinIn} from "react-icons/fa";
import './App.css'


function App() {
  

  return (
    <>
   <div className='flex  flex-col justify-center mb-96'>
      <div className=' flex justify-center mb-9 mt-10'>
        <img className='rounded-full h-56 w-56'  src={perfil} alt="" />
      </div>
      <div className='flex justify-center  mb-7 '>

        <h1 className=' text-2xl text-white'> @Gabrielalves_16</h1>
      </div>

      <div>
        <div className='flex justify-center  mb-6'>
          <ul className='flex flex-row gap-4  mb-6'> 
           <a href="https://www.linkedin.com/in/gabriel-augusto-alves-de-araujo-98b89b23a/" target='_blank'>  <li> <FaLinkedinIn className='text-3xl text-blue-500  hover:text-stone-100/75'></FaLinkedinIn> </li></a> 
           <a href="https://github.com/GabrielAraujodev" target='_blank'>  <li> <FaGithub className='text-3xl text-gray-950 hover:text-stone-100/75'></FaGithub> </li></a> 
           <a href="https://www.instagram.com/gabrielalves_16/" target='_blank'>  <li> <FaInstagram className='text-3xl text-pink-500 hover:text-stone-100/75'></FaInstagram> </li></a> 
           <a href="https://twitter.com/gabitus_?t=Da-uvCnY6ZxRpa7KcnZpwQ&s=08" target='_blank'>  <li> <FaTwitter className='text-3xl text-sky-500 hover:text-stone-100/75'></FaTwitter> </li></a> 

          </ul>

        </div>
      </div>

      <div className=''>
        <div className=' flex justify-center'>
          <ul className=' flex flex-col'>
             <a  className='p-6 max-w-sm mx-auto mb-6  w-80 rounded-xl shadow-md flex items-center space-x-4 outline outline-offset-2 outline-blue-500' href="https://www.linkedin.com/in/gabriel-augusto-alves-de-araujo-98b89b23a/" target='_blank'> <FaLinkedinIn className='text-3xl text-blue-500 hover:text-stone-100/75'></FaLinkedinIn> <li className='text-xl h font-medium text-slate-100'> -   Linkedim</li></a>
             <a  className='p-6 max-w-sm mx-auto mb-6  w-80 rounded-xl shadow-md flex items-center space-x-4 outline outline-offset-2 outline-blue-950' href="https://github.com/GabrielAraujodev" target='_blank'> <FaGithub className='text-3xl text-black hover:text-stone-100/75'></FaGithub> <li className='text-xl h font-medium text-slate-50'> -   GitHub</li></a>
             <a  className='p-6 max-w-sm mx-auto mb-6 w-80 rounded-xl shadow-md flex items-center space-x-4 outline outline-offset-2 outline-pink-500' href="https://www.instagram.com/gabrielalves_16/" target='_blank'> <FaInstagram className='text-3xl text-pink-500 hover:text-stone-100/75'></FaInstagram>   <li className='text-xl h font-medium text-slate-50'>  Instagram </li></a>
             <a  className='p-6 max-w-sm mx-auto mb-6  w-80 rounded-xl shadow-md flex items-center space-x-4 outline outline-offset-2 outline-sky-500' href="https://twitter.com/gabitus_?t=Da-uvCnY6ZxRpa7KcnZpwQ&s=08" target='_blank'> <FaTwitter className=' text-3xl text-sky-500   hover:text-stone-100/75'></FaTwitter> <li className='text-xl h font-medium text-slate-50'>   Twiter</li></a>
 
        
          </ul>

        </div>
      </div>

   
    </div>
    </>
  )
}

export default App
