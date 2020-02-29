import React from 'react'

export default function AlbumBanner() {
    return (
        <div class="container">

            <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">

                <div class="controls-top">
                    <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fa fa-chevron-left"></i></a>
                    <a class="btn-floating" href="#multi-item-example" data-slide="next"><i class="fa fa-chevron-right"></i></a>
                </div>

                <ol class="carousel-indicators">
                    <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
                    <li data-target="#multi-item-example" data-slide-to="1"></li>
                    <li data-target="#multi-item-example" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner" role="listbox">
                    <div class="row justify-content-center">
                        <img class="col-xs-11 col-sm-10 col-md-8 col-lg-7 col-xl-7 img-album" src="assets/image/tupac.jpg" alt="tupac"></img>
                        <div class="col-xs-11 col-sm-10 col-md-8 col-lg-7 col-xl-7 album">
                            <div class="album-text">
                                <h3>All Eyez On Me</h3>
                                <p>Titre : I Ain't Mad At Cha</p>
                                <p>Artiste : Tupac Shakur</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
