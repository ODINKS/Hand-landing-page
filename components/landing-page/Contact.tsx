"use client";

import Image from "next/image";
import React from "react";
import { contactFormData } from "./utils/data";
import { useForm, SubmitHandler } from "react-hook-form";
import { ContactInputs } from "./utils/types";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInputs>();

  const onSubmit: SubmitHandler<ContactInputs> = (data) => console.log(data);
  return (
    <section className="flex justify-around gap-6 lg:gap-20 px-10 py-16 lg:px-20 lg:py-24 w-full">
      <Image
        src={"vercel.svg"}
        alt="two teammates"
        width={1000}
        height={1000}
        className="w-[23rem] h-[30rem] bg-cover border border-black hidden md:block"
      />

      <div className="flex flex-col gap-6">
        <h1 className="self-end text-2xl font-bold">
          We&apos;d love to hear from you
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full md:w-[30rem]"
        >
          {contactFormData.map((field, index) => {
            return (
              <div key={index} className="w-full">
                {field.type !== "textArea" && (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    {...register(field.name)}
                    className="border-2 border-slate-400 px-4 lg:px-6 py-2 md:py-4 rounded-md placeholder:text-black placeholder:font-medium w-full"
                  />
                )}

                {field.type === "textArea" && (
                  <textarea
                    placeholder={field.placeholder}
                    {...register(field.name)}
                    className="border-2 border-slate-400 px-4 lg:px-6 py-2 md:py-4 rounded-md placeholder:text-black placeholder:font-medium w-full h-28"
                  ></textarea>
                )}
              </div>
            );
          })}
          <button className="w-full text-white px-4 py-4 bg-[#101010] rounded-md">
            Send Proposal
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
