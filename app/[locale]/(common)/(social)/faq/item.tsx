"use client"

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export type TItemFaq = {
   question: string;
   answer: string;
}

const Item = ({
   question, answer
}: TItemFaq) => {
   const [showAnswer, setShowAnswer] = useState(false);

   const onShowAnswer = () => {
      setShowAnswer(!showAnswer);
   };

   return (
      <div className="w-full mt-[16px]">
         <div className="flex items-center justify-between cursor-pointer" onClick={onShowAnswer}>
            <p className="text-[1.2rem] font-semibold">{question}</p>
            <div className="w-[24px] flex items-center justify-center">
               {showAnswer ? <Minus size={20} /> : <Plus size={20} />}
            </div>
         </div>
         <div
            className="pt-[16px] overflow-hidden box-border border-b-[1px] border-[#000]"
            style={{
               maxHeight: showAnswer ? "100vh" : "0px",
               transition: "max-height 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0s",
            }}
         >
            <p className="mb-[16px]">{answer}</p>
         </div>
      </div>
   )
};

export default Item;