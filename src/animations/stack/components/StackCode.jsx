import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { PopCode, PushCode } from '../algorithms';
import { SvgIconDropdown, svgAlgo } from '../../../assets/svg/SvgConstans';
import { useTranslation } from 'react-i18next';

export const StackCode = () => {
  const codeRef = useRef(null);
  const [prevCurrentLine, setPrevCurrentLine] = useState(null);
  const { funAction, history, stepHistory } = useSelector(state => state.stack);
  const [infoVisible, setInfoVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (history === -1 || history >= stepHistory.length) return;

    const currentLine = stepHistory[history].currentIndex;

    const currentElement = codeRef.current.childNodes[currentLine];
    const prevElement = codeRef.current.childNodes[prevCurrentLine];

    if (prevElement) {
      prevElement.classList.remove('bg-secondary');
    }

    if (currentElement) {
      currentElement.classList.add('bg-secondary');
    }

    setPrevCurrentLine(currentLine);
  }, [history, stepHistory, funAction]);

  const Code = funAction => {
    switch (funAction) {
      case 'push':
        return <PushCode codeRef={codeRef} />;
      case 'pop':
        return <PopCode codeRef={codeRef} />;
      default:
        null;
    }
  };

  const toggleInfoPanel = () => {
    setInfoVisible(!infoVisible);
  };

  return (
    <div className="w-full md:w-80 mx-auto md:mr-4 md:mb-4">
      <div className="relative">
        {/* Panel de información */}
        {infoVisible && (
          <div
            className="bg-gray-900 text-white p-4 rounded absolute bottom-14 w-full md:w-80"
            style={{ zIndex: '100' }}
          >
            <ul className="list-disc list-inside text-sm">
              <li className="mb-2">
                <span className="font-semibold">{t('definition')}:</span>{' '}
                {t('stackDefinition')}
              </li>
              <li className="mb-2">
                <span className="font-semibold">
                  {t('principalOperations')}
                </span>
                <ul className="text-sm">
                  <li className="mb-1">Push: {t('pushExplanation')}</li>
                  <li className="mb-1">Pop: {t('popExplanation')}</li>
                </ul>
              </li>
              <li className="mb-2">
                <span className="font-semibold">{t('utility')}:</span>{' '}
                {t('stackUsageExplanation')}
              </li>
              <li className="mb-2">
                <span className="font-semibold">{t('implementations')}:</span>{' '}
                {t('stackImplementations')}
              </li>
            </ul>
          </div>
        )}

        {/* Div header */}
        <div className="bg-gray-900 text-white font-bold py-2 px-4 flex justify-between items-center rounded-t">
          <div className="flex items-center">
            {svgAlgo}
            <span className="ml-2">{t('algorithm')}</span>
          </div>
          <div className="flex items-center">
            <span
              className="inline-flex items-center ml-2 px-3 py-1 bg-primary text-white rounded-lg cursor-pointer hover:bg-secondary transition"
              onClick={toggleInfoPanel}
            >
              {t('explanation')}
              <SvgIconDropdown isOpen={infoVisible} className="ml-1" />
            </span>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white text-xs p-2 transition-all">
        {Code(funAction)}
      </div>
    </div>
  );
};
