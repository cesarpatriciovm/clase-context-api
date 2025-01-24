import { UserContext } from "../assets/context/UserContext"
import { useContext } from 'react'

function HomePage() {
  const { name } = useContext(UserContext)
  return (
    <>
      <div className="text-center ">HomePage</div>
      <span className="">{name}</span>
    </>
  )
}

export default HomePage