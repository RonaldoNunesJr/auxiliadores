var waitForElement = function (condition, callback, timeEnd){

    timeEnd = timeEnd || 10000;

    function _condition () {

        if ( typeof condition === 'string' ) {
            return document.querySelectorAll(condition).length;
        } else {
            return condition();
        }     
            
    }


    var interval = setInterval(function () {

        if ( _condition() ) {

                clearInterval(interval);
                clearTimeout(timeout);

                if ( typeof callback === 'function' ) {

                callback();

                }

        }

    }, 200),
        timeout = setTimeout(function(){

            clearInterval(interval);
            clearTimeout(timeout);

        }, timeEnd);
}