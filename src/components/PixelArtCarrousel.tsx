import { useState } from "react";
import styles from "../styles/components/PixelArtCarrousel.module.css";
import imagespath from "../../imagespath.json";
import Image from "next/image";

let lastIndexImg = imagespath.images.length - 1;

export default function PixelArtCarrousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = imagespath.images[currentImageIndex];

  function skipImage() {
    const nextIndex = (currentImageIndex + 1) % imagespath.images.length;
    setCurrentImageIndex(nextIndex);
  }

  function fowardImage() {
    const fowardIndex = (currentImageIndex - 1) % imagespath.images.length;
    if (fowardIndex === -1) {
      setCurrentImageIndex(lastIndexImg);
    } else {
      setCurrentImageIndex(fowardIndex);
    }
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Pixel Art para se inspirar</h2>
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
    </section>
  );
}
