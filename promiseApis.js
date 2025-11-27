/*
Promises APIs are crucial for interviews and everyday application development, especially when handling asynchronous operations like parallel API calls.
02:02 🔑 Promise.all handles multiple promises simultaneously, returning an array of results when all promises are fulfilled, and throwing an error if any promise fails.
06:38 🔑 If any promise in Promise.all fails, the entire operation fails, and an error is thrown immediately without waiting for other promises.
12:02 🔑 Promise.allSettled waits for all promises to settle (whether fulfilled or rejected) before returning an array of results or errors, making it suitable for scenarios where partial failures are acceptable.
16:57 🔑 Promise.race returns the result of the first settled promise, whether it's success or failure, making it ideal for scenarios where the fastest response is required.
21:52 🔑 Promise.any is similar to Promise.race but waits for the first successful promise rather than the first settled one, making it suitable for scenarios where success is prioritized over speed.
22:33 🔍 Promise.any returns the result of the first successful promise and ignores subsequent failures, waiting for success.
23:55 🏁 Promise.any collects errors if all promises fail and returns an aggregated error array.
27:05 🔄 Promise.all returns an array of all results when all promises succeed, waiting for all to finish.
28:40 🛠 Promise.allSettled waits for all promises to settle (succeed or fail) before returning results, ensuring all promises are accounted for.
31:18 🏎 Promise.race returns the result of the first settled promise, whether success or failure, racing to return the fastest result.
43:54 📝 Promise status can be checked for rejection along with the reason for rejection, providing clarity in handling errors.
44:21 🚀 Promise.race returns the result of the first settled promise, whether it's a success or failure, regardless of the order in which promises are fulfilled.
45:59 💡 Explaining concepts in interviews requires not only understanding but also the ability to articulate ideas clearly, which is often a stumbling block for many candidates.
46:13 🔑 Promise.race resolves to the value/error of the first settled promise, regardless of success or failure, emphasizing the importance of understanding terminology in the Promise world.
48:17 📚 Familiarity with Promise terminology like "settled," "resolved," "rejected," "fulfilled," and "rejected" is crucial for effectively working with Promise APIs.
49:56 📝 Promise.any waits for the first settled promise, and if it's a success, returns the result, ignoring subsequent rejections until a success occurs.
52:25 📊 When all promises fail with Promise.any, it results in an "aggregate error," which consolidates all the errors encountered during execution.
54:14 🛠 Handling aggregate errors in Promise.any involves accessing the errors in an array format, allowing for comprehensive error management and analysis.

*/

//Promise.all

const p1 = new Promise(function(resolve,reject){
    // setTimeout(()=>resolve("P1 Success"),3000)
    setTimeout(()=>reject("P1 Failed"),3000)
});
const p2 = new Promise(function(resolve,reject){
    // setTimeout(()=>resolve("P2 Success"),1000)
    setTimeout(()=>reject("P2 Failed"),1000)
});
const p3 = new Promise(function(resolve,reject){
    // setTimeout(()=>resolve("P2 Success"),2000)
    setTimeout(()=>reject("P3 Failed"),1000)
});
// Promise.all([p1,p2,p3])
// Promise.allSettled([p1,p2,p3])
// Promise.race([p1,p2,p3])
Promise.any([p1,p2,p3])
.then(res=>console.log(res))
.catch(err => {
    console.error(err)
    console.log(err.errors)
})