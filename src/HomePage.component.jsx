import Student from "./Student"
let myImg = <img src="logo192.png" />
let myDate = new Date('1990-01-01')
function HomePage(props) {
    return (
        <div>
            <h1> welcome</h1>
            <h3>{props.name}</h3>
            <Student Fname="belay" Lname="netanio" date={myDate} pic={myImg} />
        </div>
    )
}
export default HomePage