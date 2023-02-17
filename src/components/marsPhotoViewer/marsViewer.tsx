import React, { useState } from "react";
import "./marsViewer.scss";
import { ImageSelector } from "./ImageSelector";
import { ImageFilter } from "./ImageFilter";
import ImageViewer from "./ImageViewer";
import image from "../../../images/homeImages/3-SpiritRover.jpg";

export const MarsViewer: React.FunctionComponent = () => {
  //image usestate for selecting for imageviewer component
  const [selectedImage, setSelectedImage] = useState<string>("");

  //usestates for ImageFilter component with defaults
  const [date, setDate] = useState<string>("2020-1-1");
  const [rover, setRover] = useState<string>("curiosity");
  const [camera, setCamera] = useState<string>("NAVCAM");

  return (
    <main>
      <h1 className="photo-viewer-header">
        Mars Photo Viewer
      </h1>
      <ImageViewer src={(!selectedImage) ? image : selectedImage} />
      <ImageFilter rover={rover} setRover={setRover}
        camera={camera} setCamera={setCamera}
        date={date} setDate={setDate}
      />
      <ImageSelector setState={setSelectedImage} date={date} rover={rover} camera={camera} />
    </main>
  );
};