function light(value){
    var pic;
    if(value==0)
    {
    pic="Off.jpg";
    }
    else
    {
        pic="On.jpg";
    }
    document.getElementById('bulb').src=pic;
}