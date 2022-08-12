function is_num(str)
{
        if((str[0] != '-') && (str[0] < '0' || str[0] > '9')) {
                return false;
        }
        for(i = 1; i < str.length; i++) {
                if(str[i] < '0' || str[i] > '9') {
                        return false;
                }
        }
        return true;
}

//this function finds the gcd of 2 numbers given as <str1> and <str2>
//and gives the <answer> the appropriate value
function gcd(str1, str2) {
        if(!is_num(str1) || !is_num(str2)) {
                return  "mistake";
        }
        else{
                a = Math.abs(parseInt(str1))
                b = Math.abs(parseInt(str2))
                if (a == 0) {
                        return str2;
                }else if (b == 0) {
                        return str1;
                }else {
                        while (a != b) {
                                if (a > b)
                                        a = a - b;
                                else
                                        b = b - a;
                        }
                        return a.toString();

                }
        }
}

module.exports = {is_num, gcd}
