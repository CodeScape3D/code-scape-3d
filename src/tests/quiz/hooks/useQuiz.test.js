import { renderHook } from "@testing-library/react";
import { useQuiz, linkedListQuiz } from "../../../quiz"

describe('Pruebas en el custom hook useQuiz', () => {
    
    test('debe de retornar el estado por defecto', () => { 

        const quiz = linkedListQuiz
        renderHook(() => useQuiz(quiz))
         
    })

});
