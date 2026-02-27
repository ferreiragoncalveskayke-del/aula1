import Image from "next/image";
import styles from "./page.module.css";

function Home() {
  return (
    <div>
      <h1>React com Next JS</h1>
      <h2>aula de introdução</h2>
      <h3>leiaute e estilização</h3>
      <p>nesta aula iremos entender o uso de css global e local.</p>
    </div>
  );
}


const Card = () => {
  return (
    <div>
      <h3>Aula introdução</h3>
      <h3>Aula Estilização</h3>
      <h3>Aula Componentes</h3>
    </div>
  );
}

function Home2() {
  return (
    <div>
      <h1>React com Next JS</h1>
    </div>
  );
}


export default Home;