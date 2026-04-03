import '../styles/mediaquerys.css';
import MiniGameCard from './MiniGameCard';
import { topicCategories } from './HomeCartas';
import { useTranslation } from 'react-i18next';

export const HomeMiniJuegos = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen bg-gray-50 py-12 md:py-16 lg:py-20">
      {/* Header */}
      <div className="px-4 mb-12 md:mb-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Minijuegos
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Aprende mientras juegas. Explora los minijuegos de cada tema
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-4">
        {topicCategories.map(categoria => (
          <div key={categoria.id} className="mb-16">
            {/* Category Title */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {categoria.nombre}
              </h2>
              <div className="h-1 w-20 bg-primary rounded"></div>
            </div>

            {/* Topics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {categoria.temas.map(tema => (
                <MiniGameCard
                  key={tema.id}
                  logo={tema.imagen}
                  titulo={tema.titulo}
                  ruta={`#`}
                  comingSoon
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Coming Soon Banner */}
      <div className="mt-20 px-4">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-primary to-blue-500 rounded-xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Más minijuegos próximamente
          </h3>
          <p className="text-blue-100">{t('comingSoon')}</p>
        </div>
      </div>
    </div>
  );
};
