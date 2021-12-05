import React from "react";
import { useState } from "react/cjs/react.development";
import {MdEmail, MdLock} from "react-icons/md"
import './Login-senha.css';

function LoginEmail(){
    const [email, setEmail]= useState('')
    const[password, setPassword] = useState('')
    const[show] = useState(false)

    
    return(
        <div className= "LoginESenha">
            <div className= "Email">
                <h1>Email:</h1>
                <MdEmail/>
                <input
                type="email"
                placeholder=" Digite seu Email"
                value= {email}
                onChange={e=> setEmail(e.target.value)}
                />
            </div>
            <div className= "Senha">
                <h2>Senha:</h2>
                <MdLock/>
                <input
                placeholder="Digite sua senha"
                type= {show ? "text": "password"}
                value={password}
                onChange= {e => setPassword(e.target.value)}
                />

            </div>
            <button type= "submit">
                Entrar
            </button>
             

        </div>
    )
}

export default LoginEmail