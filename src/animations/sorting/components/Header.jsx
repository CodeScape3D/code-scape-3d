import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { svgExam } from '../../../assets/svg/SvgConstans';
import { useTranslation } from 'react-i18next';

export const Header = ({ titulo, quiz, descripcionQuiz }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex justify-between items-center w-full mb-3">
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-900 py-2 px-5 text-left rounded-r-3xl"
      >
        <h2 className="text-white font-bold">{t('back')}</h2>
      </button>

      <div className="text-center py-2 px-4 md:px-20 rounded-3xl">
        <h2 className="text-xl font-bold">{titulo}</h2>
      </div>

      <Link to={`/quiz/${quiz}`} className="flex items-center">
        <p className="text-lg text-gray-400 text-center md:w-36 w-full hidden md:block">
          {descripcionQuiz}
        </p>
        <span>{svgExam}</span>
      </Link>
    </div>
  );
};
