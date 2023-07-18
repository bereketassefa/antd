import React from 'react'

export default function Copyright() {
    const CopyrightYear = new Date().getFullYear()
    const CompanyName = "Addissystems"
  return (
    <>
     <span className='text-base flex items-center justify-center'>Copyright &copy; {CopyrightYear} {CompanyName}.</span>
    </>
  )
}
