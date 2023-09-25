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

    render(){
        const count = this.state.value;
        return(
            <div className='count-container'>
                <h1 className='head'>Counter</h1>
                <p className='para'>{count}</p>
                <div className='btn-container'>
                <button className='btn' onClick={this.onIncrement}>Increase</button>
                <button className='btn' onClick={this.onDecrement}>Decrease</button>
                </div>
            </div>
        )
    }
}

export default Count;