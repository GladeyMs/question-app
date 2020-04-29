import React from 'react'
import { Radio } from 'antd'

export const Answer = ({ answers, onChange, value, name }) => {
	return (
		<div>
			{/* <Radio.Group onChange={onChange} value={value} name={name}>
				{answers.map((e, i) => {
					return (
						<div key={i}>
							<Radio value={i}>{e}</Radio>
						</div>
					)
				})}
			</Radio.Group> */}
			{answers.map((e, i) => {
				return (
					<div key={i}>
						<input type='radio' onChange={onChange} value={i} name={name} />
						<label>{e}</label>
					</div>
				)
			})}
		</div>
	)
}
