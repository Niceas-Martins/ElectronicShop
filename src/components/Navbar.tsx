import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User, Heart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { getCartCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-gray-800">ElectroShop</span>
          </Link>

          {/* Navegação para desktop */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Início</Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-900">Produtos</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">Sobre</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contato</Link>
          </div>

          {/* Ícones para desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              <Search size={20} />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <User size={20} />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <Heart size={20} />
            </button>
            <Link to="/cart" className="text-gray-600 hover:text-gray-900 relative">
              <ShoppingCart size={20} />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>

          {/* Botão do menu para dispositivos móveis */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="text-gray-600 hover:text-gray-900 relative mr-4">
              <ShoppingCart size={20} />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
            <button 
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu para dispositivos móveis */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-inner">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>Início</Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>Produtos</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>Sobre</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setIsMenuOpen(false)}>Contato</Link>
          </div>
          <div className="flex justify-start space-x-6 mt-4 pt-4 border-t border-gray-200">
            <button className="text-gray-600 hover:text-gray-900">
              <Search size={20} />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <User size={20} />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <Heart size={20} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
