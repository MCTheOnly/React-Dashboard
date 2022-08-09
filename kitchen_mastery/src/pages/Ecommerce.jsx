import { BsCurrencyDollar } from "react-icons/bs"
import { GoPrimitiveDot } from 'react-icons/go'

import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from "../data/dummy"

import { useStateContext } from "../contexts/ContextProvider"

const Ecommerce = () => {

	const { activeMenu } = useStateContext()

	return (
		<div className={activeMenu ? "ecommerce retracted" : "ecommerce"}>
			<div className="ecommerce__wrapper">
				Ecommerce
				<div className="ecommerce__content">
					<div>
						<div>
							<p>Earnings</p>
							<p>34,000$</p>
						</div>
					</div>
					<div>
						<Button
							color="white"
							bgColor="blue"
							text="Download"
							borderRadius="10px"
						/>
					</div>
				</div>
				<div>
					{earningData.map((item) => (
						<div key={item.title}>
							<button
								type="button"
								style={{
									color: item.iconColor,
									backgroundColor: item.iconBg
								}}>
								{item.icon}
							</button>
							<p>
								<span>
									{item.amount}
								</span>
								<span>
									{item.percentage}
								</span>
							</p>
							<p>{item.title}</p>
						</div>
					))}
				</div>
			</div>
			<div>
				<div>
					<div>
						<p>Revenue Updates</p>
						<div>
							<p>
								<span><GoPrimitiveDot /></span>
								<span>Expanse</span>
							</p>
							<p>
								<span><GoPrimitiveDot /></span>
								<span>Budget</span>
							</p>
						</div>
					</div>
					<div>
						<div>
							<div>
								<p>
									<span>$93,045</span>
									<span>23%</span>
								</p>
								<p>Budget</p>
							</div>
							<div>
								<p>
									<span>$93,045</span>
								</p>
								<p>Expense</p>
							</div>
							<div>
								<SparkLine
									currentColor="blue"
									id="line-sparkline"
									type="line"
									height="80px"
									width="250px"
									data={SparklineAreaData}
									color="blue"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Ecommerce;
