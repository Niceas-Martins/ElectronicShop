import React, { useState, useEffect } from 'react';
import { Filter, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import useProductData from '../hooks/useProductData';
import { Product } from '../types';

const ProductsPage: React.FC = () => {
  const { products, loading } = useProductData();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [sortBy, setSortBy] = useState<string>('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const categories = ['Todas', ...new Set(products.map(product => product.category))];

  useEffect(() => {
    let result = [...products];

    if (selectedCategory && selectedCategory !== 'Todas') {
      result = result.filter(product => product.category === selectedCategory);
    }

    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Ordenação
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredProducts(result);
  }, [products, selectedCategory, priceRange, sortBy]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === 'Todas' ? '' : category);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseInt(e.target.value);
    setPriceRange(prev => {
      const newRange = [...prev] as [number, number];
      newRange[index] = value;
      return newRange;
    });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const resetFilters = () => {
    setSelectedCategory('');
    setPriceRange([0, 3000]);
    setSortBy('');
  };

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Nossos Produtos</h1>

        {/* Filtro Mobile */}
        <div className="lg:hidden mb-4">
          <button 
            onClick={toggleMobileFilter}
            className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700"
          >
            <Filter size={18} className="mr-2" />
            Filtros
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filtros - Desktop */}
          <div className="hidden lg:block w-64 bg-white p-6 rounded-lg shadow-sm h-fit">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Filtros</h3>
                <button 
                  onClick={resetFilters}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Limpar
                </button>
              </div>

              {/* Categorias */}
              <div className="mb-6">
                <h4 className="text-md font-medium text-gray-700 mb-3">Categorias</h4>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center">
                      <input 
                        type="radio" 
                        id={`category-${index}`}
                        name="category"
                        checked={category === (selectedCategory || 'Todas')}
                        onChange={() => handleCategoryChange(category)}
                        className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor={`category-${index}`} className="text-gray-600">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Faixa de Preço */}
              <div>
                <h4 className="text-md font-medium text-gray-700 mb-3">Faixa de Preço</h4>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">R${priceRange[0]}</span>
                    <span className="text-gray-600">R${priceRange[1]}</span>
                  </div>
                  <input type="range" min="0" max="3000" value={priceRange[0]} onChange={(e) => handlePriceChange(e, 0)} className="w-full" />
                  <input type="range" min="0" max="3000" value={priceRange[1]} onChange={(e) => handlePriceChange(e, 1)} className="w-full" />
                  <div className="flex gap-2">
                    <input type="number" value={priceRange[0]} onChange={(e) => handlePriceChange(e, 0)} className="w-full p-2 border border-gray-300 rounded text-sm" min="0" max={priceRange[1]} />
                    <input type="number" value={priceRange[1]} onChange={(e) => handlePriceChange(e, 1)} className="w-full p-2 border border-gray-300 rounded text-sm" min={priceRange[0]} max="3000" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filtros - Mobile */}
          {isMobileFilterOpen && (
            <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
              <div className="bg-white w-80 h-full overflow-y-auto p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Filtros</h3>
                  <button onClick={toggleMobileFilter}>
                    <X size={24} className="text-gray-600" />
                  </button>
                </div>

                {/* Categorias */}
                <div className="mb-6">
                  <h4 className="text-md font-medium text-gray-700 mb-3">Categorias</h4>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center">
                        <input 
                          type="radio" 
                          id={`mobile-category-${index}`}
                          name="mobile-category"
                          checked={category === (selectedCategory || 'Todas')}
                          onChange={() => handleCategoryChange(category)}
                          className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor={`mobile-category-${index}`} className="text-gray-600">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Faixa de Preço */}
                <div className="mb-6">
                  <h4 className="text-md font-medium text-gray-700 mb-3">Faixa de Preço</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">R${priceRange[0]}</span>
                      <span className="text-gray-600">R${priceRange[1]}</span>
                    </div>
                    <input type="range" min="0" max="3000" value={priceRange[0]} onChange={(e) => handlePriceChange(e, 0)} className="w-full" />
                    <input type="range" min="0" max="3000" value={priceRange[1]} onChange={(e) => handlePriceChange(e, 1)} className="w-full" />
                    <div className="flex gap-2">
                      <input type="number" value={priceRange[0]} onChange={(e) => handlePriceChange(e, 0)} className="w-full p-2 border border-gray-300 rounded text-sm" min="0" max={priceRange[1]} />
                      <input type="number" value={priceRange[1]} onChange={(e) => handlePriceChange(e, 1)} className="w-full p-2 border border-gray-300 rounded text-sm" min={priceRange[0]} max="3000" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-6">
                  <button onClick={resetFilters} className="w-1/2 py-2 border border-gray-300 rounded text-gray-700">Limpar</button>
                  <button onClick={toggleMobileFilter} className="w-1/2 py-2 bg-blue-600 text-white rounded">Aplicar</button>
                </div>
              </div>
            </div>
          )}

          {/* Produtos */}
          <div className="flex-1">
            {/* Ordenação e contagem */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-600 mb-3 sm:mb-0">
                Exibindo <span className="font-medium">{filteredProducts.length}</span> produtos
              </p>
              <div className="flex items-center">
                <label htmlFor="sort" className="text-gray-600 mr-2">Ordenar por:</label>
                <div className="relative">
                  <select 
                    id="sort" 
                    value={sortBy}
                    onChange={handleSortChange}
                    className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Destaques</option>
                    <option value="price-asc">Preço: Menor para Maior</option>
                    <option value="price-desc">Preço: Maior para Menor</option>
                    <option value="name-asc">Nome: A-Z</option>
                    <option value="name-desc">Nome: Z-A</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Filtros Ativos */}
            {(selectedCategory || priceRange[0] > 0 || priceRange[1] < 3000) && (
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-gray-700 font-medium">Filtros Ativos:</span>

                  {selectedCategory && (
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                      Categoria: {selectedCategory}
                      <button onClick={() => setSelectedCategory('')} className="ml-2 text-blue-800">
                        <X size={14} />
                      </button>
                    </span>
                  )}

                  {(priceRange[0] > 0 || priceRange[1] < 3000) && (
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                      Preço: R${priceRange[0]} - R${priceRange[1]}
                      <button onClick={() => setPriceRange([0, 3000])} className="ml-2 text-blue-800">
                        <X size={14} />
                      </button>
                    </span>
                  )}

                  <button onClick={resetFilters} className="text-blue-600 hover:text-blue-800 text-sm ml-auto">
                    Limpar Tudo
                  </button>
                </div>
              </div>
            )}

            {/* Grid de Produtos */}
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <SlidersHorizontal size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Nenhum produto encontrado</h3>
                <p className="text-gray-600 mb-4">Tente ajustar seus filtros para encontrar o que procura.</p>
                <button onClick={resetFilters} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Limpar Filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
