//take in a birthday
//get their Sun
//generate two random messages
    //2023 prediction 
    // advice for the year



var getSun= (function (day, month) {
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

})(24, 'September');

const getQuote = () => {
    number= Math.floor(Math.random()*5)
    console.log (number)
    if (number === 1){
        return "When you have a dream, you've got to grab it and never let go. — Carol Burnett"
    }if (number === 2){
        return "Nothing is impossible. The word itself says 'I'm possible! — Audrey Hepburn"
    } if (number === 3) {
        return "The bad news is time flies. The good news is you're the pilot. — Michael Altshuler"
    } if (number === 4){
        return "Life has got all those twists and turns. You've got to hold on tight and off you go. — Nicole Kidman"
    } if (number === 5) {
        return "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you. — Ralph Waldo Emerson"
    } 
        
}


function getMonthMessage() {
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'july', 'August', 'September', 'November', 'December'];
    randMonth = Math.floor(Math.random() * months.length);
    if (randMonth === 0) {
        console.log('January will be full of new adventures ' + getSun);
    } if (randMonth === 1) {
        console.log('February is all about creating systems that set you up for sucess ' + getSun);
    } if (randMonth === 2) {
        console.log('March means tuning into your intuition ' + getSun);
    } if (randMonth === 3) {
        console.log('April means charging forward towards your goals. Do not hold back ' + getSun);
    } if (randMonth === 4) {
        console.log('When May comes, take some time to smell the roses ' + getSun);
    } if (randMonth === 5) {
        console.log('June will be a time of celebration.  Connect with good friends and make memories ' + getSun);
    } if (randMonth === 6) {
        console.log('With the sunshine of July comes natures abundance, soak in every blessing that comes your way ' + getSun);
    } if (randMonth === 7) {
        console.log('August is all about stepping into your royal robes ' + getSun + ' where are you ready to shine?');
    } if (randMonth === 8) {
        return 'After a wild summer September is time to get your ducks in a row  ' + getSun + ' Plan out how you are going to complete your final 2023 goals';
    } if (randMonth === 9) {
        return 'October is your month ' + getSun + ' take stock of your harvest from this past year. What are you most proud of?';
    } if (randMonth === 10) {
        console.log('November will be all about gratitude and blessings' + getSun);
    } if (randMonth === 11) {
        console.log('Savor the year past in December, and get ready for a fabulous New Year' + getSun);
    }

}





// getMonthMessage();
console.log(getQuote)
