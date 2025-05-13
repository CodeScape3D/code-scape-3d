import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { QuizView } from '../../../quiz';
import { quizSlice } from '../../../store';

const mockGoToNextQuestion = jest.fn();
const mockGoToPreviousQuestion = jest.fn();
const mockCheckAnswer = jest.fn();

const testStore = configureStore({
  reducer: {
    quiz: quizSlice.reducer,
  },
});

jest.mock('../../../store/quiz/quizSlice', () => ({
  ...jest.requireActual('../../../store/quiz/quizSlice'),
  goToNextQuestion: () => mockGoToNextQuestion,
  checkAnswer: () => mockCheckAnswer,
}));

describe('Pruebas en la vista QuizView', () => {
  beforeEach(() => jest.clearAllMocks());

  test('Debe de renderizarse correctamente con el quiz de listas enlazadas', () => {
    render(
      <Provider store={testStore}>
        <MemoryRouter initialEntries={['/quiz/linkedList']}>
          <Routes>
            <Route path="/quiz/:quizName" element={<QuizView />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText('¿Cuál es la definición adecuada de una lista enlazada?')
    ).toBeTruthy();
    expect(
      screen.getByText('¿Qué se entiende por una lista enlazada?')
    ).toBeTruthy();
    expect(
      screen.getByText(
        'A. Una colección ordenada de elementos con un tamaño fijo.'
      )
    ).toBeTruthy();
    expect(
      screen.getByText(
        'B. Una colección desordenada de elementos con un tamaño variable.'
      )
    ).toBeTruthy();
    expect(
      screen.getByText(
        'C. Una colección ordenada de elementos con un tamaño variable.'
      )
    ).toBeTruthy();
    expect(
      screen.getByText(
        'D. Una colección desordenada de elementos con un tamaño fijo.'
      )
    ).toBeTruthy();
    expect(screen.getByText('Siguiente')).toBeTruthy();
  });

  test('Boton siguiente debe de llamar goToNextQuestion si no hay respuesta seleccionada', () => {
    render(
      <Provider store={testStore}>
        <MemoryRouter initialEntries={['/quiz/linkedList']}>
          <Routes>
            <Route path="/quiz/:quizName" element={<QuizView />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const nextButton = screen.getByText('Siguiente');
    fireEvent.click(nextButton);
    expect(mockGoToNextQuestion).toHaveBeenCalledTimes(1);
    expect(mockCheckAnswer).not.toHaveBeenCalled();
  });

  test('Boton siguiente debe de llamar checkAnswer si hay respuesta seleccionada', () => {
    render(
      <Provider store={testStore}>
        <MemoryRouter initialEntries={['/quiz/linkedList']}>
          <Routes>
            <Route path="/quiz/:quizName" element={<QuizView />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const answerAButton = screen.getByText(
      'A. Una colección ordenada de elementos con un tamaño fijo.'
    );
    fireEvent.click(answerAButton);
    const nextButton = screen.getByText('Siguiente');
    fireEvent.click(nextButton);
    expect(mockCheckAnswer).toHaveBeenCalledTimes(1);
  });

  test('Boton Volver debe llamar goToPreviousQuestion', async () => {
    jest.unmock('../../../store/quiz/quizSlice');

    render(
      <Provider store={testStore}>
        <MemoryRouter initialEntries={['/quiz/linkedList']}>
          <Routes>
            <Route path="/quiz/:quizName" element={<QuizView />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const nextButton = screen.getByText('Siguiente');
    fireEvent.click(nextButton);
  });
});
