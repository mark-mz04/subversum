import { HexTwoRows } from '../../common/hexTwoRows/hexTwoRows';
import s from './futurePlanet.module.css';

export const FuturePlanet = () => {
	const firstRow = [
		{ q: -5, s: 1, r: 0, invisible: false },
		{ q: -4, s: 1, r: 0, invisible: false },
		{ q: -3, s: 1, r: 0, invisible: false },
		{ q: -2, s: 1, r: 0, invisible: false },
		{ q: -1, s: 1, r: 0, invisible: false },
		{ q: 0, s: 0, r: 0, invisible: false },
		{ q: 1, s: 1, r: 0, invisible: false },
		{ q: 2, s: 1, r: 0, invisible: false },
		{ q: 3, s: 1, r: 0, invisible: false },
		{ q: 4, s: 1, r: 0, invisible: false },
		{ q: 5, s: 1, r: 0, invisible: false },
	];
	const secondRow = [
		{ q: -5, s: 1, r: 0, invisible: true },
		{ q: -4, s: 1, r: 0, invisible: true },
		{ q: -3, s: 1, r: 0, invisible: true },
		{ q: -2, s: 1, r: 0, invisible: true },
		{ q: -1, s: 1, r: 0, invisible: true },
		{ q: 0, s: 0, r: 0, invisible: false },
		{ q: 1, s: 1, r: 0, invisible: false },
		{ q: 2, s: 1, r: 0, invisible: false },
		{ q: 3, s: 1, r: 0, invisible: false },
		{ q: 4, s: 1, r: 0, invisible: false },
	];
	const thirdRow = [
		{ q: -5, s: 1, r: 0, invisible: true },
		{ q: -4, s: 1, r: 0, invisible: true },
		{ q: -3, s: 1, r: 0, invisible: true },
		{ q: -2, s: 1, r: 0, invisible: true },
		{ q: -1, s: 1, r: 0, invisible: true },
		{ q: 0, s: 0, r: 0, invisible: true },
		{ q: 1, s: 1, r: 0, invisible: false },
		{ q: 2, s: 1, r: 0, invisible: 'white' },
		{ q: 3, s: 1, r: 0, invisible: 'white' },
		{ q: 4, s: 1, r: 0, invisible: false },
		{ q: 5, s: 1, r: 0, invisible: false },
	];
	const fourthRow = [
		{ q: -5, s: 1, r: 0, invisible: false },
		{ q: -4, s: 1, r: 0, invisible: true },
		{ q: -3, s: 1, r: 0, invisible: true },
		{ q: -2, s: 1, r: 0, invisible: true },
		{ q: -1, s: 1, r: 0, invisible: true },
		{ q: 0, s: 0, r: 0, invisible: false },
		{ q: 1, s: 1, r: 0, invisible: 'white' },
		{ q: 2, s: 1, r: 0, invisible: 'click', click: true },
		{ q: 3, s: 1, r: 0, invisible: 'white' },
		{ q: 4, s: 1, r: 0, invisible: false },
	];
	const fifthRow = [
		{ q: -5, s: 1, r: 0, invisible: false },
		{ q: -4, s: 1, r: 0, invisible: false },
		{ q: -3, s: 1, r: 0, invisible: false },
		{ q: -2, s: 1, r: 0, invisible: false },
		{ q: -1, s: 1, r: 0, invisible: false },
		{ q: 0, s: 0, r: 0, invisible: false },
		{ q: 1, s: 1, r: 0, invisible: false },
		{ q: 2, s: 1, r: 0, invisible: 'white' },
		{ q: 3, s: 1, r: 0, invisible: 'white' },
		{ q: 4, s: 1, r: 0, invisible: false },
		{ q: 5, s: 1, r: 0, invisible: false },
	];
	const sixthRow = [
		{ q: -5, s: 1, r: 0, invisible: false },
		{ q: -4, s: 1, r: 0, invisible: false },
		{ q: -3, s: 1, r: 0, invisible: false },
		{ q: -2, s: 1, r: 0, invisible: false },
		{ q: -1, s: 1, r: 0, invisible: false },
		{ q: 0, s: 0, r: 0, invisible: false },
		{ q: 1, s: 1, r: 0, invisible: false },
		{ q: 2, s: 1, r: 0, invisible: false },
		{ q: 3, s: 1, r: 0, invisible: false },
		{ q: 4, s: 1, r: 0, invisible: false },
	];
	const seventhRow = [
		{ q: -5, s: 1, r: 0, invisible: false },
		{ q: -4, s: 1, r: 0, invisible: false },
		{ q: -3, s: 1, r: 0, invisible: 'white' },
		{ q: -2, s: 1, r: 0, invisible: false },
		{ q: -1, s: 1, r: 0, invisible: false },
		{ q: 0, s: 0, r: 0, invisible: false },
		{ q: 1, s: 1, r: 0, invisible: false },
		{ q: 2, s: 1, r: 0, invisible: false },
		{ q: 3, s: 1, r: 0, invisible: false },
		{ q: 4, s: 1, r: 0, invisible: false },
		{ q: 5, s: 1, r: 0, invisible: false },
	];
	const eighthRow = [
		{ q: -5, s: 1, r: 0, invisible: false },
		{ q: -4, s: 1, r: 0, invisible: 'white' },
		{ q: -3, s: 1, r: 0, invisible: 'click' },
		{ q: -2, s: 1, r: 0, invisible: false },
		{ q: -1, s: 1, r: 0, invisible: false },
		{ q: 0, s: 0, r: 0, invisible: true },
		{ q: 1, s: 1, r: 0, invisible: true },
		{ q: 2, s: 1, r: 0, invisible: true },
		{ q: 3, s: 1, r: 0, invisible: true },
		{ q: 4, s: 1, r: 0, invisible: false },
	];
	const ninthRow = [
		{ q: -5, s: 1, r: 0, invisible: false },
		{ q: -4, s: 1, r: 0, invisible: false },
		{ q: -3, s: 1, r: 0, invisible: false },
		{ q: -2, s: 1, r: 0, invisible: false },
		{ q: -1, s: 1, r: 0, invisible: false },
		{ q: 0, s: 0, r: 0, invisible: true },
		{ q: 1, s: 1, r: 0, invisible: true },
		{ q: 2, s: 1, r: 0, invisible: true },
		{ q: 3, s: 1, r: 0, invisible: true },
		{ q: 4, s: 1, r: 0, invisible: true },
		{ q: 5, s: 1, r: 0, invisible: false },
	];
	const tenthRow = [
		{ q: -5, s: 1, r: 0, invisible: false },
		{ q: -4, s: 1, r: 0, invisible: false },
		{ q: -3, s: 1, r: 0, invisible: false },
		{ q: -2, s: 1, r: 0, invisible: false },
		{ q: -1, s: 1, r: 0, invisible: false },
		{ q: 0, s: 0, r: 0, invisible: false },
		{ q: 1, s: 1, r: 0, invisible: false },
		{ q: 2, s: 1, r: 0, invisible: false },
		{ q: 3, s: 1, r: 0, invisible: false },
		{ q: 4, s: 1, r: 0, invisible: false },
	];

	return (
		<section>
			<div className={`positionContainer`}>
				<div className={s.info}>
					<h3 className={s.subtitle}>Future of the planet on your way</h3>

					<p className={`text`}>
						Success in business, as well as in the game, depends on the activity
						and decisions that you make. Don't believe it? Get ready for a new
						gaming experience! Send your consciousness further than to the Moon.
					</p>
				</div>
			</div>

			<HexTwoRows rowTop={firstRow} rowBtm={secondRow} />
			<HexTwoRows rowTop={thirdRow} rowBtm={fourthRow} />
			<HexTwoRows rowTop={fifthRow} rowBtm={sixthRow} />
			<HexTwoRows rowTop={seventhRow} rowBtm={eighthRow} />
			<HexTwoRows rowTop={ninthRow} rowBtm={tenthRow} />

			<div className={`positionContainer`}>
				<p className={`text ${s.btmText}`}>
					Subversum turns everything you think about the process of developing
					valuable resources, manufacturing and making a profit 180 degrees.
					Develop a green economic strategy. This world is anti-world, and the
					reverse is true: the planet thrives when everyone wins.
				</p>
			</div>
		</section>
	);
};
