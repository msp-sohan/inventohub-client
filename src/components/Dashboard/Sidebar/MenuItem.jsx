import { NavLink } from 'react-router-dom'

const MenuItem = ({ label, address, icon: Icon }) => {
   return (
      <NavLink
         to={address}
         end
         className={({ isActive }) =>
            `flex items-center px-4 py-2  transition-colors duration-300 transform  hover:bg-gray-300    hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700  border-r-4 border-blue-500 rounded-e' : 'text-gray-600 dark:text-gray-300'
            }`
         }
      >
         <Icon className='w-5 h-5' />

         <span className='mx-4 font-medium'>{label}</span>
      </NavLink>
   )
}

export default MenuItem