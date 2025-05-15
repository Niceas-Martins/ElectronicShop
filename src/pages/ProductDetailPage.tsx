// ProductDetailPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Star, Truck, ShieldCheck, ArrowLeft, Plus, Minus } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import useProductData from '../hooks/useProductData';
import { useCart } from '../contexts/CartContext';
import { Product } from '../types';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products, loading } = useProductData();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (products.length > 0 && id) {
      const foundProduct = products.find(p => p.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
        const sameCategory = products.filter(p => 
          p.category === foundProduct.category && p.id !== foundProduct.id
        ).slice(0, 4);
        setRelatedProducts(sameCategory);
      }
    }
  }, [products, id]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => quantity > 1 && setQuantity(prev => prev - 1);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Produto não encontrado</h2>
          <p className="text-gray-600 mb-6">O produto que você procura não existe ou foi removido.</p>
          <Link 
            to="/products" 
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Voltar para produtos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-gray-600 hover:text-gray-900">Início</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <Link to="/products" className="text-gray-600 hover:text-gray-900">Produtos</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <Link to={`/products?category=${product.category}`} className="text-gray-600 hover:text-gray-900">{product.category}</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-500">{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Product Detail */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Imagem */}
            <div className="p-6 flex items-center justify-center bg-gray-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-h-96 object-contain"
              />
            </div>

            {/* Informações */}
            <div className="p-6 md:p-8">
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {product.category}
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  <Star size={18} className="text-gray-300" />
                </div>
                <span className="text-gray-600 ml-2">4.0 (24 avaliações)</span>
              </div>

              <div className="text-3xl font-bold text-gray-800 mb-6">
                R$ {product.price.toFixed(2)}
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-gray-700 mr-3">Quantidade:</span>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button onClick={decrementQuantity} className="px-3 py-1 text-gray-600 hover:bg-gray-100" disabled={quantity <= 1}>
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-1 border-x border-gray-300">{quantity}</span>
                    <button onClick={incrementQuantity} className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button onClick={handleAddToCart} className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors flex-1 flex items-center justify-center">
                  <ShoppingCart size={18} className="mr-2" />
                  Adicionar ao carrinho
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-50 transition-colors">
                  <Heart size={18} />
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-50 transition-colors">
                  <Share2 size={18} />
                </button>
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex items-center text-gray-600">
                  <Truck size={18} className="mr-2 text-green-600" />
                  <span>Frete grátis para compras acima de R$ 50</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <ShieldCheck size={18} className="mr-2 text-green-600" />
                  <span>Garantia de 2 anos inclusa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Abas */}
          <div className="border-t border-gray-200">
            <div className="flex border-b border-gray-200">
              <button 
                className={`px-6 py-3 text-sm font-medium ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('description')}
              >
                Descrição
              </button>
              <button 
                className={`px-6 py-3 text-sm font-medium ${activeTab === 'specifications' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('specifications')}
              >
                Especificações
              </button>
              <button 
                className={`px-6 py-3 text-sm font-medium ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('reviews')}
              >
                Avaliações (24)
              </button>
            </div>

            <div className="p-6">
              {activeTab === 'description' && (
                <div>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-gray-600 mt-4">
                    Texto descritivo adicional pode ser inserido aqui para mais detalhes sobre o produto.
                  </p>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr><td className="bg-gray-50 px-4 py-3 font-medium text-gray-500">Marca</td><td className="px-4 py-3 text-gray-700">{product.name.split(' ')[0]}</td></tr>
                      <tr><td className="bg-gray-50 px-4 py-3 font-medium text-gray-500">Modelo</td><td className="px-4 py-3 text-gray-700">{product.name}</td></tr>
                      <tr><td className="bg-gray-50 px-4 py-3 font-medium text-gray-500">Categoria</td><td className="px-4 py-3 text-gray-700">{product.category}</td></tr>
                      <tr><td className="bg-gray-50 px-4 py-3 font-medium text-gray-500">Garantia</td><td className="px-4 py-3 text-gray-700">2 anos</td></tr>
                      <tr><td className="bg-gray-50 px-4 py-3 font-medium text-gray-500">Disponível</td><td className="px-4 py-3 text-gray-700">Sim</td></tr>
                      <tr><td className="bg-gray-50 px-4 py-3 font-medium text-gray-500">Envio</td><td className="px-4 py-3 text-gray-700">Grátis acima de R$ 50</td></tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  {/* Avaliações aqui podem ser traduzidas conforme necessário */}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Produtos Relacionados */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Produtos Relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Acessórios Recomendados */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Acessórios Recomendados</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Complete sua compra</h3>
              <p className="text-gray-600 mb-6">
                Melhore sua experiência com esses acessórios recomendados para {product.name}.
              </p>

              <div className="space-y-4">
                {product.relatedProducts.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row border border-gray-200 rounded-lg p-4">
                    <div className="sm:w-24 h-24 flex-shrink-0 mb-4 sm:mb-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="sm:ml-4 flex-grow">
                      <h4 className="text-gray-800 font-medium">{item.name}</h4>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-800">R$ {item.price.toFixed(2)}</span>
                        <button 
                          onClick={() => {
                            const fullProduct: Product = {
                              ...item,
                              category: product.category,
                              relatedProducts: []
                            };
                            addToCart(fullProduct);
                          }}
                          className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                        >
                          Adicionar ao carrinho
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
