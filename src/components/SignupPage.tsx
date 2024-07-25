import { useState } from "react"
import { signUpWithEmail } from "../services/auth"
import { User } from "firebase/auth"

function SignUpPage() {
  
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState<User>();

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const user = signUpWithEmail(email, password);
    setUser(user!);
  }

  return(
    <>
    <div>
      <form>
        <div>
          <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <br />
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <button onClick={onSubmit}>Create User</button>
        
        <div>
          { user && <p>user</p> }
        </div>
      </form>
    </div>
    </>
  )
  
}

export default SignUpPage 