import { Easing, EasingFunction, interpolate, Sequence } from 'remotion';
import { useAnimation } from '../hooks/use-animation';
import { CommonProps } from '../types';
import { cn } from '../utils/cn';

type Props = CommonProps & {
  text: string;
  duration?: number;
  startGap?: number;
  endGap?: number;
  startScale?: number;
  endScale?: number;
  startOpacity?: number;
  endOpacity?: number;
  startBlur?: number;
  endBlur?: number;
  easing?: EasingFunction;
};

export function TextSquashOut(props: Props) {
  const {
    text,
    className,
    style,
    duration = 45,
    startGap = 32,
    endGap = 100,
    startScale = 1,
    endScale = 5,
    startOpacity = 1,
    endOpacity = 0,
    startBlur = 0,
    endBlur = 4,
    easing = Easing.bezier(0.5, 1, 0.89, 1),
  } = props;

  const { frame, startFrame, shouldRender } = useAnimation(props);

  const gap = interpolate(frame, [startFrame, startFrame + duration], [startGap, endGap], {
    easing,
    extrapolateRight: 'clamp',
  });

  const scale = interpolate(frame, [startFrame, startFrame + duration], [startScale, endScale], {
    easing,
    extrapolateRight: 'clamp',
  });

  const opacity = interpolate(frame, [startFrame, startFrame + duration], [startOpacity, endOpacity], {
    easing,
    extrapolateRight: 'clamp',
  });

  const blur = interpolate(frame, [startFrame, startFrame + duration], [startBlur, endBlur], {
    easing,
    extrapolateRight: 'clamp',
  });

  const chunks = text.split('');

  if (!shouldRender) {
    return null;
  }

  return (
    <Sequence
      from={startFrame}
      className={cn(
        'squash-out-container',
        'flex text-white font-bold text-[150px] items-center justify-center',
        className
      )}
      style={{
        gap,
        opacity,
        filter: `blur(${blur}px)`,
        transform: `scale(${scale})`,
        ...style,
      }}
    >
      {chunks.map((chunk, i) => (
        <Chunk key={chunk + i} chunk={chunk} />
      ))}
    </Sequence>
  );
}

function Chunk({ chunk }: { chunk: string }) {
  return <div className='chunk'>{chunk}</div>;
}
