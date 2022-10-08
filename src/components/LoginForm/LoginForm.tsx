import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import { signIn } from "../../api/account"
import "./LoginForm.css"

export function LoginForm() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault()
    signIn(name, password).then((data) => {
      if (data.success) {
        navigate("/store")
      }
      else {
        alert(data.text)
      }
    })
    
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Username </label>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        
        <label htmlFor="">Password </label>
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        
        <button>
          Log in
        </button>
      </form>
    </>
  )
}