import { FadeLoader } from 'react-spinners'

const Loader = () => {
   return (
      <div className={`flex flex-col justify-center items-center relative`} >
         <FadeLoader size={100} color='#001B79' className='absolute top-[50%] left-[45%]' />
      </div>
   )
}

export default Loader