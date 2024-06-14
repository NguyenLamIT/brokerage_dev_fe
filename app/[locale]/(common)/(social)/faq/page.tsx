import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Common from "@/app/[locale]/(common)/(social)/faq/common";
import { faqAnalytics, faqFind, faqGeneral, faqInsights } from "@/const/faq";
import Link from "next/link";

const Faq = () => {

   return (
      <div className="container">
         <div className="pt-[4.3125rem]">
            <p className="text-[2rem] font-bold text-[#081440]">FAQ</p>
         </div>
         <Tabs defaultValue="all" className="w-full mt-[20px]">
            <TabsList className="bg-transparent flex flex-wrap justify-start gap-[10px] h-fit">
               <TabsTrigger value="all" className="rounded-[20px]">All</TabsTrigger>
               <TabsTrigger value="general" className="rounded-[20px]">General</TabsTrigger>
               <TabsTrigger value="find" className="rounded-[20px]">Find Suppliers / Find Buyers</TabsTrigger>
               <TabsTrigger value="data-and-analytics" className="rounded-[20px]">Data & Analytics</TabsTrigger>
               <TabsTrigger value="insights" className="rounded-[20px]">Insights</TabsTrigger>
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
         <div className="my-[50px] px-[24px] flex items-center gap-[20px]">
            <p className="font-semibold text-[16px]">Can’t find an answer to your question?</p>
            <Link className="p-[8px] text-[16px] text-white bg-slate-600 whitespace-nowrap" href={"/contact"}>Contact Us</Link>
         </div>
      </div>
   )
};

export default Faq;
