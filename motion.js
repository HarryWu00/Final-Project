var exports = module.exports = {};

//use this prototype to create the other functions
exports.distance = function(v,t){
    let d = v*t;
    return d;
};

exports.distance = function(a,v,t){
    let d = 0.5*a*t*t+v*t;
    return d;
}

exports.velocity = function(d,t){
    let v = d/t;
    return v;
}

exports.velocity = function(a,v,t){
    let v = (d-0.5*a*t*t)/t
    return v;
}

exports.time = function(d,v){
    let t = d/v;
    return t;
}

exports.time = function(){
    let t = (Vf-Vi)/a;
    returm t;

    }
}


exports.acceleration = function(){}



missing second velocity, second time, and acceleration
