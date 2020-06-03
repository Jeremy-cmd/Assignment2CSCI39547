// #1 for each method


let r = [1,2,3];

function myEach(array, callbackmethod){
  let {length} = array;
// go through array and call callback method on each element
  for(let i = 0; i < length; i+=1){
    let x = array[i];
    callbackmethod(x, i, array);
  }
}


// callback method
function each(x, i, array){
    console.log(x);

}

myEach(r, each);



// #2 map method

function myMap(array, callbackmethod){

  const result = [];
  let {length} = array;

  for(let i=0; i<length; i+=1){
    let x = array[i];
    result[i] = callbackmethod(x, i, array);

  }

  return result;
}


// callback method
function mapping(x, i, array){
    return x*2;
}

console.log(myMap(r, mapping));




// #3 filter method

function myFilter(array, callbackmethod){

  const result = [];
  let {length} = array;

  for(let i=0; i<length; i+=1){
    let x = array[i];

   // only if true do you want the value stored
    if(callbackmethod(x, i, array)){
      result[i] = x;
    }


  }

  return result;

}

function filtering(x, i, array){
  return x > 1;
}

console.log(myFilter(r, filtering));



// #4 some() method

// return true if callback method is true once
function mySome(array, callbackmethod){

  let f = false;
  let {length} = array;

  for(let i = 0; i < length; i+=1){
    let x = array[i];

    if(callbackmethod(x, i, array)){
      f = true;
    }

  }

  return f;

}

function some(x, i, array){
  return x == 1;
}

console.log(mySome(r, some));




// #5 every() method

function myEvery(array, callbackmethod){

  let f = true;
  let {length} = array;

  for(let i = 0; i < length; i+=1){

    let x = array[i];
     
// all elements have to be true
    if(!(callbackmethod(x, i, array))){

      f = false;
      break;

    }

  }

  return f;

}

// callback method
function every(x, i, array){
  return x > 2;
}

console.log(myEvery(r, every));




// #6 reduce() method

function myReduce(array, callbackmethod, initialValue = array[0]){

  // starting position
  let q = 0;

  let {length} = array;
  let total = initialValue;

  if(initialValue == array[0]){
    q = 1;
  }

  // turns array into one value
  for(let i = q; i < length; i+=1){
    let x = array[i];
    total = callbackmethod(total, array[i], i, array);
  }

  return total;

}

function reduce(total, curVal, curInd, arr){
  return total - curVal;
}

console.log(myReduce(r, reduce));





// #7 includes() method

function myIncludes(array, element, position = 0){

  let {length} = array;
  let includes = false;

  if(position < 0 || position >= length){
    position = 0;
  }

// check if element is in array
  for (let i = position; i < length; i++) {

    if (array[i] === element) {
      includes = true;
    }

  }

  return includes;


}

console.log(myIncludes(r, 1));






// #8 indexOf() method

function myIndexOf(array, element, position = 0){

  let {length} = array;
  let index = -1;

  if(position < 0 || position >= length){
    position = 0;
  }
     // get index of element
  for(let i=position; i<length; i+=1){
    if(element === array[i]){
      index = i;
      break;
    }
  }

  return index;
}

console.log(myIndexOf(r, 1));





// #9 push() method

function myPush(array, ...args){

  const { length: lengthArr } = array;
  const { length: lengthVal } = args;


// insert new values at end of the array
  for(let i=0; i<lengthVal; i+=1){
    array[lengthArr + i] = args[i];
  }

  return array.length;

}

console.log(myPush(r, 4,5,6));



// #10 lastIndexOf method

function myLastIndexOf(array, element, position=0){

  let {length} = array;
  let index = -1;

  if(position < 0 || position >= length){
    position = 0;
  }

  for(let i=position; i<length; i+=1){
    if(element === array[i]){
      index = i;
    }

  }

  return index;

}

console.log(myLastIndexOf(r, 6));
