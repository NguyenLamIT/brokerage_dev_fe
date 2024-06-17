import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Common from "@/app/(common)/(social)/faq/common";
import { faqAnalytics, faqFind, faqGeneral, faqInsights } from "@/const/faq";
import Link from "next/link";

const Faq = () => {

   return (
      <div className="container">
         <div className="pt-[4.3125rem]">
            <p className="text-[2rem] font-bold text-[#081440]">FAQ</p>
         </div>
         <Tabs defaultValue="all" className="w-full mt-5">
            <TabsList className="bg-transparent flex flex-wrap justify-start gap-2.5 h-fit">
               <TabsTrigger value="all" className="rounded-2xl">All</TabsTrigger>
               <TabsTrigger value="general" className="rounded-2xl">General</TabsTrigger>
               <TabsTrigger value="find" className="rounded-2xl">Find Suppliers / Find Buyers</TabsTrigger>
               <TabsTrigger value="data-and-analytics" className="rounded-2xl">Data & Analytics</TabsTrigger>
               <TabsTrigger value="insights" className="rounded-2xl">Insights</TabsTrigger>
            </TabsList>
            <div className="container">
               <TabsContent value="all">
                  <Common title={"General"} content={faqGeneral} />
                  <Common title={"Find Suppliers / Find Buyers"} content={faqFind} />
                  <Common title={"Data & Analytics"} content={faqAnalytics} />
                  <Common title={"Insights"} content={faqInsights} />
               </TabsContent>
               <TabsContent value="general">
                  <Common title={"General"} content={faqGeneral} />
               </TabsContent>
               <TabsContent value="find">
                  <Common title={"Find Suppliers / Find Buyers"} content={faqFind} />
               </TabsContent>
               <TabsContent value="data-and-analytics">
                  <Common title={"Data & Analytics"} content={faqAnalytics} />
               </TabsContent>
               <TabsContent value="insights">
                  <Common title={"Insights"} content={faqInsights} />
               </TabsContent>
            </div>
         </Tabs>
         <div className="my-[3.125rem] px-6 flex items-center gap-5">
            <p className="font-semibold text-[16px]">Can’t find an answer to your question?</p>
            <Link className="p-2 text-16px text-white bg-slate-600 whitespace-nowrap" href={"/contact"}>Contact Us</Link>
         </div>
      </div>
   )
};

export default Faq;
