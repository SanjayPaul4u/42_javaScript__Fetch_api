console.log("This tutorial is for fetch API");


// function getData(){
//     let url = '../03_js____file/42.txt';
//     console.log("GetData function started");
//     fetch(url).then((response)=>{
//         console.log("Insite first .then");
//         return response.text();
//     }).then((data)=>{
//         console.log("Insite second .then");
//         console.log(data);
//     })
// }

//GET📌📌
// function getData(){
//     let url = 'https://api.github.com/users';
//     fetch(url).then((response)=>{
//         return response.json();// WE CAN ALSO USE TEXT
//     }).then((data)=>{
//         console.log(data);
//         // data.forEach((element)=>{
//         //     console.log(element.login);
//         // })
//     })
// }
// getData();


//POST📌📌
function postData(){
    let url = '	https://jsonplaceholder.typicode.com/posts';
    let data = JSON.stringify({title: 'foo',body: 'bar',userId: 1,})// IF YOU NOT CONVERT IT IN STRING MEANS IF YOU NOT GIVE INVITED COMA THEN USE JSON.STRINGIFY
    let params = {
        method: 'POST',
        body:data,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    fetch(url,params).then(response=> response.json() //HERE WE USED ONE LINER ARROW FUNCTION
    ).then((data)=>{
        console.log(data);
    })
}
postData();
