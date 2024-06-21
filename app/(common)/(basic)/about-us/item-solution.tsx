import { ArrowRight } from "lucide-react";

const ItemSolution = ({
   name
}: {
   name: string;
}) => {
   return (
      <div className="bg-[#22252b] lg:h-[16.67rem] h-[14rem] flex flex-col justify-between">
         <div className="text-[#f6f7f9] text-[2.2rem] font-semibold p-[2rem]">{name}</div>
      </div>
   )
};

export default ItemSolution;
