/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
    var verified = [false,false,false,false]
    var l = password.length

    // It has at least 8 characters.
    if(l < 8){return false}

    for(var i = 0; i < l; i++){
        var c = password[i]

        // It contains at least one lowercase letter.
        var bool0 = c.charCodeAt(0) > 96 && c.charCodeAt(0) < 123
        if(bool0){verified[0] = true}

        // It contains at least one uppercase letter.
        var bool1 = c.charCodeAt(0) > 64 && c.charCodeAt(0) < 91
        if(bool1){verified[1] = true}

        // It contains at least one digit.
        var bool2 = c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58
         if(bool2){verified[2] = true}

        // It contains at least one special character. 
        var bool3 = "!@#$%^&*()-+".includes(c)
         if(bool3){verified[3] = true}

        // It does not contain 2 of the same character in adjacent positions 
        var bool4 = c == password[i-1] || ""
        if(bool4){return false}
    
    }

    return !verified.includes(false)
};