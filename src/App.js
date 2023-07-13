import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import AgitationComponent from "./components/AgitationComponent/AgitationComponent";
import PlayerComponent from "./components/PlayerComponent/PlayerComponent";

const songs = [
  {
    title: "FS 2",
    src: "/music/FS 2.mp3",
  },
  {
    title: "Raped ears",
    src: "/music/Raped ears.mp3",
  },
  {
    title: "2700K",
    src: "/music/2700K.mp3",
  },
  {
    title: "Evening sky",
    src: "/music/Evening sky.mp3",
  },
  {
    title: "Personality of being",
    src: "/music/Personality of being.mp3",
  },
  {
    title: "Travel coffee",
    src: "/music/Travel coffee.mp3",
  },
  {
    title: "Last shit",
    src: "/music/Last shit.mp3",
  },
  {
    title: "Final piece of music shit",
    src: "/music/Final piece of music shit.mp3",
  },
  {
    title: "Шампіньйони",
    src: "/music/Шампіньйони.mp3",
  },
];

function App() {
  const [isPlaying, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0]);

  const audioElem = useRef();

  useEffect(() => {
    isPlaying ? audioElem.current.play() : audioElem.current.pause();
  }, [isPlaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  return (
    <div className="App">
      <AgitationComponent />
      <audio src={currentSong.src} ref={audioElem} onTimeUpdate={onPlaying} />
      <PlayerComponent
        currentSong={currentSong}
        isPlaying={isPlaying}
        setPlaying={setPlaying}
        audioElem={audioElem}
        setCurrentSong={setCurrentSong}
        songs={songs}
      />
    </div>
  );
}

export default App;
