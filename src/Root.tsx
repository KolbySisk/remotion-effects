import { Composition, AbsoluteFill } from 'remotion';
import { TextAppearIn } from './components/text-appear-in';
import { TextTrailIn } from './components/text-trail-in';
import { TextSlideIn } from './components/text-slide-in';
import { Radar } from './components/radar';

import './style.css';
import { TextSquashIn } from './components/text-squash-in';
import { TextSquashOut } from './components/text-squash-out';
import { TextTrailOut } from './components/text-trail-out';
import { TextSpinIn } from './components/text-spin-in';
import { TextSpinOut } from './components/text-spin-out';

function MyComposition() {
  return (
    <AbsoluteFill className='bg-neutral1 items-center justify-center relative'>
      <div className='absolute bottom-0'>
        <Radar />
      </div>
      {/* <LettersSpinIn text='Creative' in={0} out={100} />
      <LettersSpinOut text='Creative' in={100} out={200} /> */}
      {/* <LettersSquashIn text='Creative' in={0} out={60} /> */}
      {/* <LettersSquashOut text='Creative' in={60} out={100} /> */}
      {/* <LettersTrailIn text='Creative' in={100} out={160} /> */}
      {/* <LettersTrailOut text='Creative' in={160} out={240} /> */}
      {/* <LettersAppearIn in={140} out={240} text='Creative' /> */}
      <TextSlideIn text='Creative sentence multiple words' separator=' ' />
    </AbsoluteFill>
  );
}

export function RemotionRoot() {
  return (
    <Composition
      id='MyComposition'
      component={MyComposition}
      durationInFrames={300}
      fps={60}
      width={2560}
      height={1440}
    />
  );
}
