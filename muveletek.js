function square(a){
    a = parseFloat(a);
    return 6*a*a;
}
function volume(a){
    a = parseFloat(a);
    return a*a*a;
}
function calc(age){
    age = parseFloat(age);
    var szakasz ="";
    if(age>=0 && age<=1){
        szakasz = "csecsemő";
        return szakasz;
    } else if(age>=2 && age<=18){
        return "gyerek";
    } else if (age>=19 && age<=64){
        return "felnőtt";
    } else if (age>=65){
        return "idős";
    }
     
}
