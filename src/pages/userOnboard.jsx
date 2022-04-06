export const UserOnboard =()=>{
    const userNameHandler=(e)=> {
        if(e.key === 'Enter'){
            localStorage.setItem("userName", e.target.value)
            window.location.reload(false)
        }
    }
    return(
        <div>
            <h1>Hello, What's your name ?</h1>
            <h1><input type="text" onKeyPress={userNameHandler}/></h1>
        </div>
    )
}