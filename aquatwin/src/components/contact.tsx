"use client"
import React from 'react'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import Container from './container'

const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "This field is required"
    })
    .max(50, {
      message: "Name can not exceed more than 50  characters"
    }),
  email: z
    .string()
    .email(),
  userMessage: z
    .string().min(1, {
      message: "This field is required"
    })
    .max(1000, {
      message: "Word Limit exceeded"
    }),

})


const Contact = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      userMessage: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        </pre>
      ),
    })
    console.log(values)
  }

  return (
    <Container className="bg-primary-1">
      <section className='flex flex-col items-center gap-5' id='contact'>
        <div>
          <h1 className='text-4xl text-center font-bold text-title'>Get in Touch</h1>
        </div>
        <p className='text-sm md:text-lg text-center'>We&rsquo;d love to hear from you. Please reach out to us for any inquiries or collaborations.</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-5 w-full max-w-[700px]">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userMessage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder=""
                      className="resize-none focus-visible:border-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='w-full' type="submit">Submit</Button>
          </form>
        </Form>
      </section>
    </Container>
  )
}

export default Contact
