import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';
import {RiWechatChannelsLine} from 'react-icons/ri'
import {GiMoebiusTriangle} from 'react-icons/gi'
// import { headers } from 'next/dist/client/components/headers';

import {BiSolidMoviePlay} from 'react-icons/bi'
import { Homemade_Apple, Limelight, Roboto } from 'next/font/google'
 
const homemade = Homemade_Apple({
  weight: '400',
  subsets: ['latin'],
})

const limelight = Limelight({
  weight: '400',
  subsets: ['latin'],})

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 
// export default function MyApp({ Component, pageProps }) {
//   return (
//     <main className={roboto.className}>
//       <Component {...pageProps} />
//     </main>
//   )
// }

 const Header = () => {
  return (


    <header className= {roboto.className}>
    <div className='flex flex-row justify-between h-[300px] px-10  text-white py-10 bg-gradient-to-b from-purple-950 '  >
        <div  className={homemade.className} >
          <div className='fkex flex-col'>
            <Link className='flex gap-4 ' href='/'>
            {/* <Image src="/vercel.svg" alt="Logo" height={40} width={40}></Image> */}
            <BiSolidMoviePlay className='my-auto font-bold text-2xl '/>
           <span className='text-2xl   font-extrabold my-auto '>Rollica</span>

            </Link>
         
            </div>
            </div>
        <div >
          <button className='p-4 py-2 bg-black font-bold text-white rounded-full '>Login In / Sign Up</button>
          

       </div>

    </div></header>
  )
}

export default Header;