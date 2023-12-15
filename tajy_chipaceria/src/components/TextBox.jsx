import React from 'react'

export const TextBox = ({text, styleText}) => {
  return (
    <div>
        <p className='textBox pt-4' style={styleText}>{text}</p>
    </div>
  )
}
