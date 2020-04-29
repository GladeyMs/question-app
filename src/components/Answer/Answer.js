import React from 'react'
import { CustomInput } from 'reactstrap'

export const Answer = ({ answers, onChange, name }) => {
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
						/>
					</div>
				)
			})}
		</div>
	)
}
