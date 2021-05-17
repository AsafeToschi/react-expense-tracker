import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'

import './Expenses.css'

function Expenses(props) {

	const expenses = props.items.map((expense, index) => {
		return (
			<ExpenseItem
				key={index}
				title={props.items[index].title}
				toggleTitle={props.items[index].toggleTitle}
				amount={props.items[index].amount}
				date={props.items[index].date}
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