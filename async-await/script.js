// async function
// It can be placed before a function, means function always return a promise.
// async function f(){
//   return 1;
// }

// f().then(console.log);

// await makes js wait until that promise returns its result.

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 3000)
  });

  let result = await promise; // wait until the promise resolves (*)
  
  console.log(result); // "done!"
}


f();

// Promise
function makeRequest(location){
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if(location === 'Google'){
      resolve('Google says hi');
    }else{
      reject('You can only talk to Google');
    }
  })
}

function processRequest(response){
  return new Promise((resolve, reject) => {
    console.log('Processing response');
    resolve(`Extra information + ${response} `)
  })
}

// makeRequest('Google').then((result) => {
//   console.log(result);
//   return processRequest(result)
// }).then((processResponse) => {
//   console.log(processResponse);
// }).catch(err => {
//   console.log(err);
// })

async function doWork(){
  try{
    const response = await makeRequest('Facebook');
    console.log(`Response Recieved`);
    const processedResponse = await processRequest(response);
    console.log(`Extra information + ${processedResponse} `)
  } catch(err) {
    console.log(err);
  }
}

doWork();