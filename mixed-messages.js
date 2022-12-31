//take in a birthday
//get their Sun
//generate two random messages
    //2023 prediction 
    // advice for the year



const getSun= (day, month) => {
    if ( month === 'March' && day >=21 || month === 'April' && day <= 19){
        return "Aries"
    }else if ( month === 'April' && day >=20||month === 'May' && day <= 20 ){
        return "Taurus"
    }else if ( month === 'May' && day >=21||month === 'June' && day <= 20 ){
        return "Gemini"
    }else if ( month === 'June' && day >=21||month === 'July' && day <= 22 ){
        return "Cancer"
    }else if ( month === 'July' && day >=23||month === 'August' && day <= 22 ){
        return "Leo"
    }else if ( month === 'August' && day >=23||month === 'September' && day <= 22 ){
        return "Virgo"
    }else if ( month === 'September' && day >=23||month === 'October' && day <= 22 ){
        return "Libra"
    }else if ( month === 'October' && day >=23||month === 'November' && day <= 21 ){
        return "Scorpio"
    }else if ( month === 'November' && day >=22||month === 'December' && day <= 21 ){
        return "Sagitarius"
    }else if ( month === 'December' && day >=22||month === 'January' && day <= 19 ){
        return "Capricorn"
    }else if ( month === 'January' && day >=20||month === 'February' && day <= 18 ){
        return "Aquarius"
    }else if ( month === 'February' && day >=19||month === 'March' && day <= 20 ){
        return "Taurus"
    }

}



console.log (getSun(24, 'September'))
