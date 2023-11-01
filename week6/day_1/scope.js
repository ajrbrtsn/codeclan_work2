var name ="Jill"

// var secretsFunction= Function (){
//     var pinCode =[0,0,0,0]
//     console.log("pinCode:", pinCode)
// }

// secretsFunction()
// console.log("pinCode outisde function", name);

// var filterNamesByFirstLetter = function(names,letter){
//     var filteredNames = []
//     for(let name of names){
//         if(name[0] === letter){
//             filteredNames.push(name)
//         }
//     }
//     console.log('name after loop', name);
//     return filteredNames
// }

// var students = ["Alice", "Bob", "Zoltan", "Gary", "Artem"]
// var filteredStudents = filterNamesByFirstLetter (students, "A")
// console.log("filteredStudents", filteredStudents);
// console.log 

let calculateEnergy = function(mass){
    const speedOfLight = 299792458
    return mass * speedOfLight ** 2
}

let energy = calculateEnergy(75)
console.log(energy);

const song = {
    title: 'Raspberry Beret',
    artist: 'prince'
}

console.log('song before mutation', song);
song.title = "When Doves Cry"
console.log('song after mutation', song);