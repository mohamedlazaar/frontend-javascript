// creating teacher interface
interface Teacher {
    readonly firstName: string
    readonly lastName: string
    fullTimeEmployee: boolean
    yearsOfExperience?: number
    location: string
    [propName: string]: boolean | number | string | undefined
}
// adding teacher example
const teacher1: Teacher={
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'New York',
    contract: false
}
console.log(teacher1)
// extending the teacher class
interface Directors extends Teacher{
    numberOfReports: number
}
const director1: Directors={
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
}
console.log(director1)

// Printing Teachers
interface printTeacher{
    (firstName:string, lastName:string): string
}
const printTeacher: printTeacher = (firstName, lastName) => {
    return `${firstName} ${lastName}`
    }
 console.log(printTeacher('John', 'Doe'))

 // writing a class
interface StudentClassInterface{
    firstName: string
    lastName: string
    workOnHomework(): string
    displayName(): string
}
 class StudentClass {
    firstName: string
    lastName: string
    constructor(firstName:string, lastName:string){
        this.firstName = firstName
        this.lastName = lastName
    }
    workOnHomework(): string{
        return 'Currently working'
    }
    displayName(): string{
        return this.firstName
        }

 }
 const student1 = new StudentClass('John', 'Doe')
 console.log(student1.workOnHomework())
 console.log(student1.displayName())