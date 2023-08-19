
export const getAnimationNameByQuizName = (quizName) => {
    const animationNames = { 
        "Ordenamiento de Burbuja": "bubble",
        "Quicksort": "quick",
        "ShellSort": "shell",
        "Insertion Sort": "insertion",
    }

    return animationNames[quizName];
}