exports.getDate=function(){

var today=new Date();
var options={
  weekday:"long",
  day:"numeric",
  month:"long"
};
return today.toLocaleDateString("en-US",options);
}

module.exports.getDay=getDay;

function getDay(){

var today=new Date();
var options={
  weekday:"long",

};
var day=today.toLocaleDateString("en-US",options);
return day;
}
