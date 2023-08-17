import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { quizSlice } from "../../../store"
import { QuizView } from "../../../quiz"

const mockGoToNextQuestion = jest.fn()

jest.mock("../../../store/quiz/quizSlice", () => {
    const originalModule = jest.requireActual("../../../store/quiz/quizSlice")
    return { 
        ...originalModule,
        goToNextQuestion: () => mockGoToNextQuestion
    }
    
})

const testStore = configureStore({
    reducer: {
        quiz: quizSlice.reducer
    }
})

describe("Pruebas en la vista QuizView", () => {

    test("Debe de renderizarse correctamente con el quiz de listas enlazadas", () => {
        render(
            <Provider store={testStore}>
                <MemoryRouter initialEntries={["/quiz/linkedList"]}>
                    <Routes>
                        <Route path="/quiz/:quizName" element={<QuizView />} />
                    </Routes>
                </MemoryRouter>
            </Provider>
        )

        expect(screen.getByText("¿Cuál es la definición adecuada de una lista enlazada?")).toBeTruthy()
        expect(screen.getByText("¿Qué se entiende por una lista enlazada?")).toBeTruthy()
        expect(screen.getByText("A. Una colección ordenada de elementos con un tamaño fijo.")).toBeTruthy()
        expect(screen.getByText("B. Una colección desordenada de elementos con un tamaño variable.")).toBeTruthy()
        expect(screen.getByText("C. Una colección ordenada de elementos con un tamaño variable.")).toBeTruthy()
        expect(screen.getByText("D. Una colección desordenada de elementos con un tamaño fijo.")).toBeTruthy()
        expect(screen.getByText("Siguiente")).toBeTruthy()
    })

    test("Boton siguiente debe de llamar handleOnNextQuestion", () => {
        render(
            <Provider store={testStore}>
                <MemoryRouter initialEntries={["/quiz/linkedList"]}>
                    <Routes>
                        <Route path="/quiz/:quizName" element={<QuizView />} />
                    </Routes>
                </MemoryRouter>
            </Provider>
        )

        const nextButton = screen.getByText("Siguiente")
        fireEvent.click(nextButton)
        expect(mockGoToNextQuestion).toHaveBeenCalledTimes(1)
    })


})