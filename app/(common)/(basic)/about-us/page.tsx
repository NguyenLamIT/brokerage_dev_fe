import { ArrowDown, ArrowRight } from "lucide-react";
import ItemStatistical from "./item-statistical";
import ItemBusiness from "./item-business";
import ItemFeedback from "./item-feedback";
import ItemSolution from "./item-solution";
import Image from "next/image";
import { Metadata } from "next";
import TextSolution from "./TextSolution";
import Video from "./Video";
import FormContactUs from "../contact-us/form";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { IUserProfile } from "@/type/user-profile.interface";
import { getRequest } from "@/hook/api";

const dataStatistical = [
   { id: 1, title: "Countries with data converage", numberStatistical: "200" },
   { id: 2, title: "Data points weekly", numberStatistical: "1M" },
   { id: 3, title: "Products with data coverage", numberStatistical: "1K" },
   { id: 4, title: "Registered companies", numberStatistical: "300K" }
];

const dataBusiness = [
   { id: 1, title: "Actionable products data", content: "Access comprehensive global products data, good price, processed, and streamlined to be immediately actionable." },
   { id: 2, title: "Expert global intelligence", content: "Use extensive content from Trade4go global analysts to stay up-to-date with the latest industry trends and developments." },
   { id: 3, title: "Connect with buyer", content: "Connect with reliable, long-term buyers through the first data-powered B2B agri platform built on trust." },
   { id: 4, title: "Connect with supplier", content: "Discover long-term, quality suppliers on the first data-powered B2B agri platform designed for trust." }
];

const dataFeedback = [
   {
      id: 1,
      image: <Image width={80} height={80} alt="Nonghyup Moguchon utilized Trade4go's Transaction Data Service (TDS) to discover and identify domestic importers of raw and subsidiary materials necessary for production. This enabled us to gain negotiating power and procure high-quality products at a reasonable price." src="/m.png" className="w-full h-full" />,
      content: "Nonghyup Moguchon utilized Trade4go's Transaction Data Service (TDS) to discover and identify domestic importers of raw and subsidiary materials necessary for production. This enabled us to gain negotiating power and procure high-quality products at a reasonable price.",
      customer: "Kim Yong-hwi",
      position: "Purchasing Manager at Moguchon, South Korea"
   },
   {
      id: 2,
      image: <Image width={80} height={80} alt="Through Trade4go's data, Damtuh not only reduced costs but also received assistance in expanding export channels." src="/t.png" className="w-full h-full" />,
      content: "Through Trade4go's data, Damtuh not only reduced costs but also received assistance in expanding export channels.",
      customer: "Jeong Tae-won",
      position: "Director of Development at Damtuh, South Korea"
   },
   {
      id: 3,
      image: <Image width={80} height={80} alt="I wanted to share with you the latest updates on our cooperation with J.O. Sims UK. We believe we are at a good point: we have agreed on pricing and portfolio, and they have already presented to Tesco, Asda, and Morrisons while awaiting feedback. Additionally, we are preparing the first order for their wholesalers and some offers for ingredients, such as paste and chopped dates." src="/w.png" className="w-full h-full" />,
      content: "I wanted to share with you the latest updates on our cooperation with J.O. Sims UK. We believe we are at a good point: we have agreed on pricing and portfolio, and they have already presented to Tesco, Asda, and Morrisons while awaiting feedback. Additionally, we are preparing the first order for their wholesalers and some offers for ingredients, such as paste and chopped dates.",
      customer: "Silvia Margine",
      position: "Export Manager at Al Foah, United Arab Emirates"
   }
];
export const dataSolutions = [
   { id: 1, name: "Exporter" },
   { id: 2, name: "Importer" },
   { id: 3, name: "Retailer" },
   { id: 4, name: "Manufacturers" },
   { id: 5, name: "Distributors" },
   { id: 6, name: "Logistics" },
   { id: 7, name: "Consulting firms" },
   { id: 8, name: "Government agencies" }
];


export const metadata: Metadata = {
   title: "About Us",
   description: "About Us"
};

const AboutUs = async () => {
   const session = await getServerSession(options);
   const user: IUserProfile = session?.user;
   const country = await getRequest("/config/countries")
   return (
      <div className="w-full">
         <div className="w-full bg-[#22252B] py-[3.33rem] lg:py-[6.67rem]">
            <div className="container flex justify-center">
               <div className="max-w-[98rem] w-full grid grid-cols-1 lg:grid-cols-2 lg:px-9">
                  <div className="font-semibold">
                     <div className="text-[#b6b9be] text-[4rem]">Reliable agri-food & other products &</div>
                     <div className="text-[#b6b9be] text-[4rem]">data & intelligence for</div>
                     <TextSolution dataSolutions={dataSolutions} />
                     <div className="text-[#b6b9be] text-[1.6rem] mt-5">Transform the way you work with trusted, global products data and networking solutions from Trade4go.</div>
                  </div>
                  <div className="lg:h-[40rem]">
                     <Video />
                  </div>
               </div>
            </div>
         </div>
         <div className="text-center bg-[#000] h-[20rem] cursor-pointer">
            <div className="h-full flex items-center justify-center text-white">
               <a href="#solutions">
                  <div>
                     <div className="flex justify-center"><ArrowDown /></div>
                     <div className="text-[16px] mt-2">Get to know our solutions</div>
                  </div>
               </a>
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
         <div id="solutions" className="bg-[#14181f]">
            <div className="py-8 lg:py-16">
               <h3 className="text-center text-white">Explore our solutions</h3>
               <div className="container mt-8 lg:mt-16 flex justify-center">
                  <div className="max-w-[98rem] w-full grid grid-cols-1 md:grid-cols-4 gap-[0.5rem] lg:px-9">
                     {dataSolutions.map((item) => (
                        <ItemSolution key={item.id} name={item.name} />
                     ))}
                  </div>
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
                  <Image
                     width={640}
                     height={640}
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
         <div className="bg-white py-8 lg:py-16">
            <div className="container lg:px-[12rem]">
               <h3 className="text-center">Key clients who've placed their trust in us</h3>
               <div className="mt-8 lg:mt-16">
                  <div>
                     <div className="mb-2"
                     >
                        <div className="flex flex-wrap items-center justify-center lg:mx-[-2rem] lg:mt-[-2rem] mx-[-1.3rem] mt-[-1.3rem]">
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"kpmg"} src={"/images/logo/kpmg.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"nestle"} src={"/images/logo/nestle.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"agrana"} src={"/images/logo/agrana.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"bidfood"} src={"/images/logo/bidfood.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"carrefour"} src={"/images/logo/carrefour.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"costco"} src={"/images/logo/costco.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"delmonte"} src={"/images/logo/delmonte.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"dole"} src={"/images/logo/dole.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"keelings"} src={"/images/logo/keelings.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"mitsui"} src={"/images/logo/mitsui.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"morrisons"} src={"/images/logo/morrisons.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"sysco"} src={"/images/logo/sysco.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"walmart"} src={"/images/logo/walmart.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"accenture"} src={"/images/logo/accenture.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"bain & company"} src={"/images/logo/bain.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"bcg"} src={"/images/logo/bcg.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"columbia"} src={"/images/logo/columbia.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"deloitte"} src={"/images/logo/deloitte.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"parthenon"} src={"/images/logo/parthenon.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"fao"} src={"/images/logo/fao.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"harvard"} src={"/images/logo/harvard.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"monetary"} src={"/images/logo/monetary.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"kearney"} src={"/images/logo/kearney.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"mckinsey"} src={"/images/logo/mckinsey.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"princeton"} src={"/images/logo/princeton.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"pwc"} src={"/images/logo/pwc.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"singapore"} src={"/images/logo/singapore.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"stanford"} src={"/images/logo/stanford.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"worldbank"} src={"/images/logo/worldbank.png"} className={`w-full h-full`} />
                           </div>
                           <div className="inline-block lg:mx-[2rem] lg:mt-[2rem] mx-[1.3rem] mt-[1.3rem] bg-[#22252b] rounded-sm p-2">
                              <Image width={80} height={80} alt={"yale"} src={"/images/logo/yale.png"} className={`w-full h-full`} />
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* <div className="flex justify-center items-center">
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
                  </div> */}
               </div>
            </div>
         </div>
         <div className="bg-bridging bg-cover bg-center py-32 lg:py-56">
            <div className="text-center">
               <h2 className="text-[#8f9399]">By bridging the data gap, we fight information inequality and</h2>
               <h2 className="text-white mt-[0.5rem]">create a better agri-food & other products supply chain for all</h2>
            </div>
         </div>
         <div className="py-8 lg:py-16">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[98.67rem] mx-auto">
               <div className="font-semibold text-[3rem]">Get in touch with us to learn more about our solutions</div>
               <FormContactUs user={user} country={country} about={true}/>
            </div>
         </div>
      </div>
   )
};

export default AboutUs;