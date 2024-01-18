import Pagamento from "../../components/pagamento";
import style from "../home/home.module.css";
import styles from "./../global.css";

function Home() {
  return (
    <>
      <h1>Taro na Net</h1>
      <section className={style.textSection}>
        "Ao fazer seu jogo, não desejo determinar o seu futuro, E sim ajudar em
        sua melhor escolha para seu dia de amanhã. Desejo que seu caminho seja
        brando aos teus pés, Que o sol brilhe cálido sobre tua face, e que as
        chuvas. Caiam severas em teus campos, E que DEUS te guarde nas palmas de
        suas mãos! "
      </section>
      <br />
      <section>
        {" "}
        {/*options*/}
        <span>
          Trabalho com Taro há muitos anos. Tenho o dom de ver o futuro e
          orientar para que a pessoa consiga seguir o caminho certo, aquele
          caminho que Deus quer que ela siga e seja feliz. Mais de 40.000
          consultas e reconhecida internacionalmente, atuando em vários países…
        </span>
        <span>
          Vários tipos de taros tais como: Baralho Cigano Taro Mitológico Taro
          dos Anjos Taro do Amor Cartomancia Taro dos Negócios Numerologia
          através do Taro Mesa Radiônica Quântica e Radiestesia
        </span>
        <br />
        <br />
        <div>
          <h5>Experiências:</h5>

          <ol>
            <li>
              <h4>Baralho cigano:</h4>
              <span>
                É a própria magia; têm o poder de nos aconselhar; fazer-nos
                sonhar; conhecer-nos; acreditar e perceber nosso mundo interior.
                Nos ajudam a trilhar o caminho correto, nos mostram o presente e
                o futuro para que possamos nos harmonizar e visualizar nossos
                sonhos.
              </span>
            </li>
            <li>
              <h4>Taro dos anjos:</h4>
              <span>
                È um dos taros que mais exerce fascínio sobre as pessoas depois
                do taro cigano. Cada carta corresponde a uma hierarquia de
                anjos. Ele é certeiro até mesmo em perguntas diretas. Responde
                com uma exatidão enorme. Também cada pessoa tem um Anjo
                correspondente ao dia de seu nascimento. E o Salmo referente ao
                dia que nos protege e abre caminho.
              </span>
            </li>
            <li>
              <h4>Taro dos negócios:</h4>
              <span>
                É um taro que nos da uma certeza se um negócio vai dar certo ou
                não, nos orienta a esperar ou não, é muito direto nas respostas.
              </span>
            </li>
            <li>
              <h4>Symbolon (Taro cigano):</h4>
              <span>
                É o taro da alma. São tiradas 7 cartas para um determinada
                situação e ele responde junto com a época que vai acontecer
                através da astrologia. Exemplo se for sob o signo de aries é de
                Março a Abril.
              </span>
            </li>

            <li>
              <h4>Taro Mitológico:</h4>
              <span>
                É o taro do inconsciente. São cartas que descrevem deuses,
                deusas, heróis e heroínas da mitologia grega, com todos os seus
                conhecidos arquétipos, cujas experiências espelham perfeitamente
                as mudanças e os padrões da vida atual. São cartas que exercem
                um grande fascínio sobre as pessoas.
              </span>
            </li>
            <li>
              <h4>Taro do amor:</h4>
              <span>
                É composto pelos arcanos maiores (segredos maiores). Responde
                perfeitamente sobre perguntas do amor e do relacionamento na
                vida das pessoas. Se a pessoa tem interesse em saber se a outra
                vai voltar, se vai ficar, se vai dar certo e o que precisa saber
                para manter o relacionamento amoroso, já que o amor é a força
                propulsora que dá movimento ao mundo.
              </span>
            </li>

            <li>
              <h4>Numerologia:</h4>
              <span>
                A ciência dos números que nos fascina e nos mostra claramente os
                números que regem nossas vidas.
                <ul>
                  <li>
                    Número do destino: o que devemos aprender para ter sucesso
                    na vida.
                  </li>
                  <li>Número do carma: o que você deve aprender nesta vida.</li>
                  <li>
                    Tendências ocultas: desejos de encarnações passadas que
                    podem atrapalhar sua vida presente.
                  </li>
                  <li>
                    Número da resposta subconsciente: como você reage aos
                    imprevistos.
                  </li>
                  <li>Número da expressão: suas habilidades naturais.</li>
                  <li>
                    Número da motivação: onde você encontra sua motivação.
                  </li>
                  <li>
                    Número da personalidade: o que você quer ou parece ser.
                  </li>
                </ul>
              </span>
            </li>
            <li>
              <h4>Cartomancia:</h4>
              <span>
                Conduz-nos a um mundo mágico e oculto em que as técnicas de
                interpretação têm por objetivo a previsão direta e imediata do
                futuro as mensagens nas cartas são claras e poderosas favoráveis
                ou não. Sempre nos preocupamos em saber do futuro, fosse por
                qual motivo fosse: curiosidade, tirar duvidas, acalmar, decidir
                qual o caminho a seguir. Quando se faz uso de um oráculo , o que
                estamos buscando são meios de estabelecer contato com nossa
                porção inconsciente , que na verdade possui as respostas a todas
                as nossas dúvidas… A cartomancia fascina não só as consulentes,
                mas os próprios cartomantes porque muitas vezes as predições são
                proféticas. Embora cada carta tenha seu significado de acordo
                com o naipe, o elemento mais importante para ler a sorte e saber
                interpretar a combinação que elas formam. A mensagem de cada
                carta altera-se conforme onde se posicionar.
              </span>
            </li>
          </ol>
        </div>

        <Pagamento />
      </section>
    </>
  );
}

export default Home;
