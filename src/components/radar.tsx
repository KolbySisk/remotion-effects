import {useCurrentFrame, interpolate, Loop, Sequence} from 'remotion';
import {cn} from '../utils/cn';
import {FaRedditAlien, FaTwitter} from 'react-icons/fa6';

export function Radar() {
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [0, 120], [2, 2.2]);
	const rotation = (frame % 360) - 110;

	return (
		<div
			className="flex justify-center origin-bottom"
			style={{
				transform: `scale(${scale})`,
			}}
		>
			<div className="relative m-auto min-w-[1200px]">
				<div className="m-auto h-[600px] w-[1200px] overflow-hidden">
					<div
						className="relative h-[1200px] w-[1200px] overflow-hidden rounded-full border border-turquoise/10"
						style={{
							background:
								'radial-gradient(circle, rgba(1,255,194,0) 40%, rgba(1,255,194,.02) 100%)',
						}}
					>
						<div
							style={{
								transform: `rotate(${rotation}deg)`,
								clipPath: 'polygon(0% 0%, 50% 100%, 100% 0%)',
								background:
									'linear-gradient(90deg, rgba(255,255,255,0) 50%, rgba(1,255,194,.4) 100%)',
							}}
							className="absolute left-0 right-0 top-0 m-auto h-[600px] w-[360px] origin-bottom"
						/>
					</div>
				</div>
				<div className="absolute bottom-0 left-0 right-0 m-auto h-[500px] w-[1000px] overflow-hidden">
					<div
						className="h-[1000px] w-[1000px] rounded-full border border-turquoise/10"
						style={{
							background:
								'radial-gradient(circle, rgba(1,255,194,0) 40%, rgba(1,255,194,.04) 100%)',
						}}
					/>
				</div>
				<div className="absolute bottom-0 left-0 right-0 m-auto h-[400px] w-[800px] overflow-hidden">
					<div
						className="h-[800px] w-[800px] rounded-full border border-turquoise/10"
						style={{
							background:
								'radial-gradient(circle, rgba(1,255,194,0) 40%, rgba(1,255,194,.06) 100%)',
						}}
					/>
				</div>
				<div className="absolute bottom-0 left-0 right-0 m-auto h-[300px] w-[600px] overflow-hidden">
					<div
						className="h-[600px] w-[600px] rounded-full border border-turquoise/10"
						style={{
							background:
								'radial-gradient(circle, rgba(1,255,194,0) 30%, rgba(1,255,194,.08) 100%)',
						}}
					/>
				</div>
				<div className="absolute bottom-0 left-0 right-0 m-auto h-[200px] w-[400px] overflow-hidden">
					<div
						className="h-[400px] w-[400px] rounded-full border border-turquoise/10"
						style={{
							background:
								'radial-gradient(circle, rgba(1,255,194,0) 20%, rgba(1,255,194,.1) 100%)',
						}}
					/>
				</div>

				<RadarLine rotate={0} />
				<RadarLine rotate={22.5} />
				<RadarLine rotate={45} />
				<RadarLine rotate={67.5} />
				<RadarLine rotate={90} />
				<RadarLine rotate={270} />
				<RadarLine rotate={292.5} />
				<RadarLine rotate={315} />
				<RadarLine rotate={337.5} />

				<Loop durationInFrames={360}>
					<Sequence from={40}>
						<RadarIndicator
							left={240}
							bottom={240}
							color="turquoise"
							source="reddit"
						/>
					</Sequence>
				</Loop>

				<Loop durationInFrames={360}>
					<Sequence from={20}>
						<RadarIndicator
							left={340}
							bottom={60}
							color="pink"
							source="reddit"
						/>
					</Sequence>
				</Loop>

				<Loop durationInFrames={360}>
					<Sequence from={56}>
						<RadarIndicator
							left={500}
							bottom={100}
							color="turquoise"
							source="reddit"
						/>
					</Sequence>
				</Loop>

				<Loop durationInFrames={360}>
					<Sequence from={140}>
						<RadarIndicator
							left={650}
							bottom={50}
							color="blue"
							source="reddit"
						/>
					</Sequence>
				</Loop>

				<Loop durationInFrames={360}>
					<Sequence from={22}>
						<RadarIndicator
							left={200}
							bottom={140}
							color="blue"
							source="twitter"
						/>
					</Sequence>
				</Loop>

				<Loop durationInFrames={360}>
					<Sequence from={94}>
						<RadarIndicator
							left={590}
							bottom={420}
							color="turquoise"
							source="reddit"
						/>
					</Sequence>
				</Loop>

				<Loop durationInFrames={360}>
					<Sequence from={97}>
						<RadarIndicator
							left={600}
							bottom={200}
							color="pink"
							source="twitter"
						/>
					</Sequence>
				</Loop>

				<Loop durationInFrames={360}>
					<Sequence from={173}>
						<RadarIndicator
							left={1000}
							bottom={80}
							color="pink"
							source="twitter"
						/>
					</Sequence>
				</Loop>

				<Loop durationInFrames={360}>
					<Sequence from={50}>
						<RadarIndicator
							left={200}
							bottom={400}
							color="blue"
							source="twitter"
						/>
					</Sequence>
				</Loop>

				<Loop durationInFrames={360}>
					<Sequence from={62}>
						<RadarIndicator
							left={400}
							bottom={300}
							color="pink"
							source="reddit"
						/>
					</Sequence>
				</Loop>

				<Loop durationInFrames={360}>
					<Sequence from={84}>
						<RadarIndicator
							left={500}
							bottom={500}
							color="blue"
							source="reddit"
						/>
					</Sequence>
				</Loop>

				<Loop durationInFrames={360}>
					<Sequence from={121}>
						<RadarIndicator
							left={750}
							bottom={300}
							color="turquoise"
							source="twitter"
						/>
					</Sequence>
				</Loop>

				<Loop durationInFrames={360}>
					<Sequence from={128}>
						<RadarIndicator
							left={900}
							bottom={440}
							color="blue"
							source="twitter"
						/>
					</Sequence>
				</Loop>

				<Loop durationInFrames={360}>
					<Sequence from={150}>
						<RadarIndicator
							left={1000}
							bottom={280}
							color="blue"
							source="reddit"
						/>
					</Sequence>
				</Loop>
			</div>
		</div>
	);
}

function RadarLine({rotate}: {rotate: number}) {
	return (
		<div
			style={{rotate: rotate + 'deg'}}
			className="absolute bottom-0 left-0 right-0 m-auto h-[1000000px] w-px origin-bottom bg-turquoise opacity-10 mix-blend-lighten"
		/>
	);
}

function RadarIndicator({
	left,
	bottom,
	color,
	source,
}: {
	left: number;
	bottom: number;
	color: 'turquoise' | 'blue' | 'pink';
	source: 'reddit' | 'twitter';
}) {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30, 40, 60], [0, 1, 1, 0]);
	const scale = interpolate(frame, [0, 30], [1, 1.4]);

	const indicatorColorMap = {
		turquoise: 'rgba(1,255,194,.50)',
		blue: 'rgba(1,148,255,.50)',
		pink: 'rgba(219,1,255,.50)',
	} as const;

	const pingColorMap = {
		turquoise: 'bg-turquoise/20',
		blue: 'bg-blue/20',
		pink: 'bg-pink/20',
	} as const;

	return (
		<div
			style={{
				left,
				bottom,
				background: indicatorColorMap[color],
				opacity,
			}}
			className={cn(
				'absolute flex h-5 w-5 items-center justify-center rounded-full'
			)}
		>
			<div
				style={{opacity, transform: `scale(${scale})`}}
				className={cn(
					'absolute inline-flex h-full w-full rounded-full',
					pingColorMap[color]
				)}
			/>
			{source === 'reddit' ? (
				<FaRedditAlien className="text-neutral6 w-3 h-3 z-10" />
			) : (
				<FaTwitter className="text-neutral6 w-3 h-3 z-10" />
			)}
		</div>
	);
}
