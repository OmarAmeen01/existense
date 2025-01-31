"use client";
import React, { MouseEventHandler } from "react";
import useStore from "@/store/store";
import { useState } from "react";
import InputComponet from "./InputComponent";
import Button from "./Button";
import { useForm } from "react-hook-form";
import Image from "next/image";

function Register() {
  // States
  const isFormClicked = useStore((state) => state.isFormClicked);
  const setFromState = useStore(
    (state) => state.setFromState
  ) as MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  const [sendingResponse, setSendingResponse] = useState(false);
  const [error, setError] = useState({
    isError: false,
    error: "",
  });

  const { handleSubmit, register } = useForm();

  // Functions
  function registerUser() {
    setFromState();
    setSendingResponse(true)
    setError(prev=>{
    return {
      ...prev,
      isError:false,
      error:""
    }
    
    })
  }

  const formFields = [
    { type: "text", fieldName: "Email" },
    { type: "number", fieldName: "Phone Number" },
    { type: "text", fieldName: "School Name" },
    { type: "text", fieldName: "Grade" },
  ];

  return (
    isFormClicked && (
      < div className="fixed grid place-items-center overflow-hidden">
       
          <div
            className="fixed   bg-[rgb(255,255,255,0.6)]  backdrop-blur-lg  top-0 left-0 z-10 w-[100%] h-[100%]"
            onClick={() => setFromState()}
          >
            {" "}
          </div>
         
            <form
              className="bg-white  z-30 px-6  py-2 rounded-lg 
              top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-lg max-[676px]:max-w-[420px] max-w-[520px]  relative   overflow-hidden  "
              onSubmit={handleSubmit(registerUser)}
            >
              {sendingResponse && (
                <div id="form-loading" className="absolute top-0"></div>
              )}
              <div className="relative">
                <button
                  className="bg-transparent p-2 absolute right-0 hover:bg-"
                  onClick={() => setFromState()}
                >
                  <Image
                    src="/cross.svg"
                    alt="close"
                    title="close"
                    width={28}
                    height={28}
                  />
                </button>
                <h2 className="font-sans text-3xl p-2 text-center font-[600]">
                  Register
                </h2>
                <p className="font-sans text-sm py-6 text-center text-gray-500 px-20">
                  Join Misty&aposs waitlist now for early access to the future of
                  learning!
                </p>
              </div>
              {error.isError && (
                <p className="text-red-500 text-lg text-center">
                  {error.error}
                </p>
              )}
              <div className="flex mb-3 justify-between">
                <InputComponet
                  type="text"
                  placeholder="First Name"
                  {...register("First Name", {
                    required: true,
                  })}
                />
                <InputComponet
                  type="text"
                  placeholder="Last Name"
                  {...register("Last Name", {
                    required: true,
                  })}
                />
              </div>
              {formFields.map((formfield) => {
                return (
                  <InputComponet
                    key={formfield.fieldName}
                    type={formfield.type}
                    className="mb-3"
                    placeholder={`${formfield.fieldName}*`}
                    {...register(formfield.fieldName, {
                      required: true,
                    })}
                  />
                );
              })}
              <p className="font-sans text-sm mt-4 text-gray-500 text-center">
                By clicking “Submit”, you agree to our{" "}
                <a
                  href="#"
                  className="font-sans text-sm font-[600] text-black underline "
                >
                  Terms of service
                </a>{" "}
                and acknowledge of our{" "}
                <a
                  href="#"
                  className="font-sans text-sm font-[600] text-black underline "
                >
                  Privacy policy.
                </a>
              </p>

              <Button
                className="relative left-[50%] -translate-x-[50%] text-sm p-[6px] px-6 mt-4 mb-2"
                text={sendingResponse ? "wait..." : "submit"}
                type="submit"
              />
            </form>

      </div>
    )
  );
}

export default Register;
