
// # You're developing a system for scheduling advising meetings with students in a 
// # Computer Science program. Each meeting should be scheduled 
// # when a student has completed 50% of their academic program.
// # Each course at our university has at most one prerequisite that must be t
// # aken first. No two courses share a prerequisite. There is only one path through the program.
// # Write a function that takes a list of (prerequisite, course) pairs, and returns the name of the 
// # course that the student will be taking when they are halfway through their program. (If a track has an even number of courses, and therefore has two "middle" courses, you should return the first one.)
prereqs_courses1 = [
   ["Data Structures", "Algorithms"],
   ["Foundations of Computer Science", "Operating Systems"],
   ["Computer Networks", "Computer Architecture"],
 ["Algorithms", "Foundations of Computer Science"],
   ["Computer Architecture", "Data Structures"],
   ["Software Design", "Computer Networks"]
]

// # Software Design
// # Computer Networks
// # Computer Architecture
// # Data Structures
// # Algorithms
// # Foundations of Computer Science
// # Operating Systems


// # Sample input 2:
prereqs_courses2 = [
  ["Data Structures", "Algorithms"],
  ["Algorithms", "Foundations of Computer Science"],
  ["Foundations of Computer Science", "Logic"]
]
// # Sample output 2:
// #   "Algorithms"

function findMiddleCourse(arr){
    const hash = {}
    const array = []

    for(let i in arr){
        for(let j in arr){
            if(hash[arr[i][j]]){
                delete hash[arr[i][j]]
            }else{
                hash[arr[i][j]] = [i,j]
            }
        }
        delete hash[undefined]
    }

    for(let i in hash){
        if(hash[i][1]==="0"){
            array.push(i)
        }
    }

    let temp = array[0]
    let length = arr.length
    while(length>0){
        for(let i in arr){
            if (arr[i][0] === temp){
                array.push(arr[i][1])
                temp=arr[i][1]
            }
            }
        length-=1
    }
    return array.length%2===0 ? array[Math.floor(array.length/2)-1] : array[Math.floor(array.length/2)]
}
console.log(findMiddleCourse(prereqs_courses1))


