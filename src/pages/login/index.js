import "./style.css";
import React from "react";
import Framedsfadsfa from '../../images/Framedsfadsfa.svg';
import Logotipo from '../../images/Logotipo.svg';
import BigLogo from '../../images/BigLogo.svg';
import LoginEmail from "../../Components/LoginSenha/LoginS";
import GoogleLogin from "../../images/GoogleLogin.png"
import FacebookLogin from "../../images/FacebookLogin.png"





const Login = () => {
    return(
        <main>
        <div class="split left">
            <div class="centered">
                <img src= {Framedsfadsfa} alt="Frame Moto"/>
            </div>
            <div class= "Up Left">
                <input type="image" src={Logotipo} alt= "Logo"/>
            </div>
        </div>
        <div class="split right">
            <div class= "ButtonRight">
            <input type="image" src= {BigLogo} alt= "Big Logo"/>
            </div>
            <div class= "SocialLogin">
            <input type="image" src= {GoogleLogin} alt= "GoogleLogin"/>
           <input type="image" src= {FacebookLogin} alt= "FacebookLogin"/>
           </div>
           <div class= "LoginSide">
                 <LoginEmail/>
            </div>
         
           


        </div>
        

        </main>


   
    )
  }
  export default Login;
  
