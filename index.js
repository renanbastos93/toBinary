function convertStrDeciaml(str){
    var n = [];
    for(var i=0; i<str.length; i++){
        n.push(str.charAt(i).toString().charCodeAt(0));
    }
    return n;
};

function invertStrDeciaml(arr){
    return arr.map((item) => {
        return String.fromCharCode(item);
    }).toString().replace(/\,/gim, '');
}

function convertNumber(num){
    num = num.toString();
    var obj = {};
    if(num.indexOf('.') > -1){
        obj.float = Number(num.split('.')[1]).toString(2);
        obj.integer = Number(num.split('.')[0]).toString(2);
    }else{
        return Number(num).toString(2);
    }
    return obj;
}

function invertNumber(param){
    var txt = '';
    if(typeof param === 'object'){
        for(o in param){
             txt += (parseInt(param[o], 2))+'.';
        }
        txt = Number(txt.split('.')[0] + '.' + txt.split('.')[1]);
    }else{
        txt = parseInt(param, 2);
    }
    return txt;
}

function toBinary(param){
    var bin;
    if(!param){
        return new Error('must param is empty', param);
    }
    if(typeof param === 'string'){
        bin = convertStrDeciaml(param);
    }
    if(typeof param === 'number'){
        bin = convertNumber(param);
    }
    return bin;
}

function hexToStringUTF8(str){
    var result = "";
    str.split(" ").forEach(item => {
	    result += String.fromCharCode(parseInt(item, 16));
    });
    return decodeURIComponent(escape(result));
}

var arr = convertStrDeciaml('renan');
var txt = invertStrDeciaml(arr);
var float = convertNumber(123.456);
var float2 = convertNumber(123456);
var float3 = invertNumber(float);
var float4 = invertNumber(float2);

console.log(arr, txt, float, float2, float3, float4);

module.exports = toBinary;
