axios.get('/api/hours').then(response => {
    const hours = response.data;
    for(var i = 0; i < hours.length; i++) {
        $('#hoursGoHere').append(`<p>${hours[i].day}: ${hours[i].hours}</p>`);
    }
}).catch(err => console.log(err));