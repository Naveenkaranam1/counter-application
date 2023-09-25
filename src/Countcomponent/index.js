import {Component} from 'react';
import './index.css';


class Count extends Component{
    state = {value:0};

    onIncrement = ()=>{
        this.setState((prevState)=> ({value: prevState.value + 1}));
    }

    onDecrement = ()=>{
        this.setState((prevState)=> ({value: prevState.value - 1}));
    }

    colorChange = ()=>{
        const {value} = this.state;
        let counterValue;
        if(value < 0){
            counterValue = <p className='negitive-count para'>{value}</p>
        }else if(value > 0){
            counterValue = <p className='postive-count para'>{value}</p>
        }
        return counterValue;
    }

    render(){
        const {value} = this.state;
        return(
            <div className='count-container'>
                <h1 className='head'>Counter</h1>
                {value === 0 ? <p className='para'>{value}</p> : this.colorChange()}
                <div className='btn-container'>
                <button className='btn' onClick={this.onIncrement}>Increase</button>
                <button className='btn' onClick={this.onDecrement}>Decrease</button>
                </div>
            </div>
        )
    }
}

export default Count;