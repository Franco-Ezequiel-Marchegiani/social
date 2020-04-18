import React from 'react';
import {Link} from "react-router-dom";
import { render } from '@testing-library/react';

function Usuario(){

    return(
        <div> <Link to={'/'}>Back Home</Link> 
        <br></br>
        <br></br>
        <label>Nombre:
        <br></br>
               Cosme Fulanito
        </label>
        <br></br>
        <br></br>
        <label>Vive en:
        <br></br>
               Ciudad autónoma de Buenos Aires
        </label>
        <br></br>
        <br></br>
        <label>Foto de perfil</label>
        <br></br>
        <img className="foto" src="https://scontent.faep9-1.fna.fbcdn.net/v/t1.0-9/12809763_10154607659634392_1002423242048990198_n.jpg?_nc_cat=108&_nc_sid=2d5d41&_nc_ohc=DNfmqaC0V54AX9TtEE8&_nc_ht=scontent.faep9-1.fna&oh=e4d4d38a03b61c9230490ef324d0e014&oe=5EA0D03C"/>
        <p>Descripción del usuario:
        <br></br>
        <br></br>
           El mismo afirma que dormir bajo una cortina le da poderes sexuales! 
        </p>

        </div> 
        
    )
}

export default Usuario;