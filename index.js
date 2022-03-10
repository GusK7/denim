//  1. Find Highest Frequency (findHighestFreq)
//
//  Goal: find the most frequent occurrence in an array
//
//  Input: an array (<inputArr>) i.e. [2, 4, 9, 4, 2, 32, 4, 5, 2, 1]
//
//  Output: most frequent occurrence i.e. '4' in the above example
//
//  Note: if there is no winner, return 'null'

export function findHighestFreq(inputArr) {
  const hashmap = inputArr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  const hasNoHighestFreq = Object.values(hashmap).every((item) => item == 1);
  if (hasNoHighestFreq) return null;

  return Object.keys(hashmap).reduce((a, b) => {
    const val = hashmap[a] > hashmap[b] ? a : b;
    if (isNaN(parseInt(val))) {
      return val;
    }
    return parseInt(val);
  });
}

//  2. Get Property Array (getPropArr)
//
//  Goal: return an array of values of a specific property from an array of objects
//
//  Input: an array of objects (<objects>), and a property string (<field>) i.e.
//
//    objects = [{id: 1, name: 'joe'}, {id: 2, name: 'tom'}, {id: 3, name: 'mike'}]
//
//    field   = 'name'
//
//  Output: an array of values i.e. ['joe', 'tom', 'mike'] in the above example
//
//  Note: if <objects> is undefined, return 'null'

export function getPropArr(objects, field) {
  if (!Array.isArray(objects)) return null;
  const fieldValues = [];
  for (const item in objects) {
    fieldValues.push(objects[item][field]);
  }
  return fieldValues;
}

//  3. Sort Object Array (sortObjArr):
//
//  Goal: sort an object array in a particular order based on field value
//
//  Input: an array of objects (<objects>), a property string (<field>), and an <order> i.e.
//
//    'asc'  = ascending:
//              A, B, C, D (strings / alphabetically)
//              1, 2, 3, 4 (numbers or counts / numerically)
//
//    'desc' = descending:
//              D, C, B, A
//              4, 3, 2, 1
//
//  Output: the initial array of <objects> sorted by <field> in the appropriate <order>
//
//    Reference './tests/mockUsers.js' for the user data structures
//
//  Note: should be able to sort objects based on the following fields:
//
//    firstName (string / alphabetically)
//    lastName (string / alphabetically)
//    email (string / alphabetically)
//    groups (count / numerically)
//    age (number / numerically)

export function sortObjArr(objects, field, order) {
  if (!objects.length) return;
  if (order == "desc") {
    return objects.sort((a, b) =>
      a[field] < b[field] ? +1 : a[field] > b[field] ? -1 : 0
    );
  } else {
    return objects.sort((a, b) =>
      a[field] < b[field] ? -1 : a[field] > b[field] ? 1 : 0
    );
  }
}
