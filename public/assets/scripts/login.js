$('#submitCredentials').on('click', function() {
    event.preventDefault();
    var name = $('#exampleInputEmail1').val();
    var password = $('#exampleInputPassword1').val();
    axios.post('/api/users', {
        name,
        password
    }).then(response => {
        if(response.status === 200) {
            window.location.assign('/admin');
        } 
    })
    .catch(() => alert(
        `Username and Password do not match our credentials. 
Please Try Again`
        ));
});

$('#submitSignUp').on('click', function() {
    event.preventDefault();
    var name = $('#exampleInputEmail1').val();
    var password = $('#exampleInputPassword1').val();
    axios.post('/api/users/signup', {
        name,
        password
    }).then(response => response.json(response))
    .catch(err => console.log(err));
});

$('#logout').on('click', function() {
    event.preventDefault();
    axios.get('/logout/')
    .then(() => window.location.assign('/login'))
    .catch(err => console.log(err));
});