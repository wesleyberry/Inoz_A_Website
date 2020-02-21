axios.get('api/bands').then(response => {
    // Get all bands
    const results = response.data;
    for(var i = 0; i < results.length; i++) {
        var month = results[i].month;
        switch(month) {
            case 0:
                month = 'January';
                break;
            case 1:
                month = 'February';
                break;
            case 2:
                month = 'March';
                break;
            case 3:
                month = 'April';
                break;
            case 4:
                month = 'May';
                break;
            case 5:
                month = 'June';
                break;
            case 6:
                month = 'July';
                break;
            case 7:
                month = 'August';
                break;
            case 8:
                month = 'September';
                break;
            case 9:
                month = 'October';
                break;
            case 10:
                month = 'November';
                break;
            case 11:
                month = 'December';
                break;
        }
        var time = results[i].start+results[i].end;
        switch(time) {
            case '1216':
                time = '12:00 PM - 4:00 PM';
                break;
            case '1822':
                time = '6:00 PM - 10:00 PM';
                break;
            case '1922':
                time = '7:00 PM - 10:00 PM';
                break;
        }
        $('#bandsGoHere').append(
            `<tr>
                <th scope="row">${results[i].band}</th>
                <td>${month} ${results[i].day}, ${results[i].year}</td>
                <td>${time}</td>
                <td>
                    <button type="button" class="btn btn-danger bandDelete" id=${results[i].id}>X</button>
                </td>
            </tr>`
        )
    }
}).catch(err => console.log(err));

// Deletes band
$(document).on('click', '.bandDelete', function() {
    const id = this.id;
    axios.delete('/api/bands' + id, (req, res) => {})
    .then(location.reload())
    .catch(err => console.log(err));
});

// Creates band
$('#submitBand').on('click', function() {
    event.preventDefault();
    var band = $('#bandName').val();
    var year = $('#year').val();
    var day = $('#day').val();
    var month = $('#month').val();
    var time = $('#time').val().split(' ');
    var start = time[0];
    var end = time[1];
    axios.post('/api/bands', {
        band,
        year,
        day,
        month,
        start,
        end
    }).then(() => location.reload())
    .catch(err => console.log(err));
});