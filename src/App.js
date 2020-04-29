import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { myQuestions } from './data'
import { Answer } from './components'

export const App = () => {
	const [data, setData] = useState(myQuestions)
	const [value, setValue] = useState(undefined)

	const handleChange = (e) => {
		setValue({
			...value,
			[e.target.name]: e.target.value,
		})
	}

	const checkAnswer = () => {
		console.log(...data)
	}

	const checkValid = () => {
		
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
									name={i}
								/>
							}
						</div>
					)
				})}
			</ol>
			<Button onClick={checkAnswer} outline color="success">Submit</Button>
		</div>
	)
}
