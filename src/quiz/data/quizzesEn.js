export const linkedListQuizEn = {
  name: 'Linked Lists',
  questions: [
    {
      statement: 'What is the proper definition of a linked list?',
      question: 'What is understood by a linked list?',
      options: {
        A: 'An ordered collection of elements with a fixed size.',
        B: 'An unordered collection of elements with a variable size.',
        C: 'An ordered collection of elements with a variable size.',
        D: 'An unordered collection of elements with a fixed size.',
      },
      answer: 'C',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'A linked list is a data structure consisting of a series of nodes, where each node contains a value and a reference to the next node.',
    },
    {
      statement: 'What is a node in a linked list?',
      question: 'In the context of linked lists, what is a node?',
      options: {
        A: 'A link between two elements in the list.',
        B: 'The first element in the list.',
        C: 'A value stored in the list.',
        D: 'An element of the list that contains a value and a reference to the next element.',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'A node in a linked list is an element that contains a value and a pointer/reference to the next node in the list.',
    },
    {
      statement: 'What is the main advantage of a linked list over an array?',
      question:
        'Compared to an array, what is the main advantage of a linked list?',
      options: {
        A: 'Linked lists can store an unlimited number of elements.',
        B: 'Linked lists have faster access to elements.',
        C: 'Linked lists take up less space in memory.',
        D: 'Linked lists can efficiently insert and delete elements at any position.',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'A key advantage of linked lists is their ability to efficiently insert and delete elements at any position, while arrays can be less efficient in this aspect due to the need to rearrange elements.',
    },
    {
      statement: 'In a doubly linked list, each node has references to:',
      question:
        'In a doubly linked list, to which elements does each node point?',
      options: {
        A: 'The previous node and the next node.',
        B: 'Only the previous node.',
        C: 'Only the next node.',
        D: 'The first and last nodes in the list.',
      },
      answer: 'A',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'In a doubly linked list, each node has references to both the previous node and the next node.',
    },
    {
      statement: "What is the 'delete' operation in a linked list?",
      question: "In a linked list, what does the 'delete' operation imply?",
      options: {
        A: 'Deleting the value stored in the node.',
        B: 'Disconnecting the node from the list and freeing the memory.',
        C: 'Moving the node to the end of the list.',
        D: 'Duplicating the node and its data.',
      },
      answer: 'B',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        "The 'delete' operation in a linked list involves disconnecting the node from the list and freeing the memory associated with the deleted node.",
    },
    {
      statement:
        'What is the average time complexity for searching an element in an unordered linked list?',
      question:
        'In an unordered linked list, what is the average time complexity of the search operation?',
      options: {
        A: 'O(1)',
        B: 'O(n)',
        C: 'O(log n)',
        D: 'It depends on the size of the list.',
      },
      answer: 'B',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'In an unordered linked list, the average search complexity is O(n), as in the worst case you would have to traverse the entire list to find the searched element.',
    },
    {
      statement: "What is 'circularity' in a circular linked list?",
      question:
        "In the context of circular linked lists, what does 'circularity' mean?",
      options: {
        A: 'Each node points to all other nodes.',
        B: 'The list repeats infinitely.',
        C: 'The last node points to the first node.',
        D: 'The nodes are arranged in a circular shape.',
      },
      answer: 'C',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'In a circular linked list, the last node points back to the first node, thus creating a circular structure.',
    },
    {
      statement: "What is the 'head' in a linked list?",
      question: "In a linked list, what does the term 'head' refer to?",
      options: {
        A: 'The first node in the list.',
        B: 'The last node in the list.',
        C: 'The node that contains the largest value.',
        D: 'The node that contains the smallest value.',
      },
      answer: 'A',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        "The 'head' of a linked list refers to the first node in the list, it is the main entry point for accessing the elements in the list.",
    },
  ],
};

export const sortingFundamentalsQuizEn = {
  name: 'Sorting Fundamentals',
  questions: [
    {
      statement: "What is 'sorting' in programming?",
      question: "What is 'sorting' in programming?",
      options: {
        A: 'A process for organizing data in a database',
        B: 'A method for searching elements in a list',
        C: 'A technique for rearranging elements in a specific sequence',
        D: 'An algorithm for generating random numbers.',
      },
      answer: 'C',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'Sorting in programming refers to the action of rearranging the elements of a collection, such as a list or array, using a particular sequence, which can be ascending, descending, or based on a defined criterion.',
    },
    {
      statement:
        'Which of the following sorting methods has an average time complexity of O(n log n)?',
      question:
        'Which of the following sorting methods has an average time complexity of O(n log n)?',
      options: {
        A: 'Bubble Sort',
        B: 'Insertion Sort',
        C: 'Selection Sort',
        D: 'Quicksort',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'Bubble, selection, and insertion sorts have a complexity of O(n^2), while Quicksort has a complexity of O(n log n).',
    },
    {
      statement:
        "In the context of sorting methods, what is a 'pivot element'?",
      question: "In the context of sorting methods, what is a 'pivot element'?",
      options: {
        A: 'The first element in the list',
        B: 'The smallest element in the list',
        C: 'A random element in the list',
        D: 'An element used to divide a list into subsets during the sorting process.',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'The pivot is an element selected from the array to be used as a reference during sorting, with elements less than it on the left and elements greater than it on the right.',
    },
    {
      statement:
        "Which of the following statements is true about 'stable sorting' in sorting algorithms?",
      question:
        "Which of the following statements is true about 'stable sorting' in sorting algorithms?",
      options: {
        A: 'The elements are arranged in descending order',
        B: 'Equal elements maintain their relative order after sorting',
        C: 'The elements are rearranged randomly',
        D: 'Only integers can be sorted in a stable order.',
      },
      answer: 'B',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'In other words, if you have two elements with the same value or key in the original list, and a stable sorting algorithm is applied, these two elements will remain in the same relative order after sorting.',
    },
    {
      statement: "How can sorting methods improve a program's performance?",
      question: "How can sorting methods improve a program's performance?",
      options: {
        A: 'They speed up the program startup process',
        B: "They reduce the hardware's energy consumption",
        C: 'They decrease the amount of necessary RAM',
        D: 'They speed up data search and classification, making the program more efficient.',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'When a program needs to search for or access data in a list, such as a contact list on a phone, a product list in an online store, or any other data set, having those data sorted properly can make the search much faster. When the data is sorted, you can use efficient search techniques, such as binary search, which drastically reduces the number of comparisons needed to find a specific element in the list. This makes the program faster and more efficient in terms of execution time.',
    },
    {
      statement:
        'What is an essential consideration when choosing a sorting method for a specific application?',
      question:
        'What is an essential consideration when choosing a sorting method for a specific application?',
      options: {
        A: 'The popularity of the method in the programming community',
        B: "The complexity of the method's source code",
        C: 'The type of data and the size of the set to be sorted',
        D: 'The number of colors that can be applied to the algorithm',
      },
      answer: 'C',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'Choosing the right sorting method should primarily be based on the type of data and the size of the data set you need to sort, as this will directly affect the performance and efficiency of an application.',
    },
    {
      statement: 'Using recursion instead of iteration allows:',
      question: 'Using recursion instead of iteration allows:',
      options: {
        A: 'Elegant and simple solutions',
        B: 'Solutions with less code',
        C: 'Well-structured and modular solutions to complex problems',
        D: 'All of the above',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'When using recursion instead of iteration in a program, all the advantages mentioned in options A, B, and C can be achieved:',
    },
  ],
};

export const bubbleSortQuizEn = {
  name: 'Bubble Sort',
  array: [5, 2, 8, 1, 3, 7, 4, 6],
  questions: [
    {
      statement: 'Theoretical Question Statement 1',
      question: 'What is the main idea behind the bubble sort method?',
      options: {
        A: 'Divide and conquer',
        B: 'Compare and swap',
        C: 'Exchange and combine',
        D: 'Replace and sort',
      },
      answer: 'B',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'THEORETICAL',
      feedback:
        'In the bubble sort method, adjacent elements are compared and swapped if they are in the wrong order.',
    },
    {
      statement: 'Theoretical Question Statement 2',
      question:
        'What is the average time complexity of the Bubble Sort algorithm in the worst case?',
      options: {
        A: 'O(n)',
        B: 'O(n log n)',
        C: 'O(n^2)',
        D: 'O(log n)',
      },
      answer: 'C',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'THEORETICAL',
      feedback:
        'The average time complexity of the bubble sort method is O(n^2), which makes it inefficient for large lists.',
    },
    {
      statement: 'Theoretical Question Statement 4',
      question:
        'What is the best-case time complexity for the bubble sort method?',
      options: {
        A: 'O(n)',
        B: 'O(n log n)',
        C: 'O(n^2)',
        D: 'O(log n)',
      },
      answer: 'A',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'THEORETICAL',
      feedback:
        'The best-case time complexity for the bubble sort method is O(n), which occurs when the list is already sorted and no swaps are made during the iterations.',
    },
    {
      statement: 'Theoretical Question Statement 3',
      question: 'What is the main disadvantage of the bubble sort method?',
      options: {
        A: 'It is difficult to implement',
        B: 'It requires a lot of memory space',
        C: 'It is unstable for equal elements',
        D: 'It has a complexity of O(n log n)',
      },
      answer: 'C',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'THEORETICAL',
      feedback:
        'The bubble sort method is unstable for equal elements, meaning the relative order of equal elements could change after sorting.',
    },
    {
      statement: 'Practical Question Statement 2',
      question:
        'Using the bubble sort method, what would the array be after one complete iteration?',
      options: {
        A: '[2, 5, 1, 3, 7, 4, 6, 8]',
        B: '[1, 2, 3, 4, 5, 6, 7, 8]',
        C: '[5, 2, 8, 1, 3, 7, 4, 6]',
        D: '[8, 7, 6, 5, 4, 3, 2, 1]',
      },
      answer: 'A',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'PRACTICAL',
      feedback:
        'In a complete iteration of the bubble sort method, each pair of adjacent elements is compared and swapped if needed, resulting in the array [2, 5, 1, 3, 7, 4, 6, 8].',
      stepToHistory: 15,
    },
    {
      statement: 'Practical Question Statement 3',
      question:
        'Following the bubble sort method, how many iterations are needed to fully sort the provided array?',
      options: {
        A: '6',
        B: '7',
        C: '8',
        D: '5',
      },
      answer: 'B',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'PRACTICAL',
      feedback:
        'To fully sort the array [5, 2, 8, 1, 3, 7, 4, 6] using the bubble sort method, 7 iterations are needed.',
      stepToHistory: 0,
    },
    {
      statement: 'Practical Question Statement 4',
      question:
        'What is the largest element after the first iteration of the bubble sort method in the provided array?',
      options: {
        A: '5',
        B: '8',
        C: '1',
        D: '2',
      },
      answer: 'B',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'PRACTICAL',
      feedback:
        'After the first iteration, the largest element, which was at the end of the array, will have moved to its correct position, which is the last.',
      stepToHistory: 0,
    },
  ],
};

export const quickSortQuizEn = {
  name: 'Quicksort',
  array: [42, 17, 89, 5, 63, 31, 77, 11],
  questions: [
    {
      statement: 'What is the key concept behind the Quicksort algorithm?',
      question: 'Key concept of Quicksort.',
      options: {
        A: 'Compare adjacent elements and swap them if they are out of order.',
        B: 'Divide the list into smaller subsets, sort them, and then combine them.',
        C: 'Choose a pivot element and rearrange the elements so that the smaller ones are to its left and the larger ones are to its right.',
        D: 'Use a queue data structure to organize the elements.',
      },
      answer: 'C',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'THEORETICAL',
      feedback:
        'The concept of choosing a pivot and placing smaller elements to its left and larger elements to its right follows the divide and conquer concept.',
    },
    {
      statement: 'What is the main idea behind the Quicksort algorithm?',
      question: 'Main idea of Quicksort.',
      options: {
        A: 'Divide the array into subarrays and sort them separately.',
        B: 'Traverse the array and compare each element with the next one.',
        C: 'Sort the array using a priority queue.',
        D: 'Reverse the order of the elements in the array.',
      },
      answer: 'A',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'THEORETICAL',
      feedback:
        'Correct. Quicksort divides the array into smaller subarrays and then sorts them recursively.',
    },
    {
      statement:
        'What factor can negatively affect the performance of Quicksort in its standard implementation?',
      question: 'Factor affecting Quicksort performance.',
      options: {
        A: 'The use of a pivot element',
        B: 'The number of elements in the list',
        C: 'The choice of the element swapping algorithm',
        D: 'The choice of the pivot element',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'THEORETICAL',
      feedback:
        'The choice of a suitable pivot is important for the performance of Quicksort.',
    },
    {
      statement: 'What is the average complexity of the Quicksort algorithm?',
      question: 'Average complexity of Quicksort.',
      options: {
        A: 'O(n)',
        B: 'O(n log n)',
        C: 'O(n^2)',
        D: 'O(log n)',
      },
      answer: 'B',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'THEORETICAL',
      feedback: 'Correct. The average complexity of Quicksort is O(n log n).',
    },
    {
      statement:
        'Given the following step in Quicksort:\n\nPivot: 31\nSmaller elements: [17, 5, 11]\nLarger elements: [42, 89, 63, 77]\n\nWhat is the next step?',
      question: 'Select the correct option.',
      options: {
        A: 'Sort the smaller elements.',
        B: 'Sort the larger elements.',
        C: 'The array is already sorted.',
        D: 'Swap the pivot with the first larger element.',
      },
      answer: 'B',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'THEORETICAL',
      feedback:
        'Correct. In Quicksort, the smaller and larger elements are recursively sorted separately.',
    },
    {
      statement:
        'Given the following array: [42, 17, 89, 5, 63, 31, 77, 11]\n\nWhat is the third element after applying the Quicksort algorithm?',
      question: 'Select the correct option.',
      options: {
        A: '17',
        B: '31',
        C: '42',
        D: '63',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'PRACTICAL',
      feedback: 'Correct. The third element after applying Quicksort is 63.',
      stepToHistory: 0,
    },
    {
      statement:
        'Given the following array: [42, 17, 89, 5, 63, 31, 77, 11]\n\nApply one step of Quicksort and show the resulting array.',
      question: 'Select the correct option.',
      options: {
        A: '[11, 17, 5, 31, 63, 42, 77, 89]',
        B: '[11, 17, 5, 31, 63, 77, 42, 89]',
        C: '[11, 17, 5, 31, 42, 63, 77, 89]',
        D: '[11, 17, 31, 5, 63, 42, 77, 89]',
      },
      answer: 'B',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'PRACTICAL',
      feedback:
        'Correct. After one step of Quicksort, the array would look like [11, 17, 5, 31, 63, 77, 42, 89].',
      stepToHistory: 0,
    },
    {
      statement:
        'Given the following array: [42, 17, 89, 5, 63, 31, 77, 11]\n\nWhat is the last element after applying Quicksort completely?',
      question: 'Select the correct option.',
      options: {
        A: '11',
        B: '31',
        C: '63',
        D: '89',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'PRACTICAL',
      feedback:
        'After applying Quicksort completely, the last element would be 89.',
      stepToHistory: 0,
    },
  ],
};

export const shellSortQuizEn = {
  name: 'ShellSort',
  array: [56, 32, 17, 92, 78, 23, 61, 42],
  questions: [
    {
      statement: 'Briefly explain how the ShellSort algorithm works.',
      question: 'How does ShellSort work?',
      options: {
        A: 'Compare adjacent elements and swap them if they are out of order.',
        B: 'Divide the array into subarrays and then sort them using the insertion method.',
        C: 'Select the largest element and place it in the correct position on each pass.',
        D: 'Count the frequency of each element in the array and arrange them in ascending order.',
      },
      answer: 'B',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'THEORETICAL',
      feedback:
        'ShellSort divides the array into subarrays and then sorts them using the insertion method.',
    },
    {
      statement:
        'What is the main distinctive feature of ShellSort compared to other sorting methods?',
      question: 'Main feature of ShellSort.',
      options: {
        A: 'It uses a pivot to compare elements.',
        B: 'It operates in constant time.',
        C: 'It sorts even elements first and then odd elements.',
        D: 'It uses a sequence of gaps to perform multiple passes.',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'THEORETICAL',
      feedback:
        'ShellSort uses a sequence of gaps to perform multiple passes and improve sorting.',
    },
    {
      statement: 'What is the worst-case time complexity for ShellSort?',
      question: 'Worst-case time complexity.',
      options: {
        A: 'O(n)',
        B: 'O(n log n)',
        C: 'O(n^2)',
        D: 'O(log n)',
      },
      answer: 'C',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'THEORETICAL',
      feedback:
        'The worst-case time complexity of ShellSort is O(n^2), but it depends on the gap sequence used.',
    },
    {
      statement: 'Which gap sequence is commonly used in ShellSort?',
      question: 'Gap sequence in ShellSort.',
      options: {
        A: 'Fibonacci sequence.',
        B: 'Prime number sequence.',
        C: 'Ascending arithmetic sequence.',
        D: 'Geometric sequence.',
      },
      answer: 'A',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'THEORETICAL',
      feedback:
        'The Fibonacci sequence is commonly used in ShellSort to define the gaps.',
    },
    {
      statement:
        'Given the array [56, 32, 17, 92, 78, 23, 61, 42], what would be the initial gap in ShellSort?',
      question: 'What is the initial gap?',
      options: {
        A: '1',
        B: '2',
        C: '3',
        D: '4',
      },
      answer: 'B',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'PRACTICAL',
      feedback: 'The initial gap in ShellSort is 2 in this case.',
      stepToHistory: 0,
    },
    {
      statement:
        'Sort the following array using the ShellSort algorithm with gap size 2: [56, 32, 17, 92, 78, 23, 61, 42]. What would be the sorted array after the first pass?',
      question: 'Array after the first pass of ShellSort.',
      options: {
        A: '[32, 56, 17, 92, 23, 78, 42, 61]',
        B: '[56, 17, 32, 78, 23, 42, 61, 92]',
        C: '[17, 56, 32, 78, 23, 42, 61, 92]',
        D: '[56, 32, 17, 92, 78, 23, 61, 42]',
      },
      answer: 'A',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'PRACTICAL',
      feedback:
        'After the first pass with gap size 2, the array would look like [32, 56, 17, 92, 23, 78, 42, 61].',
      stepToHistory: 0,
    },
  ],
};

export const insertionSortQuizEn = {
  name: 'Insertion Sort',
  array: [18, 42, 9, 31, 27, 5, 13, 37],
  questions: [
    {
      statement: 'Explain briefly how the Insertion Sort algorithm works.',
      question: 'How does Insertion Sort work?',
      options: {
        A: 'Divide the array into two halves and then merge the sorted results.',
        B: 'Select the largest element and place it in the correct position on each pass.',
        C: 'Compare adjacent elements and swap them if they are out of order.',
        D: 'Insert elements one by one into the correct position in the sorted subarray.',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'THEORETICAL',
      feedback:
        'Insertion Sort inserts elements one by one into the correct position in the sorted subarray.',
    },
    {
      statement: 'What is the main advantage of the Insertion Sort algorithm?',
      question: 'Main advantage of Insertion Sort.',
      options: {
        A: 'It is efficient for large arrays.',
        B: 'It always has linear complexity.',
        C: 'It is stable and does not change the relative order of equal elements.',
        D: 'None of the above.',
      },
      answer: 'C',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'THEORETICAL',
      feedback:
        'Insertion Sort is stable and does not change the relative order of equal elements.',
    },
    {
      statement: 'What is the worst-case time complexity for Insertion Sort?',
      question: 'Worst-case time complexity.',
      options: {
        A: 'O(n)',
        B: 'O(n log n)',
        C: 'O(n^2)',
        D: 'O(log n)',
      },
      answer: 'C',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'THEORETICAL',
      feedback: 'The worst-case time complexity of Insertion Sort is O(n^2).',
    },
    {
      statement: 'What is the pivot element in the Insertion Sort algorithm?',
      question: 'Pivot element in Insertion Sort.',
      options: {
        A: 'The first element of the array.',
        B: 'The last element of the array.',
        C: 'The element in the middle position of the array.',
        D: 'There is no pivot element in Insertion Sort.',
      },
      answer: 'A',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'THEORETICAL',
      feedback:
        'In Insertion Sort, the pivot is the first element of the array.',
    },
    {
      statement:
        'Sort the following array using the Insertion Sort algorithm: [18, 42, 9, 31, 27, 5, 13, 37]. What would be the sorted array after the second pass?',
      question: 'Array after the second pass of Insertion Sort.',
      options: {
        A: '[18, 9, 42, 31, 27, 5, 13, 37]',
        B: '[9, 18, 42, 31, 27, 5, 13, 37]',
        C: '[18, 42, 9, 31, 27, 5, 13, 37]',
        D: '[18, 9, 5, 27, 31, 42, 13, 37]',
      },
      answer: 'B',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'PRACTICAL',
      feedback:
        'After the second pass, the array would be: [9, 18, 42, 31, 27, 5, 13, 37].',
      stepToHistory: 0,
    },
    {
      statement:
        'Sort the following array using the Insertion Sort algorithm: [18, 42, 9, 31, 27, 5, 13, 37]. What would be the sorted array after the fifth pass?',
      question: 'Array after the fifth pass of Insertion Sort.',
      options: {
        A: '[5, 9, 13, 18, 27, 31, 37, 42]',
        B: '[5, 9, 13, 18, 27, 31, 42, 37]',
        C: '[18, 9, 13, 5, 27, 31, 37, 42]',
        D: '[18, 42, 9, 31, 27, 5, 13, 37]',
      },
      answer: 'A',
      selectedAnswer: null,
      state: 'UNANSWERED',
      type: 'PRACTICAL',
      feedback:
        'After the fifth pass, the array would be: [5, 9, 13, 18, 27, 31, 37, 42].',
      stepToHistory: 0,
    },
  ],
};

export const sortingMethodsQuizEn = {
  name: 'Sorting Methods',
  questions: [
    {
      statement:
        'Which of the following sorting methods is known for its efficiency on small lists or partially sorted lists?',
      question:
        'Which sorting method is efficient for small lists or partially sorted lists?',
      options: {
        A: 'Quicksort',
        B: 'Bubblesort',
        C: 'Insertion Sort',
        D: 'Merge Sort',
      },
      answer: 'C',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'Insertion Sort is efficient on small lists or partially sorted lists due to its incremental insertion nature.',
    },
    {
      statement:
        'What is the worst-case time complexity for the Quicksort algorithm?',
      question: 'In the worst case, what is the time complexity of Quicksort?',
      options: {
        A: 'O(1)',
        B: 'O(n)',
        C: 'O(n log n)',
        D: 'O(n^2)',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'In the worst case, Quicksort has a time complexity of O(n^2), but with balanced partitions and proper pivot selection, it achieves an average time complexity of O(n log n).',
    },
    {
      statement:
        'Which sorting method always has a time complexity of O(n log n) in the worst case?',
      question:
        'Which of these sorting methods always has a time complexity of O(n log n) in the worst case?',
      options: {
        A: 'Bubblesort',
        B: 'Selection Sort',
        C: 'Heapsort',
        D: 'Mergesort',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'Mergesort has a time complexity of O(n log n) in the worst case, making it efficient for sorting large datasets.',
    },
    {
      statement: 'Which of the following sorting methods is unstable?',
      question: 'Which of these sorting methods is unstable?',
      options: {
        A: 'Quicksort',
        B: 'Insertion Sort',
        C: 'Mergesort',
        D: 'Selection Sort',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'Selection Sort is an unstable sorting method, meaning it does not necessarily maintain the relative order of equal elements.',
    },
    {
      statement:
        'Which of the following sorting methods is most suitable for linked lists?',
      question:
        'For sorting linked lists, which of these methods is most suitable?',
      options: {
        A: 'Bubblesort',
        B: 'Quicksort',
        C: 'Insertion Sort',
        D: 'Mergesort',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'Mergesort is especially suitable for linked lists due to its divide-and-conquer nature, which aligns well with node linking operations.',
    },
    {
      statement:
        'In what situation does HeapSort outperform Quicksort and Mergesort?',
      question:
        'In what situation is HeapSort superior to Quicksort and Mergesort?',
      options: {
        A: 'Memory efficiency.',
        B: 'Sorting speed.',
        C: 'When sorting repeated elements.',
        D: 'When dealing with uniformly distributed data.',
      },
      answer: 'A',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'HeapSort is more memory-efficient since it does not require storing all elements in an additional data structure before sorting.',
    },
    {
      statement: 'What is the main disadvantage of the Bubblesort algorithm?',
      question: 'What is the main disadvantage of Bubblesort?',
      options: {
        A: 'It is unstable.',
        B: 'It has high time complexity in the worst case.',
        C: 'It is slow in general.',
        D: 'It cannot be implemented in modern programming languages.',
      },
      answer: 'C',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'The main disadvantage of Bubblesort is its slowness compared to other sorting methods, as it requires many comparisons and element movements.',
    },
    {
      statement:
        'Which sorting method always has a time complexity of O(n^2) but is more efficient on small lists?',
      question:
        'Which of these sorting methods always has a time complexity of O(n^2) but is more efficient on small lists?',
      options: {
        A: 'Quicksort',
        B: 'Bubblesort',
        C: 'Insertion Sort',
        D: 'Selection Sort',
      },
      answer: 'C',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'Insertion Sort has a time complexity of O(n^2) in the worst case but is more efficient on small lists due to its incremental insertion nature.',
    },
  ],
};

export const searchMethodsQuizEn = {
  name: 'Search Methods',
  questions: [
    {
      statement:
        'Which of the following search methods is more efficient on a sorted dataset?',
      question: 'On a sorted dataset, which search method is more efficient?',
      options: {
        A: 'Linear Search',
        B: 'Binary Search',
        C: 'Tree Search',
        D: 'Hash Search',
      },
      answer: 'B',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'Binary Search is more efficient on sorted datasets because it halves the search space with each iteration.',
    },
    {
      statement:
        'Which of the following search methods is more suitable for small and unsorted datasets?',
      question:
        'On small and unsorted datasets, which search method is more suitable?',
      options: {
        A: 'Linear Search',
        B: 'Binary Search',
        C: 'Tree Search',
        D: 'Hash Search',
      },
      answer: 'A',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'Linear Search is more suitable for small and unsorted datasets as it involves checking each element one by one.',
    },
    {
      statement:
        'Which search method benefits the most from sorted datasets in terms of time?',
      question:
        'Among these search methods, which benefits the most from sorted datasets in terms of time?',
      options: {
        A: 'Linear Search',
        B: 'Binary Search',
        C: 'Tree Search',
        D: 'Hash Search',
      },
      answer: 'B',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'Binary Search greatly benefits from sorted datasets as it reduces the number of elements to consider at each step.',
    },
    {
      statement:
        'Which of the following search methods is more efficient in terms of time on large datasets?',
      question:
        'On large datasets, which search method is more efficient in terms of time?',
      options: {
        A: 'Linear Search',
        B: 'Binary Search',
        C: 'Tree Search',
        D: 'Hash Search',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'Hash Search is more efficient in terms of time on large datasets, as it allows direct access to elements using a hash function.',
    },
    {
      statement:
        'In what type of data structure is it common to perform Depth-First Search (DFS) and Breadth-First Search (BFS)?',
      question:
        'In what type of data structure is it common to perform both Depth-First Search (DFS) and Breadth-First Search (BFS)?',
      options: {
        A: 'Linked Lists',
        B: 'Binary Trees',
        C: 'Queues',
        D: 'Graphs',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'Depth-First Search (DFS) and Breadth-First Search (BFS) are common in exploring graphs to find paths and connections between nodes.',
    },
    {
      statement:
        'In what type of data structure is it useful to implement a hash table for efficient searching?',
      question:
        'In what type of data structure is it useful to implement a hash table for efficient searching?',
      options: {
        A: 'Linked Lists',
        B: 'Binary Trees',
        C: 'Queues',
        D: 'Arrays',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'Hash tables are particularly useful for efficient searching in arrays, as they allow direct access through a hash function.',
    },
    {
      statement:
        'What is the main advantage of binary search over linear search?',
      question:
        'What is the main advantage of binary search compared to linear search?',
      options: {
        A: 'It is simpler to implement.',
        B: 'It is faster across all types of datasets.',
        C: 'It is more precise.',
        D: 'It requires less memory.',
      },
      answer: 'B',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'The main advantage of binary search is its speed, as it significantly reduces the number of comparisons needed, especially on large datasets.',
    },
    {
      statement:
        'Which of the following search methods is particularly efficient for sparse datasets?',
      question:
        'Which of these search methods is particularly efficient for sparse datasets?',
      options: {
        A: 'Linear Search',
        B: 'Binary Search',
        C: 'Tree Search',
        D: 'Hash Search',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'Hash Search is especially efficient for sparse datasets or datasets with many missing values, as it can quickly map keys to values.',
    },
  ],
};

export const binaryTreeQuizEn = {
  name: 'Binary Trees',
  questions: [
    {
      statement: 'What is the correct definition of a binary tree?',
      question: 'In the context of data structures, what is a binary tree?',
      options: {
        A: 'A data structure that contains unique elements in list form.',
        B: 'A data structure that contains duplicate elements organized in a tree form.',
        C: 'A data structure where each node has up to three children.',
        D: 'A data structure where each node has up to two children.',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'A binary tree is a data structure where each node has up to two children: a left child and a right child.',
    },
    {
      statement:
        'What is the advantage of binary trees compared to linked lists?',
      question:
        'Compared to linked lists, what is an advantage of binary trees?',
      options: {
        A: 'Binary trees require less memory.',
        B: 'Binary trees support efficient insertions and deletions at any position.',
        C: 'Binary trees have faster access to elements.',
        D: 'Binary trees are easier to implement.',
      },
      answer: 'C',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'Binary trees can provide faster access to elements compared to linked lists, especially when the tree is balanced.',
    },
    {
      statement:
        'What is the key difference between a complete binary tree and a perfect binary tree?',
      question:
        'In terms of binary trees, what is the key difference between a complete binary tree and a perfect binary tree?',
      options: {
        A: 'A complete binary tree has the same number of nodes at each level, whereas a perfect binary tree does not.',
        B: 'A perfect binary tree has all its nodes at the same level, whereas a complete binary tree does not.',
        C: 'A complete binary tree has all its nodes in a single level, whereas a perfect binary tree does not.',
        D: 'There is no difference between a complete binary tree and a perfect binary tree.',
      },
      answer: 'A',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'In a complete binary tree, all levels except possibly the last are fully filled, and if the last level is not full, the nodes are filled from left to right. In a perfect binary tree, all levels are fully filled.',
    },
    {
      statement: 'What is a leaf node in a binary tree?',
      question: 'In a binary tree, what is meant by a leaf node?',
      options: {
        A: 'A node that has two children.',
        B: 'A node that has no children.',
        C: 'The first node in the tree.',
        D: 'A node that has only one child.',
      },
      answer: 'B',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'A leaf node in a binary tree is a node that has no children, i.e., it does not have any nodes connected beneath it.',
    },
    {
      statement:
        'What is the difference between a binary search tree and a balanced binary tree?',
      question:
        'In terms of binary trees, what is the difference between a binary search tree and a balanced binary tree?',
      options: {
        A: 'There is no difference; both terms refer to the same thing.',
        B: 'A binary search tree has all its nodes at the same level, whereas a balanced binary tree does not.',
        C: 'A binary search tree is organized such that each node has a left and a right child, whereas a balanced binary tree does not have this restriction.',
        D: 'A binary search tree maintains an order property, whereas a balanced binary tree ensures a limited height.',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'A binary search tree maintains an order property, meaning for each node, all nodes in the left subtree are less, and all nodes in the right subtree are greater. A balanced binary tree ensures a limited height to maintain efficient operations.',
    },
    {
      statement: 'What is the height of a binary tree?',
      question:
        'In the context of binary trees, what is meant by the height of a tree?',
      options: {
        A: 'The number of nodes in the tree.',
        B: 'The number of levels in the tree.',
        C: 'The distance between the root and the deepest node.',
        D: 'The total number of branches in the tree.',
      },
      answer: 'B',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'The height of a binary tree refers to the number of levels in the tree, from the root to the deepest level.',
    },
    {
      statement:
        'Which operation is usually slower in an unbalanced binary tree compared to a balanced binary tree?',
      question:
        'In terms of operations on binary trees, which operation is usually slower in an unbalanced binary tree compared to a balanced binary tree?',
      options: {
        A: 'Insertion',
        B: 'Deletion',
        C: 'Search',
        D: 'In-order traversal',
      },
      answer: 'C',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'In an unbalanced binary tree, searching can be slower because the height can be greater, resulting in more comparisons to find a specific node.',
    },
    {
      statement:
        'What is the main advantage of a complete binary tree in terms of space efficiency?',
      question:
        'In terms of space efficiency, what is the main advantage of a complete binary tree?',
      options: {
        A: 'Requires less memory compared to other types of trees.',
        B: 'Maintains a perfect balance between left and right nodes.',
        C: 'Has fewer levels than other types of trees.',
        D: 'Allows faster search than other types of trees.',
      },
      answer: 'A',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'A complete binary tree uses space more efficiently because all levels, except possibly the last one, are fully filled, and nodes are filled from left to right in the last level.',
    },
  ],
};

export const stackQuizEn = {
  name: 'Stacks',
  questions: [
    {
      statement:
        'What is the correct definition of a stack in data structures?',
      question: 'In the context of data structures, what is a stack?',
      options: {
        A: 'A data structure that stores elements in random order.',
        B: 'A data structure that stores elements in reverse order.',
        C: 'A data structure that follows the FIFO (First-In-First-Out) principle.',
        D: 'A data structure that follows the LIFO (Last-In-First-Out) principle.',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'A stack is a data structure that follows the LIFO (Last-In-First-Out) principle, meaning the last element added is the first one to be removed.',
    },
    {
      statement: 'Which operation adds an element to the top of a stack?',
      question: 'In a stack, which operation adds an element to the top?',
      options: {
        A: 'Push',
        B: 'Insert',
        C: 'Enqueue',
        D: 'Append',
      },
      answer: 'A',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        "The operation that adds an element to the top of a stack is called 'Push'.",
    },
    {
      statement:
        'Which operation removes and returns the top element of a stack?',
      question:
        'In a stack, which operation removes and returns the top element?',
      options: {
        A: 'Pop',
        B: 'Dequeue',
        C: 'Remove',
        D: 'Extract',
      },
      answer: 'A',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        "The operation that removes and returns the top element of a stack is called 'Pop'.",
    },
    {
      statement: 'What is the main advantage of a stack compared to a queue?',
      question: 'Compared to a queue, what is the main advantage of a stack?',
      options: {
        A: 'Allows faster access to elements.',
        B: 'Is more memory efficient.',
        C: 'Follows the FIFO principle.',
        D: 'Follows the LIFO principle.',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'The main advantage of a stack over a queue is that it follows the LIFO (Last-In-First-Out) principle, which is useful in situations where maintaining the reverse arrival order of elements is needed.',
    },
    {
      statement:
        'Which of the following is not a typical use scenario for a stack?',
      question: 'Among these scenarios, which is not a typical use of a stack?',
      options: {
        A: 'Managing function calls in a program execution.',
        B: 'Performing Depth-First Search (DFS) on a tree.',
        C: "Implementing 'undo' functionality in a text editor.",
        D: 'Evaluating infix mathematical expressions.',
      },
      answer: 'B',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'Although stacks are useful in many contexts, Depth-First Search (DFS) on a tree typically requires the use of queues due to the FIFO nature of DFS.',
    },
    {
      statement:
        'Which of the following data structures is similar to a stack but has a maximum limit on the number of elements?',
      question:
        'Which of these data structures is similar to a stack but has a maximum limit on the number of elements?',
      options: {
        A: 'Queue',
        B: 'Linked list',
        C: 'Bounded stack',
        D: 'Priority queue',
      },
      answer: 'C',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        "A 'Bounded stack' is similar to a stack but has a maximum limit on the number of elements it can contain.",
    },
    {
      statement:
        "What is the average time complexity of the 'Pop' operation in a stack implemented with a linked list?",
      question:
        "In a stack implemented with a linked list, what is the average time complexity of the 'Pop' operation?",
      options: {
        A: 'O(1)',
        B: 'O(log n)',
        C: 'O(n)',
        D: 'Depends on the implementation of the linked list.',
      },
      answer: 'A',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        "In a stack implemented with a linked list, the 'Pop' operation has an average time complexity of O(1), as it only involves adjusting pointers.",
    },
  ],
};

export const queueQuizEn = {
  name: 'Queues',
  questions: [
    {
      statement:
        'What is the correct definition of a queue in data structures?',
      question: 'In the context of data structures, what is a queue?',
      options: {
        A: 'A data structure that stores elements in random order.',
        B: 'A data structure that stores elements in reverse order.',
        C: 'A data structure that follows the LIFO (Last-In-First-Out) principle.',
        D: 'A data structure that follows the FIFO (First-In-First-Out) principle.',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'A queue is a data structure that follows the FIFO (First-In-First-Out) principle, meaning the first element to enter is the first one to leave.',
    },
    {
      statement: 'Which operation adds an element to the end of a queue?',
      question: 'In a queue, which operation adds an element to the end?',
      options: {
        A: 'Push',
        B: 'Insert',
        C: 'Enqueue',
        D: 'Append',
      },
      answer: 'C',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        "The operation that adds an element to the end of a queue is called 'Enqueue'.",
    },
    {
      statement:
        'Which operation removes and returns the front element of a queue?',
      question:
        'In a queue, which operation removes and returns the front element?',
      options: {
        A: 'Pop',
        B: 'Dequeue',
        C: 'Remove',
        D: 'Extract',
      },
      answer: 'B',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        "The operation that removes and returns the front element of a queue is called 'Dequeue'.",
    },
    {
      statement: 'What is the main advantage of a queue compared to a stack?',
      question: 'Compared to a stack, what is the main advantage of a queue?',
      options: {
        A: 'Allows faster access to elements.',
        B: 'Is more memory efficient.',
        C: 'Follows the LIFO principle.',
        D: 'Follows the FIFO principle.',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'The main advantage of a queue over a stack is that it follows the FIFO (First-In-First-Out) principle, which is useful in situations where maintaining the arrival order of elements is needed.',
    },
    {
      statement:
        'Which type of queue allows newly added elements to replace older elements if the queue is full?',
      question:
        'Which type of queue allows new elements to replace older elements if the queue is full?',
      options: {
        A: 'Circular queue',
        B: 'Priority queue',
        C: 'Double-ended queue',
        D: 'Linear queue',
      },
      answer: 'A',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'A circular queue allows newly added elements to replace older elements if the queue is full, thus maintaining a constant size.',
    },
    {
      statement:
        'Which of the following data structures is similar to a queue but has a maximum limit on the number of elements?',
      question:
        'Which of these data structures is similar to a queue but has a maximum limit on the number of elements?',
      options: {
        A: 'Stack',
        B: 'Linked list',
        C: 'Priority queue',
        D: 'Bounded queue',
      },
      answer: 'D',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        "A 'Bounded queue' is similar to a queue but has a maximum limit on the number of elements it can contain.",
    },
    {
      statement:
        'Which of the following is not a typical use scenario for a queue?',
      question: 'Among these scenarios, which is not a typical use of a queue?',
      options: {
        A: 'Maintaining browsing history in a web browser.',
        B: "Implementing 'undo' functionality in a text editor.",
        C: 'Performing Depth-First Search (DFS) on a tree.',
        D: 'Managing tasks in an operating system (scheduling).',
      },
      answer: 'C',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        'Although queues are useful in many contexts, performing Depth-First Search (DFS) on a tree typically requires the use of stacks due to the LIFO nature of DFS.',
    },
    {
      statement:
        "What is the average time complexity of the 'Enqueue' operation in a queue implemented with a linked list?",
      question:
        "In a queue implemented with a linked list, what is the average time complexity of the 'Enqueue' operation?",
      options: {
        A: 'O(1)',
        B: 'O(log n)',
        C: 'O(n)',
        D: 'Depends on the implementation of the linked list.',
      },
      answer: 'A',
      selectedAnswer: null,
      state: 'UNANSWERED',
      feedback:
        "In a queue implemented with a linked list, the 'Enqueue' operation has an average time complexity of O(1), as it only involves adjusting pointers.",
    },
  ],
};
