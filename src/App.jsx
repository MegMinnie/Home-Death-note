import "./App.css";
import Header from "./componentes/Header/Header";
import Cards from "./componentes/Cards/Cards";
import Footer from "./componentes/Footer/Footer";
import capaAnime from "./assets/capaAnime.webp";
import shinigamiSemNome from "./assets/shinigamiSemNome.webp";
import anthony from "./assets/anthony.webp";
import Gelus from "./assets/Gelus.webp";
import ide from "./assets/ide.jpg";
import ryuga from "./assets/ryuga.jpg";
import Jack from "./assets/Jack.webp";
import jonh from "./assets/jonh.jpeg";
import Kanzo from "./assets/Kanzo.webp";
import takada from "./assets/takada.jpeg";
import kyosuke from "./assets/kyosuke.jpg";
import lawliet from "./assets/lawliet.jpg";
import light from "./assets/light.webp";
import lind from "./assets/lind.png";
import matt from "./assets/matt.jpeg";
import mello from "./assets/mello.jpg";
import misa from "./assets/misa.webp";
import naomi from "./assets/naomi.webp";
import near from "./assets/near.png";
import pedro from "./assets/pedro.webp";
import raye from "./assets/raye.jpeg";
import reiMorte from "./assets/reiMorte.webp";
import ren from "./assets/ren.png";
import ryuk from "./assets/ryuk.jpg";
import sachiko from "./assets/sachiko .jpeg";
import sayu from "./assets/sayu.jpeg";
import shuichi from "./assets/shuichi .jpeg";
import sidoh from "./assets/sidoh.webp";
import soichiro from "./assets/soichiro.webp";
import stephen from "./assets/stephen.webp";
import teru from "./assets/teru.jpg";
import touta from "./assets/touta.jpeg";
import watari from "./assets/watari.webp";
import logoAnime from "./assets/logoAnime.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <Header className="Header" logoAnime={logoAnime} />
      <main>
        <img src={capaAnime} alt="capa" />
        <h2 className="titulo"> Conheça os personagens do anime Death Note</h2>
        <section className="container">
          <Cards
            personagem={anthony}
            nome="Anthony Rester"
            descricao="Anthony Rester era membro da SPK (Special Provision for Kira), um grupo de investigação dos Estados Unidos para capturar Kira criado com o apoio da CIA e do FBI. Como Kira só previsava do nome e do rosto de uma pessoa para matá-la, o sobrenome de Anthony era falso, na verdade ele se chamava 'Anthony Carter'."
          />

          <Cards
            personagem={shinigamiSemNome}
            nome="Deus da Morte sem-nome"
            descricao="O Deus da Morte sem-nome só aparece em um episódio do anime onde ele escuta a história Ryuk sobre do Ligth Yagami, o usuário do caderno da morte. Além disso, seu personagem também pode ser encontrado no filme 'Death Note Releitura 1: A Versão do Deus da Morte' que resume todos os episódios do primeiro arco/temporada que vai do episódio 1 ao 25."
          />

          <Cards
            personagem={Gelus}
            nome="Gelus"
            descricao="Gelus é um deus da morte que observava uma humana chamada Misa Amane e previndo sua morte, matou o seu assasino usando o caderno da morte. Isso lhe custou a vida, mas pelo menos conseguiu prolongar a vida da humana que gostava. Antes dele se desintegrar derrubou a caneta deixando escorrer as lágrimas e após virar pó o deus da morte Ren entrega o caderno da morte a Misa, pois acreditava que era o desejo final de Gelus."
          />

          <Cards
            personagem={ide}
            nome="Hideki Ide"
            descricao="Hideki Ide é um membro da Força-Tarefa Japonesa que trabalhou no caso do  Kira e ajudou na captura de Kyosuke Higuchi após ser exposto como suspeito. Além disso, ele também é amigo de Shuichi Aizawa."
          />

          <Cards
            personagem={ryuga}
            nome="Hideki Ryuga"
            descricao="Hideki Ryuga é ator que a irmã de Ligth Yagami gosta de acompanhar e ele aparece no episódio 8 quando Sayu está assistindo um filme onde o ator participa do elenco e seu irmão Ligth chama a garota para jantar."
          />

          <Cards
            personagem={Jack}
            nome="Jack Neylon"
            descricao="Jack Neylon é um membro da Máfia que possuia envolvimento com tráfico de drogas e vendas de armas ilegais. Ele usou o caderno da morte do Sidoh e se assustou com o Shinigami, mas acharam que ele estava sob efeito de droga."
          />

          <Cards
            personagem={jonh}
            nome="John McEnroe"
            descricao="John McEnroe é um membro do SPK (Special Provision for Kira) e oficial do FBI que trabalhou no caso de Kira."
          />

          <Cards
            personagem={Kanzo}
            nome="Kanzo Mogi"
            descricao="Kanzo Mogi é um agente esforçado da Força-Tarefa Japonesa que trabalhou no caso de Kira. Embora ele seja um personagem secundário na série Deth Note e nos filmes, ele ganha mais destaque no Drama de TV, onde é um dos personagens principais."
          />

          <Cards
            personagem={takada}
            nome="Kiyomi Takada"
            descricao="Kiyomi Takada​ é uma ex-colega de classe e antiga namorada de Light Yagami. Além disso ela se torna a porta-voz de Kira na emissora de NHN TV."
          />

          <Cards
            personagem={kyosuke}
            nome="Kyosuke Higuchi"
            descricao="Kyosuke Higuchi foi o terceiro kira do anime Death note. Antes de ter a posse do caderno ele trabalhava como diretor executivo da Yotsuba e usou o poder que ganhou como kira para punir criminosos e prejudicar outras empresas aumentando as ações da Yotsuba."
          />

          <Cards
            personagem={lawliet}
            nome="L Lawliet"
            descricao="Lawliet mais conhecido como L, é o antagonista da série de anime/mangá Death Note. Ele é considerado o melhor detetive do universo da trama por nunca falhar em seus casos e isso lhe dar o poder de investigar apenas os crimes ou criminosos que depertem seu interesse. Na história ele assume o desafio de capturar o serial killer que ficou famoso pelo nome kira, cujo a indentidade é desconhecida, mas acaba virando o principal suspeito e tem que provar que Ligth Yagami é o Kira."
          />

          <Cards
            personagem={light}
            nome="Light Yagami"
            descricao="Light Yagami é o protagonista da série Death Note. No anime ele é um estudante popular e inteligente que possui muito senso de justiça e acredita que o mundo está podre e as pessoas más deveriam ser severamente punidas. Ao encontrar o Caderno da Morte e descobir como usá-lo ele começa a matar vários criminosos chamando a atenção das pessoas, especialmente da polícia e do detetive L. Após uma seríe de assasinatos ele é rotulado como 'Kira' e vira alvo de investigação pelo Japão."
          />

          <Cards
            personagem={lind}
            nome="Lind L. Tailor"
            descricao="Lind L. Tailor era um criminoso condenado a morte que foi usado por L para determinar a localização de Kira."
          />

          <Cards
            personagem={matt}
            nome="Matt"
            descricao="Matt é um investigador e cúmplice do Mello que ajudou no caso do Kira."
          />

          <Cards
            personagem={mello}
            nome="Mello"
            descricao="Mello, ou Mihael Keehl, é um órfão da Wammy's House e um dos sucessores de L em Death Note. Impulsivo e determinado, ele segue métodos extremos para capturar Kira como se envolver e persuadir a máfia a ajudá-lo no caso, contrastando com a abordagem mais calculista de Near."
          />

          <Cards
            personagem={misa}
            nome="Misa Amane"
            descricao="Misa Amane é uma celebridade japonesa, que trabalha como modelo, atriz e cantora. Ela se torna o segundo Kira aṕos o Shinigami Ren entregar o caderno da morte de outro Shinigami chamado Gelus que usou seu caderno para salvá-la resultando na sua morte. Além disso, Misa se aliou ao Ligth Yagami, o primeiro Kira, que matou os assasinos pela morte dos seus pais se vingando no lugar dela."
          />

          <Cards
            personagem={naomi}
            nome="Naomi Misora"
            descricao="Naomi Misora é uma ex-agente do FBI que começa sua investigação sobre o Kira após desconfiar que seu noivo e agente Raye Penber foi assasinato  no japão junto com outros dozes agentes do FBI que estavam ajudando o L na investigação."
          />

          <Cards
            personagem={near}
            nome="Near"
            descricao="Near é um órfão da Wammy's House e um dos sucessores de L em Death Note. Após a morte do detetive L, Near reuniu provas relacionadas com o caso Kira, o que levou quatro anos. Depois, ele apresentou suas conclusões ao presidente dos Estados Unidos, tornando-se o chefe da Provisão Especial para Kira e continuando a busca por ele. Além disso, ao fazer contato pela primeira vez com Light Yagami, desconfiou que ele fosse o Kira."
          />

          <Cards
            personagem={pedro}
            nome="Pedoro Kollet"
            descricao="Pedoro Kollet é um mafioso que ao lado de Eddie estão monitorarando Kanichi Takimura."
          />

          <Cards
            personagem={raye}
            nome="Raye Penber"
            descricao="Raye Penber é um dos agentes do FBI chamados por L para investigar o time da polícia japonesa e suas famílias. Enquanto investigava a família Yagami e do Comissário Takimura, Raye é morto pelo Kira, deixando sua noiva Naomi sem notícias."
          />

          <Cards
            personagem={reiMorte}
            nome="Rei da morte"
            descricao="O Rei da Morte, também conhecido como o Rei Shinigami, é o ser que governa todos os Shinigami no Mundo dos Deuses da Morte."
          />

          <Cards
            personagem={ren}
            nome="Rem"
            descricao="Rem é a Shinigami responsável por entregar o caderno da morte que pertencia ao deus da mortr Gelus para Misa Amane. Para impedir que Misa fosse pega pela equipe de investigação japonesa, Rem matou L, causando sua própia morte."
          />

          <Cards
            personagem={ryuk}
            nome="Ryuk"
            descricao="Near é um órfão da Wammy's House e um dos sucessores de L em Death Note. Após a morte do detetive L, Near reuniu provas relacionadas com o caso Kira, o que levou quatro anos. Depois, ele apresentou suas conclusões ao presidente dos Estados Unidos, tornando-se o chefe da Provisão Especial para Kira e continuando a busca por ele. Além disso, ao fazer contato pela primeira vez com Light Yagami, desconfiou que ele fosse o Kira."
          />

          <Cards
            personagem={sachiko}
            nome="Sachiko Yagami"
            descricao="Sachiko Yagami é a esposa de Soichiro Yagami e a mãe de Light Yagami e Sayu Yagami. "
          />

          <Cards
            personagem={sayu}
            nome="Sayu Yagami"
            descricao="Sayu Yagami é a irmã caçula de Light Yagami, filha de Soichiro Yagami com Sachiko Yagami."
          />

          <Cards
            personagem={shuichi}
            nome="Shuichi Aizawa"
            descricao="Shuichi Aizawa é um membro da Força-Tarefa Japonesa que possui um grande senso de justiça e pensa no bem da sua família."
          />

          <Cards
            personagem={sidoh}
            nome="Sidoh"
            descricao="Sidoh​ é um Shinigami que teve seu Death Note foi roubado por Ryuk que acaba nas mãos da máfia de Mello."
          />

          <Cards
            personagem={soichiro}
            nome="Soichiro Yagami"
            descricao="Soichiro Yagami é o pai de Light Yagami, e chefe da Força-Tarefa Japonesa."
          />

          <Cards
            personagem={stephen}
            nome="Stephen Gevanni"
            descricao="Stephen Gevanni é um membro da SPK (Special Provision for Kira), um grupo criado nos Estados Unidos com o apoio do FBI e da CIA para capturar o Kira."
          />

          <Cards
            personagem={teru}
            nome="Teru Mikami"
            descricao="Teru Mikami é um promotor de justiça com muito senso de justiça e conhecido por ser uma pessoa obssesivamente metódica. Isso fez com o que o Ligth Yagami escolhesse ele para ser o próximo Kira, pois era muito perigoso a Misa Amane possuir o Death note enquanto o L suspeitava deles. Após se Mikami se tornar o terceiro Kira ele troca metade de sua vida para ter Olhos de Shinigami como o  de Ryuk."
          />

          <Cards
            personagem={touta}
            nome="Touta Matsuda"
            descricao="Touta Matsuda é um jovem membro da FTJ (Força-Tarefa Japonesa), um grupo que trabalha no caso do Kira."
          />

          <Cards
            personagem={watari}
            nome="Watari"
            descricao="Watari foi um famoso inventor e também o fundador da Wammy's House. Além disso, ele é o braço direito de Kira, sempre lhe apoiando."
          />
        </section>
      </main>
      <Footer className="Footer" logoAnime={logoAnime} />
    </>
  );
}

export default App;
