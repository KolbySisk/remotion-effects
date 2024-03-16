import { useCurrentFrame } from 'remotion';

export function useAnimation(props: { in?: number; out?: number }) {
  const frame = useCurrentFrame();

  const startFrame = props.in ?? 0;
  const endFrame = props.out ?? 0;
  const duration = endFrame - startFrame;
  const isBeforeInFrame = startFrame && frame < startFrame;
  const isAfterOutFrame = endFrame && frame > endFrame;

  return {
    frame,
    startFrame,
    endFrame,
    duration,
    isBeforeInFrame,
    isAfterOutFrame,
    shouldRender: !isBeforeInFrame && !isAfterOutFrame,
  };
}
