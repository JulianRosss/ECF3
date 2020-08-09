import React, {Component, Fragment} from 'react';
import Liste from './Liste';
import Ajout from './Ajout';

class Admin extends Component {
    state = { 
        datas:[
            {id:1, race:"Berger Australien", poil:"tricolore", origine:"USA", image:"berger.jpg"},
            {id:2, race:"Braque", poil:"gris", origine:"Allemagne", image:"braque.jpg"},
            {id:3, race:"Dalmatien", poil:"blanc à tâches noires", origine:"Croatie", image:"dalmat.jpg"},
            {id:4, race:"Tamaskan", poil:"gris", origine:"Finlande/Royaume uni", image:"tamaskan.jpg"},
            {id:5, race:"Setter Irlandais", poil:"feu", origine:"Irlande", image:"setter.jpg"}
        ]
    }

    componentDidMount =()=>{
        if(!localStorage.getItem('datas')){
            localStorage.setItem('datas',JSON.stringify(this.state.datas));
        }else{
            let chiens2 = JSON.parse(localStorage.getItem('datas')); 
                this.setState({datas:chiens2});
        }

    }
    
    removeChien = (index) => {
        console.log(index);
        const {datas} = this.state
        this.setState({
            datas: datas.filter((d, i) => {
                return i!==index    
            })
        }, function(){
            localStorage.setItem('datas',JSON.stringify(this.state.datas));
        })
        
    }

    addChien = (newChien) => {
        if(this.state.datas.length !== 0){
        newChien.id = (this.state.datas[this.state.datas.length -1].id +1)
            }
        this.setState({datas: [...this.state.datas, newChien]},function(){
            localStorage.setItem('datas',JSON.stringify(this.state.datas));
        })
                 
    }

    render() { 
        return (
            <Fragment>
                <h1 className="bg-success text-dark text-center">Administration</h1>
                <Ajout ajouter = {this.addChien} />
                <Liste deletechien = {this.removeChien} chiens = {this.state.datas} />
            </Fragment>
        )
    }

}
 
export default Admin;
