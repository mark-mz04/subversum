import s from './header.module.css';
import userMenuLogo from '../../img/userMenuLogo.svg';
import logo from '../../img/logo.svg';

export const Header = () => {
	return (
		<header className={s.container}>
			<div className={s.navContainer}>
				<div className={s.navContainerLeft}>
					<button className={s.btnPlay}>PLAY</button>

					<div className={`${s.btnPlay} ${s.btnMenu}`}>
						MENU
						<input id={s.menuToggle} type='checkbox' />
						<label className={s.menuToggleLabel} htmlFor={s.menuToggle}>
							<div className={s.burgerMenu}></div>
						</label>
						{/* <nav>
							<a>Learn</a>
							<a>NFT List</a>
							<a>Community</a>
							<a>Key numbers</a>
							<a>Events</a>
						</nav> */}
					</div>
				</div>

				<nav>
					<img src={`${userMenuLogo}`} />
					{/* <a>My NFT</a>
					<a>Wallet</a>
					<a>Account</a> */}
				</nav>
			</div>

			<div className={s.content}>
				<img src={`${logo}`} />

				<p className={s.text}>
					iNFiniTy i NFTnity. In a parallel reality, find out how it works
				</p>
			</div>

			<div className={`${s.bgrBtm}`}></div>
		</header>
	);
};
