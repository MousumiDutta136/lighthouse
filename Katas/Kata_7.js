//Kata 7 - In the Air Tonight

const checkAir = function (samples, threshold) {
  // Code here!
let totalDirty = 0;
for( let i = 0; i < samples.length; i++){
  if(samples[i] === "dirty"){
    totalDirty += 1;    
 }
}

let percentDirty = 0;

if(totalDirty !== 0){
  if (totalDirty / samples.length > threshold){
    return "Polluted";
  }else if(totalDirty / samples.length < threshold){
    return "Clean";
  }
}
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));