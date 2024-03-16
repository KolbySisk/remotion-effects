import { interpolate, Sequence, useCurrentFrame } from 'remotion';
import { useAnimation } from '../hooks/use-animation';
import { CommonProps } from '../types';
import { cn } from '../utils/cn';

type Props = CommonProps & {
  text: string;
  stagger?: number;
  fadeInDuration?: number;
  separator?: string;
};

export function TextAppearIn(props: Props) {
  const { startFrame, shouldRender } = useAnimation(props);

  const { text, stagger = 10, fadeInDuration = 10, separator = '', className, style } = props;

  const chunks = text.split(separator);

  if (!shouldRender) {
    return null;
  }

  return (
    <Sequence
      from={startFrame}
      className={cn(
        'appear-in-container',
        'flex text-white font-bold gap-4 text-[150px] items-center justify-center',
        className
      )}
      style={style}
    >
      {chunks.map((chunk, i) => (
        <Chunk key={chunk + i} chunk={chunk} fadeInDuration={fadeInDuration} stagger={stagger} index={i} />
      ))}
    </Sequence>
  );
}

function Chunk({
  chunk,
  fadeInDuration,
  stagger,
  index,
}: {
  chunk: string;
  fadeInDuration: number;
  stagger: number;
  index: number;
}) {
  const frame = useCurrentFrame();
  const animationStartFrame = index * stagger;
  const animationEndFrame = animationStartFrame + fadeInDuration;
  const opacity = interpolate(frame, [animationStartFrame, animationEndFrame], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <div className='chunk' style={{ opacity }}>
      {chunk}
    </div>
  );
}
