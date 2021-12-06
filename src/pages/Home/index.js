import "./style.css";
import Frame from '../../images/Frame.svg';
import img5 from '../../images/img-5.svg';


const Home = () => {
  return(
    <main>
      <navbar className="navbar container">
        <div id="logo">
          Transitei
        </div>
        <nav>
          <ul>
            <li>Home</li>
          </ul>
          <ul>
            <li>About Us</li>
          </ul>
          <ul>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="buttons">
          <button className="login"> 
            <a href="/login">
              Entrar
            </a> 
          </button>
          <button className="cadastro"> Cadastrar </button>
        </div>
      </navbar>
      <section className="banner container">
        <div className="col-text">
          <h1>Monte o seu trajeto com mais segurança.</h1>
          <p>Encontre formas mais rápidas de chegar a seu destino por lugares mais seguros e evite acidentes e ruas perigosas.</p>
          <div>
            <div className="buttons">
              <button className="login"> Entrar </button>
              <button className="cadastro"> Cadastrar </button>
            </div>
            <p>Quer saber mais? Entre em contato</p>
          </div>
        </div>
        <div className="col"> 
          <img src={Frame} alt="Animação de carro" />
        </div>
      </section>
      <section className="about-us container">
        <div className="col">
          <h3>
            Focamos em garantir...
          </h3>
          <div className="card-container">
            <div id="card1" className="card">
              <p>Caminhos mais rápidos para chegar o seu destino.</p>
            </div>
            <div id="card2" className="card">
              <p>Facilidade para se deslocar com o que você quiser.</p>
            </div>
            <div id="card3" className="card">
              <p>Sensação de segurança para ir e vir.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <button className="btn login">Venha nos conhecer</button>
        </div>
      </section>
      <section className="container">
        <div className="col-text">
          <h3>
            Lorem ipsum
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam odio leo, tristique eu justo vel, scelerisque laoreet velit. Aliquam erat volutpat. Mauris quis varius libero. Donec viverra ut ante in consequat. </p>
        </div>
        <div className="col">
          <img src={img5} alt="" />
        </div>
      </section>
      <footer>...</footer>
    </main>
  )

}
export default Home;