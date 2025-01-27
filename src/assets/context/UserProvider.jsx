import { UserContext } from "./UserContext"

const user = {
  name: "John Doe",
  email: "cesar@gmail.com",
  avatar: "https://cdn.icon-icons.com/icons2/2643/PNG/512",
  role: "admin",
  phone: "1234567890",
  address: "1234 Main St",
  city: "Springfield",
}

// eslint-disable-next-line react/prop-types
function UserProvider({ children }) {
  return (
    <UserContext.Provider value={{ name: "Mi nombre es John Doe", user }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider