import { endQuizGeneration, startQuizGeneration } from ".";
import { CHAT_COMPLETION_ENDPOINT, openAIApi } from "../../api";
import { setQuiz } from "./quizSlice";

const buildQuizRequest = (quizTopic) => {
    return {
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "system",
                "content": `Eres un generador de quizzes. Dado un tema, generarás la estructura de un quiz en formato de JSON dependiendo del tema que te diga el usuario (los temas son de programación II pueden ser pilas, colas, etc) Cuando generes el JSON solo lo retornalo NO ESCRIBAS MAS NADA solo el JSON plano. IMPORTANTE: las preguntas deben ser en ESPAÑOL no las hagas en ningun otro idioma SOLO EN ESPAÑOL. Cabe resaltar que cuando estés generando el JSON generes tambien un arreglo numerico de prueba (la cantidad de numeros la que desees) y en base a ese arreglo generas las preguntas. Aqui tienes un ejemplo de la estructura del JSON:

            { 
            "name": "Ordenamiento de Burbuja",
                "array": [5, 2, 8, 1, 3, 7, 4, 6],
                "questions": [
                    {
                        "statement": "Enunciado de la pregunta teórica 1",
                        "question": "¿Cuál es la característica principal del algoritmo Bubble Sort? ",
                        "options": {
                            "A": "Utiliza un elemento pivote para dividir la lista en subconjuntos",
                            "B": "CDivide la lista en subconjuntos y ordena cada subconjunto de forma recursiva",
                            "C": "Compara elementos adyacentes y los intercambia si están en el orden incorrecto",
                            "D": "Ordena los elementos mediante un proceso de inserción en la posición correcta"
                        },
                        "answer": "D",
                        "selectedAnswer": null,
                        "state": "UNANSWERED",
                        "type": "THEORICAL",
                        "feedback": "La característica principal del algoritmo de Bubble Sort es que ordena los elementos de una lista comparando pares de elementos adyacentes y realizando intercambios si es necesario para mover el elemento más grande (o más pequeño, dependiendo de si se está ordenando en orden ascendente o descendente) hacia el final de la lista. "
                    },
                    {
                        "statement": "Enunciado de la pregunta teórica 2",
                        "question": "¿Cuál es la complejidad promedio de tiempo del algoritmo Bubble Sort en el peor caso?",
                        "options": {
                            "A": "O(n)",
                            "B": "O(n log n)",
                            "C": "O(n^2)",
                            "D": "O(log n)"
                        },
                        "answer": "C",
                        "selectedAnswer": null,
                        "state": "UNANSWERED",
                        "type": "THEORICAL",
                        "feedback": "La complejidad temporal promedio del método de ordenamiento de burbuja es O(n^2), lo que lo hace ineficiente para listas grandes."
                    },
                    {
                        "statement": "Enunciado de la pregunta teórica 4",
                        "question": "¿Cuál es el mejor caso de complejidad temporal para el método de ordenamiento de burbuja?",
                        "options": {
                            "A": "O(n)",
                            "B": "O(n log n)",
                            "C": "O(n^2)",
                            "D": "O(log n)"
                        },
                        "answer": "C",
                        "selectedAnswer": null,
                        "state": "UNANSWERED",
                        "type": "THEORICAL",
                        "feedback": "El mejor caso de complejidad temporal para el método de ordenamiento de burbuja es O(n), que ocurre cuando la lista ya está ordenada y no se realizan intercambios en las iteraciones."
                    },
                    {
                        "statement": "Enunciado de la pregunta teórica 3",
                        "question": "¿Cuál es la principal desventaja del método de ordenamiento de burbuja?",
                        "options": {
                            "A": "Es difícil de implementar",
                            "B": "Requiere mucho espacio de memoria",
                            "C": "Es inestable para elementos iguales",
                            "D": "Tiene una complejidad O(n log n)"
                        },
                        "answer": "C",
                        "selectedAnswer": null,
                        "state": "UNANSWERED",
                        "type": "THEORICAL",
                        "feedback": "El método de ordenamiento de burbuja es inestable para elementos iguales, lo que significa que el orden relativo de elementos iguales podría cambiar después de la ordenación."
                    },
                    {
                        "statement": "Enunciado de la pregunta práctica 2",
                        "question": "Utilizando el método de ordenamiento de burbuja, ¿cuál sería el arreglo después de una iteración completa?",
                        "options": {
                            "A": "[2, 5, 1, 3, 7, 4, 6, 8]",
                            "B": "[1, 2, 3, 4, 5, 6, 7, 8]",
                            "C": "[5, 2, 8, 1, 3, 7, 4, 6]",
                            "D": "[8, 7, 6, 5, 4, 3, 2, 1]"
                        },
                        "answer": "A",
                        "selectedAnswer": null,
                        "state": "UNANSWERED",
                        "type": "PRACTICAL",
                        "feedback": "En una iteración completa del método de ordenamiento de burbuja, se compara y troca cada par de elementos adyacentes, lo que resultaría en el arreglo [2, 5, 1, 3, 7, 4, 6, 8].",
                        "stepToHistory": 15
                    },
                    {
                        "statement": "Enunciado de la pregunta práctica 3",
                        "question": "Siguiendo el método de ordenamiento de burbuja, ¿cuántas iteraciones se necesitan para ordenar completamente el arreglo proporcionado?",
                        "options": {
                            "A": "6",
                            "B": "7",
                            "C": "8",
                            "D": "5"
                        },
                        "answer": "B",
                        "selectedAnswer": null,
                        "state": "UNANSWERED",
                        "type": "PRACTICAL",
                        "feedback": "Para ordenar completamente el arreglo [5, 2, 8, 1, 3, 7, 4, 6] utilizando el método de ordenamiento de burbuja, se necesitan 7 iteraciones.",
                        "stepToHistory": 0
                    },
                    {
                        "statement": "Enunciado de la pregunta práctica 4",
                        "question": "¿Cuál es el elemento más grande después de la primera iteración del método de ordenamiento de burbuja en el arreglo proporcionado?",
                        "options": {
                            "A": "5",
                            "B": "8",
                            "C": "1",
                            "D": "2"
                        },
                        "answer": "B",
                        "selectedAnswer": null,
                        "state": "UNANSWERED",
                        "type": "PRACTICAL",
                        "feedback": "Después de la primera iteración, el elemento más grande, que estaba al final del arreglo, se movería a su posición correcta, que es la última.",
                        "stepToHistory": 0
                    },
                    
                ]
            }`
            }, {
                "role": "user",
                "content": `Quiz de ${quizTopic}`
            }
        ]
    }
}

export const generateQuiz = (topic) => {
    return async (dispatch) => {
        try {
            dispatch(startQuizGeneration())

            const response = await openAIApi.post(CHAT_COMPLETION_ENDPOINT, buildQuizRequest(topic), {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${import.meta.env.VITE_OPEN_AI_API_KEY}`
                }
            })


            const generatedQuiz = JSON.parse(response.data.choices[0].message.content)
            console.log(generatedQuiz);
            dispatch(setQuiz(generatedQuiz))
            dispatch(endQuizGeneration())
        } catch (e) {
            console.error(e);
        }
    }
}