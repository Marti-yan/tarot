import styles from "./../global.css";
import style from '../cartomancia/cartomancia.module.css'

const Cartomancia = () => {
  return (
    <>
      <h1>Cartomancia</h1>
      <section className={style.SPrincipal}>
        <span>
          <p>
            Conduz-nos a um mundo mágico e oculto em que as técnicas de
            interpretação têm por objetivo a previsão direta e imediata do
            futuro as mensagens nas cartas são claras e poderosas favoráveis ou
            não. Sempre nos preocupamos em saber do futuro, fosse por qual
            motivo fosse: curiosidade, tirar dúvidas, acalmar, decidir qual o
            caminho a seguir.
          </p>

          <br />

          <p>
            A cartomancia fascina não só as consulentes, mas os próprios
            cartomantes porque muitas vezes as predições são proféticas.
          </p>
          <br />
          <p>
            Embora casa carta tenha seu significado de acordo com o naipe, o
            elemento mais importante para ler a sorte e saber interpretar a
            combinação que elas formam. A mensagem de cada carta altera-se
            conforme onde se posicionar. Existem formas de jogar a cartomancia:
          </p>
        </span>
        <span>
          <img src="./pages/cartomancia/01.jpg" alt="" /> 
          <br />
          <i>"A ferradura do destino"</i> <br />
          <i>"O leque"</i> <br />
          <i>"Previsões diárias"</i> <br />
          <i>"Previsões semanais"</i> <br />
          <p>As letras do alfabeto nesta jogada além de sabermos o tempo em que os acontecimentos ocorrerão, podemos visualizar as respostas sempre muito corretas.</p>
        </span>
        <br />
        <span>
          <img src="./pages/cartomancia/02.png" alt="" /> <br />
          <b>Bastões:</b>
          <p>Corresponde ao Naipe de Paus do baralho comum. Significa        energia, novos empreendimentos, viagens, oportunidades no amor e no trabalho. Este muito relacionado com a vida intelectual, de criação artística. E um Naipe energético, sendo que esta força poderá ser construtiva, mas também poderá ser destrutiva, conforme a orientação que lhe for dada. Ela sugere mudanças, mas sempre com sentidos opostos para melhor ou para pior, sem meios termos. Representa pessoas de caráter energéticas e empreendedor. Esta associada ao Verão.</p>
        </span>
        <span>
          <img src="./pages/cartomancia/03.png" alt="" /> <br />
          <b>Gládios:</b>
          <p>Corresponde ao Naipe de Espadas do baralho comum. Simboliza um grande numero de atitudes, algumas destrutivas outras construtivas. Brigas, ambição, força, coragem, todos os sentimentos aparecem juntos. Representa pessoas com o temperamento esperto e vivo. Esta associada ao Inverno.</p>
        </span>
        <span>
          <img src="./pages/cartomancia/04.png" alt="" /> <br />
          <b>Moedas:</b>
          <p>Corresponde ao Naipe de Ouros no baralho comum. Indica forças materiais em qualquer campo de atividade. Este e o naipe da dedicação da paciência, dos negócios, do comercio e da educação. Representa pessoas com tendência à melancolia, loiras, ruivas a grisalhas. Esta associada à Primavera.</p>
        </span>
        <span>
          <img src="./pages/cartomancia/05.png" alt="" /> <br />
          <b>Taças:</b>
          <p>Corresponde ao Naipe de Copas no baralho comum. Indica amor, generosidade, sensualidade. E o naipe da bondade e da paixão são pessoas de temperamento tranquilo. Associada ao Outono.</p>
        </span>
        
      </section>
    </>
  );
};

export default Cartomancia;
