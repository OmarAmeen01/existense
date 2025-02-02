import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {text?:string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({className, text,...props },ref)=>{
    return <button ref={ref} onClick={props.onClick}  className={`border-none bg-[#006dff] font-sans text-sm rounded-3xl px-6  grow-0  -basis-4 outline-none trasition-all duration-100 hover:bg-slate-300 hover:text-black text-white ${className} `} type={props.type} {...props}>{text?text:props.children}</button>
})
Button.displayName= "Button"
export default Button
