    "use client"
import { ArrowDown, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import ItemStatistical from "@/app/(common)/(social)/about-us/item-statistical";
import ItemBusiness from "@/app/(common)/(social)/about-us/item-business";
import ItemFeedback from "@/app/(common)/(social)/about-us/item-feedback";
import { useEffect, useRef, useState } from "react";
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
import ItemSolution from "@/app/(common)/(social)/about-us/item-solution";

const dataStatistical = [
   { id: 1, title: "Countries with data converage", numberStatistical: "200" },
   { id: 2, title: "Data points weekly", numberStatistical: "1M" },
   { id: 3, title: "Products with data coverage", numberStatistical: "1K" },
   { id: 4, title: "Registered companies", numberStatistical: "300K" }
];

const dataBusiness = [
   { id: 1, title: "Actionable agri-food data", content: "Access comprehensive global agri-food data, cleaned, processed, and streamlined to be immediately actionable." },
   { id: 2, title: "Expert global intelligence", content: "Use extensive content from Tridge global analysts to stay up-to-date with the latest industry trends and developments." },
   { id: 3, title: "Connect with buyer", content: "Connect with reliable, long-term buyers through the first data-powered B2B agri platform built on trust." },
   { id: 4, title: "Connect with supplier", content: "Discover long-term, quality suppliers on the first data-powered B2B agri platform designed for trust." },
   { id: 5, title: "End-to-end fulfillment", content: "Engage in safe and guaranteed global trades through the help of Tridge fulfillment experts across the globe." }
];

const dataFeedback = [
   {
      id: 1,
      image: <img alt="m" src="/m.png" className="w-full h-full" />,
      content: "Nonghyup Moguchon utilized Tridge's Transaction Data Service (TDS) to discover and identify domestic importers of raw and subsidiary materials necessary for production. This enabled us to gain negotiating power and procure high-quality products at a reasonable price.",
      customer: "Kim Yong-hwi",
      position: "Purchasing Manager at Moguchon, South Korea"
   },
   {
      id: 2,
      image: <img alt="t" src="/t.png" className="w-full h-full" />,
      content: "Through Tridge's data, Damtuh not only reduced costs but also received assistance in expanding export channels.",
      customer: "Jeong Tae-won",
      position: "Director of Development at Damtuh, South Korea"
   },
   {
      id: 3,
      image: <img alt="w" src="/w.png" className="w-full h-full" />,
      content: "I wanted to share with you the latest updates on our cooperation with J.O. Sims UK. We believe we are at a good point: we have agreed on pricing and portfolio, and they have already presented to Tesco, Asda, and Morrisons while awaiting feedback. Additionally, we are preparing the first order for their wholesalers and some offers for ingredients, such as paste and chopped dates.",
      customer: "Silvia Margine",
      position: "Export Manager at Al Foah, United Arab Emirates"
   }
];

const dataSolutions = [
   { id: 1, name: "Exporter" },
   { id: 2, name: "Importer" },
   { id: 3, name: "Retailer" },
   { id: 4, name: "Manufacturers" },
   { id: 5, name: "Distributors" },
   { id: 6, name: "Logistics" },
   { id: 7, name: "Farmers" },
   { id: 8, name: "Financial institutions" },
   { id: 9, name: "Consulting firms" },
   { id: 10, name: "Academic institutions" },
   { id: 11, name: "Government agencies" }
];

const dataVideo = [
   "https://cdn-new.tridge.com/assets/TXDBRA4X.mp4",
   "https://cdn-new.tridge.com/assets/VB2KXQCW.mp4",
   "https://cdn-new.tridge.com/assets/ABH256DY.mp4",
   "https://cdn-new.tridge.com/assets/UYBGOQ4J.mp4",
   "https://cdn-new.tridge.com/assets/3LAURKWX.mp4"
]

const AboutUs = () => {
   const [moreDonors, setMoreDonors] = useState(false);
   const [currentIndex, setCurrentIndex] = useState(0);
   const [textSolution, setTextSolution] = useState(0);
   const videoRef = useRef<HTMLVideoElement>(null);
   const refSolutions = useRef<HTMLDivElement>(null);

   const formSchema = z
      .object({
         fullName: z.string().min(1, "Required"),
         companyName: z.string().min(1, "Required"),
         country: z.string().min(1, "Required"),
         category: z.string().min(1, "Reruired"),
         workEmail: z.string()
            .min(1, "Required")
            .refine((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/
               .test(email), {
               message: "Invalid email",
            }),
         jobTitle: z.string(),
         phoneNumber: z.string().min(1, "Required"),
         remarks: z.string().min(1, "Required"),
      })

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         fullName: "",
         country: "",
         category: "",
         companyName: "",
         workEmail: "",
         jobTitle: "",
         phoneNumber: "",
         remarks: ""
      }
   });

   const handleSubmit = (values: z.infer<typeof formSchema>) => {
      console.log(values);
   };

   const onChangeMoreDonors = () => {
      setMoreDonors(!moreDonors);
   };

   const onScrollTo = () => {
      if (refSolutions.current) {
         const elementPosition = refSolutions.current.getBoundingClientRect().top + window.scrollY;
         const offsetPosition = elementPosition - 80;

         window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
         });
      }
   };

   const handleEnded = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dataVideo.length);
   };

   useEffect(() => {
      const videoElement = videoRef.current;
      if (videoElement) {
         videoElement.addEventListener('ended', handleEnded);
      }

      const intervalId = setInterval(() => {
         setTextSolution(prevIndex => (prevIndex + 1) % dataSolutions.length);
      }, 1000);


      return () => {
         if (videoElement) {
            videoElement.removeEventListener('ended', handleEnded);
         }

         clearInterval(intervalId);
      };
   }, []);

   useEffect(() => {
      const videoElement = videoRef.current;
      if (videoElement) {
         videoElement.load();
         videoElement.play();
      }
   }, [currentIndex]);

   return (
      <div className="w-full">
         <div className="w-full bg-[#22252B] py-[3.33rem] lg:py-[6.67rem]">
            <div className="container flex justify-center">
               <div className="max-w-[98rem] w-full grid grid-cols-1 lg:grid-cols-2 lg:px-9">
                  <div className="font-semibold">
                     <div className="text-[#b6b9be] text-[4rem]">Reliable agri-food</div>
                     <div className="text-[#b6b9be] text-[4rem]">data & intelligence for</div>
                     <div className=" text-white text-[4rem] duration-1000">{dataSolutions[textSolution].name}</div>
                     <div className="text-[#b6b9be] text-[1.6rem] mt-5">Transform the way you work with trusted, global agri-food data and networking solutions from Tridge.</div>
                     <div className="flex gap-4 items-center text-[1.2rem] my-[3rem]">
                        <div className="cusor-pointer p-4 bg-[#6685FF] text-white cursor-pointer">Get started now</div>
                        <div className="cusor-pointer p-4 bg-white cursor-pointer">Contact sales</div>
                     </div>
                  </div>
                  <div className="lg:h-[40rem]">
                     <video
                        ref={videoRef}
                        src={dataVideo[currentIndex]}
                        preload="auto"
                        style={{ width: '100%', height: '100%' }}
                        autoPlay
                        muted
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className="text-center bg-[#000] h-[20rem] cursor-pointer">
            <div className="h-full flex items-center justify-center text-white">
               <div onClick={onScrollTo}>
                  <div>
                     <div className="flex justify-center"><ArrowDown /></div>
                     <div className="text-[16px] mt-2">Get to know our solutions</div>
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-about bg-cover bg-center py-32 lg:py-56">
            <div className="text-center text-[#8f9399] text-[2.5rem]">
               Our global coverage is
               <span className="text-white"> unmatched in our category</span>
            </div>
         </div>
         <div className="bg-[#14181f] py-8 lg:py-16">
            <div className="container flex justify-center">
               <div className="max-w-[98rem] w-full grid lg:grid-cols-2 grid-cols-1 gap-10 px-9">
                  {dataStatistical.map((item) => (
                     <ItemStatistical key={item.id} title={item.title} numberStatistical={item.numberStatistical} />
                  ))}
               </div>
            </div>
         </div>
         <div ref={refSolutions} id="solutions" className="bg-[#14181f] py-8 lg:py-16">
            <h3 className="text-center text-white">Explore our solutions</h3>
            <div className="container mt-8 lg:mt-16 flex justify-center">
               <div className="max-w-[98rem] w-full grid grid-cols-4 gap-[0.5rem] lg:px-9">
                  {dataSolutions.map((item) => (
                     <ItemSolution key={item.id} name={item.name} />
                  ))}
               </div>
            </div>
         </div>
         <div className="bg-[#2c2ff2] py-16 lg:py-20">
            <h3 className="text-center w-full text-white text-[2.2rem]">Data + AI + Human expertise</h3>
         </div>
         <div className="container py-8 lg:py-16">
            <div className="text-center">
               <h4 className="text-[1.5rem]">Leverage our services and usher in an era of data-driven success and growth for your business.</h4>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 lg:py-16 lg:px-[8.7rem]">
               <div className="">
                  <img
                     src="/statistical.png"
                     alt="statistical"
                     className="max-w-[40rem] w-full h-[40rem]"
                  />
               </div>
               <div className="grid grid-cols-2 gap-10">
                  {dataBusiness.map((item) => (
                     <ItemBusiness key={item.id} title={item.title} content={item.content} />
                  ))}
               </div>
            </div>
         </div>
         <div className="bg-[#14181F] py-8 lg:py-16">
            <div className="container flex justify-center">
               <div className="max-w-[98rem] w-full grid lg:grid-cols-3 grid-cols-1 gap-10 px-9">
                  {dataFeedback.map((item) => (
                     <ItemFeedback
                        key={item.id}
                        image={item.image}
                        content={item.content}
                        customer={item.customer}
                        position={item.position}
                     />
                  ))}
               </div>
            </div>
         </div>
         <div className="bg-[#22252b] py-8 lg:py-16">
            <div className="container lg:px-[12rem]">
               <h3 className="text-white text-center">Key clients who've placed their trust in us</h3>
               <div className="mt-8 lg:mt-16">
                  <div>
                     <div className="overflow-hidden mb-2"
                        style={{
                           maxHeight: moreDonors ? "none" : "25rem"
                        }}
                     >
                        <div className="flex flex-wrap items-center justify-center lg:mx-[-2rem] lg:mt-[-2rem] mx-[-1.3rem] mt-[-1.3rem]">
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"kpmg"} src={"/images/logo/kpmg.png"} className={`max-w-[100%] max-h-[1.875rem] lg:max-h-[3.75rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"nestle"} src={"/images/logo/nestle.png"} className={`max-w-[100%] max-h-[2.7rem] lg:max-h-[5.41rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"agrana"} src={"/images/logo/agrana.png"} className={`max-w-[100%] max-h-[2.58rem] lg:max-h-[5.167rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"bidfood"} src={"/images/logo/bidfood.png"} className={`max-w-[100%] max-h-[2.083rem] lg:max-h-[4.167rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"carrefour"} src={"/images/logo/carrefour.png"} className={`max-w-[100%] max-h-[2.917rem] lg:max-h-[5.83rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"costco"} src={"/images/logo/costco.png"} className={`max-w-[100%] max-h-[2.083rem] lg:max-h-[4.167rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"delmonte"} src={"/images/logo/delmonte.png"} className={`max-w-[100%] max-h-[2.75rem] lg:max-h-[5.5rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"dole"} src={"/images/logo/dole.png"} className={`max-w-[100%] max-h-[2.083rem] lg:max-h-[4.167rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"keelings"} src={"/images/logo/keelings.png"} className={`max-w-[100%] max-h-[2.9167rem] lg:max-h-[5.83rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"mitsui"} src={"/images/logo/mitsui.png"} className={`max-w-[100%] max-h-[2.9167rem] lg:max-h-[5.83rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"morrisons"} src={"/images/logo/morrisons.png"} className={`max-w-[100%] max-h-[2.29167rem] lg:max-h-[4.583rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"sysco"} src={"/images/logo/sysco.png"} className={`max-w-[100%] max-h-[1.875rem] lg:max-h-[3.75rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"walmart"} src={"/images/logo/walmart.png"} className={`max-w-[100%] max-h-[1.875rem] lg:max-h-[3.75rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"accenture"} src={"/images/logo/accenture.png"} className={`max-w-[100%] max-h-[2.5rem] lg:max-h-[5rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"bain & company"} src={"/images/logo/bain.png"} className={`max-w-[100%] max-h-[2.29167rem] lg:max-h-[4.583rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"bcg"} src={"/images/logo/bcg.png"} className={`max-w-[100%] max-h-[1.4583rem] lg:max-h-[2.9167rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"columbia"} src={"/images/logo/columbia.png"} className={`max-w-[100%] max-h-[1.5rem] lg:max-h-[3rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"deloitte"} src={"/images/logo/deloitte.png"} className={`max-w-[100%] max-h-[2.083rem] lg:max-h-[4.167rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"parthenon"} src={"/images/logo/parthenon.png"} className={`max-w-[100%] max-h-[2.83rem] lg:max-h-[5.67rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"fao"} src={"/images/logo/fao.png"} className={`max-w-[100%] max-h-[2.75rem] lg:max-h-[5.5rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"harvard"} src={"/images/logo/harvard.png"} className={`max-w-[100%] max-h-[2rem] lg:max-h-[4rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"monetary"} src={"/images/logo/monetary.png"} className={`max-w-[100%] max-h-[2.9167rem] lg:max-h-[5.83rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"kearney"} src={"/images/logo/kearney.png"} className={`max-w-[100%] max-h-[2rem] lg:max-h-[4rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"mckinsey"} src={"/images/logo/mckinsey.png"} className={`max-w-[100%] max-h-[2.167rem] lg:max-h-[4.333rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"princeton"} src={"/images/logo/princeton.png"} className={`max-w-[100%] max-h-[1.9167rem] lg:max-h-[3.833rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"pwc"} src={"/images/logo/pwc.png"} className={`max-w-[100%] max-h-[2.5rem] lg:max-h-[5rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"singapore"} src={"/images/logo/singapore.png"} className={`max-w-[100%] max-h-[2.5rem] lg:max-h-[5rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"stanford"} src={"/images/logo/stanford.png"} className={`max-w-[100%] max-h-[2.9167rem] lg:max-h-[5.83rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"worldbank"} src={"/images/logo/worldbank.png"} className={`max-w-[100%] max-h-[1.75rem] lg:max-h-[3.5rem]`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem]">
                              <img alt={"yale"} src={"/images/logo/yale.png"} className={`max-w-[100%] max-h-[1.4167rem] lg:max-h-[2.83rem]`} />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="flex justify-center items-center">
                     <div
                        className="text-white flex items-center justify-center gap-2 text-[1.2rem] font-semibold px-4 py-2 border border-white w-fit mt-10"
                        onClick={onChangeMoreDonors}
                     >
                        {moreDonors ? (
                           <>View less <ChevronUp size={20} strokeWidth={1.5} /></>
                        ) : (
                           <>View more <ChevronDown size={20} strokeWidth={1.5} /></>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container py-8 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-[8.7rem]">
               <div className="flex flex-col justify-center md:px-[2.5rem]">
                  <div className="w-[2rem] h-[2rem] bg-[#2c2ff2]"></div>
                  <h2 className="mt-[2rem]">Learn from out experts</h2>
                  <div className="flex items-center w-fit justify-center px-4 py-3 border border-[#B9BABC] text-[1.2rem] font-semibold mt-[2rem] lg:mt-[3.33rem]">
                     Go to Learning Center
                     <ArrowRight strokeWidth={1.5} />
                  </div>
               </div>
               <img
                  alt="academy"
                  src="/academy.png"
                  className="w-[100%] lg:max-w-[40rem]"
               />
            </div>
         </div>
         <div className="bg-bridging bg-cover bg-center py-32 lg:py-56">
            <div className="text-center">
               <h2 className="text-[#8f9399]">By bridging the data gap, we fight information inequality and</h2>
               <h2 className="text-white mt-[0.5rem]">create a better agri-food supply chain for all</h2>
            </div>
         </div>
         <div className="py-8 lg:py-16">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[98.67rem] mx-auto">
               <div className="font-semibold text-[3rem]">Get in touch with us to learn more about our solutions</div>
               <Form {...form}>
                  <form
                     className="max-w-[46rem] mb-[3.125rem]"
                     onSubmit={form.handleSubmit(handleSubmit)}
                  >
                     <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }: any) => {
                           return (
                              <FormItem className="flex flex-col w-full mb-4">
                                 <FormLabel className="text-xl font-bold text-[#081342]">
                                    Company name <span className="text-red-500">*</span>
                                 </FormLabel>
                                 <FormControl>
                                    <Input
                                       placeholder="Enter your company name"
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
                        name="country"
                        render={({ field }: any) => {
                           return (
                              <FormItem className="flex flex-col w-full mb-4">
                                 <FormLabel className="text-xl font-bold text-[#081342]">
                                    Country <span className="text-red-500">*</span>
                                 </FormLabel>
                                 <FormControl>
                                    <select {...field} className={`h-[38px] border rounded-md ${form.formState.errors.country ? 'border-[red]' : 'border-#939AA1'}`}>
                                       <option value="">Select country</option>
                                       <option value="vn">{"Vietnam"}</option>
                                       <option value="ar">{"Argentina"}</option>
                                       <option value="br">{"Brazil"}</option>
                                       <option value="hk">{"Hong Kong"}</option>
                                    </select>
                                 </FormControl>
                                 <FormMessage className="text-sm" />
                              </FormItem>
                           );
                        }}
                     />
                     <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }: any) => {
                           return (
                              <FormItem className="flex flex-col w-full mb-4">
                                 <FormLabel className="text-xl font-bold text-[#081342]">
                                    Full name <span className="text-red-500">*</span>
                                 </FormLabel>
                                 <FormControl>
                                    <Input
                                       placeholder="Enter your full name"
                                       type="text"
                                       {...field}
                                       className={`border !w-full !h-[38px] !text-[#081342] !text-[14px] 
                                    ${form.formState.errors.fullName ? 'border-[red]' : 'border-#939AA1'}`
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
                        name="category"
                        render={({ field }: any) => {
                           return (
                              <FormItem className="flex flex-col w-full mb-4">
                                 <FormLabel className="text-xl font-bold text-[#081342]">
                                    Category of industry <span className="text-red-500">*</span>
                                 </FormLabel>
                                 <FormControl>
                                    <select {...field} className={`h-[38px] border rounded-md ${form.formState.errors.category ? 'border-[red]' : 'border-#939AA1'}`}>
                                       <option value="">Select category of your industry</option>
                                       <option value="Exporter">{"Exporter"}</option>
                                       <option value="Importer">{"Importer"}</option>
                                       <option value="Retailers">{"Retailers"}</option>
                                       <option value="Manufacturers">{"Manufacturers"}</option>
                                    </select>
                                 </FormControl>
                                 <FormMessage className="text-sm" />
                              </FormItem>
                           );
                        }}
                     />
                     <FormField
                        control={form.control}
                        name="jobTitle"
                        render={({ field }: any) => {
                           return (
                              <FormItem className="flex flex-col w-full mb-4">
                                 <FormLabel className="text-xl font-bold text-[#081342]">
                                    Job title
                                 </FormLabel>
                                 <FormControl>
                                    <Input
                                       placeholder="Enter your job titile"
                                       type="text"
                                       {...field}
                                       className={`border !w-full !h-[38px] !text-[#081342] !text-[14px]`}
                                    />
                                 </FormControl>
                                 <FormMessage className="text-sm" />
                              </FormItem>
                           );
                        }}
                     />
                     <FormField
                        control={form.control}
                        name="workEmail"
                        render={({ field }: any) => {
                           return (
                              <FormItem className="flex flex-col w-full mb-4">
                                 <FormLabel className="text-xl font-bold text-[#081342]">
                                    Work email <span className="text-red-500">*</span>
                                 </FormLabel>
                                 <FormControl>
                                    <Input
                                       placeholder="Enter email address"
                                       type="text"
                                       {...field}
                                       className={`border !w-full !h-[38px] !text-[#081342] !text-[14px]
                                    ${form.formState.errors.workEmail ? 'border-[red]' : 'border-#939AA1'}`
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
                        name="phoneNumber"
                        render={({ field }: any) => {
                           return (
                              <FormItem className="flex flex-col w-full mb-4">
                                 <FormLabel className="text-xl font-bold text-[#081342]">
                                    Phone number <span className="text-red-500">*</span>
                                 </FormLabel>
                                 <FormControl>
                                    <div className="flex items-center gap-px text-[14px]">
                                       <select className="h-[38px] border rounded-md">
                                          <option value="">Country</option>
                                          <option value="+84">{"Vietnam VN (+84)"}</option>
                                          <option value="+54">{"Argentina AR (+54)"}</option>
                                          <option value="+55">{"Brazil BR (+55)"}</option>
                                          <option value="+852">{"Hong Kong HK (+852)"}</option>
                                       </select>
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
                     <FormField
                        control={form.control}
                        name="remarks"
                        render={({ field }: any) => {
                           return (
                              <FormItem className="flex flex-col w-full mb-4">
                                 <FormLabel className="text-xl font-bold text-[#081342]">
                                    Remarks <span className="text-red-500">*</span>
                                 </FormLabel>
                                 <FormControl>
                                    <Textarea
                                       {...field}
                                       rows={5}
                                       placeholder="Enter remarks"
                                       className={`border !w-full !text-[#081342] !text-[14px] 
                                          ${form.formState.errors.remarks ? 'border-[red]' : 'border-#939AA1'}`
                                       }
                                    />
                                 </FormControl>
                                 <FormMessage className="text-sm" />
                              </FormItem>
                           );
                        }}
                     />
                     <div className="my-[20px] text-[1.2rem]">By continuing, you agree to Tridge's Privacy Policy.</div>
                     <Button
                        className="h-[38px] text-[13px]"
                        type="submit"
                     >
                        Send Inquiry
                     </Button>
                  </form>
               </Form>
            </div>
         </div>
      </div>
   )
};

export default AboutUs;