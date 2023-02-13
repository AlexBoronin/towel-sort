module.exports = function towelSort (matrix) {
    let newArray = [];
    if(!matrix || matrix.length === 0){
        return [];
    }else {
        for(let item of matrix) {
            if(matrix.indexOf(item)%2 === 1){
                item = item.reverse();
            }
            for(let i = 0; i < item.length; i++){
                newArray.push(item[i]);
            }
        }
    }
  return newArray;
}
