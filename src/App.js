import React, { useState } from 'react'
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Container,
} from 'reactstrap'
import { myQuestions } from './data'
import { AnswerOption, AnswerCheck } from './components'

export const App = () => {
	const [answer, setValue] = useState({})
	const [isCorrect, setIsCorrect] = useState([])
	const [checked, isChecked] = useState(false)
	const [validate, setValidate] = useState(false)
	const [isToggle, setIsToggle] = useState(false)
	const [allCorrect, setAllCorrect] = useState(0)

	const toggle = () => setIsToggle(!isToggle)

	const handleChange = (e) => {
		const { name, value } = e.target
		setValue({
			...answer,
			[name]: value,
		})
	}

	const checkAnswer = () => {
		const correctAnswerList = myQuestions.map((e) => e.correctAnswer)
		const answers = Object.values(answer)
		const dataList = myQuestions.map((e) => e.question)
		const validList = []
		toggle()
		for (let i in dataList) {
			if (answers[i] === undefined) {
				validList.push(true)
				setValidate(true)
			} else {
				validList.push(false)
				setValidate(false)
			}
		}
		const valid = validList.every(isValidateAll)
		if (valid) {
			const checkAnswer = []
			for (let i = 0; i < myQuestions.length; i++) {
				const answer = parseInt(answers[i])
				correctAnswerList[i] === answer
					? checkAnswer.push(1)
					: checkAnswer.push(0)
			}
			setIsCorrect(checkAnswer)
			setAllCorrect(checkAnswer.reduce((acc, curr) => acc + curr))
			isChecked(true)
		}
	}

	const isValidateAll = (currentValue) => currentValue === false

	return (
		<Container>
			<ol>
				{myQuestions.map((e, i) => {
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
									value={answer}
									name={e.question}
									disabled={checked}
								/>
							}
						</div>
					)
				})}
			</ol>
			<Button
				onClick={checkAnswer}
				outline
				color='success'
				style={{ marginLeft: '40px' }}
			>
				Submit
			</Button>
			<Modal isOpen={isToggle} toggle={toggle}>
				<ModalHeader toggle={toggle}>
					{validate ? 'Some choices were required' : 'How many correct answer?'}
				</ModalHeader>
				<ModalBody>
					{validate ? (
						'Please answer all questions.'
					) : (
						<span>You got all {allCorrect} correct answers.</span>
					)}
				</ModalBody>
				<ModalFooter>
					<Button color='primary' onClick={toggle}>
						Ok
					</Button>
				</ModalFooter>
			</Modal>
		</Container>
	)
}
