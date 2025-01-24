import { UserContext } from "../assets/context/UserContext"
import { useContext } from 'react'

function LoginPage() {
  const { name } = useContext(UserContext)
  return (
    <>
      <div>LoginPage</div>
      <span>{name}</span>
    </>
  )
}

export default LoginPage