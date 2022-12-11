function handleQuery(event){
    event.preventDefault();
    const movieInput = document.getElementById(search);
    const query = movieInput.value;

    
    fetch(`http://localhost:3000/films/search/title?q=${query}`,{
        method:'GET',
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json"
        }



    })
    .then((res) => res.json())
    .then((data) => console.log(data))


}