import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  image: string;
  count: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, count }) => {
  return (
    <Link to="/products" className="block group">
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-white text-xl font-semibold">{title}</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-200 text-sm">{count} Products</span>
            <span className="text-white group-hover:translate-x-1 transition-transform">
              <ArrowRight size={18} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;