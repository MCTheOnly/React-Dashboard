import { Link, NavLink } from "react-router-dom";
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { contextMenuItems, links } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'



const Sidebar = () => {

	const { activeMenu, setActiveMenu, screenSize } = useStateContext()
	const activeLink = 'true'
	const normalLink = 'true'

	const handleCloseSideBar = () => {
		if (activeMenu && screenSize <= 900) {
			setActiveMenu(false)
		}
	}

	return (
		<div className="sidebar__wrapper">
			{activeMenu && (
				<>
					<div className="sidebar__header">
						<Link to="/" onClick={handleCloseSideBar}>
							<SiShopware /> Shop
						</Link>

						<TooltipComponent content="Menu" position="BottomCenter">
							<button type="button" onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}>
								<MdOutlineCancel />
							</button>
						</TooltipComponent>
					</div>

					<div className="sidebar__links">
						{links && links.map((item) => (
							<div key={item.title} className="sidebar__links--wrapper">
								<p>{item.title}</p>
								{item.links.map((link) => (
									<NavLink
										to={`/${link.name}`}
										key={link.name}
										onClick={handleCloseSideBar}
										className={({ isActive }) => isActive ? activeLink : normalLink}>
										{link.icon}
										<span>{link.name}</span>
									</NavLink>
								))}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Sidebar;
