$.ajax({url:'https://api.ipify.org/?format=json',sucess:function(data){document.getElementById('ipaddress').innerHTML=data.ip;}});
