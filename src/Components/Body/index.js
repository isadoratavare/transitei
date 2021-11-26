import grafico from '../../Components/images/grafico.png';
import icon from "../../Components/images/icon.png"

export default function Body(props){
    return(
        <section className= "banner">
        <div className="security">
          <div className="security-status">{props.nome}
            <div className="status">Foram registrados x acidentes nesse trajeto entre 2015 e 2021.</div>
            <button className="fav-button">
                <div>
                  <img src={icon} alt="coração" />
                  <spam className="buttom-text"> Adicionar aos favoritos</spam>                     
                </div>              
                
            </button>
          </div>            
        </div> 
          <div className= "img-bola">
            <img src={grafico} alt="grafico" /> 
          </div>       
      </section>
    )
}