import * as React from 'react';
import "./index.css";
import SearchBar from "../../Components/SearchBar/SearchBar"
import BookData from "../../data/Data.json"
import Body from '../../Components/Body/index'

export default function Search() {
  const nome = "Linaldo"

    return (      
      <div className="page">
        <div className="App">
          <SearchBar placeholder="Pesquisar" data={BookData} />
        </div>
        <Body nome = {nome}/>

        <div className="comments">
          Comentarios
        </div>        
      </div>
      
    );
  }