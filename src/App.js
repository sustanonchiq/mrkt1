import './App.css'

import MrktImg from './assets/images/market.png'
import BrickImg from './assets/images/brick.png'
import InviteImg from './assets/images/invite.png'
import CopyImg from './assets/images/copy.png'
import WalletImg from './assets/images/wallet.png'
import LinkImg from './assets/images/link.png'
import { useState } from 'react'

function App() {
	const [isCopied, setIsCopied] = useState(false)

	// Генерирует случайный 10-значный номер (такой же длины как 7594006225)
	const generateRandomId = () => {
		return Math.floor(1000000000 + Math.random() * 9000000000).toString()
	}

	const handleCopy = () => {
		const link = `https://t.me/mrkt/app?startapp=${generateRandomId()}`

		navigator.clipboard
			.writeText(link)
			.then(() => {
				setIsCopied(true)
				setTimeout(() => setIsCopied(false), 2000) // Уведомление исчезнет через 2 секунды
			})
			.catch((err) => {
				console.error('Не удалось скопировать ссылку:', err)
				// Fallback для старых браузеров
				const textArea = document.createElement('textarea')
				textArea.value = link
				document.body.appendChild(textArea)
				textArea.select()
				document.execCommand('copy')
				document.body.removeChild(textArea)
				setIsCopied(true)
				setTimeout(() => setIsCopied(false), 2000)
			})
	}
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
					<div style={{ position: 'relative' }}>
						<div
							style={{
								position: 'absolute',
								display: 'flex',
								alignItems: 'center',
								gap: '10px',
								bottom: isCopied ? '100%' : '50%',
								opacity: isCopied ? '1' : '0',
								right: '0',
								pointerEvents: isCopied ? 'auto' : 'none',
								backgroundColor: '#cccccc30',
								color: 'white',
								padding: '8px',
								borderRadius: '4px',
								fontSize: '12px',
								marginBottom: '5px',
								whiteSpace: 'nowrap',
								transitionDuration: '300ms',
							}}>
							Скопировано!
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
								class='lucide lucide-thumbs-up-icon lucide-thumbs-up'>
								<path d='M7 10v12' />
								<path d='M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z' />
							</svg>
						</div>
						<button onClick={handleCopy} className='button'>
							<img width={22} src={CopyImg} alt='copy' />
						</button>
					</div>
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
