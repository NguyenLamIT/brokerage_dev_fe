"use client";
import { useForm } from "react-hook-form";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { postRequest } from "@/hook/apiClient";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const FormContactUs = ({ user, country }: any) => {
   const [loading, setLoading] = useState(false)
   const formSchema = z
      .object({
         firstName: z.string().min(1, "Required"),
         lastName: z.string().min(1, "Required"),
         companyName: z.string().min(1, "Required"),
         businessEmail: z.string()
            .min(1, "Required")
            .refine((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/
               .test(email), {
               message: "Invalid email",
            }),
         phoneNumber: z.string(),
         code: z.string(),
         context: z.string().min(1, "Required"),
         messages: z.string().min(1, "Required"),
      })

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         firstName: user?.first_name,
         lastName: user?.last_name,
         companyName: user?.company?.name,
         businessEmail: user?.email,
         phoneNumber: user?.phone?.phone,
         code: user?.phone?.code,
         context: "Sourcing",
         messages: ""
      }
   });
   const onSubmit = (values: z.infer<typeof formSchema>) => {
      setLoading(true)
      postRequest("/user/contact-us", {
         "first_name": values?.firstName,
         "last_name": values?.lastName,
         "company_name": values.companyName,
         "email": values.businessEmail,
         "context": values.context,
         "phone": values.code + values.phoneNumber.slice(1,),
         "message": values.messages
      })
         .then((data) => {
            toast({
               variant: "success",
               title: "Success",
               description: data?.message,
            });
         })
         .catch((err) => {
            toast({
               variant: "destructive",
               title: "Fail!",
               description: JSON.parse(err.request.response).message != undefined ? (JSON.parse(err.request.response).message == "" ? Object.values(JSON.parse(err.request.response).data as object)[0][0] : JSON.parse(err.request.response).message) : "Something went wrong!",
            });
         })
         .finally(() => setLoading(false));
   };

   return (
      <div className="container flex flex-col justify-center items-center">
         <div className="py-[4.3125rem] md:w-1/2">
            <p className="text-6xl font-bold text-[#081440]">Contact Us</p>
         </div>
         <Form {...form}>
            <form
               className="md:w-1/2 mb-[3.125rem]"
               onSubmit={form.handleSubmit(onSubmit)}
            >
               <div className="grid lg:grid-cols-2 gap-3">
                  <FormField
                     control={form.control}
                     name="firstName"
                     render={({ field }: any) => {
                        return (
                           <FormItem className="flex flex-col w-full mb-4">
                              <FormLabel className="text-xl font-bold text-[#081342]">
                                 First Name <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                 <Input
                                    placeholder="Enter first name"
                                    type="text"
                                    {...field}
                                    className={`border !w-full !h-[38px] !text-[#081342] !text-[14px] 
                                       ${form.formState.errors.firstName ? 'border-[red]' : 'border-#939AA1'}`
                                    }
                                 />
                              </FormControl>
                              <FormMessage className="text-sm" />
                           </FormItem>
                        );
                     }}
                  />

                  <FormField
                     control={form.control}
                     name="lastName"
                     render={({ field }: any) => {
                        return (
                           <FormItem className="flex flex-col w-full mb-4">
                              <FormLabel className="text-xl font-bold text-[#081342]">
                                 Last Name <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                 <Input
                                    placeholder="Enter last name"
                                    type="text"
                                    {...field}
                                    className={`border !w-full !h-[38px] !text-[#081342] !text-[14px] 
                                       ${form.formState.errors.lastName ? 'border-[red]' : 'border-#939AA1'}`
                                    }
                                 />
                              </FormControl>
                              <FormMessage className="text-sm" />
                           </FormItem>
                        );
                     }}
                  />
               </div>
               <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }: any) => {
                     return (
                        <FormItem className="flex flex-col w-full mb-4">
                           <FormLabel className="text-xl font-bold text-[#081342]">
                              Company Name <span className="text-red-500">*</span>
                           </FormLabel>
                           <FormControl>
                              <Input
                                 placeholder="Enter company name"
                                 type="text"
                                 {...field}
                                 className={`border !w-full !h-[38px] !text-[#081342] !text-[14px] 
                                    ${form.formState.errors.companyName ? 'border-[red]' : 'border-#939AA1'}`
                                 }
                              />
                           </FormControl>
                           <FormMessage className="text-sm" />
                        </FormItem>
                     );
                  }}
               />
               <FormField
                  control={form.control}
                  name="businessEmail"
                  render={({ field }: any) => {
                     return (
                        <FormItem className="flex flex-col w-full mb-4">
                           <FormLabel className="text-xl font-bold text-[#081342]">
                              Business Email <span className="text-red-500">*</span>
                           </FormLabel>
                           <FormControl>
                              <Input
                                 placeholder="Enter business email"
                                 type="text"
                                 {...field}
                                 className={`border !w-full !h-[38px] !text-[#081342] !text-[14px]
                                    ${form.formState.errors.businessEmail ? 'border-[red]' : 'border-#939AA1'}`
                                 }
                              />
                           </FormControl>
                           <FormMessage className="text-sm" />
                        </FormItem>
                     );
                  }}
               />
               <FormLabel className="text-xl font-bold text-[#081342]">
                  Direct Phone Number
               </FormLabel>
               <div className="flex gap-4 pt-2">
                  <FormField
                     control={form.control}
                     name="code"
                     render={({ field }) => {
                        return (
                           <FormItem className="w-1/4">
                              <Select
                                 onValueChange={field.onChange}
                                 value={field.value}
                              >
                                 <FormControl>
                                    <SelectTrigger className=" !h-[3.2rem] text-[#000000] !text-xl !font-sans">
                                       <SelectValue placeholder="Nation code" />
                                    </SelectTrigger>
                                 </FormControl>
                                 <SelectContent className=" text-[#000000] text-xl">
                                    <SelectGroup>
                                       {country?.data.map((e: any, index: any) => (
                                          <SelectItem
                                             key={index}
                                             value={e.dial_code}
                                          >
                                             <div className="flex gap-2 w-full items-center text-lg">
                                                <span>{e.dial_code}</span>
                                             </div>
                                          </SelectItem>
                                       ))}
                                    </SelectGroup>
                                 </SelectContent>
                              </Select>
                              <FormMessage />
                           </FormItem>
                        );
                     }}
                  ></FormField>
                  <FormField
                     control={form.control}
                     name="phoneNumber"
                     render={({ field }: any) => {
                        return (
                           <FormItem className="flex flex-col w-full mb-4">

                              <FormControl>
                                 <div className="flex items-center gap-px text-[14px]">
                                    <Input
                                       placeholder="Enter phone number"
                                       type="text"
                                       {...field}
                                       className={`border !w-full !h-[38px] !text-[#081342] !text-[14px] 
                                       ${form.formState.errors.phoneNumber ? 'border-[red]' : 'border-#939AA1'}`
                                       }
                                    />
                                 </div>
                              </FormControl>
                              <FormMessage className="text-sm" />
                           </FormItem>
                        );
                     }}
                  />
               </div>
               <FormField
                  control={form.control}
                  name="context"
                  render={({ field }) => (
                     <FormItem className="space-y-3 py-4">
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem value="Sourcing" />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Sourcing
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem value="Sales" />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Sales
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem value="Data" />
                                 </FormControl>
                                 <FormLabel className="font-normal">Data</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem value="Other" />
                                 </FormControl>
                                 <FormLabel className="font-normal">Other</FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <div className="p-[10px] rounded-md bg-[#f0f2f4] mb-4">
                  If you want to contact for media or press, it is faster to email press@tridge.com
               </div>
               <FormField
                  control={form.control}
                  name="messages"
                  render={({ field }: any) => {
                     return (
                        <FormItem className="flex flex-col w-full mb-4">
                           <FormLabel className="text-xl font-bold text-[#081342]">
                              Write down your messages <span className="text-red-500">*</span>
                           </FormLabel>
                           <FormControl>
                              <Textarea
                                 {...field}
                                 rows={5}
                                 placeholder="Please specify the details as much as you can so that we can serve you better"
                                 className={`border !w-full !text-[#081342] !text-[14px] 
                                    ${form.formState.errors.messages ? 'border-[red]' : 'border-#939AA1'}`
                                 }
                              />
                           </FormControl>
                           <FormMessage className="text-sm" />
                        </FormItem>
                     );
                  }}
               />
               <div className="my-[20px]">By continuing, you agree to Tridge's Privacy Policy.</div>
               {loading ? (
                  <Button disabled>
                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                     Please wait
                  </Button>
               ) : (
                  <Button
                     type="submit"
                  >
                     Send Inquiry
                  </Button>
               )}

            </form>
         </Form>
      </div >
   )
};

export default FormContactUs;
