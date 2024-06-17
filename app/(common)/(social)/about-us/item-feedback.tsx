import { ReactNode } from "react";

const ItemFeedback = ({
   image, content, customer, position
}: {
   image: ReactNode;
   content: string;
   customer: string;
   position: string;
}) => {
   return (
      <div className="">
         <div className="w-[4rem] h-[4rem]">{image}</div>
         <div className="text-[#b6b9be] text-[1.2rem] mt-[2rem]">{content}</div>
         <div className="text-white mt-[1.4rem]">
            <h3>{customer}</h3>
            <div className="text-[1.2rem] mt-[0.4rem]">{position}</div>
         </div>
      </div>
   )
};

export default ItemFeedback;
