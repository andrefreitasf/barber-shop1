import { motion } from 'framer-motion';

const Products = () => {
  const products = [
    {
      name: 'Pomada Modeladora',
      price: 'R$ 45,00',
      image: '/src/assets/products/pomada.jpg',
      description: 'Pomada de alta fixação para modelagem perfeita',
    },
    {
      name: 'Óleo para Barba',
      price: 'R$ 35,00',
      image: '/src/assets/products/oleo-barba.jpg',
      description: 'Hidratação e brilho para sua barba',
    },
    {
      name: 'Shampoo Premium',
      price: 'R$ 40,00',
      image: '/src/assets/products/shampoo.jpg',
      description: 'Limpeza profunda e tratamento dos fios',
    },
    {
      name: 'Gel de Limpeza Facial',
      price: 'R$ 30,00',
      image: '/src/assets/products/gel-facial.jpg',
      description: 'Limpeza e hidratação da pele',
    },
    {
      name: 'Tônico Capilar',
      price: 'R$ 50,00',
      image: '/src/assets/products/tonico.jpg',
      description: 'Fortalece e revitaliza os fios',
    },
    {
      name: 'Kit Completo',
      price: 'R$ 180,00',
      image: '/src/assets/products/kit.jpg',
      description: 'Kit com todos os produtos essenciais',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">Nossos Produtos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-64"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-yellow-500 mb-4">{product.price}</p>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <button className="btn-primary">
                      Comprar
                    </button>
                    <button className="text-gray-600 hover:text-yellow-500 transition-colors duration-300">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products; 