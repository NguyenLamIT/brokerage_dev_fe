import Item, { TItemFaq } from "@/app/(common)/(social)/faq/item";

const Common = ({
   title,
   content
}: {
   title: string;
   content: TItemFaq[];
}) => {
   return (
      <div className="mt-[1.875rem] mb-[3.125rem] max-w-[46rem]">
         <p className="text-[1.5rem] pb-[1.875rem] border-b border-[#000]">{title}</p>
         {content?.length > 0 && content?.map((item, index) => (
            <Item
               key={index}
               question={item.question}
               answer={item.answer}
            />
         ))}
      </div>
   )
};

export default Common;
