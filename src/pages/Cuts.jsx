import { useState } from 'react';
import { motion } from 'framer-motion';

const Cuts = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'classicos', name: 'Clássicos' },
    { id: 'modernos', name: 'Modernos' },
    { id: 'degrade', name: 'Degradê' },
    { id: 'barba', name: 'Barba' },
  ];

  const cuts = [
    {
      id: 1,
      name: 'Corte Clássico',
      category: 'classicos',
      image: '/src/assets/cuts/classico.jpg',
      description: 'Corte tradicional com acabamento perfeito',
    },
    {
      id: 2,
      name: 'Undercut Moderno',
      category: 'modernos',
      image: '/src/assets/cuts/undercut.jpg',
      description: 'Estilo moderno com contraste marcante',
    },
    {
      id: 3,
      name: 'Degradê Americano',
      category: 'degrade',
      image: '/src/assets/cuts/degrade.jpg',
      description: 'Transição suave com efeito 3D',
    },
    {
      id: 4,
      name: 'Barba Desenhada',
      category: 'barba',
      image: '/src/assets/cuts/barba.jpg',
      description: 'Modelagem precisa e acabamento impecável',
    },
    {
      id: 5,
      name: 'Pompadour',
      category: 'classicos',
      image: '/src/assets/cuts/pompadour.jpg',
      description: 'Estilo retrô com volume e personalidade',
    },
    {
      id: 6,
      name: 'Fade',
      category: 'modernos',
      image: '/src/assets/cuts/fade.jpg',
      description: 'Degradê perfeito com transição suave',
    },
  ];

  const filteredCuts = selectedCategory === 'todos'
    ? cuts
    : cuts.filter(cut => cut.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">Nossos Cortes</h1>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-yellow-500 text-black'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Cuts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCuts.map((cut, index) => (
              <motion.div
                key={cut.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={cut.image}
                    alt={cut.name}
                    className="object-cover w-full h-64"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{cut.name}</h3>
                  <p className="text-gray-600 mb-4">{cut.description}</p>
                  <button className="btn-primary">
                    Agendar Corte
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

export default Cuts; 