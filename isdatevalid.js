function isDateValid (date){ 
    return( datelength(date) && 
            spacing(date) && 
            validyear(date) &&
            validmonth(date) &&
            validday(date)
            );
};

function datelength(date){
    return date.length == 10;
}

function spacing(date){
   return date.charAt(2) == "." && date.charAt(5) =='.';
}

function validyear(date){
    let year = date.substr(6,4);
    return year.length === 4 && year >= '0000' && year <= '9999';
}
function validmonth(date){
    let month = date.substr (3,2);
    return month.length === 2 && month >= '01' && month <= '12';
}
function isleapyear(year){
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
function validday(date){
    let day = date.substr(0,2);
    let month = date.substr (3,2);
    let year = date.substr(6,4);

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