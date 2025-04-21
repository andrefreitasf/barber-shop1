import { motion } from 'framer-motion';

const Prices = () => {
  const services = [
    {
      name: 'Corte de Cabelo',
      price: 'R$ 50,00',
      description: 'Corte moderno com técnicas atualizadas',
      features: ['Estilo personalizado', 'Aparador profissional', 'Finalização com produtos premium'],
    },
    {
      name: 'Barba',
      price: 'R$ 40,00',
      description: 'Barba completa com acabamento perfeito',
      features: ['Modelagem', 'Hidratação', 'Finalização com produtos específicos'],
    },
    {
      name: 'Corte + Barba',
      price: 'R$ 80,00',
      description: 'Pacote completo de cuidados',
      features: ['Corte de cabelo', 'Barba completa', 'Hidratação', 'Finalização premium'],
    },
    {
      name: 'Pigmentação',
      price: 'R$ 120,00',
      description: 'Tratamento para fios grisalhos',
      features: ['Aplicação profissional', 'Produtos de alta qualidade', 'Duração prolongada'],
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
          <h1 className="section-title">Nossos Preços</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.name}</h3>
                  <p className="text-3xl font-bold text-yellow-500 mb-4">{service.price}</p>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 text-yellow-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full btn-primary">
                    Agendar
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Prices; 