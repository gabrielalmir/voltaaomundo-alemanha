import BgBanner from "@/components/BgBanner";
import MainHeader from "@/components/MainHeader";

import MainFooter from "@/components/MainFooter";
import './page.scss';

export default function Historia() {
  return (
    <>
      <MainHeader />

      <BgBanner title="História" />

      <main>

        <div className="container">
          <h2 className="headline">A unificação alemã e as guerras da Prússia</h2>
          <p>
            A unificação alemã foi um processo que ocorreu no século XIX, quando os
            estados alemães se uniram para formar a Alemanha. O processo de unificação
            foi liderado pelo primeiro-ministro da Prússia, Otto von Bismarck, que
            conseguiu unir os estados alemães através de uma série de guerras contra a
            Dinamarca, a Áustria e a França.
          </p>

          <div className="row">
            <div className="col-md-6">
              <div className="ratio ratio-16x9">
                <iframe src="https://www.youtube-nocookie.com/embed/ifmHLOAVP3s?si=HrcHm0I7z4D6B1n4" title="História animada da Alemanha"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            </div>
            <div className="col-md-6">
              <p>
                A Alemanha, oficialmente conhecida como República Federal da Alemanha, está situada na Europa Central e faz fronteira com o Mar do Norte, Dinamarca, Mar Báltico, Polônia, Chéquia, Áustria, Suíça, França, Luxemburgo, Bélgica e Países Baixos. Com uma área de 357.021 km² e uma população de 82,8 milhões de habitantes (em 2015), a Alemanha é o país mais populoso da União Europeia e abriga a terceira maior população de migrantes internacionais no mundo.
              </p>

              <p>
                A história da região remonta aos tempos romanos, com os territórios alemães desempenhando um papel central no Sacro Império Romano-Germânico a partir do século X. Durante o século XVI, o norte da Alemanha foi o epicentro da Reforma Protestante. A unificação da Alemanha como um Estado-nação ocorreu após a Guerra Franco-Prussiana em 1871. Após a Segunda Guerra Mundial, o país foi dividido em Alemanha Ocidental e Alemanha Oriental, sendo reunificado em 1990.
              </p>
            </div>
          </div>

          <p>
            A Alemanha é uma república parlamentar federal composta por dezesseis estados (Länder), com a capital em Berlim. O país é membro de diversas organizações internacionais, incluindo as Nações Unidas, OTAN, G8, G20, OCDE e OMC. É uma das maiores economias do mundo em termos de PIB nominal e paridade do poder de compra, além de ser um importante exportador e importador de mercadorias. Também se destaca por seu sistema de seguridade social, padrão de vida elevado e liderança em pesquisa e tecnologia em várias áreas. A Alemanha desempenha um papel fundamental nos assuntos europeus e mantém parcerias globais sólidas.
          </p>
        </div>
      </main>

      <MainFooter />
      </>
  )
}
