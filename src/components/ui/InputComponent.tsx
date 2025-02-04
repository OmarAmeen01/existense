import {Path,FieldError,ValidationRule, UseFormRegister } from "react-hook-form"
interface Input {
    first_name:string,
    last_name:string,
    email:string,
    phone_number:number,
    grade:string,
    school_name:string
    }


type InputProps={
    register:UseFormRegister<Input>,
    type?:string,
    required?:string,
    placeholder:string,
    error?:FieldError,
    id?:string,
    className?:string,
    fieldName:Path<Input>,
    pattern?:ValidationRule<RegExp>,
    minLength?:number,
    maxLength?:number
}
export  default function  InputComponet({type,placeholder,fieldName,minLength, maxLength, pattern,required,error, register, className}:InputProps){

        return (
                    <input
                    className={`rounded-lg
                        text-sm sm:text-xl w-full  font-sans focus:outline-[#006dff] p-2  sm:p-3 outline-2  bg-[#dadada] ${error&&"focus:outline-red-500 bg-red-100"}  ${className}`} 
                    {...register(fieldName,{required, pattern:pattern})}
                    type={type || "text"} placeholder={placeholder} minLength={minLength} maxLength={maxLength} />

        )
    }
