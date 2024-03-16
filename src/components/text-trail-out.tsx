import { Trail } from '@remotion/motion-blur';
import { AbsoluteFill, interpolate, Sequence, useCurrentFrame } from 'remotion';
import { useAnimation } from '../hooks/use-animation';
import { CommonProps } from '../types';
import { cn } from '../utils/cn';

type Props = CommonProps & {
  text: string;
  duration?: number;
  layers?: number;
  lagInFrames?: number;
  trailOpacity?: number;
};

export function TextTrailOut(props: Props) {
  const { startFrame, shouldRender } = useAnimation(props);
  const { text, duration = 20, layers = 20, lagInFrames = 0.2, trailOpacity = 0.2, className, style } = props;

  if (!shouldRender) {
    return null;
  }

  return (
    <Sequence
      from={startFrame}
      className={cn('trail-out-container', 'flex text-white font-bold gap-4 text-[150px]', className)}
      style={style}
    >
      <Trail layers={layers} lagInFrames={lagInFrames} trailOpacity={trailOpacity}>
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Letters text={text} duration={duration} />
        </AbsoluteFill>
      </Trail>
    </Sequence>
  );
}

function Letters({ text, duration }: { text: String; duration: number }) {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, duration], [1, 0], {
    extrapolateRight: 'clamp',
  });
  const scale = interpolate(frame, [0, duration], [1, 10], {
    extrapolateRight: 'clamp',
  });

  return <div style={{ opacity, transform: `scale(${scale})` }}>{text}</div>;
}
