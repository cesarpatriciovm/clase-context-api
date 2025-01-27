import { UserContext } from "../assets/context/UserContext"
import { useContext } from 'react'

function HomePage() {
  const { name, user } = useContext(UserContext)
  return (
    <div className="container mx-auto p-4">
      <div className="text-center ">HomePage</div>

      <span className='font-medium text-center'>{name}</span>
      <br />
      <span>{user.email}</span>
    </div>
  )
}

export default HomePage