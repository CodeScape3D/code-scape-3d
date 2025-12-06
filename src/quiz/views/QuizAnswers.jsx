import { useDispatch, useSelector } from 'react-redux';
import { AnswerButton, AnswersGrid, QuizQuestion } from '../components';
import { BasicButton } from '../../components';
import { Navigate, useNavigate } from 'react-router-dom';
import { questionType } from '../constants';
import { setCurrentQuestion } from '../../store';
import { getAnimationNameByQuizName } from '../helpers';
import { useTranslation } from 'react-i18next';

export const QuizAnswers = () => {
  const { questions, quizName } = useSelector(state => state.quiz);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  if (questions.length === 0) {
    return <Navigate to="/quizzes" />;
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Revisión de Respuestas
          </h1>
          <p className="text-gray-600">
            Aquí puedes ver todas tus respuestas y la retroalimentación
          </p>
        </div>

        {/* Preguntas */}
        <div className="space-y-6">
          {questions.map((question, index) => (
            <div
              className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary"
              key={index}
            >
              {/* Número y pregunta */}
              <div className="mb-6">
                <h2 className="text-sm font-bold text-primary mb-3 uppercase">
                  Pregunta {index + 1}
                </h2>
                <h3 className="text-xl font-bold text-gray-900">
                  {question.statement}
                </h3>
              </div>

              {/* Comparativa de respuestas */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Respuesta correcta */}
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    <h4 className="text-sm font-bold text-green-900 uppercase">
                      {t('correctOption')}
                    </h4>
                  </div>
                  <div className="bg-white rounded p-3 border border-green-200">
                    <div className="inline-block bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded mb-2">
                      Opción {question.answer}
                    </div>
                    <p className="text-green-900 text-sm font-semibold">
                      {question.options[question.answer]}
                    </p>
                  </div>
                </div>

                {/* Tu respuesta */}
                <div
                  className={`rounded-lg p-4 border ${
                    question.selectedAnswer === question.answer
                      ? 'bg-green-50 border-green-200'
                      : 'bg-red-50 border-red-200'
                  }`}
                >
                  <div className={`flex items-center gap-2 mb-3`}>
                    <span
                      className={`inline-block ${
                        question.selectedAnswer === question.answer
                          ? 'bg-green-600'
                          : 'bg-red-600'
                      } text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold`}
                    >
                      {question.selectedAnswer === question.answer ? '✓' : '✗'}
                    </span>
                    <h4
                      className={`text-sm font-bold uppercase ${
                        question.selectedAnswer === question.answer
                          ? 'text-green-900'
                          : 'text-red-900'
                      }`}
                    >
                      {t('youChoose')}
                    </h4>
                  </div>
                  <div
                    className={`rounded p-3 ${
                      question.selectedAnswer === question.answer
                        ? 'bg-white border border-green-200'
                        : 'bg-white border border-red-200'
                    }`}
                  >
                    <div
                      className={`inline-block text-xs font-bold px-2 py-1 rounded mb-2 ${
                        question.selectedAnswer === question.answer
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      Opción {question.selectedAnswer}
                    </div>
                    <p
                      className={`text-sm font-semibold ${
                        question.selectedAnswer === question.answer
                          ? 'text-green-900'
                          : 'text-red-900'
                      }`}
                    >
                      {question.options[question.selectedAnswer]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Explicación */}
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">💡</span>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-blue-900 uppercase mb-2">
                      {t('explanation')}
                    </h4>
                    <p className="text-blue-800 text-sm leading-relaxed text-justify">
                      {question.feedback}
                    </p>
                  </div>
                </div>
              </div>

              {/* Botón ver retroalimentación */}
              {question.type === questionType.PRACTICAL && (
                <button
                  onClick={() => {
                    dispatch(setCurrentQuestion(question));
                    navigate(
                      `/animacion/${getAnimationNameByQuizName(quizName)}`
                    );
                  }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  📺 {t('seeFeedback')}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex gap-3 mt-8 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            {t('back')}
          </button>
          <button
            onClick={() => navigate('/quizzes')}
            className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            {t('exit')}
          </button>
        </div>
      </div>
    </div>
  );
};
