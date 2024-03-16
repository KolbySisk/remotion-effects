import { Easing, EasingFunction, interpolate, random, Sequence, useCurrentFrame } from 'remotion';
import { useAnimation } from '../hooks/use-animation';
import { CommonProps } from '../types';
import { cn } from '../utils/cn';

type Props = CommonProps & {
  text: string;
  direction?: 'up' | 'down';
  chunkDuration?: number;
  stagger?: number;
  randomStagger?: boolean;
  randomStaggerSeed?: number;
  separator?: string;
  easing?: EasingFunction;
};

export function TextSlideIn(props: Props) {
  const { startFrame, shouldRender } = useAnimation(props);

  const {
    text,
    style,
    className,
    stagger = 10,
    direction = 'up',
    chunkDuration = 6,
    randomStagger = false,
    randomStaggerSeed = 3,
    separator = '',
    easing = Easing.bezier(0.5, 1, 0.89, 1),
  } = props;

  const chunks = text.split(separator);

  if (!shouldRender) {
    return null;
  }

  return (
    <Sequence
      from={startFrame}
      className={cn(
        'slide-in-container',
        'flex text-white font-bold gap-4 text-[150px] items-center justify-center',
        className
      )}
      style={style}
    >
      {chunks.map((chunk, i) => (
        <Chunk
          key={chunk + i}
          index={i}
          easing={easing}
          chunk={chunk}
          stagger={stagger}
          direction={direction}
          randomStagger={randomStagger}
          chunkDuration={chunkDuration}
          randomStaggerSeed={randomStaggerSeed}
        />
      ))}
    </Sequence>
  );
}

function Chunk({
  index,
  chunk,
  stagger,
  direction,
  randomStagger,
  chunkDuration,
  randomStaggerSeed,
  easing,
}: {
  index: number;
  chunk: string;
  stagger: number;
  direction: 'up' | 'down';
  randomStagger: boolean;
  chunkDuration: number;
  randomStaggerSeed: number;
  easing: EasingFunction;
}) {
  const frame = useCurrentFrame();

  const randomStaggerAmount = random(index + randomStaggerSeed) * 10;

  const animationStartFrame = index * (randomStagger ? randomStaggerAmount : stagger);
  const animationEndFrame = animationStartFrame + chunkDuration;
  const opacity = interpolate(frame, [animationStartFrame, animationEndFrame], [0, 1], {
    extrapolateRight: 'clamp',
    easing,
  });
  const translateY = interpolate(
    frame,
    [animationStartFrame, animationEndFrame],
    [direction === 'up' ? 100 : -100, 0],
    {
      extrapolateRight: 'clamp',
      easing,
    }
  );

  return (
    <div className='chunk' style={{ opacity, transform: `translateY(${translateY}px)` }}>
      {chunk}
    </div>
  );
}
