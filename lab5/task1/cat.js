var name = 'Василий';
console.log ("новый котейка : "+name);
var birthday= new Date();
console.log (name+" родился: "+ birthday);
console.log('Васька мяукает');
var feelings =[
['vacuum cleaner', 'meow'], 
['beep','meow'],
['vacuum cleaner', 'run from here!!!!'], 
['beep','run from here!!!!'],
['ksksksks', 'meow'],
['ksksksks', 'goes slowly'],
['ksksksks', 'say mrrrrrrrr'],
['caressTheCat','meow'],
['caressTheCat','goes slowly'],
['caressTheCat','say mrrrrrrrr'],
];
while(feelings.length !=0){
  var randomFellings=parseInt(Math.random ()*feelings.length);
  var reaction =console.log ('catVasiliy heard '+feelings[randomFellings][0]);
  console.log ('catVasiliy todo '+feelings[randomFellings][1]);
  feelings.splice(randomFellings,1);
}
