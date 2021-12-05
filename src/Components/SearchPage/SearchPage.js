import React, { Component } from "react";
import BookData from "../../data/DataRua.json"
import SearchBar from "../SearchBar/SearchBar";
import graficoregular from '../../Components/images/graficoregular.png';
import graficoseguro from '../../Components/images/graficoseguro.png';
import graficoperigoso from '../../Components/images/graficoperigoso.png';
import icon from "../../Components/images/icon.png"

class DefinicaoRua extends Component {

    constructor() {
        super();
        this.state = {
            ruas: BookData,
            RuaSelecionada: {}
        }
    }
    OnRuaSelecionada = (event) => {
        console.log(Object.keys(this.state.RuaSelecionada))
        this.setState({ RuaSelecionada: event })

    }
    render() {
        const ruaPerigosa = "Esta rua é considerada perigosa";

        const ruaSegura = "Esta rua é considerada segura";

        const ruaRegular = "Esta rua é considerada regular";

        const imgRuaSegura = <img src={graficoseguro} alt="grafico" />;

        const imgRuaRegular = <img src={graficoregular} alt="graficoregular" />;

        const imgRuaPerigosa = <img src={graficoperigoso} alt="grafico" />;



        const rua = this.state.RuaSelecionada

        return (
            <div className="page">
                <SearchBar data={BookData} OnSelected={this.OnRuaSelecionada} />
                {(Object.keys(rua).length === 0) ? (
                    <section className="banner">
                        <div className="security1">
                            <div className="security-status">Pesquise o nome da rua que deseja consultar
                                <div className="statusP">Consultas rápidas a qualquer hora!</div>

                            </div>
                        </div>

                    </section>) : (
                    <div>
                        <section className="banner">
                            <div className="security">
                                <div className="security-status" style={{ color: rua.acidentes >= 75 ? "green" : rua.acidentes < 75 && rua.acidentes >= 45 ? "rgb(176, 179, 0)" : "rgb(146, 0, 0)" }}>{rua.acidentes >= 75 ? ruaSegura : rua.acidentes < 75 && rua.acidentes >= 45 ? ruaRegular : ruaPerigosa}
                                    <div className="status" >Foram registrados {rua.acidentes} acidentes nesse trajeto entre 2015 e 2021.</div>
                                    <button className="fav-button">
                                        <div>
                                            <img className = "buttom-heart" src={icon} alt="coração" />
                                            <div2 className="buttom-text"> Adicionar aos favoritos</div2>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="img-bola">
                            {rua.acidentes >= 75 ? imgRuaSegura : rua.acidentes < 75 && rua.acidentes >= 45 ? imgRuaRegular : imgRuaPerigosa}
                                
                            </div>
                        </section>
                        <section className="commentsbanner">
                            <div className="comments">
                                <div className = "commenttext">comentarios:</div>
                                <button className="commentbutton">
                                    Comentar
                                </button>
                            </div>
                        </section>
                    </div>
                )
                }
            
            </div>
        )
    }
}


export default DefinicaoRua;