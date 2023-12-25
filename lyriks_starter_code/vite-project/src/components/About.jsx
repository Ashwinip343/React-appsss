
import { Moon_Dance} from 'next/font/google'
const hm=Moon_Dance({
  weight:'400',
  subsets: ['latin']
})

const About = ()=> {
  return (
    <div className={hm.className}>
    <div className='p-20 text-[170px] flex justify-center font-bold'> 
      ABOUT PAGE
    </div></div>
  )
}
export default About();
