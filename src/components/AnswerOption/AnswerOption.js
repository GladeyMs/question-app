import React from 'react'
import { CustomInput } from 'reactstrap'

export const AnswerOption = ({ answers, onChange, name, disabled }) => {
	return (
		<div>
			{answers.map((e, i) => {
				return (
					<div key={i}>
						<CustomInput
							type='radio'
							onChange={onChange}
							value={i}
							name={name}
							label={e}
							id={e}
							disabled={disabled}
						/>
					</div>
				)
			})}
		</div>
	)
}
