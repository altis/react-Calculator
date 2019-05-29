import React from 'react';
import DisplayButton from './calculator'
import './calc.css'


class CalculatorMain extends React.Component{
    constructor(){
        super();
        this.state = {
            current_display:' ',
            previous_display:'',
            operator:'',
            toggle_display:false,

        }
    }
    render(){
        return (  
        <div className="Outer-Box">
            {this.Display()}
            <DisplayButton
                HandleDisplay={(buttonvalue) => this.HandleDisplay(buttonvalue)}
                Evaluate={(buttonvalue) => this.Evaluate(buttonvalue)}
                
            />
        </div>
        )
        //(i) => this.HandleClick(i)
    }
    Display(){
        return(
           
            <div >
                <button className="Display-Button">{this.state.current_display} </button>
            </div>
            
            //<input type="text" name="name" defaultValue={this.state.curr_display_value}/>
           )
    }
    HandleDisplay(buttonvalue){

        if(this.state.toggle_display){
            this.setState({
            toggle_display:false,
            previous_display :this.state.current_display,
            current_display :buttonvalue, })
                console.log('Toggle')
                return
        }

        this.setState({
            current_display:this.state.current_display+buttonvalue,
        })
        
        console.log('From HD '+ buttonvalue);
        console.log('State Value '+this.state.current_display)

    }
    Evaluate(buttonvalue){
        let cdv = this.state.current_display
        let pdv = this.state.previous_display
        let op = this.state.operator
        let res =  eval(pdv+op+cdv)
        console.log('From Eval pdv' +pdv);
        console.log('From Eval cdv' +cdv);
        console.log('From Eval op' +op);
        // eslint-disable-next-line 
        {buttonvalue.charCodeAt(0)===61 ?
            
            
            this.setState({
                // eslint-disable-next-line 
                current_display:res,
            }) :
            
            this.setState({
               
                operator:buttonvalue,
                toggle_display:true,
            })
        
        }


    }
    
}

export default CalculatorMain;