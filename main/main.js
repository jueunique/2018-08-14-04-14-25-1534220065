module.exports = function main(s) {
    var n_1 = ["._.","...","._.","._.","...","._.","._.","._.","._.","._."];
    var n_2 = ["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"];
    var n_3 = ["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"];
    
    var s_1 = "";
    var s_2 = "";
    var s_3 = "";

    for(var i = s.length - 1; i>=0; --i){
        var j = parseInt(s[i]);
        if(i<s.length -1){
            s_1 = " " + s_1;
            s_2 = " " + s_2;
            s_3 = " " + s_3;
        }
        s_1 = n_1[j] + s_1;
        s_2 = n_2[j] + s_2;
        s_3 = n_3[j] + s_3;
    }

    s_1 += "\n";
    s_2 += "\n";
    s_3 += "\n";
    return s_1 + s_2 + s_3;
};