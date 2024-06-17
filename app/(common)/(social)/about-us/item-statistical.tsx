export type TItemStatistical = {
    title: string;
    numberStatistical: string;
 }
 
 const ItemStatistical = ({
    title, numberStatistical
 }: TItemStatistical) => {
    return (
       <div className="border-t border-[#b6b9be] mb-8 lg:mb-16">
          <div className="lg:pt-8 pt-4 flex justify-between items-start">
             <h3 className="text-[#b6b9be]">{title}</h3>
             <div className="text-[#f6f7f9] text-[4.5rem]">{numberStatistical}+</div>
          </div>
       </div>
    )
 };
 
 export default ItemStatistical;
 