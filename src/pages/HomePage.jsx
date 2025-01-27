import { UserContext } from "../assets/context/UserContext"
import { useContext } from 'react'

function HomePage() {
  const { name, user } = useContext(UserContext)
  return (
    <>
      <div className="text-center m-5">HomePage</div>
      <div className="flex flex-col items-center">
        <span className="">{name}</span>
        <span className="p-2">email: {user.email}</span>
      </div>
    </>
  )
}

export default HomePage