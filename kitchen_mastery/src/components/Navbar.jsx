import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups"

import avatar2 from '../data/avatar2.jpg'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
	<TooltipComponent content={title} position="BottomCenter">
		<button type="button" onClick={customFunc} style={{ color }}>
			<span className="navbar__notificationDot" style={{ backgroundColor: dotColor }} />
			{icon}
		</button>
	</TooltipComponent>
)

const Navbar = () => {

	const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext()

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth)

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		if (screenSize <= 900) {
			setActiveMenu(false)
		} else {
			setActiveMenu(true)
		}
	}, [screenSize])

	return (
		<div className="navbar">
			<NavButton
				title="Menu"
				customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
				color="#000"
				icon={<AiOutlineMenu />} />
			<NavButton
				title="Cart"
				customFunc={() => handleClick('cart')}
				color="#000"
				icon={<FiShoppingCart />} />
			<NavButton
				title="Chat"
				dotColor="#03C9D7"
				customFunc={() => handleClick('chat')}
				color="#000"
				icon={<BsChatLeft />} />
			<NavButton
				title="Notifications"
				dotColor="#03C9D7"
				customFunc={() => handleClick('notification')}
				color="#000"
				icon={<RiNotification3Line />} />
			<TooltipComponent content="Profile" position="BottomCenter">
				<div
					className="navbar__profile"
					onClick={() => handleClick("userProfile")}>
					<img
						src={avatar2}
					/>
					<p>
						<span>Hi, </span> {' '}
						<span>User</span>
					</p>
					<MdKeyboardArrowDown />
				</div>
			</TooltipComponent>

			{isClicked.cart && <Cart />}
			{isClicked.chat && <Chat />}
			{isClicked.notification && <Notification />}
			{isClicked.userProfile && <UserProfile />}
		</div>
	);
}

export default Navbar;

