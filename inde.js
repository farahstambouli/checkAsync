
//task1
async function iterateWithAsyncAwait(arr){
    for (const value of arr) {
        console.log(value);
        await delay(); 
    }
}
function delay(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(),1000
        })
    })
}
//task2

async function awaitCall() {
    const data = await dataFromApi();
    console.log('Data from API:', data);
}

function dataFromApi() {
    return new Promise(resolve => {
        setTimeout(() => {
            const msg = 'This is mock data from the API';
            resolve(msg);
        }, 1000);
    });
}

//task3
//a)
async function awaitCall2() {
    dataFromApi().then(data => {
        console.log('Data from API:', data);
    }).catch(error =>{
        console.log('Failed to fetch data from API:', error)
    });
}

function dataFromApi() {
    return new Promise(resolve => {
        setTimeout(() => {
            const msg = 'This is mock data from the API';
            resolve(msg);
        }, 1000);
    });
}
//b)
const arr=[1,2,3]
async function chainedAsyncFunctions() {
    await iterateWithAsyncAwait(arr);
    await awaitCall();
    await awaitCall2();
}
async function iterateWithAsyncAwait(arr){
    for (const value of arr) {
        console.log(value);
        await delay(); 
    }
}
async function awaitCall() {
    const data = await dataFromApi();
    console.log('Data from API:', data);
    await delay();
}
async function awaitCall2() {
    dataFromApi().then(data => {
        console.log('Data from API:', data);
        
    }).catch(error =>{
        console.log('Failed to fetch data from API:', error)
    });await delay();
}
function delay() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}
//task4
async function concurrentRequests() {
    try {
        const [result1, result2] = await Promise.all([dataFromApi1(), dataFromApi2()]);
        console.log('Combined results:', result1, result2);
    } catch (error) {
        console.error('Error:', error);
    }
}
function dataFromApi1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Result from API 1');
        }, 1000);
    });
}


function dataFromApi2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Result from API 2');
        }, 1000);
    });
}
//task5