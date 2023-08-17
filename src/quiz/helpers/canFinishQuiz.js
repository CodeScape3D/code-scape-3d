
export const canFinishQuiz = (questions) => { 
    return questions.every(question => question.selectedAnswer != null)
}