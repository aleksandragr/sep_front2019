import React from 'react';
import '../App.css';
import axios from 'axios';

//const b = window.location.pathname.split('/')[1];
//const b1 = b.split('=')[1];
const coi = localStorage.getItem("createorderid");

class SuccessBitcoin extends React.Component{

    componentDidMount(){
        axios.get('http://localhost:8051/msbitcoin/payment/getorder/' + coi)
        .then(response => 
            
            console.log(response)
        )
    }

    render(){

        return (


            <div className="Successful">
                Your payment has been successfully completed
                <div>
                    <img src={require('./successful.png')} alt="bitcoin" className="successimage"/>
                </div>

            </div>
        )
    }
}

export default SuccessBitcoin;