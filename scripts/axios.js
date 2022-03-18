console.clear()


//axios
//.get("https://jsonplaceholder.typicode.com/posts")
//.then((res)=> console.log(res.data))
//.catch((err)=> console.log(err));

//.post("https://jsonplaceholder.typicode.com/posts", {
    //body: JSON.stringify({
      //title: 'foo',
      //body: 'bar',
     // userId: 1,
    //}),
//})
//.then((res)=> console.log(res.data))
//.catch((err)=> console.log(err))

////.put("https://jsonplaceholder.typicode.com/posts/1", {
  //body: JSON.stringify({
    //id: 1,
    //title: 'foo',
    //body: 'bar',
    //userId: 1,
  //}),
////})
//.then((res)=> console.log(res.data))
//.catch((err)=> console.log(err));

//.patch("https://jsonplaceholder.typicode.com/posts/1", {
  //body: JSON.stringify({
  //title: 'fooMAAAA',
  //}),
//})
//.then((res)=> console.log(res.data))
//.catch((err)=> console.log(err));

//.delete("https://jsonplaceholder.typicode.com/posts/1")
//.then((res)=> console.log(res.data))
//.catch((err)=> console.log(err));

///////

const makeRequest= async (config)=>{
    return await axios(config)
}

const deleteData= () =>{
    makeRequest({
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'delete',
    })
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err));
}
deleteData();

//const updateData= () =>{
    //makeRequest({
        //url: 'https://jsonplaceholder.typicode.com/posts/1',
        //method: 'put',
        //data: JSON.stringify({
            //id:1,
            //title: 'fooma',
            //body: 'bar',
            ///userId: 1,
        //})
    //})
    //.then((res)=> console.log(res))
   // .catch((err)=> console.log(err));
////}
//updateData()

//const createData= () =>{
    //makeRequest({
       // url: 'https://jsonplaceholder.typicode.com/posts',
       // method: 'post',
        //data: JSON.stringify({
            //title: 'foo',
            //body: 'bar',
            //userId: 1,
        ///})
    //})
    //.then((res)=> console.log(res))
    //.catch((err)=> console.log(err));
//}
//createData()

//const getData= () =>{
    //makeRequest("https://jsonplaceholder.typicode.com/posts")
    //.then((res)=> console.log(res))
    //.catch((err)=> console.log(err));
//}
//getData()