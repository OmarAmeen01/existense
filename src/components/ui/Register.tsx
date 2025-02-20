"use client";
import React, { useState } from "react";
import useStore from "@/store/store";
import InputComponet from "./InputComponent";
import Button from "./Button";
import { useForm } from "react-hook-form";
import SubmissionSuccess from "./SubmissionSuccess";
import Image from "next/image";
import { supabase } from "@/db/db";
function Register() {
  // States
  const [isSubmitted,setIsSubmitted]= useState(false)
  const isFormClicked = useStore((state) => state.isFormClicked);
  const setFromState = useStore(
    (state) => state.setFromState
  ) 
  const  [error,setError] = useState({
    isError:false,
    msg:""
  })



  interface FormInput{
    first_name:string,
    last_name:string,
    school_name:string,
    grade:string,
    email:string,
    phone_number:number,
  }

  const { handleSubmit,register ,formState:{errors,isSubmitting,isSubmitSuccessful},reset} = useForm<FormInput>();
console.log(errors)
  // Functions
async function onSubmit(formData:FormInput) {
  try {
    const {data} = await supabase.from("Users").select("*")
    
    if(data!==null){
      
     const existingUser = data.filter(user=>{
     return (Number(formData.phone_number)===user.phone_number)
        
     })

    if (existingUser.length>0){
      setError(prev=>(
        {...prev,
          isError:true,
          msg:"Email or Phone Number already exist"
        }
      
      ))
    }else{
      const { error } = await supabase
      .from('Users')
      .insert([{ first_name:formData.first_name,
        last_name:formData.last_name,
        email:formData.email.toLowerCase(),
        phone_number:formData.phone_number,
        school_name:formData.school_name,
        grade:formData.grade,
     }])
   
    if (error){
      setError(prev=>(
        {
          ...prev,
          isError:true,
          msg:error.message
        }
      ))
    }
      if(isSubmitSuccessful)
        setError(prev=>({
          ...prev,
          isError:false,
          msg:""
        }))
        setFromState()
        reset()
        setTimeout(()=>{
          setIsSubmitted(true)
        },800)
        setTimeout(()=>{
          setIsSubmitted(false)
        },3000)
      }
    
  
  
    }

    
  


 
  } catch (error) {
     
    setError(prev=>(
      {
        ...prev,
        isError:true,
        msg:JSON.stringify(error)
      }
    ))

  }
  }


 
  return (
 
    isFormClicked? (
      <>
      
      
      < div className="fixed grid place-items-center overflow-hidden  z-[15] ">
       
        
        
         <div className="fixed top-0 left-0 px-6  w-[100%] h-[100%] z-[15] max-[676px]:my-5 ">
         <div
            className="fixed z-[14] bg-[rgb(248,248,248,0.9)]  backdrop-blur-lg  top-0 left-0  w-[100%] h-[100%] "
          onClick={()=>setFromState()}
          >    </div>
      
            <form
              className="bg-[#F8F8F8]  z-[15]  min-[676px]:mt-3 p-2 md:p-4  rounded-lg  w-full  absolute shadow-sm
              top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  min-[385px]:max-w-[385px] sm:max-w-[550px]  overflow-hidden min-[676px]:mx-2 
        
              max-[350px]:max-w-[290px] "
              onSubmit={handleSubmit(onSubmit)}
            >
              {isSubmitting&& (
                <div id="form-loading" className="absolute top-0"></div>
              )}
              <div className="relative mb-6">
                <button
                  className="bg-transparent p-2 absolute -top-6 -right-2 hover:bg-"
                  onClick={()=>{setFromState()}}
                >
                  <Image
                    src="/cross.svg"
                    className="max-sm:h-6"
                    alt="close"
                    title="close"
                    width={28}
                    height={28}
                   
                  />
                </button>
                <h2 className='font-sans font-[500] text-2xl md:text-3xl text-center '>
                  Register
                </h2>
                <p className="font-sans py-2 text-center max-md:text-sm text-gray-500  min-[676px]:px-16">
                  Join Misty&apos;s waitlist now for early access to the future of
                  learning!
                </p>
                {error.isError&& <p className="font-sans text-sm  text-center text-red-500">{error.msg}</p>}
              </div>
              <div className="flex   mb-5 my-2   w-full justify-between">
                <div className="relative w-full sm:mr-4  mr-2">
                <InputComponet
                className="w-full"
                error={errors.first_name}
                  type="text"
                  placeholder="First Name*"
                  register={register}
                  required="First Name is required"
                  fieldName="first_name"
                />
              {errors.first_name&&<p className="absolute z-1  -top-[18px] text-[11px] text-red-500 left-1 font-sans ">{errors.first_name.message}</p>}
                </div>
                <div className="relative w-full">
                <InputComponet
                  type="text"
                  error={errors.last_name}
                  className="w-full"
                  placeholder="Last Name*"
                  register={register}
                  required="Last Name is required"
                  fieldName="last_name"
                />
      {errors.last_name&&<p className="absolute   -top-[18px] text-[11px] text-red-500 left-1 font-sans ">{errors.last_name.message}</p>}
                </div>
                
              </div>
              <div className="relative ">


              <InputComponet
                  type="email"
                  error={errors.email}
                  className="mb-5 "
                  register={register}
              required="Email is required"
                  pattern= {/^\S+@\S+\.\S+$/}
                  placeholder="Email*"
                  
                  fieldName="email"
                />
               
      {errors.email&&<p className="absolute font-sans left-1   -top-[18px] text-[11px] text-red-500">{errors.email.message}</p>}
</div>
                 <div className="relative">


                <InputComponet
                type="number"
                error={errors.phone_number}
                className="mb-5"
                placeholder="Phone Number*"
                pattern={/^\+?[0-9][0-9]{9,14}$/}
                minLength={10}
                maxLength={14}
                register={register}
                required="Phone Number is required"
                fieldName="phone_number"
              />
             
      {errors.phone_number&&<p className="absolute  left-1 font-sans   -top-[18px] text-[11px] text-red-500">{errors.phone_number.message}</p>}
</div>
               <div className="relative">


               <InputComponet
              type="text"
              error={errors.school_name}
            className="mb-5"
              placeholder="School Name*"
              register={register}
              required="School Name is required"
              fieldName="school_name"
            /> 
      {errors.school_name&&<p className="absolute  left-1 font-sans   -top-[18px] text-[11px] text-red-500">{errors.school_name.message}</p>}
</div>
             <div className="relative">


            <InputComponet
            type="text"
            error={errors.last_name}
           className="mb-5"
            placeholder="Grade*"
            register={register}
            required="Grade is required"
            fieldName="grade"
          />
      {errors.grade&&<p className="absolute left-1 -top-[18px] text-[11px] text-red-500 font-sans  ">{errors.grade.message}</p>}
          </div>
              <p className="font-sans max-md:text-sm  text-gray-500 text-center">
                By clicking “Submit”, you agree to our{" "}
                <a
                  href="#"
                  className="font-sans max-md:text-sm hover:text-[#006dff] font-[600] text-black underline "
                >
                  Terms of service
                </a>{" "}
                and acknowledge of our{" "}
                <a
                  href="#"
                  className="font-sans max-md:text-sm  font-[600] hover:text-[#006dff] text-black underline "
                >
                  Privacy policy.
                </a>
              </p>
               <Button
                className="relative left-[50%] -translate-x-[50%]  p-[6px] px-6 mt-4 mb-2 max-md:text-sm max-md:px-4 text-[17px]"
                text={isSubmitting? "wait..." : "submit"}
                type="submit"
              />
            </form>
            </div>
           
      </div>
      </>
    ):<SubmissionSuccess isSubmitted={isSubmitted}/>
  );
}

export default Register;
