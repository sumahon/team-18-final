function deleteLocalStorage(str){
    if(str == "yes"){
        localStorage.clear()
        console.log("local storage has been delete")
        console.log(localStorage)
        
    }
    else
    {
        console.log("didn't delete")
    }

}