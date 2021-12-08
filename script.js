$(document).ready(function() {
    $("#but").click(function(){
    var pl=document.getElementById("city").value;
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q="+pl+"&units=metric&appid=3df3887e7524c268471ce586570047e2"
      }).done(function(data) {
          console.log(data)
          $(".cityname").html(data.name)
          $(".temp").html(data.main.temp)
      });
      if(pl=="")
    {
        alert('Enter a city name');
    } else{
        alert('You entered the city named: '+pl);
    }
    });
})
