import React, { FC } from 'react';
import useSound from 'use-sound';

const Sound: FC<{}> = () => {
  const [play] = useSound('/alarm.mp3');
  return (
    <div>
      <button onClick={() => play()}>Play</button>
    </div>
  );
};

export default Sound;
