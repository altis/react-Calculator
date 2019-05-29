import React from 'react';
import './calc.css'
class DisplayButton extends React.Component{
    render(){
        return(
            <div>
                <div>
                    {this.RenderButton('0')}
                    {this.RenderButton('1')}
                    {this.RenderButton('2')}
                    {this.RenderButton('3')}
                </div>
                <div>
                    {this.RenderButton('4')}
                    {this.RenderButton('5')}
                    {this.RenderButton('6')}
                    {this.RenderButton('7')}
                </div>
                <div>
                    {this.RenderButton('8')}
                    {this.RenderButton('9')}
                    {this.RenderButton('+')}
                    {this.RenderButton('-')}
                </div>
                <div>
                    {this.RenderButton('/')}
                    {this.RenderButton('*')}
                    {this.RenderButton('=')}
                    {this.RenderButton('AC')}
                </div>
            </div>

        )
    }
    RenderButton(i){
        return(
           // <button onClick={()=>this.HandleClickEvent(i)}> {i} </button>
            //
           // <button className="Button-Box" onClick={  i.charCodeAt(0)>48 && i.charCodeAt(0)<=57 ? ()=>this.HandleClickEvent(i):()=>this.Evaluate(i) }> {i} </button>
          <SquareButton
          value={i}
          //onClick={() => this.props.onClick(i)}
            onClick={i.charCodeAt(0)>=48 && i.charCodeAt(0)<=57 ? ()=>this.props.HandleDisplay(i):()=>this.props.Evaluate(i)}
        />
          )
    }
       
}
function SquareButton(props) {
    return (
      <button className="Button-Box" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }





export default DisplayButton;