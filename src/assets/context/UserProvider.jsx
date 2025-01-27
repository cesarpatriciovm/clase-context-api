import { UserContext } from "./UserContext"

// eslint-disable-next-line react/prop-types
function UserProvider({ children }) {
  const name = "Mi nombre es John Doe"
  const user = {
    name: "John Doe",
    email: "desafio@desafio.com",
    phone: "123456789",
    address: "Calle Falsa 123",
  }
  return (
    <UserContext.Provider value={{ name, user }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider