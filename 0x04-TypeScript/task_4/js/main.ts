/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

// Create and export constants for subjects
export const cpp = new Subjects.Cpp()
export const java = new Subjects.Java()
export const react = new Subjects.React()

// Create and export a teacher object
export const cTeacher: Subjects.Teacher = {
  firstName: 'Miftah',
  lastName: 'Adem',
  experienceTeachingC: 10,
}

// Cpp Subject
console.log('C++')
cpp.setTeacher(cTeacher)
console.log(cpp.getRequirements())
console.log(cpp.getAvailableTeacher())

// Java Subject
console.log('Java')
java.setTeacher(cTeacher)
console.log(java.getRequirements())
console.log(java.getAvailableTeacher())

// React Subject
console.log('React')
react.setTeacher(cTeacher)
console.log(react.getRequirements())
console.log(react.getAvailableTeacher())