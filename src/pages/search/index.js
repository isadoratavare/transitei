import * as React from 'react';
import "./index.css";
import grafico from '../../Components/images/grafico.png';
import icon from "../../Components/images/icon.png"
import SearchBar from "../../Components/SearchBar/SearchBar"
import BookData from "../../data/Data.json"

export default function App() {
    return (
      <div class="page">
        <div className="App">
          <SearchBar placeholder="Pesquisar" data={BookData} />
        </div>
        <section className= "banner">
          <div class="security">
            <div class="security-status">Esta rua é considerada segura
              <div class="status">Foram registrados x acidentes nesse trajeto entre 2015 e 2021.</div>
              <button class="fav-button">
                  <div>
                    <img src={icon} alt="coração" /> 
                    <div class="buttom-text"> Adicionar aos favoritos</div>
                  </div>              
              </button>
            </div>            
          </div> 
            <div class= "img-bola">
              <img src={grafico} alt="grafico" /> 
            </div>       
        </section>
       

       
        <div class="comments">
          Comentarios
        </div>        
      </div>
      
    );
  }