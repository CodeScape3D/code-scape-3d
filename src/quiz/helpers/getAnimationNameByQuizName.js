export const getAnimationNameByQuizName = quizName => {
  const animationNames = {
    'Ordenamiento de Burbuja': 'bubble',
    Quicksort: 'quick',
    ShellSort: 'shell',
    'Insertion Sort': 'insertion',
    'Listas Simples': 'simpleList',
    Pilas: 'stack',
    Colas: 'queue',
    'Búsqueda Lineal': 'linearSearch',
    'Búsqueda Binaria': 'binarySearch',
  };

  return animationNames[quizName];
};
