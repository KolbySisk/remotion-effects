import { Easing, EasingFunction, interpolate, Sequence } from 'remotion';
import { useAnimation } from '../hooks/use-animation';
import { CommonProps } from '../types';
import { cn } from '../utils/cn';

type Props = CommonProps & {
  text: string;
  duration?: number;
  separator?: string;
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

export function TextSquashIn(props: Props) {
  const {
    text,
    className,
    style,
    duration = 45,
    startGap = 100,
    endGap = 32,
    startScale = 5,
    endScale = 1,
    startOpacity = 0,
    endOpacity = 1,
    startBlur = 4,
    endBlur = 0,
    separator = '',
    easing = Easing.bezier(0.5, 1, 0.89, 1),
  } = props;

  const { frame, startFrame, shouldRender } = useAnimation(props);

  const gap = interpolate(frame, [startFrame, duration], [startGap, endGap], {
    easing,
    extrapolateRight: 'clamp',
  });

  const scale = interpolate(frame, [startFrame, duration], [startScale, endScale], {
    easing,
    extrapolateRight: 'clamp',
  });

  const opacity = interpolate(frame, [startFrame, duration], [startOpacity, endOpacity], {
    easing,
    extrapolateRight: 'clamp',
  });

  const blur = interpolate(frame, [startFrame, duration], [startBlur, endBlur], {
    easing,
    extrapolateRight: 'clamp',
  });

  const chunks = text.split(separator);

  if (!shouldRender) {
    return null;
  }

  return (
    <Sequence
      from={startFrame}
      className={cn(
        'squash-in-container',
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
