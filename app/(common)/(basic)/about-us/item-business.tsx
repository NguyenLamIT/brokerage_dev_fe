import { ArrowRight } from "lucide-react";

const ItemBusiness = ({
   title, content
}: {
   title: string;
   content: string;
}) => {
   return (
      <div className="w-full pt-8 border-t border-[#2C2FF2]">
         <h2 className="pb-5">{title}</h2>
         <div className="text-[1.2rem] pb-8">{content}</div>
         <div className="flex gap-2 items-center justify-center px-3 py-1 border border-[#B9BABC] w-fit font-semibold cursor-pointer">
            Learn more
            <ArrowRight size={20} strokeWidth={1.5} />
         </div>
      </div>
   )
};

export default ItemBusiness;
