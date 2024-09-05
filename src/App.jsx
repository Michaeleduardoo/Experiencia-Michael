import "./Style.css";

function App() {
  return (
    <>
      <div id="timeline-content">
        <h1>Experiência</h1>

        <ul className="timeline">
          <li className="event" data-date="Atualmente">
            <h3>Desenvolvedor de Sistemas Jr</h3>
            <p>
              <strong>Reenvie Tecnologia LTDA </strong> <br></br>
              Desenvolver APIs dinâmicas para integrar informações do banco de
              dados ao front-end. Criar componentes dinâmicos e reutilizáveis
              para o front-end em React.
            </p>
          </li>
          <li className="event" data-date="2023 - 2024 ">
            <h3>Estagiário de Desenvolvimento </h3>
            <p>
              <strong>Reenvie Tecnologia LTDA </strong> <br></br>
              Aplicar as melhores práticas de desenvolvimento front-end,
              incluindo otimização de desempenho e acessibilidade
            </p>
          </li>
          <li className="event" id="date" data-date="2022 - 2023 ">
            <h3>Desenvolvimento web</h3>
            <p>
              <strong>Agência T42 · Estágio </strong> <br></br>
              Desenvolvedor web, sou responsável pelo desenvolvimento de sites,
              blogs, sistemas, completos e lojas virtuais. Além disso,
              desenvolvo temas e plugins na plataforma, tornando o site mais
              versátil e atraente, e melhorando muito a experiência do usuário.
            </p>
          </li>
          <li className="event" data-date="2020 - 2022  ">
            <h3>Repositor</h3>
            <p>
              <strong>Atacarejão Do Lar </strong> <br></br>
              Como repositor na loja Utecilio, fui responsável por manter a
              organização e o abastecimento das prateleiras, garantindo que os
              produtos estivessem sempre disponíveis para os clientes.
            </p>
            <p>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/michael-eduardo/"
              >
                Linkedin
              </a>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
