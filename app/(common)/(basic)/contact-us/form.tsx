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
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FormContactUs = ({ user, country, about }: any) => {
   const formSchema = z
      .object({
         firstName: z.string().min(1, "Required"),
         lastName: z.string().min(1, "Required"),
         companyName: z.string().min(1, "Required"),
         businessName: z.string().min(1, "Required"),
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
         context: "",
         messages: ""
      }
   });

   const handleSubmit = (values: z.infer<typeof formSchema>) => {
      console.log(values);
   };

   return (
      <div className="container flex flex-col justify-center items-center">
         {
            !about &&
            <div className="py-[4.3125rem] md:w-1/2">
               <p className="text-6xl font-bold text-[#081440]">Contact Us</p>
            </div>
         }
         <Form {...form}>
            <form
               className={`${about ? "w-full": "md:w-1/2"} mb-[3.125rem]`}
               onSubmit={form.handleSubmit(handleSubmit)}
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
                  render={({ field }: any) => {
                     return (
                        <FormItem className="flex flex-col w-full mb-4">
                           <FormLabel className="text-xl font-bold text-[#081342]">
                              Select the context of this inquiry
                           </FormLabel>
                           <FormControl>
                              <RadioGroup
                                 value={field.value}
                                 onValueChange={field.onChange}
                              >
                                 <FormItem>
                                    <div className="flex items-center gap-3 text-[13px]">
                                       <RadioGroupItem className="h-[16px] w-[16px]" value={"Sourcing"} />Sourcing
                                    </div>
                                    <div className="flex items-center gap-3 text-[13px]">
                                       <RadioGroupItem className="h-[16px] w-[16px]" value={"Sales"} />Sales
                                    </div>
                                    <div className="flex items-center gap-3 text-[13px]">
                                       <RadioGroupItem className="h-[16px] w-[16px]" value={"Data"} />Data
                                    </div>
                                    <div className="flex items-center gap-3 text-[13px]">
                                       <RadioGroupItem className="h-[16px] w-[16px]" value={"Other"} />Other
                                    </div>
                                 </FormItem>
                              </RadioGroup>
                           </FormControl>
                           <FormMessage className="text-sm" />
                        </FormItem>
                     );
                  }}
               />
               <div className="p-[10px] rounded-md bg-[#f0f2f4] mb-4">
                  If you want to contact for media or press, it is faster to email admin@trade4go.com
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
               <div className="my-[20px]">By continuing, you agree to Trade4go's Privacy Policy.</div>
               <Button
                  className="h-[38px] text-[13px]"
                  type="submit"
               >
                  Send Inquiry
               </Button>
            </form>
         </Form>
      </div>
   )
};

export default FormContactUs;
