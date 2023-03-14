//2023.03.07
function Car(props) {
    return (
        <div>
            [{props.number}] { props.brand}  {props.price}  {props.adv}
        </div>); }
    export default function Garage(){
        const cars = [
        {id:1, number:1,brand: "GRANDEUR", price:4500,adv:"Graceful design"},
        {id:2, number:2,brand: "BMW", price:7800,adv:"Functional of high level"},
        {id:3, number:3,brand: "SONATA", price:3000,adv:"Low Price"},
        {id:4, number:4,brand: "BENZ", price:8000,adv:"design"},
        {id:5, number:5,brand: "GENESIS", price:6700,adv:"Popular Car"} ];
        return (
    <div>
    <h1>Car List</h1>
    {cars.map((car) => <Car key={car.id} number={car.number} brand={car.brand} price={car.price} adv={car.adv}/>)}
    </div> ); 
}

// function Student(props){
//     return <div>
//         <h2>my name is {props.student.name}</h2>
//         <h2>my school is {props.student.school}</h2>
//     </div>
// }
// function University(){
//     const info={name:"eunryeong",school:"Gachon"}
//     return (
//         <Student student={info}/>
//     )
// }

// export default University;