import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchButton({IconStyle, Icon, textContent, btnStyle}) {
  return (
    <>
      <button
       className={btnStyle}
      >
      <FontAwesomeIcon icon={Icon} className={IconStyle} />
      {textContent}
      </button>
    </>
  )
}
