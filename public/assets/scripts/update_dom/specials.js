axios.get('/api/specialsBar').then(response => {
    const barSpecials = response.data;
    $('#barSpecialsGoHere').html(
        `<div class="bd-example background-carousel-1">
        <div id="carouselExampleCaptions-2" class="carousel slide" data-ride="carousel" data-interval="false">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
        </ol>
            <div class="carousel-inner">
                <h1 class="specialsTitle"><u>Daily Bar Specials</u></h1>
                <div class="carousel-item active">
                    <h1 class="specialsDay">${barSpecials[0].day}</h1>
                    <h2 class="specials">${barSpecials[0].special}</h2>
                </div>
                <div class="carousel-item">
                    <h1 class="specialsDay">${barSpecials[1].day}</h1>
                    <h2 class="specials">${barSpecials[1].special}</h2>
                </div>
                <div class="carousel-item">
                    <div class="row justify-content-center">
                        <div class="col-xs-12 col-lg-4">
                            <h1 class="specialsDay">${barSpecials[2].day}</h1>
                            <h2 class="specials">${barSpecials[2].special}</h2>
                        </div>
                        <div class="col-xs-12 col-lg-4 specialsImage" id="wednesdaySpecial">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row justify-content-center">
                        <div class="col-xs-12 col-lg-4">
                            <h1 class="specialsDay">${barSpecials[3].day}</h1>
                            <h2 class="specials">${barSpecials[3].special}</h2>
                        </div>
                        <div class="col-xs-12 col-lg-4 specialsImage" id="thursdaySpecial">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row justify-content-center">
                        <div class="col-xs-12 col-lg-4">
                            <h1 class="specialsDay">${barSpecials[4].day}</h1>
                            <h2 class="specials">${barSpecials[4].special}</h2>
                        </div>
                        <div class="col-xs-12 col-lg-4 specialsImage" id="fridaySpecial">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <h1 class="specialsDay">${barSpecials[5].day}</h1>
                    <h2 class="specials">${barSpecials[5].special}</h2>
                </div>
                <div class="carousel-item">
                    <div class="row justify-content-center">
                        <div class="col-xs-12 col-lg-4">
                            <h1 class="specialsDay">${barSpecials[6].day}</h1>
                            <h2 class="specials">${barSpecials[6].special}</h2>
                        </div>
                        <div class="col-xs-12 col-lg-4 specialsImage" id="sundaySpecial">
                        </div>
                    </div>
                </div>
            </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions-2" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions-2" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
    </div>`
    )
}).catch(err => console.log(err));

axios.get('/api/specialsFood').then(response => {
    const foodSpecials = response.data;
    if(foodSpecials.length > 0) {
        $('#foodSpecialsGoHere').html(
            `<div class="bd-example background-carousel-2">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel" data-interval="false">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
            </ol>
                <div class="carousel-inner">
                    <h1 class="specialsTitle"><u>Daily Food Specials</u></h1>
                    <div class="carousel-item active">
                        <h1 class="specialsDay">${foodSpecials[0].day}</h1>
                        <h2 class="specials">${foodSpecials[0].special}</h2>
                    </div>
                    <div class="carousel-item">
                        <h1 class="specialsDay">${foodSpecials[1].day}</h1>
                        <h2 class="specials">${foodSpecials[1].special}</span></h2>
                    </div>
                    <div class="carousel-item">
                        <div class="row justify-content-center">
                            <div class="col-xs-12 col-lg-4">
                                <h1 class="specialsDay">${foodSpecials[2].day}</h1>
                                <h2 class="specials">${foodSpecials[2].special}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row justify-content-center">
                            <div class="col-xs-12 col-lg-4">
                                <h1 class="specialsDay">${foodSpecials[3].day}</h1>
                                <h2 class="specials">${foodSpecials[3].special}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row justify-content-center">
                            <div class="col-xs-12 col-lg-4">
                                <h1 class="specialsDay">${foodSpecials[4].day}</h1>
                                <h2 class="specials">${foodSpecials[4].special}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <h1 class="specialsDay">${foodSpecials[5].day}</h1>
                        <h2 class="specials">${foodSpecials[5].special}</h2>
                    </div>
                    <div class="carousel-item">
                        <div class="row justify-content-center">
                            <div class="col-xs-12 col-lg-4">
                                <h1 class="specialsDay">${foodSpecials[6].day}</h1>
                                <h2 class="specials">${foodSpecials[6].special}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>`
        )
    }
}).catch(err => console.log(err));