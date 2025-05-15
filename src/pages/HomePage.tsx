import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, ShieldCheck, CreditCard, LifeBuoy } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import useProductData from '../hooks/useProductData';

const HomePage: React.FC = () => {
  const { products, loading } = useProductData();
  
  const featuredProducts = products.slice(0, 4);
  
  const categories = [
    { title: 'Smartphones', image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', count: 15 },
    { title: 'Laptops', image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', count: 12 },
    { title: 'Áudio', image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', count: 8 },
    { title: 'Games', image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', count: 10 }
  ];

  return (
    <div>
      {/* Seção Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Eletrônicos de última geração para a vida moderna
              </h1>
              <p className="text-lg mb-6 text-blue-100">
                Descubra as últimas inovações tecnológicas com qualidade premium e preços imbatíveis.
              </p>
              <div className="flex space-x-4">
                <Link 
                  to="/products" 
                  className="bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                >
                  Comprar Agora
                </Link>
                <Link 
                  to="/about" 
                  className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-700 transition-colors"
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Mostruário de eletrônicos" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Categorias */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Compre por Categoria</h2>
            <Link to="/products" className="text-blue-600 hover:text-blue-800 flex items-center">
              Ver Todas <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard 
                key={index}
                title={category.title}
                image={category.image}
                count={category.count}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Produtos em Destaque</h2>
            <Link to="/products" className="text-blue-600 hover:text-blue-800 flex items-center">
              Ver Todos <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Banner de Promoção */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Promoção de Verão!</h2>
            <p className="text-xl mb-6">Até 40% de desconto em itens selecionados. Oferta por tempo limitado.</p>
            <Link 
              to="/products" 
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Ver Promoções
            </Link>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Truck size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Frete Grátis</h3>
              <p className="text-gray-600">Em todos os pedidos acima de R$ 250</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Garantia de 2 Anos</h3>
              <p className="text-gray-600">Em todos os produtos eletrônicos</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <CreditCard size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pagamento Seguro</h3>
              <p className="text-gray-600">100% seguro e protegido</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <LifeBuoy size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte 24/7</h3>
              <p className="text-gray-600">Equipe de suporte dedicada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Assine Nossa Newsletter</h2>
            <p className="text-gray-600 mb-6">Fique por dentro das novidades e ofertas exclusivas.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
