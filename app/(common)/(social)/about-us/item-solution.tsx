import { ArrowRight } from "lucide-react";

const ItemSolution = ({
   name
}: {
   name: string;
}) => {
   return (
      <div className="bg-[#22252b] lg:h-[16.67rem] h-[14rem] flex flex-col justify-between cursor-pointer">
         <div className="text-[#f6f7f9] text-[2.2rem] font-semibold p-[2rem]">{name}</div>
         <div className="w-full flex justify-end">
            <div className="w-[3rem] h-[3rem] bg-[#6685ff] inline-flex items-center justify-center">
               <ArrowRight strokeWidth={1.5} color="#fff"/>
            </div>
         </div>
      </div>
   )
};

export default ItemSolution;
