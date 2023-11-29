import { FadeLoader } from 'react-spinners'

const Loader = () => {
   return (
      <div className={`flex flex-col justify-center items-center h-screen relative`} >
         <FadeLoader size={100} color='#FF5B22' className='absolute top-[50%] left-[45%]' />
      </div>
   )
}

export default Loader