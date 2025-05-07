import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
// import { useToast } from "@/hooks/use-toast"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useDispatch, useSelector } from "react-redux";
import { signInFailure, signInStart, signInSuccess } from "@/redux/user/userSlice";

const formSchema = z.object({
 
  email: z.string().min({ message: "Invalid Email Address" }).max(50),
  password: z
    .string()
    .min(8, { message: "Password must be at leat 8 characters" })
    .max(50),
});

const SignInForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const dispatch =useDispatch();
 const {loading,error:errormessage}=useSelector((state)=>state.user)
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // 2. Define a submit handler.
  async function onSubmit(values) {
    try {
      dispatch(signInStart())
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (data.success === false) {
       
        toast({ title: "Sign in failed ! Please try again later" });
       dispatch(signInFailure(data.message))
      }
   
      if (res.ok) {
        dispatch(signInSuccess(data))
        toast({ title: "Sign in Successfully" });
        navigate("/");
      }
    } catch (error) {
    
      toast({ title: "Something went wrong" });
      dispatch(signInFailure(error.message))
    }
  }

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl sm:max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link
            to={"/"}
            className="font-bold text-3xl sm:text-4xl flex flex-wrap"
          >
            <span className="text-slate-500">Morninggg</span>
            <span className="text-slate-900">NewProvider</span>
          </Link>

          <h2 className="text-[24px] md:text-[30px] font-bold leading-[140%] tracking-tighter pt-5 sm:pt-12 ">
            Sign in to your account
          </h2>
          <p className="text-slate-500 text-[14px] font-medium  md:text-[16px] md:font-normal mt-2">
            Welcome back, Please Provide your Details{" "}
          </p>
        </div>

        {/* Right */}
        <div className="flex-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Email" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-blue-500 w-full"
                disabled={loading}
              >
                {loading ? (
                  <span className="animate-pulse">Loading...</span>
                ) : (
                  <span>Sign-in</span>
                )}
              </Button>
            </form>
          </Form>
          <div className="flex gap-2 text sm:mt-5">
            <span>Don't have an account?</span>
            <Link to="/sign-up" className="text-blue-500">
              Sign-up
            </Link>
          </div>
          {errormessage &&<p className="mt-3 text-red-500">{errormessage}</p> }
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
