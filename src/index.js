// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    console.log(currency); 
    var obj = {}; 
    var x,y
    
    if (currency <=0){
    obj = {};
    }
    else if (currency >10000){
    obj = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else{
    if (currency >=50) {
    x = Math.floor(currency / 50);
    obj.H = x;
    }
    y = currency%50
    currency = y;
    if(currency >=25) {
    var x = Math.floor(currency / 25);
    obj.Q = x;
    }
    y = currency%25
    currency = y;
    if(currency >=10) {
    var x = Math.floor(currency / 10);
    obj.D = x;
    }
    y = currency%10
    currency = y;
    if(currency >=5) {
    var x = Math.floor(currency / 5);
    obj.N = x;
    }
    y = currency%5
    currency = y;
    if(currency >=1) {
    var x = currency / 1;
    obj.P = x;
    }
    }//else...
    console.log(obj);
    return obj;
    }
    
    

