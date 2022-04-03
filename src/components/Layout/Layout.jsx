import React from "react";
import data from "../../data.json";
import Opciones from "../Opciones/Opciones";
import Swal from "sweetalert2";
import "./layaout.css";
import Historia from "../Historia/Historia";
import Historial from "../Historial/Historial";



class Layout extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            contador:0,
            historial: [],
            seleccionPrevia: "",
        };
    }  

    componentDidMount = () => {
        const alerta = {
            title: "Bienvenidos a elige tu propia aventura",
            confirmButtonColor: "#000",
            background: "#bd82aa",
        };
        Swal.fire(alerta);
    };  

    handleClick=(e)=>{
        const id = e.target.id;  
        if(this.state.contador >= 7){ 
            this.reiniciar();           
        }else{            
            if(this.state.contador === 0 &&  id ==="A"){
                    this.setState({
                        contador: this.state.contador +1,
                        seleccionPrevia: id,
                    });
                }
                if(this.state.contador === 0 && id ==="B"){
                    this.setState({
                        contador: this.state.contador +2,
                        seleccionPrevia: id,
                    });
                }
                if(this.state.seleccionPrevia==="A" && id ==="A"){
                    this.setState({
                        contador: this.state.contador +2,
                        seleccionPrevia: id,
                    });
                }
                if(this.state.seleccionPrevia==="A" && id ==="B"){
                    this.setState({
                        contador: this.state.contador + 3,
                        seleccionPrevia: id,
                    });
                }
                if(this.state.seleccionPrevia==="B" && id ==="B"){
                    this.setState({
                        contador: this.state.contador + 2,
                        seleccionPrevia: id,
                    });
                }
                if(this.state.seleccionPrevia==="B" && id ==="A"){
                    this.setState({
                        contador: this.state.contador + 1,
                        seleccionPrevia: id,
                    });
                }
            } 
        };


    reiniciar = () => {
        const confirmar = {
            title: "Ya llegaste al final ¿querés volver a empezar?",
            background: "#bd82aa",
            showCancelButton: true,
            confirmButtonColor: "#000",
            cancelButtonColor: "#000",
            confirmButtonText: "Si",
            cancelButtonText: "No",
         //https://sweetalert2.github.io/#examples
        };
        Swal
            .fire(confirmar)
            .then((result) => {
            if (result.isConfirmed) {
        this.setState({ contador: 0, historial: [], seleccionPrevia: "" });
            }
        });
    };

    componentDidUpdate(prevPros, prevState){
        if(prevState.contador!== this.state.contador){
            this.setState({
            historial: [...this.state.historial, this.state.seleccionPrevia],
            });
        }
    };

    render(){
        const {contador, historial} = this.state;
        return(
            <div className="layout">
                <Historia 
                    historia = {data[contador].historia}
                    />
                <Opciones
                    opcionA={data[contador].opciones.a}
                    opcionB={data[contador].opciones.b}
                    functionClick={this.handleClick}
                />
                <Historial 
                    historial = {historial}        
                />
            </div>
        );
    };
};

export default Layout;

