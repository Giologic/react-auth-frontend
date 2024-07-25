import { useState } from "react"

function SignUpPage() {
  
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return(
    <>
    <div>
      <form>
        <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

        <p>{username}</p>
        <p>{password}</p>
      </form>
    </div>
    </>
  )
  
}

export default SignUpPage 