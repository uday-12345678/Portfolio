export default function Usercard({name,email}){
    return(
        <div className="user-card">
            <h2>Hello,My name is {name}</h2>
            <p>If any issues contact me on {email}</p>
        </div>
    );
}