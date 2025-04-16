import './App.css'

import MrktImg from './assets/images/market.png'
import BrickImg from './assets/images/brick.png'
import InviteImg from './assets/images/invite.png'
import CopyImg from './assets/images/copy.png'
import WalletImg from './assets/images/wallet.png'
import LinkImg from './assets/images/link.png'

function App() {
	return (
		<div className='App'>
			<img src={MrktImg} width={400} alt='mrkt' />
			<img src={LinkImg} width={280} className='link-img' alt='@mrkt' />
			<h1>Единственный безопасный маркетплейс</h1>
			<img src={BrickImg} width={150} alt='brick' />
			<div className='invitation'>
				<h3>Начните строить свое будущее вместе с друзьями</h3>
				<div className='invitation-buttons'>
					<button className='button'>
						<img width={30} src={InviteImg} alt='invite' />
						Пригласить (0)
					</button>
					<button className='button'>
						<img width={50} src={CopyImg} alt='copy' />
					</button>
				</div>
				<h3>Только друзья с подключенными кошельками</h3>
			</div>
			<div className='connect'>
				<button className='button'>
					<img width={50} src={WalletImg} alt='wallet' />
					Подключить кошелек
				</button>
				<h3>Подключите кошелек и получите ранние бонусы</h3>
			</div>
		</div>
	)
}

export default App
