import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { myQuestions } from './data'
import { AnswerOption, AnswerCheck } from './components'

export const App = () => {
	const [data, setData] = useState(myQuestions)
	const [value, setValue] = useState({})
	const [isCorrect, setIsCorrect] = useState([])
	const [checked, isChecked] = useState(false)
	const [validate, setValidate] = useState(false)

	const handleChange = (e) => {
		setValue({
			...value,
			[e.target.name]: e.target.value,
		})
	}

	const checkAnswer = () => {
		if (checkValidate()) {
			const correctAnswerList = data.map((e) => e.correctAnswer)
			const answers = Object.values(value)
			const checkAnswer = []
			for (let i = 0; i < data.length; i++) {
				const answer = parseInt(answers[i])
				correctAnswerList[i] === answer
					? checkAnswer.push(1)
					: checkAnswer.push(0)
			}
			setIsCorrect(checkAnswer)
			isChecked(true)
		}
	}

	const checkValidate = () => {
		const questionList = data.map((e) => e.question)
		const keys = Object.keys(questionList)
		console.log(value)
		for (let i = 0; i < data.length; i++) {
			
		}
	}

	return (
		<div>
			<ol>
				{data.map((e, i) => {
					return (
						<div key={i}>
							<li>
								<label>{e.question}</label>
								{checked === true ? <AnswerCheck check={isCorrect[i]} /> : ''}
							</li>
							{
								<AnswerOption
									onChange={handleChange}
									answers={e.answers}
									value={value || null}
									name={e.question}
									disabled={checked}
								/>
							}
						</div>
					)
				})}
			</ol>
			<Button onClick={checkAnswer} outline color='success'>
				Submit
			</Button>
		</div>
	)
}
