import React from 'react';
import Link from 'next/link';


const Header = () => {
    return ( 
        <header className='py-8 flex flex-col md:flex-row items-center justify-between'>
            <Link href="/">

                <img className='w-64 mb-8 md:mb-0' src='sendimg.png'/>

            </Link>
            
            <div>
                <Link legacyBehavior href="/login">
                    <a className='bg-blue-700 px-5 py-3 rounded-lg text-white font-bold mr-2'>Iniciar sesión</a>
                </Link>
                <Link legacyBehavior href="/crearcuenta">
                    <a className='bg-black px-5 py-3 rounded-lg text-white font-bold'>Crear cuenta</a>
                </Link>

            </div>
        </header>
     );
}
 
export default Header;