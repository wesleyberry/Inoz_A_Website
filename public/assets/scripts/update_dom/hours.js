axios.get('/api/hours').then(response => {
    const hours = response.data;
    for(var i = 0; i < hours.length; i++) {
        $('#hoursGoHere').append(`<p>${hours[i].day}: ${hours[i].hours}</p>`);
    }
}).catch(err => console.log(err));

$('.custom-select-1').on('click', function() {
    axios.put('/api/hours/' + this.value, (req, res) => {
    }).then(response => {
        if(response.data === 'OK') {
            console.log('Hours Changed!');
        }
    }).catch(err => console.log(err))
});

$('.custom-select-2').on('click', function() {
    axios.put('/api/hours/tuesdays/' + this.value, (req, res) => {
    }).then(response => {
        if(response.data === 'OK') {
            console.log('Tuesday hours Changed!');
        }
    }).catch(err => console.log(err))
});