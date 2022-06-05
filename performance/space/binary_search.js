/** Binary search:
 * If the target is not in the list, return false. Otherwise, if the target is in the list, return true
 * @param list - the list of numbers
 * @param low - the lowest index of the list
 * @param high - the highest index of the list
 * @param target - the value we're looking for
 * @returns The index of the target value.
 */
function binary_search(list, low, high, target){                  //-> O(log n)
  if (low > high) return false;

  mid = Math.floor((low + high) / 2);

  if (list[mid] == target) return true;

  if (list[mid] > target) {
    return binary_search(list, low, mid - 1, target);
  }

  return binary_search(list, mid + 1, high, target);
}
// const test1 = binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 9, 5);
// console.log(test1);





/** Program:
 * It's an IIFE (Immediately Invoked Function Expression)
 * Create a list of numbers from 1 to 20 (inclusive)
 * Order the list in ascending order
 * Use the @binary_search algorithm to find the index of the number @target
 *
 * Complejidad @Temporal O(n) of @Progam is: O( 1 + n + 1 + n + 1 + O(log n ) + n )
 *  -> O(n + n + log n + n) //? R-> O(n)
 * Complejidad @Espacial -> //? R-> O(n)
 * Espacio Auxiliar      -> //? R-> O(1)
 * */
(function Program(){
  const list = [];                                                        // -> O(1)

  for (let i = 0; i <= 20; i++) {                                          //! -> O(n)
    list.push(Math.floor(Math.random(0,40) * 100));                       // -> O(1)
  }
  const sortedList = [...list].sort((a, b) => a - b);                     //! -> O(n)

  const target = Math.floor(Math.random() * 20);                          // -> O(1)

  const finded = binary_search(sortedList, 0, sortedList.length, target); //! -> O(log(n))

  const target_index_in_sorted_list = sortedList.indexOf(target);         //! -> O(n)

  console.log(`
    Unordered list: ${list}
    Ordered   List: ${sortedList} 
    Target: -> ${target} <-
    Min: ${sortedList[0]}
    Max: ${sortedList[sortedList.length - 1]}
    Low: 0
    High: ${sortedList.length}
    Test finded: ${finded}
    ${ target_index_in_sorted_list == -1 ?
      ''
      : "Target_index_in_sorted_list: "+target_index_in_sorted_list
    }
    `);                                                                   // -> O(1)
})()


