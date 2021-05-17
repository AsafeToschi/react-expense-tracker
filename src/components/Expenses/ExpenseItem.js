import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

function ExpenseItem(props) {

	const [title, setTitle]= useState(props.title)
	const [oldTitle, setOldTitle]= useState()

	const clickHandler = () => {

		if (title === props.toggleTitle) {

			setTitle(oldTitle)
			
		} else {
			
			setOldTitle(title)
			setTitle(props.toggleTitle)

		}

	} 

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			<button onClick={clickHandler}> Toggle title text</button>
		</Card>
	)
}

export default ExpenseItem;