//Kata 11 - Bouncy Castles
//Formula for calculating Sphere:V = ⁴⁄₃πr³. In this equation, "V" represents volume and "r" represents the radius of the sphere.
// Formula for calculating Cone:V=1/3(πr2h)
// Formula for calculating Prism:V = height * width * depth

// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // Code here!
  return (4 / 3) * PI * radius * radius * radius;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // And here!
  return (1 / 3) * PI * radius * radius * height;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!
  return height * width * depth;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // Code here? Yup!
  let total = 0;
  for(const solid of solids){
    if(solid.type === "sphere"){
      total += sphereVolume(solid.radius);
    }else if(solid.type === "sphere"){
      total += sphereVolume(solid.radius);
    }else if(solid.type === "cone"){
      total += coneVolume(solid.radius, solid.height);
    }    
  }
  return total;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);