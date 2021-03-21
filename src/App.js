import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Amo JSX!!!!!</h1>
      <h2>JSX é um fofo, lindo, divo, sem defeitos</h2>
      <h3>
        Porque sem ele, para escrever html dentro de um arquivo js, eu teria que
        fazer assim:
      </h3>
      <p>
        React.createElement('div', null, React.creactElement('strong', null
        'vish'))
      </p>
      <strong>Mas com JSX eu posso usar as maravilindas tags HTML ;)</strong>
      <h3>
        PS: Por isso tenho que importar o módulo React, para que o processador
        JavaScript Babel converta minha estrutura jsx nesse mesmo código maluco
        usando React.createElement()
      </h3>
    </div>
  );
}
