import * as React from 'react';
import "./index.css";


export default function App() {
    return (
      <h2 class="page">
        <div class="searchbar">
          <input  placeholder="Pequisar">      
          </input>

        </div>
        <div class="security">
          <div class="security-status">
            Esta rua é considerada segura
            <div class="status">
              Foram registrados x acidentes nesse trajeto entre 2015 e 2021.
              
            </div>
              <button class="fav-button">
                Adicionar aos favoritos
              </button>
          </div>
         
          

        </div>
        <div class="comments">
          pt3
        </div>        
      </h2>
      
    );
  }