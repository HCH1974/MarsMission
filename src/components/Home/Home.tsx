import React from "react";
import "./Home.scss";
import { useState } from "react";

interface homeImage {
  imageUrl: string;
  imageInfo: string;
}

export const Home: React.FunctionComponent = () => {

  const [selectedImage, setSelectedImage] = useState(0);
  const homeImages: homeImage[] = [
    { imageUrl: "images/homeImages/1-CuriosityRoverWithCameras.jpg", imageInfo: "Excluding its hazcams and navcams (but including the Mastcam), Curiosity carries 10 instruments to explore the martian environment. The rover's robotic arm also sports a drill and a scoop." },
    { imageUrl: "images/homeImages/2-PreservenceRover.jpg", imageInfo: " Perseverance seeks signs of possible past microbial life in those habitable environments, particularly in special rocks known to preserve signs of life over time." },
    { imageUrl: "images/homeImages/3-SpiritRover.jpg", imageInfo: "Spirit uncovered strong evidence that Mars was once much wetter than it is now." },
    { imageUrl: "images/homeImages/4-OppurtunityRover.jpg", imageInfo: "Opportunity and its twin Spirit were tasked with studying sites on Mars where conditions may once have been favorable for life." },
    { imageUrl: "images/homeImages/5-OppurtunityRoverwithCameras.jpg", imageInfo: "The Rovers' instruments are state-of-the-art tools for acquiring information about Martian geology, atmosphere, environmental conditions, and potential biosignatures." },
    { imageUrl: "images/homeImages/6-CuriosityRover.jpg", imageInfo: " Curiosity has demonstrated the ability to land a very large, heavy rover to the surface of Mars and to land more precisely in a 12.4-mile (20-kilometer) landing area" },
    { imageUrl: "images/homeImages/7-Mars Olympus Mons.jpg", imageInfo: "Olympus Mons, Mars' highest mountain, stands 25 km tall - two and a half times the height of Mount Everest." },
    { imageUrl: "images/homeImages/8-mars_approach_from_space.jpeg", imageInfo: "NASA engineers prepared intensively for over 45 days to guide Curiosity Rover through Mars' atmosphere and land successfully. " },
    { imageUrl: "images/homeImages/9-PIA24309_-_rover_at_Jezero_-_from_animation.png", imageInfo: "The Mars Perserverance rover touched down in the 45km wide Jezero Crater. The crater is thought to have once been filled with water - hence its name, which means 'lake' in Czech." },
    { imageUrl: "images/homeImages/10-PlanetMars_1.jpg", imageInfo: "Civilisations throughout history have known Mars for its reddish colour, reminiscent of blood. The name Mars comes from the Ancient Roman God of War." }
  ];

  return (
    <main>
      <h1 className="main-header">Mars Exploration</h1>
      <p className="main-welcome-message">Start your 150 million km journey! </p>
      <section className="main-image">
        <img className="main-image-tag" src={homeImages[selectedImage].imageUrl}></img>
      </section>
      {/* <section className="main-image-description"><p>{homeImages[selectedImage].imageInfo}</p></section>
      <button onClick={() => { if (selectedImage < 9) { setSelectedImage(selectedImage + 1) } }}>Next</button>
      <button onClick={() => { if (selectedImage > 0) { setSelectedImage(selectedImage - 1) } }}>Previous</button> */}
    </main>
  );
};
