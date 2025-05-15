import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart, ArrowRight, CreditCard, Plus, Minus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Seu Carrinho de Compras</h1>
        
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingCart size={64} className="text-gray-300" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Seu carrinho está vazio</h2>
            <p className="text-gray-600 mb-6">Parece que você ainda não adicionou nenhum produto ao carrinho.</p>
            <Link 
              to="/products" 
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Começar a Comprar
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Itens do Carrinho */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Itens no Carrinho ({cartItems.reduce((total, item) => total + item.quantity, 0)})
                    </h2>
                    <button 
                      onClick={clearCart}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Limpar Carrinho
                    </button>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <div key={item.product.id} className="py-6 flex flex-col sm:flex-row">
                        <div className="sm:w-24 h-24 flex-shrink-0 mb-4 sm:mb-0">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div className="sm:ml-6 flex-grow">
                          <div className="flex justify-between mb-2">
                            <Link 
                              to={`/product/${item.product.id}`}
                              className="text-lg font-medium text-gray-800 hover:text-blue-600"
                            >
                              {item.product.name}
                            </Link>
                            <button 
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-gray-500 hover:text-red-600"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                          <p className="text-gray-600 text-sm mb-4">{item.product.category}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button 
                                onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                disabled={item.quantity <= 1}
                              >
                                <Minus size={16} />
                              </button>
                              <span className="px-4 py-1 border-x border-gray-300">{item.quantity}</span>
                              <button 
                                onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                            <div className="text-right">
                              <div className="text-gray-600 text-sm">
                                R${item.product.price.toFixed(2)} cada
                              </div>
                              <div className="font-bold text-gray-800">
                                R${(item.product.price * item.quantity).toFixed(2)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Continuar Comprando */}
              <div className="flex justify-between">
                <Link 
                  to="/products" 
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  <ArrowRight size={18} className="mr-2 transform rotate-180" />
                  Continuar Comprando
                </Link>
              </div>
            </div>
            
            {/* Resumo do Pedido */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-20">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Resumo do Pedido</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-800 font-medium">R${getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Frete</span>
                      <span className="text-gray-800 font-medium">
                        {getCartTotal() > 50 ? 'Grátis' : 'R$5,99'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Imposto</span>
                      <span className="text-gray-800 font-medium">
                        R${(getCartTotal() * 0.08).toFixed(2)}
                      </span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex justify-between">
                        <span className="text-lg font-semibold text-gray-800">Total</span>
                        <span className="text-lg font-bold text-gray-800">
                          R${(getCartTotal() + (getCartTotal() > 50 ? 0 : 5.99) + (getCartTotal() * 0.08)).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <CreditCard size={18} className="mr-2" />
                    Finalizar Compra
                  </button>
                  
                  <div className="mt-6">
                    <div className="flex items-center justify-center text-gray-600 text-sm">
                      <span>Aceitamos:</span>
                      <div className="flex space-x-2 ml-2">
                        <span className="font-medium">Visa</span>
                        <span className="font-medium">Mastercard</span>
                        <span className="font-medium">PayPal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
