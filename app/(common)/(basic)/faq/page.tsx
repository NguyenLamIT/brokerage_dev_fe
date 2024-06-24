import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Common from "./common";
import {faqFind, faqGeneral, faqInsights } from "@/const/faq";
import Link from "next/link";

const Faq = () => {

   return (
      <div className="container flex flex-col items-center justify-center">
         <div className="pt-[4.3125rem] md:w-1/2">
            <p className="text-6xl font-bold text-[#081440] w-full">FAQ</p>
         </div>
         <Tabs defaultValue="all" className="md:w-1/2 mt-5">
            <TabsList className="bg-transparent flex flex-wrap justify-start gap-2.5 h-fit">
               <TabsTrigger value="all" className="rounded-2xl">All</TabsTrigger>
               <TabsTrigger value="general" className="rounded-2xl">General</TabsTrigger>
               <TabsTrigger value="find" className="rounded-2xl">Find Suppliers / Find Buyers</TabsTrigger>
               <TabsTrigger value="insights" className="rounded-2xl">Insights</TabsTrigger>
            </TabsList>
            <div className="w-full">
               <TabsContent value="all">
                  <Common title={"General"} content={faqGeneral} />
                  <Common title={"Find Suppliers / Find Buyers"} content={faqFind} />
                  <Common title={"Insights"} content={faqInsights} />
               </TabsContent>
               <TabsContent value="general">
                  <Common title={"General"} content={faqGeneral} />
               </TabsContent>
               <TabsContent value="find">
                  <Common title={"Find Suppliers / Find Buyers"} content={faqFind} />
               </TabsContent>
               <TabsContent value="insights">
                  <Common title={"Insights"} content={faqInsights} />
               </TabsContent>
            </div>
         </Tabs>
         <div className="my-[3.125rem] px-6 flex items-center gap-5">
            <p className="font-semibold text-[16px]">Can’t find an answer to your question?</p>
            <Link className="p-2 text-16px text-white bg-slate-600 whitespace-nowrap" href={"/contact-us"}>Contact Us</Link>
         </div>
      </div>
   )
};

export default Faq;
