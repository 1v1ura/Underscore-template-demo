var getMemberData = function () {
  var jqXHR = $.ajax({
    url: 'dummy.json',
    dataType: 'json'
  });
  
  return jqXHR.promise();
};

$(function () {
  getMemberData()
    .then(function(res){
      const compile = _.template($('#template').html(), {variable: 'data'});
      $('#hoge').html(compile(res));
    }, function(err) {
      console.error(`通信に失敗しました: ${err.statusText}`)
    });
});


