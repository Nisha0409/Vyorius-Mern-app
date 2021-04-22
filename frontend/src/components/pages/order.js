import React from "react"
import "./order.css"

function Order(props){
    var orders = [{
        name: "A",
        quantity: 2,
        date: "12-Feb-2021"
    },
    {
        name: "B",
        quantity: 5,
        date: "13-Feb-2021"
    }]
    function Delete(){
        const data = [...orders]
        

    }
    return (
        <>
        <center>
            <h2>Welcome {props.user}</h2>
            {/* <h3>Order Details </h3> */}
        </center>
            {/* {orders.map(details => <div>
                <center>
                    <p>Name : {details.name} | Quantity : {details.quantity}</p>
                    <button onClick={(e)=>Delete(e)}>Delete</button>
                </center>
            </div>)} */}
        </>
    )
}

export default Order

{/* <table>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Quantity</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>A</td>
                <td>12-Feb-2021</td>
                <td>20 
                    <button onClick={e => increment(e)}>+</button>
                    <button>-</button>
                </td>
            </tr>
            <tr>
                <td>B</td>
                <td>15-Feb-2021</td>
                <td>25</td>
                
            </tr>
            <tr>
                <td>C</td>
                <td>02-Mar-2021</td>
                <td>20</td>
                <td>Need to be done in database</td>
            </tr>
            <tr>
                <td>X</td>
                <td>25-Mar-2021</td>
                <td>30</td>
            </tr>
            <tr>
                <td>Y</td>
                <td>26-Mar-2021</td>
                <td>25</td>
            </tr>
            <tr>
                <td>Z</td>
                <td>30-Mar-2021</td>
                <td>15</td>
            </tr>
        </table> */}