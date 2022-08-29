import s from './mainPage.module.css';
import { Header } from '../../header/header';
import { Main } from '../../main/main';
import { Footer } from '../../footer/footer';

export const MainPage = () => {
	return (
		<div>
			<Header />
			<div className={s.bgr}>
				<Main />
				{/* <Footer /> */}
			</div>
		</div>
	);
};
