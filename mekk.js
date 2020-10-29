function isDateValid (dato){
    return( textlength(dato) && 
            dots(dato) && 
            validyear(dato) &&
            validmonth(dato) &&
            isleapyear(year) &&
            validday(dato)
            );
};

function textlength(dato){
    return dato.length == 10;
}

function dots(dato){
   return dato.charAt(2) == "." && dato.charAt(5) =='.';
}

function validyear(dato){
    var year = dato.substr(6,4);
    return year.length === 4 && year >= '0000' && year <= '9999';
}
function validmonth(dato){
    var month = dato.substr (3,2);
    return month.length === 2 && month >= '01' && month <= '12';
}
function isleapyear(year){
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
function validday(dato){
    var day = dato.substr(0,2);
    var month = dato.substr (3,2);
    var year = dato.substr(6,4);

    if(month == '02' && day !== '29'){
        return day.length === 2 && day >= '01' && day <= '28';
    } else if(month == '02' && day == '29' && isleapyear(year)) {
        return day.length === 2 && day >= '01' && day <= '29';
    } else if(month == '01' || month == '03' || month == '05' || month == '07' || month == '08' || month == '10' || month == '12'){
        return day.length === 2 && day >= '01' && day <= '31';
    } else if(month !== '02') {
        return day.length === 2 && day >= '01' && day <= '30';
    } else {
        return false;
    }
}

// 01, 03, 05, 07, 08, 10, 12
/*function isDateValid (dato){
    return( textlength(dato) && 
            dots(dato) && 
            validyear(dato) &&
            validmonth(dato) &&
 //           isleapyear(year) &&
            validday(dato)
            );
};

function textlength(dato){
    return dato.length == 10;
}

function dots(dato){
   return dato.charAt(2) == "." && dato.charAt(5) =='.';
}

function validyear(dato){
    var year = dato.substr(6,4);
    return year.length === 4 && year >= '0000' && year <= '9999';
}
function validmonth(dato){
    var month = dato.substr (3,2);
    return month.length === 2 && month >= '01' && month <= '12';
}

function validday(dato){
    var day = dato.substr(0,2);
    var month = dato.substr (3,2);
    var year = dato.substr(6,4);
    var feb = isleapyear(year) && month == '02' && day == '29'
    //var mth30 = month === '04' || month === '06' || month === '09' || month === '11' && day >='01' && day <= '30';
    var mth31 = month != '02' && !mth30 && day >= '01' &&  day <= '31';
    isleapyear(year);
    if (day.length === 2 && day >= '01' && day <= '28') {
     return true;
    } else if (feb) {
        return true;
    } else if (mth30) {
        return true;
    } else if (mth31) {
        return true;
    }
    else {
        return false;
    }
}

function isleapyear(year){
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}*/