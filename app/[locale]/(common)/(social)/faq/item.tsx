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
      <div className="w-full mt-4">
         <div className="flex items-center justify-between cursor-pointer" onClick={onShowAnswer}>
            <p className="text-[1.2rem] font-semibold">{question}</p>
            <div className="w-6 flex items-center justify-center">
               {showAnswer ? <Minus size={20} /> : <Plus size={20} />}
            </div>
         </div>
         <div
            className="pt-4 overflow-hidden box-border border-b border-[#000]"
            style={{
               maxHeight: showAnswer ? "100vh" : "0px",
               transition: "max-height 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0s",
            }}
         >
            <p className="mb-4">{answer}</p>
         </div>
      </div>
   )
};

export default Item;