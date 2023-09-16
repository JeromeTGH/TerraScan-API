
module.exports.log = (obj1=null, obj2=null, obj3=null, obj4=null, obj5=null) => {
    if(obj5 !== null)
        console.log("[" + (new Date).toLocaleString() + "] ", obj1, obj2, obj3, obj4, obj5);
    else if(obj4 !== null)
        console.log("[" + (new Date).toLocaleString() + "] ", obj1, obj2, obj3, obj4);
    else if(obj3 !== null)
        console.log("[" + (new Date).toLocaleString() + "] ", obj1, obj2, obj3);
    else if(obj2 !== null)
        console.log("[" + (new Date).toLocaleString() + "] ", obj1, obj2);
    else if(obj1 !== null)
        console.log("[" + (new Date).toLocaleString() + "] ", obj1);
    else
        console.log("[" + (new Date).toLocaleString() + "] nothing");
};
