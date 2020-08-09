import React, { Component, Fragment } from 'react';


class Ajout extends Component {
    state = {  }
    
    initchien = {
        id:1,
        race: "",
        poil: "",
        origine: "",
        image: ""
    }
    state = this.initchien
    
    modifChamp = (e) =>{
        const {name, value} = e.target
        this.setState({[name]:value})
    }

    envoyer = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.ajouter(this.state);
    }
    render() { 
        const {race, poil, origine, image} = this.state
        return ( 
            <Fragment>

            <div className="text-right">
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#myModal">Ajouter</button>
            </div>

            <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Et un de plus !</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="race">Race</label>
                                <input type="text" onChange={this.modifChamp} value={race} className="form-control" placeholder="Entrez la race" id="race" name="race"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="poil">Poil</label>
                                <input type="text" onChange={this.modifChamp} value={poil} className="form-control" placeholder="Entrez le poil" id="poil" name="poil"/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="origine">Origine</label>
                                <input type="text" onChange={this.modifChamp} value={origine} className="form-control" placeholder="Entrez le pays d'origine" id="origine" name="origine"/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="image">Image</label>
                                <input type="img" onChange={this.modifChamp} value={image} className="form-control" placeholder="Chargez l'image" id="image" name="image"/>
                            </div>
                            <button type="button" onClick={this.envoyer} className="btn btn-primary" data-dismiss="modal">Ajouter</button>
                            <br/><br/>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            
            </Fragment>
        );
    }
}
 
export default Ajout ;
