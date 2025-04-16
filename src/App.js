import './App.css'

import MrktImg from './assets/images/market.png'
import BrickImg from './assets/images/brick.png'
import InviteImg from './assets/images/invite.png'
import CopyImg from './assets/images/copy.png'
import WalletImg from './assets/images/wallet.png'
import LinkImg from './assets/images/link.png'

function App() {
	const handleShare = () => {
		if (window.Telegram.WebApp.shareMessage) {
			window.Telegram.WebApp.shareMessage(
				'Заходите в @mrkt - единственный безопасный маркетплейс',
				(isShared) => {
					if (isShared) {
						console.log('Сообщение успешно отправлено!')
					} else {
						console.log('Пользователь отменил отправку.')
					}
				},
			)
		} else {
			console.log('Метод shareMessage не поддерживается в этой версии Telegram.')
		}
	}

	return (
		<div className='App'>
			<img src={MrktImg} width={160} alt='mrkt' />
			<img src={LinkImg} width={120} className='link-img' alt='@mrkt' />
			<h1>Единственный безопасный маркетплейс</h1>
			<img src={BrickImg} width={70} alt='brick' />
			<div className='invitation'>
				<h3>Начните строить свое будущее вместе с друзьями</h3>
				<div className='invitation-buttons'>
					<button onClick={handleShare} className='button'>
						<img width={15} src={InviteImg} alt='invite' />
						Пригласить (0)
					</button>
					<button className='button'>
						<img width={22} src={CopyImg} alt='copy' />
					</button>
				</div>
				<h3>Только друзья с подключенными кошельками</h3>
			</div>
			<div className='connect'>
				<button className='button'>
					<img width={25} src={WalletImg} alt='wallet' />
					Подключить кошелек
				</button>
				<h3>Подключите кошелек и получите ранние бонусы</h3>
			</div>
		</div>
	)
}

export default App
