import React from 'react'

export const Question = ({ props }) => {
	return (
		<div>
			{props.map((e, i) => {
				return (
          <li key={i}>
            {e.question}
          </li>
        )
			})}
		</div>
	)
}
