import React, { Fragment } from 'react';


const Accueil = () => {
    const dogz = JSON.parse(localStorage.getItem('datas'));
    //let test =  (chiens!=="" && chiens.length > 0);
    let test = false;
    let testC = false;
    if(dogz){
        test = true;
    }
    
    if(test && dogz.length > 0){
        testC = true;
    }

    console.log(dogz);
    return (
        <Fragment>
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4">Des amis au poil !</h1>
                    <p className="lead">sélection de chiens</p>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-10">
                    <div className="row">
                        {testC ? dogz.map((chien, index) => {
                            return (
                                <div className="col-md-6" key={index}>
                                    <div className="card mb-3">
                                        <img className="card-img-top" src={process.env.PUBLIC_URL + '/images/'+ chien.image} width="190" alt=""/>
                                        <div className="card-body">
                                            <h5 className="card-title">{chien.race}</h5>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><i>couleur poil : </i>{chien.poil}</li>
                                                <li className="list-group-item"><i>pays d'origine : </i>{chien.origine}</li>
                                                <li className="list-group-item small">chien N°77{chien.id}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                        : "Aucun poilu à l'heure actuelle :( "
                    }
                    </div>
                </div>
                <div className="col-md-2" style={{backgroundColor:"dark"}}></div>
            </div>

        </Fragment>
        
    );
}


export default Accueil;
