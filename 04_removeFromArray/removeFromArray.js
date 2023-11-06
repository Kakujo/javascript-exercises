const removeFromArray = function(a,...toRemove) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < toRemove.length; j++) {
            if (a[i] === toRemove[j]) {
                a.splice(i,1);
                i--;
            }
            
        }
            
    }
    return a;
};


// Do not edit below this line
module.exports = removeFromArray;
