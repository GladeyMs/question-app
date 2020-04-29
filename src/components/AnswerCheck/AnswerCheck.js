import React from 'react'
import { Check, Clear } from '@material-ui/icons'

export const AnswerCheck = ({ check }) => {
	return (
		<React.Fragment>
			{check === 1 ? <Check color='primary' /> : <Clear color='error' />}
		</React.Fragment>
	)
}
