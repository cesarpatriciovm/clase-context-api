import { UserContext } from "./UserContext"

function UserProvider({ children }) {
  return (
    <UserContext.Provider value={{ name: "Mi nombre es John Doe" }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider