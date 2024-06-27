"use client";

import Image from "next/image";
import React from "react";
import { contactFormData } from "./utils/data";
import { useForm, SubmitHandler } from "react-hook-form";
import { ContactInputs } from "./utils/types";
import { useRouter } from "next/navigation";

function Contact() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInputs>();

  const onSubmit: SubmitHandler<ContactInputs> = (data) => {
    console.log(data);
    if (router) {
      router.push("/success-page");
    }
  };
  return (
    <section className="flex justify-around gap-6 lg:gap-20 px-10 py-16 lg:px-20 lg:py-24 w-full">
      <Image
        src={"contact_img.svg"}
        alt="two teammates"
        width={1000}
        height={1000}
        className="w-[23rem] h-[30rem] bg-cover hidden md:block"
      />

      <div className="flex flex-col gap-6">
        <h1 className="self-center text-2xl font-bold">
          We&apos;d love to hear from you!
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full md:w-[30rem]"
        >
          {contactFormData.map((field, index) => {
            return (
              <div key={index} className="w-full flex flex-col gap-2">
                {field.type !== "textArea" && (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    {...register(field.name, {
                      required: {
                        value: true,
                        message: `${
                          field.placeholder.split("*")[0]
                        } is required`,
                      },
                      pattern:
                        field.type === "email"
                          ? {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            }
                          : undefined,
                      minLength:
                        field.type === "text"
                          ? {
                              value: 3,
                              message: "Minimum length is 3 characters",
                            }
                          : undefined,
                      maxLength:
                        field.type === "text"
                          ? {
                              value: 100,
                              message: "Maximum length is 100 characters",
                            }
                          : undefined,
                    })}
                    className="border-2 border-slate-400 focus:outline-none focus:border-yellow-300 px-4 lg:px-6 py-2 md:py-3 rounded-md placeholder:text-black placeholder:font-medium w-full"
                  />
                )}

                {field.type === "textArea" && (
                  <textarea
                    placeholder={field.placeholder}
                    {...register(field.name, {
                      required: {
                        value: true,
                        message: `${
                          field.placeholder.split("*")[0]
                        } is required`,
                      },
                      minLength: {
                        value: 10,
                        message: "Minimum length is 10 characters",
                      },
                      maxLength: {
                        value: 500,
                        message: "Maximum length is 500 characters",
                      },
                    })}
                    className="border-2 border-slate-400 focus:outline-none focus:border-yellow-300 px-4 lg:px-6 py-2 md:py-4 rounded-md placeholder:text-black placeholder:font-medium w-full h-28"
                  ></textarea>
                )}
                {errors[field.name] && (
                  <p className="text-red-700 text-xs">
                    {errors[field.name]?.message}
                  </p>
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
