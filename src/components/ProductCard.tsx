import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative group">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover"
          />
        </Link>
        
        {/* Quick action buttons */}
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={handleAddToCart}
            className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
            title="Add to cart"
          >
            <ShoppingCart size={18} className="text-gray-800" />
          </button>
          <button 
            className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
            title="Add to wishlist"
          >
            <Heart size={18} className="text-gray-800" />
          </button>
          <Link 
            to={`/product/${product.id}`}
            className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
            title="Quick view"
          >
            <Eye size={18} className="text-gray-800" />
          </Link>
        </div>
        
        {/* Category tag */}
        <div className="absolute top-2 left-2">
          <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors text-sm flex items-center"
          >
            <ShoppingCart size={16} className="mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;