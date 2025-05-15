import React from 'react';
import { Users, Award, TrendingUp, ShieldCheck, Truck, CreditCard, LifeBuoy, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Loja Virtual</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Seu destino confiável para eletrônicos premium desde 2010. Somos apaixonados por tecnologia e comprometidos com um atendimento excepcional ao cliente.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossa História</h2>
              <p className="text-gray-600 mb-4">
                A Loja Virtual fornece eletrônicos de alta qualidade a preços justos e um atendimento excepcional ao cliente. O que começou como uma pequena loja online cresceu e se tornou um varejista confiável, atendendo clientes em todo o mundo.
              </p>
              <p className="text-gray-600 mb-4">
                Nosso fundador, Alex Chen, percebeu uma lacuna no mercado para um varejista de eletrônicos focado no cliente, que priorizasse educação e suporte junto às vendas. Com formação em engenharia elétrica e paixão por tecnologia, Alex construiu a ElectroShop do zero.
              </p>
              <p className="text-gray-600">
                Hoje, temos orgulho de oferecer uma seleção criteriosa dos melhores eletrônicos das principais marcas, com o suporte da nossa equipe especializada e políticas de garantia líderes do setor.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Nossa equipe" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Valores</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Na ElectroShop, nossos valores orientam tudo o que fazemos. São a base do nosso negócio e os princípios que seguimos todos os dias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Award size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Qualidade</h3>
              <p className="text-gray-600">
                Nunca comprometemos a qualidade. Cada produto do nosso catálogo é cuidadosamente selecionado e testado para garantir que atenda aos nossos padrões.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Confiança</h3>
              <p className="text-gray-600">
                Construímos relações duradouras com nossos clientes com base na honestidade, transparência e confiabilidade.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <LifeBuoy size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Atendimento</h3>
              <p className="text-gray-600">
                Nossa equipe de suporte está sempre pronta para ajudar com a escolha de produtos, dúvidas técnicas ou qualquer outra necessidade.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <TrendingUp size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Inovação</h3>
              <p className="text-gray-600">
                Estamos sempre evoluindo, buscando as tecnologias mais recentes e melhorando nossos serviços para atender melhor você.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Por que Escolher a ElectroShop</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nos esforçamos para oferecer a melhor experiência de compra possível. Veja o que nos diferencia dos outros varejistas de eletrônicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="mr-4 text-blue-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Garantia Estendida</h3>
                <p className="text-gray-600">
                  Todos os nossos produtos têm no mínimo 2 anos de garantia, oferecendo tranquilidade em sua compra.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 text-blue-600">
                <Truck size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Frete Grátis</h3>
                <p className="text-gray-600">
                  Aproveite frete grátis em pedidos acima de R$ 250, com entrega rápida e confiável.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 text-blue-600">
                <CreditCard size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Pagamento Seguro</h3>
                <p className="text-gray-600">
                  Compre com segurança usando nosso sistema de pagamento protegido, que aceita todos os principais cartões e PayPal.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 text-blue-600">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Devolução em 30 Dias</h3>
                <p className="text-gray-600">
                  Não ficou satisfeito? Devolva seu produto em até 30 dias para reembolso total, sem complicações.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 text-blue-600">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Suporte Especializado</h3>
                <p className="text-gray-600">
                  Nossa equipe experiente está disponível 7 dias por semana para tirar dúvidas ou resolver problemas técnicos.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 text-blue-600">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Qualidade Garantida</h3>
                <p className="text-gray-600">
                  Testamos e verificamos pessoalmente cada produto para garantir que atendem aos nossos critérios de excelência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Conheça Nossa Equipe</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              As pessoas apaixonadas por trás da ElectroShop que trabalham todos os dias para oferecer os melhores produtos e serviços.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Os blocos dos membros da equipe já estão claros e podem continuar em inglês ou serem traduzidos conforme preferir */}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Experimentar a Diferença da ElectroShop?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Junte-se a milhares de clientes satisfeitos que confiam em nós para suas necessidades em eletrônicos.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/products" 
              className="bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Comprar Agora
            </a>
            <a 
              href="/contact" 
              className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-700 transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
