import BgBanner from "@/components/BgBanner";
import MainHeader from "@/components/MainHeader";

import boloFlorestImg from "@/assets/img/bolo-floresta-negra.jpg";
import MainFooter from "@/components/MainFooter";
import Image from "next/image";

import './page.scss';

export default function Culinaria() {
  return (
    <>
      <MainHeader />

      <BgBanner title="Culinária" />

      <main>
        <div className="container">
          <h1>Küche</h1>
          <div className="row">
            <div className="col-md-4">
              <Image src={boloFlorestImg} alt="Bolo Floresta Negra" className="img-fluid" width={480} height={360} />
            </div>
            <div className="col-md-8">
              <p>
                A culinária alemã varia por região, com destaque para o sul da Baviera e Suábia, que compartilham influências da Suíça e Áustria. A carne, incluindo porco, boi e aves, é amplamente consumida na Alemanha, sendo a carne de porco a mais popular, frequentemente preparada como salsichas. Mais de 1.500 tipos de salsicha são produzidos no país. A cerveja é a bebida alcoólica nacional, com um consumo per capita ainda alto, cerca de 116 litros por ano.
              </p>
              <p>
                Além disso, há diversas variedades de cerveja, como Alt, Bock, Dunkel, Kölsch, Lager, Malzbier, Pils e Weizenbier. Embora o consumo de cerveja permaneça alto, o consumo de vinho está aumentando em algumas áreas da Alemanha.
              </p>
              <p>
                Além disso, a Alemanha é conhecida pelo consumo de sucos de frutas, água mineral gaseificada e Schorle (uma mistura de suco de frutas com água). O mercado de alimentos orgânicos também está em crescimento, com uma participação de cerca de 3%.
              </p>
            </div>
          </div>
          <h2>Oktoberfest</h2>
          <p>
            A Oktoberfest teve origem em Munique, onde uma festa inicialmente realizada para celebrar um casamento real no parque Theresienwiese se tornou um evento anual. Hoje, a Oktoberfest de Munique é o maior festival do mundo, atraindo cerca de seis milhões de visitantes anualmente. A tradição se espalhou globalmente, com Oktoberfest em diversos países. No Brasil, as festas começaram com a cultura dos imigrantes alemães no início do século XX, mas se popularizaram nas décadas de 1980, com eventos em cidades como Blumenau e Santa Cruz do Sul.
          </p>

          <div className="row">
            <div className="col-md-8">
              <Image src="https://www.oktoberfesttours.travel/wp-content/uploads/2018/12/Oktoberfest-Munich.jpg" alt="Oktorberfest 1" className="img-fluid" height={270} width={480} />
            </div>
            <div className="col-md-4">
              <Image src="https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/022/647/original/6f06aa68c9c704550ae1eccb61a7d6dd/germany-munich-oktoberfest-locals-082417-rs.jpg" alt="Oktorberfest 2" className="img-fluid" height={270} width={480} />
            </div>
          </div>
        </div>
      </main>

      <MainFooter /></>
  )
}
