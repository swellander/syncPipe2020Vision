const operations = {
  set: (input, arg )=> {
    return arg*1;
  },
  add: (input, arg)=> {
    //we need to add to something
    if(typeof input === 'undefined'){
      throw 'input required';
    }
    return input + arg*1;
  },
  mult: (input, arg)=> {
    //we need to multiply by something
    if(typeof input === 'undefined'){
      throw 'input required';
    }
    return input * arg*1;
  }
};


const syncPipe = (str) => {
  const cmdArr = str.split('|').map(element => element.trim())
  return cmdArr.reduce((input, element) => {
    let arr = element.split(' ');
    return operations[arr[0]](input, arr[1]);
  }, null);

  // cmdArr.forEach(cmd => {
  //   const arr = cmd.trim().split(' ');
  //   operations[arr[0]]()
  // })

  // operations[arr[0]](null, arr[1]);
}




module.exports = syncPipe;