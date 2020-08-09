import React from 'react';

const Liste = (props)=> {

    return (
        
        <table className="table table-striped">
            <thead className='thead-dark'>
                <tr>
                    <th>Id</th><th>Race</th><th>Poil</th><th>Pays d'origine</th><th>Image</th><th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.chiens ? props.chiens.map((chien, index) =>{
                    return(
                        <tr key={index}>
                            <td>{chien.id}</td>
                            <td>{chien.race}</td>
                            <td>{chien.poil}</td>
                            <td>{chien.origine}</td>
                            <td> 
                                <img src={process.env.PUBLIC_URL + '/images/'+chien.image} width="150" alt={chien.image}/>
                            </td>

                            <td>
                                <button className="btn btn-danger" 
                                onClick={() =>{if(window.confirm('supprimer définitivement ?'))
                                                {props.deletechien(index)
                                            };
                                        }}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    )
                })
                : "Aucune donnée"
                }
                
            </tbody>

        </table>

    );
    
}
 
export default Liste;
