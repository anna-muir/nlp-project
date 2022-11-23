function checkForName(formText) {
    
    if(formText === "") {
        //alert('Not valid input')
        return false
    }

    else {
        return true
    }

   
}

function validURL(url) {
    var realURL = require('valid-url');

    if(realURL.isUri(url)) {
        console.log('this is valid!');
        return true;
    }

    else {
        console.log('this is not valid')
        return false;
    }
}

export { checkForName }
export {validURL}
