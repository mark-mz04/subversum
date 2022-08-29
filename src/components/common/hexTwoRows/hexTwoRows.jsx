import { HexGrid, Layout, Hexagon } from 'react-hexgrid';
import s from './hexTwoRows.module.css';

export const HexTwoRows = ({ rowTop, rowBtm }) => {
	return (
		<div className={s.container}>
			<HexGrid className={s.row} viewBox='-50 -50 100 100'>
				<Layout
					size={{ x: 50, y: 50 }}
					flat={false}
					spacing={1.1}
					origin={{ x: -15, y: 0 }}>
					{rowTop.map((hex, i) => (
						<Hexagon
							key={i}
							q={hex.q}
							s={hex.s}
							r={0}
							className={
								hex.invisible === 'white'
									? s.whiteHex
									: hex.invisible === 'click'
									? s.click
									: hex.invisible
									? s.invisibleHex
									: s.hexagon
							}
						/>
					))}
				</Layout>
			</HexGrid>

			<HexGrid className={`${s.row} ${s.rowBtm}`} viewBox='-50 -50 100 100'>
				<Layout
					size={{ x: 50, y: 50 }}
					flat={false}
					spacing={1.1}
					origin={{ x: 33, y: 0 }}>
					{rowBtm.map((hex, i) => (
						<Hexagon
							key={i}
							q={hex.q}
							s={hex.s}
							r={0}
							onClick={hex.click ? () => console.log(111) : false}
							className={
								hex.invisible === 'white'
									? s.whiteHex
									: hex.invisible === 'click'
									? s.click
									: hex.invisible
									? s.invisibleHex
									: s.hexagon
							}
						/>
					))}
				</Layout>
			</HexGrid>
		</div>
	);
};
