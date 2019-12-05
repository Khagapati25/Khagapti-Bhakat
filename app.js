var demo=document.getElementById("demo");

function GetLocation()
{
    if(window.navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition();
        }
    else
        {
            demo.innerHTML = 'Geo location is not supported';
        }
}

function ShowFunction()
{
    

function ShowPosition(position)
{
    demo.innerHTML = 'lattitude is 〽️' ${position.coords.lattitude} 
    'longitude is 〽️' ${position.coords.longitude}
    ;
}
}