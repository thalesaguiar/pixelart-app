import { useState } from "react";
import styles from "../styles/components/PixelArtGamesSlide.module.css";
import gamesImagesPath from "../../gamesimagespath.json";
import Image from "next/image";

let lastIndexImg = gamesImagesPath.pixelArtGames.length - 1;

export default function PixelArtGamesSlide() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = gamesImagesPath.pixelArtGames[currentImageIndex];
  const currentImageDescription =
    gamesImagesPath.pixelArtGames[currentImageIndex];

  function skipImage() {
    const nextIndex =
      (currentImageIndex + 1) % gamesImagesPath.pixelArtGames.length;
    setCurrentImageIndex(nextIndex);
  }

  function fowardImage() {
    const fowardIndex =
      (currentImageIndex - 1) % gamesImagesPath.pixelArtGames.length;
    if (fowardIndex === -1) {
      setCurrentImageIndex(lastIndexImg);
    } else {
      setCurrentImageIndex(fowardIndex);
    }
  }

  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.title}>Grandes Jogos em Pixel Art </h2>

        <div className={styles.carroussel}>
          <button className={styles.buttonCarruselLeft} onClick={fowardImage}>
            <Image
              src="/left-arrow.png"
              width={48}
              height={48}
              className={styles.img}
              alt="skip image button"
            />
          </button>
          <span className={styles.imageFrame}>
            <img
              src={currentImage.path}
              className={styles.carrousselImage}
              alt="pixel art images"
            />
          </span>
          <button onClick={skipImage} className={styles.buttonCarruselRight}>
            <Image
              src="/right-arrow.png"
              width={48}
              height={48}
              className={styles.img}
              alt="skip image button"
            />
          </button>
        </div>
      </div>
      <p className={styles.gamesDescription}>
        {currentImageDescription.description}
      </p>
    </section>
  );
}
