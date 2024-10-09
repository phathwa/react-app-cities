import React from 'react'
interface Props {
    children: string
    color?: "primary" | "secondary" | "warning" | "success" | "danger"

    // functions
    onClick: () => void
}
const Button = ({children, onClick, color = "primary"}: Props) => {
  return (
    <button type="button" onClick={onClick} className={"btn mt-3 btn-"+color}>{children}</button>
  )
}

export default Button