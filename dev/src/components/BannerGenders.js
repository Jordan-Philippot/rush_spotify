import React from 'react'
import { useHistory } from 'react-router-dom'

export default function GendersBanner(props) {
    const history = useHistory();
    function albumgender(id) {
        history.push("/albumbygender/" + id)
    }
    return (

        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 gender-component" onClick={() => albumgender(props.gender.id)}>
            <div class="offset-xl-1 col-xl-10">
                <div class="gender">
                    <div class="album-text">
                        <h5>{props.gender.name}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}