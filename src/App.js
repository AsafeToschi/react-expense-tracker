import Expenses from './components/Expenses/Expenses'

import './App.css';

function App() {
	const expenses = [
		{
			id: 'e1',
			title: 'Toilet Paper',
			toggleTitle: "Updated via props using state",
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{
			id: 'e2',
			title: 'New TV',
			toggleTitle: "Updated via props using state",
			amount: 799.49,
			date: new Date(2021, 2, 12)
		},
		{
			id: 'e3',
			title: 'Car Insurance',
			toggleTitle: "Updated via props using state",
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: 'e4',
			title: 'New Desk (Wooden)',
			toggleTitle: "Updated via props using state",
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	];

	return (
		<div className="App">
			<h2>Let's get started!</h2>
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
