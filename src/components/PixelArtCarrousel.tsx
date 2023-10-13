import { useState } from "react";
import styles from "../styles/components/PixelArtCarrousel.module.css";
import imagespath from "../../imagespath.json";

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
      console.log(fowardIndex);
    } else {
      setCurrentImageIndex(fowardIndex);
      console.log(fowardIndex);
    }
  }

  return (
    <div className={styles.container}>
      <section>
        <h2 className={styles.title}> Pixel Art For Inspiration</h2>

        <div className={styles.carroussel}>
          <button className={styles.buttonCarruselLeft} onClick={fowardImage}>
            <img src="../left-arrow.png" className={styles.img} />
          </button>
          <img src={currentImage.path} className={styles.carrousselImage} />

          <button onClick={skipImage} className={styles.buttonCarruselRight}>
            <img src="../right-arrow.png" className={styles.img} />
          </button>
        </div>
      </section>
    </div>
  );
}
