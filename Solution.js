var rotateString = function(s, goal) {
    if(s.length != goal.length){
        return false;
    }
    else
    return (s + s).includes(goal);;
};
