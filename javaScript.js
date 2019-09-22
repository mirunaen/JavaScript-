function phoneticLookup (val) {
    var result = "";

    var lookUP = {
        "alpha":"Adams",
        "bravo":"Boston",
        "miruna":"bed",
        "Kennedy":"moon",
        default:"nothing",
    };
    result=lookUP[val];
    return result;
};


console.log(phoneticLookup("kennedy"));
