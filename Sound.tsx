import React, { FC } from 'react';
import useSound from 'use-sound';

const Sound: FC<{}> = () => {
  const [playbackRate, setPlaybackRate] = React.useState(0.75);

  const [play, { stop }] = useSound(
    'https://cdn.jsdelivr.net/gh/Malvolio/react-sound@46196ba93c396389a2dd343fbe6482d57c45df3f/assets/alarm.mp3',
    {
      playbackRate,
      // `interrupt` ensures that if the sound starts again before it's
      // ended, it will truncate it. Otherwise, the sound can overlap.
      interrupt: true,
    }
  );

  const makeSqueaky = () => {
    setPlaybackRate(playbackRate + 0.1);
    play();
  };

  return (
    <div>
      <button onClick={() => play()}>Play</button>
      <button onClick={() => stop()}>Stop</button>
      <button onClick={makeSqueaky}>
        <span role="img" aria-label="Person with lines near mouth">
          🗣
        </span>
      </button>
    </div>
  );
};

export default Sound;
