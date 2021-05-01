// function getComment() {

//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//         .then(res => {
//             if (res.ok) {
//                 console.log(res);
//                 return res.json();
//             }
//             else {
//                 throw new Error("wrong data");
//             }
//         })
//         .then(json => {
//             console.log(json[0]);
//             return Promise.all(json[0], json[1], json[2]);
//         }

//         );

//     return res;

// }