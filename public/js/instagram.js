var token = '3139185.369b559.7e7dacf5e1c94a409b8939609f337255',
    userid = 3139185;


$.ajax({
  url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent/?access_token=' + token,
  dataType: 'jsonp',
  type: 'GET',
  success: function(naam) {
    for(var x in naam.data) {
      $('#instagram').append('<a target="_blank" href="' + naam.data[x].link + '"><img id="igpix" src="'+naam.data[x].images.standard_resolution.url+'">');
      // $('#instagram').append(naam.data[x].likes.count);
    }

  },
  error: function(data) {
    console.log(data);
  }
});
