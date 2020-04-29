import React, { useState, useEffect } from 'react'
import { Radio, Button } from 'antd'
import { myQuestions } from './data'
import { Answer } from './containers'

export const App = () => {
	const [data, setData] = useState(myQuestions)
	const [value, setValue] = useState(undefined)

	const handleChange = (e) => {
		setValue({
			...value,
			[e.target.name]: e.target.value,
		})
	}
	const handleSubmit = () => {
		const answer = {
			value,
		}
		checkAnswer()
	}

	const checkAnswer = () => {
		// const answer = {
		// 	value,
		// }
		console.log(data.map(e => e.correctAnswer))
		
	}

	return (
		<div>
			<ol>
				{data.map((e, i) => {
					return (
						<div key={i}>
							<li>{e.question}</li>
							{
								<Answer
									onChange={handleChange}
									answers={e.answers}
									value={value}
									name={e.question}
								/>
							}
						</div>
					)
				})}
			</ol>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	)
}
