import React from 'react'
import { useHistory } from 'react-router-dom'

export default function GendersBanner(props) {
    const history = useHistory();
    function albumgender(id) {
        history.push("/albumbygender/" + id)
    }
    return (

        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 gender-component" onClick={() => albumgender(props.gender.id)}>
            <div className="offset-xl-1 col-xl-10">
                <div className="gender">
                    <div className="album-text">
                        <h5>{props.gender.name}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}