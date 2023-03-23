// function matching(arr1, arr2) {
//     let duplicates = 0;
//     console.log(arr1,"로또")
//     console.log(arr2,"나")
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] === arr2[i]) {
//         duplicates++;
//       }
//     }
//     return duplicates
//   }
//   export default matching;
function matching(arr1, arr2) {
    const list = [];
  
    // use a Set to easily check for overlaps
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
  
    // iterate over set1 and check if each item is also in set2
    set1.forEach((item) => {
      if (set2.has(item)) {
        list.push(item);
      }
    });
  
    return list;
  }

  export default matching;