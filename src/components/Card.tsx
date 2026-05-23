import { type CardProps } from "../types/CardProps";

const Card = ({ img, title, price }: CardProps) => {
  return (
    <div className="w-full max-w-full  bg-white rounded-lg border border-red-700 hover:shadow-2xl transition-shadow overflow-hidden">
      <img 
        src={img} 
        alt={title || "product"} 
        className="w-full h-80 object-cover" 
      />
      
      {(title || price) && (
        <div className="p-4 border-t border-gray-100">
          {title && <h3 className="text-xl font-bold text-gray-800">{title}</h3>}
          {price && <p className="text-red-700 font-semibold mt-1">{price} ر.س</p>}
        </div>
      )}
    </div>
  );
};

export default Card;
