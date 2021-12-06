import "./style.css";
import React from "react";
import Framedsfadsfa from '../../images/Framedsfadsfa.svg';
import Logotipo from '../../images/Logotipo.svg';
import BigLogo from '../../images/BigLogo.svg';
import LoginEmail from "../../Components/LoginSenha/LoginS";
import facebook from "../../images/facebook.png";
import google from "../../images/google.png";





export default function Login(){
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
            <div class="SocialLogin">
            <div class= "google">
            <input type="submit" id="google-button" value="Login com Google"></input>
            </div>
            <div class= "facebook">
            <input type="submit" id="facebook-button" value="Login com Facebook"></input>
           </div>
           </div>
           <div class= "LoginSide">
                 <LoginEmail/>
            </div>
         
           


        </div>
        

        </main>


   
    )
  }
  
