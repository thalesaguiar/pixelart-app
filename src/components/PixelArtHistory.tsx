import React from "react";
import styles from "../styles/components/PixelArtHistory.module.css";
import PixelArtGamesSlide from "./PixelArtGamesSlide";

export default function PixelArtHistory() {
  return (
    <section className={styles.container}>
      <h2>A origem do Pixel Art</h2>
      <div className={styles.content}>
        <img className={styles.landscape} src="../landscape.gif" />
        <p>
          A técnica do pixel art, uma forma de arte digital singular, tem
          origens profundas e cativantes. Sua história remonta às raízes da
          computação gráfica. Nos primórdios, nas décadas de 1960 e 1970, os
          computadores como o PDP-1 exibiam imagens baseadas em pixels em
          monitores de tubo de raios catódicos. Esse foi o ponto de partida para
          o pixel art. A indústria de videogames desempenhou um papel crucial em
          sua evolução, com consoles como o Atari 2600 e o NES usando gráficos
          em pixel para criar personagens e cenários icônicos. Hoje, o pixel art
          transcendeu os videogames e deixou uma marca na cultura pop, do charme
          retrô dos jogos indie modernos ao fenômeno Minecraft. Se você deseja
          explorar o mundo do pixel art ou participar de comunidades de artistas
          de pixel, existem muitos recursos disponíveis, como fóruns, tutoriais
          e ferramentas, para ajudar aspirantes a artistas. A história do pixel
          art é fascinante e está intrinsecamente ligada à evolução da
          tecnologia. Você pode aprofundar sua compreensão da origem e do
          impacto dessa forma de arte única explorando esses links e recursos.
        </p>
      </div>
      <article className={styles.pixelArtGames}>
        <h2> Jogos e Pixel Art</h2>
        <div className={styles.gamesSection}>
          <img className={styles.gamesImage} src="../games.png" />
          <p>
            Clássicos e Contemporâneos: Os Melhores Jogos que Celebram a Pixel
            Art A arte dos jogos eletrônicos tem percorrido uma jornada
            fascinante ao longo das décadas. Enquanto gráficos ultrarrealistas e
            ambientes em 3D são hoje comuns, a pixel art permanece um estilo
            estético icônico, repleto de nostalgia e charme. Ela não apenas
            evoca sentimentos de saudosismo, mas também serve como uma forma de
            expressão artística única no mundo dos games. Neste artigo,
            apresentaremos uma lista de jogos que abraçam a pixel art de maneira
            brilhante e demonstram como esse estilo pode ser cativante,
            envolvente e eterno.
          </p>
        </div>
      </article>
    </section>
  );
}
