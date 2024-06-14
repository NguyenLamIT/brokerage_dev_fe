import Item, { TItemFaq } from "@/app/[locale]/(common)/(social)/faq/item";

const Common = ({
   title,
   content
}: {
   title: string;
   content: TItemFaq[];
}) => {
   return (
      <div className="mt-[30px] mb-[50px] max-w-[736px]">
         <p className="text-[1.5rem] pb-[30px] border-b-[1px] border-[#000]">{title}</p>
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
