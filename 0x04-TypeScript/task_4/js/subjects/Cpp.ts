namespace Subjects {
    export interface Teacher{
        experienceTeachingC?: number
    }
    export class Cpp extends Subject{
        public getRequirements(): string {
            return "Here is the list of requirements for Cpp"
        }
        public getAvailableTeacher():string{
            if(this.teacher && this.teacher.experienceTeachingC > 0 ){
                return `Available Teacher : ${this.teacher.firstName}`;
            }else{
                return "No available teacher"
            }
        }
    }
}