import React from 'react'

export default function Button({text , color , icon , filled, iconPossition , onClick }) {
  return (
    <button onClick={onClick}  className={filled? `bg-${color} text-white px-2 py-1 flex gap-2 items-center border-none cursor-pointer text-smallP ` : 
                        `border border-1 border-${color} px-2 py-1 flex gap-2 items-center cursor-pointer text-${color} text-smallP  `} >
        {
          icon && iconPossition === 'left' ? icon : null
        }
        {text}
        {
          icon && iconPossition === 'right'? icon : null
        }
    </button>
  )
}
