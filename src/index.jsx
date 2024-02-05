import React from "react";
import ReactDOM from "react-dom/client";

class Name extends React.Component{
    constructor(){
        super()
        this.state = {
            name: "",
        
        }
    }

    setValue() {
        
        this.setState({

            name: "Gio",
        });

        window.alert(this.state.name);
    }

     render()  {
        return(
            <button type="button" onClick={ () => this.setValue()}>click</button>
        )
     }
}

const root=document.getElementById("root");
ReactDOM.createRoot(root).render(<Name />);

