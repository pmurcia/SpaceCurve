String.prototype.startsWith = function(str){
    return this.slice(0, str.length) == str;
};

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

String.prototype.contains = function(str){
    return this.indexOf(str) != -1;
};

//*******************************
// Get Keys from a hash
//*******************************
Object.prototype.keys = function(){
    var ret=[],p;
    for(p in this) if(Object.prototype.hasOwnProperty.call(this,p)) ret.push(p);
    return ret;
}

//*******************************
// Hash helpers
//*******************************
Object.prototype.keys = function(){
    var ret=[],p;
    for(p in this) if(Object.prototype.hasOwnProperty.call(this,p)) ret.push(p);
    return ret;
}

Object.prototype.key = function(o){
    var ret=[],p;
    for(p in this) if(this[p] == o) ret.push(p);
    return ret;
}

//*******************************
// Array Helpers
//*******************************
Object.prototype.first = function(){ return this[0]; }
Object.prototype.last = function(){ return this[this.length-1]; }
Object.prototype.remove = function(o){ 
    var i = this.indexOf(o);
    return (i >= 0)? this.splice(i, 1)[0] : undefined;
}