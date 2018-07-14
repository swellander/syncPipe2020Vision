
const operations = {
  addFromFile: (input, arg, fn)=> {
    if(typeof input === 'undefined'){
      return fn('input is required');
    }
    fs.readFile(arg, (err, result)=> {
      fn(err, input + result.toString()*1);
    });
  },
  set: (input, arg, fn) => {
    fn(null, arg*1);
  },
  add: (input, arg, fn)=> {
    if(typeof input === 'undefined'){
      return fn('input is required');
    }
    fn(null, input + arg*1);
  },
  mult: (input, arg, fn)=> {
    if(typeof input === 'undefined'){
      return fn('input is required');
    }
    fn(null, input * arg*1);
  }
};


const aSyncPipe = (str, fn) => {
  const cmdArr = str.split(' ')

  operations[cmdArr[0]](null, cmdArr[1], function (err, arg) {
    if (err) throw err;


  }

}






module.exports = aSyncPipe;