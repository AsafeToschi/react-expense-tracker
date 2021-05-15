import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'

import './Expenses.css'

function Expenses(props) {

	const expenses = props.items.map((expense, index) => {
		return (
			<ExpenseItem
				key={index}
				title={props.items[0].title}
				amount={props.items[0].amount}
				date={props.items[0].date}
			/>
		)
	})

	return (
		<Card className="expenses">
			{expenses}
		</Card>
	)
}
export default Expenses;