import PESSOAS_IMG from '../../../Public/duotone.png'
import FormularioDeLogin from './login/formularioDeLogin'
import logo from '../../../Public/schneider-logo-white.png'


import { Link } from 'react-router-dom';


export default function PaginaInicial() {
    return (
        <main className=" flex flex-col h-screen text-gray-500 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
            <header className=' pt-2 flex justify-between absolute w-full h-16 '>
                <img className=' ml-2 h-full ' src={logo} alt="logo schneider branco" />
                <Link className=' flex justify-center items-center mr-2 shadow-xl transition-all bg-neutral-800 text-white text-2xl py-2 px-6 rounded hover:rounded-3xl font-bold cursor-pointer text-center ' to={'/cadastro'}><button className=' text-center'>Cadastre-se</button></Link>
            </header>
            <div className=' h-1/2'>
                <img className=' w-full h-full object-cover ' src={PESSOAS_IMG} alt="Pessoas rindo imagem duotônica" />
            </div>
            <div className=' overflow-hidden w-full flex h-1/2 '>
                <div className=' w-1/2 p-6'>
                    <h1 className="  text-2xl lg:text-4xl text-sch-green">Bem-vindo à Rede Social Interna da Schneider.</h1>
                    <p className="text-justify text-xl font-thin">A SchneiderStream tem como objetivo unir funcionários em prol da sustentabilidade, compartilhando ideias e construindo um futuro sustentável coletivamente.</p>
                    <nav className='w-3/3 my-8'>
                        <ul className=' w-full flex justify-evenly items-center '>
                            <Link className=' shadow border rounded-md border-gray-600 p-2 hover:underline transition-all text-gray-600 text-ss font-bold cursor-pointer text-center' to={'/info/pitch'}><li >Video Pitch</li> </Link>
                            <Link className=' shadow border rounded-md border-gray-600 p-2 hover:underline transition-all text-gray-600 text-sl font-bold cursor-pointer text-center' to={'/info/sobre'}><li >Sobre o projeto</li> </Link>
                        </ul>
                    </nav>
                </div>
                <div className=' w-1/2 flex justify-center items-center h-full bg-white shadow-md rounded px-8'>
                    <FormularioDeLogin />
                </div>
            </div>
        </main>
    )
}