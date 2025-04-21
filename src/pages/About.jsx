import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      name: 'João Silva',
      role: 'Barbeiro Chefe',
      image: '/src/assets/team/joao.jpg',
      description: 'Especialista em cortes modernos e técnicas avançadas',
    },
    {
      name: 'Pedro Santos',
      role: 'Barbeiro Sênior',
      image: '/src/assets/team/pedro.jpg',
      description: 'Mestre em barba e modelagem facial',
    },
    {
      name: 'Carlos Oliveira',
      role: 'Barbeiro',
      image: '/src/assets/team/carlos.jpg',
      description: 'Especialista em cortes clássicos e tradicionais',
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
          <h1 className="section-title">Sobre Nós</h1>

          {/* History Section */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Nossa História</h2>
              <p className="text-gray-600 mb-4">
                Fundada em 2010, nossa barbearia nasceu da paixão por cortes de cabelo e barba de qualidade.
                Ao longo dos anos, nos tornamos referência na cidade, oferecendo serviços premium e
                atendimento personalizado.
              </p>
              <p className="text-gray-600">
                Nossa missão é proporcionar uma experiência única, combinando técnicas tradicionais
                com tendências modernas, sempre mantendo o padrão de excelência que nos tornou
                reconhecidos.
              </p>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Nossa Equipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-64"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-yellow-500 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Qualidade',
                  description: 'Compromisso com a excelência em cada serviço prestado',
                  icon: '⭐',
                },
                {
                  title: 'Tradição',
                  description: 'Respeito às técnicas clássicas da barbearia',
                  icon: '✂️',
                },
                {
                  title: 'Inovação',
                  description: 'Busca constante por novas tendências e técnicas',
                  icon: '💡',
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 