
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  
  return matrix.reduce((pr, cur, index) => {
    if ( index%2 ) {
      return [...pr, ...cur.reverse()]
    } else {
      return [...pr, ...cur]
   }
    
  },[]);
}
