type Input ={
    type?:string,
    placeholder:string,
    pattern?:string,
    error?:string,
    id?:string,
    className?:string
    }
export default function InputComponet({type,placeholder, className}:Input){

    return (
        <div className="flex flex-col">
                <input className={`rounded-lg text-sm   md:text-lg font-sans focus:border-black px-2 py-3 outline-0 border-2 bg-[#dadada]  ${className}`} type={type || "text"} placeholder={placeholder} />
                
        </div>
    )
}