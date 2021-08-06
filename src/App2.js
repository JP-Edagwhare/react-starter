import UserProfile from "./UserCard";

function App(){
    const userData = {
        name: 'John Peter',
        age: 18,
        yearValue: 'years old',
        height: 1.80,
        heightValue: 'meters'
    }
    return(
        <div>
            <h1>USER PROFILE</h1>
            <UserProfile userInfo = {userData}/>
        </div>
    );
}

export default App2;
