const chunkArray = (myArray, chunk_size) => {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      var myChunk = myArray.slice(index, index + chunk_size);
      tempArray.push(myChunk);
    }
    return tempArray;
  }

  export default chunkArray;