"use client"

import { Homemade_Apple, Moon_Dance } from "next/font/google";
import { Ubuntu_Condensed } from "next/font/google";
import {motion} from 'framer-motion'
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
const hm=Moon_Dance({
    weight:'400',
    subsets: ['latin']
})
const Header = () => {
  return (
    <div className={hm.className}>
    
    <div initial={{scale:0.8,opacity:0}} animate={{scale:1,opacity:1,transition:{delay:0.5}}} className="flex flex-row justify-between p-10 font-bold text-[40px] ">
        <div className="" >Itss Ashh

        </div>
   
    <div className="flex flex-row gap-10 ">
        <Link href={'/'}>Home</Link>
        <Link href={'/About'}>About</Link>
        <Link href={'/Contact'}>Contact</Link>
    </div>
    </div>
    </div>
  )
}

export default Header;