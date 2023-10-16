import React from "react";
import Profile from "../components/NavMenu";
import PixelArtHistory from "../components/PixelArtHistory";
import PixelArtCarrousel from "../components/PixelArtCarrousel";
import PixelArtGamesSlide from "../components/PixelArtGamesSlide";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Profile />
      <PixelArtCarrousel />
      <PixelArtHistory />
      <PixelArtGamesSlide />
      <Footer />
    </div>
  );
}
