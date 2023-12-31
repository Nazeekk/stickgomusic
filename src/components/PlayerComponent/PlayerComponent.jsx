import "./PlayerComponent.css";
import React, { useRef } from "react";
import Icon from "../Icon/Icon";

const PlayerComponent = ({
  audioElem,
  isPlaying,
  setPlaying,
  currentSong,
  setCurrentSong,
  songs,
}) => {
  const clickRef = useRef();

  const PlayPause = () => {
    setPlaying(!isPlaying);
  };
  const skipSong = (isNext) => {
    audioElem.current.currentTime = 0;
    currentSong.progress = 0;
    setPlaying(false);
    const index = songs.findIndex((x) => x.title === currentSong.title);
    const limit = isNext ? songs.length - 1 : 0;
    if (index === limit) {
      setCurrentSong(isNext ? songs[0] : songs[limit]);
    } else {
      setCurrentSong(songs[isNext ? index + 1 : index - 1]);
    }
  };

  const checkWidth = (e) => {
    let width = +clickRef.current.clientWidth;
    const offset = +e.nativeEvent.offsetX;

    const divprogress = (+offset / +width) * 100;
    try {
      audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
    } catch (e) {
      PlayPause();
    }
  };

  const timeConvert = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds - minutes * 60);
    const strMinutes = isNaN(minutes) ? "00" : `0${minutes}`;
    const strSeconds = isNaN(seconds)
      ? "00"
      : seconds < 10
      ? `0${seconds}`
      : seconds;
    const time = `${strMinutes}:${strSeconds}`;
    return time;
  };

  return (
    <article className="player">
      <h1>StickGo</h1>
      <div className="player-container">
        <div className="song-image"></div>
        <span className="song-name">{currentSong.title}</span>
        <div className="song-time-wrapper">
          <p className="song-time">{timeConvert(currentSong.ct)}</p>
          <p className="song-time">{timeConvert(currentSong.length)}</p>
        </div>
        <div className="seek-bar" onClick={checkWidth} ref={clickRef}>
          <div
            className="seek-bar__inner"
            style={{ width: `${currentSong.progress}%` }}
          ></div>
        </div>
        <div className="controls">
          <Icon
            onClickIcon={() => skipSong(false)}
            type="prev"
            height="100px"
          />
          {isPlaying ? (
            <Icon onClickIcon={PlayPause} type="pause" />
          ) : (
            <Icon onClickIcon={PlayPause} type="play" />
          )}
          <Icon onClickIcon={() => skipSong(true)} type="next" />
        </div>
      </div>
    </article>
  );
};

export default PlayerComponent;
