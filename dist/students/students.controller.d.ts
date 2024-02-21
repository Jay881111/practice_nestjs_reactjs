import { StudentsService } from './students.service';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    getStudents(): Promise<import("./entity/students.entity").StudentsModel[]>;
    getOneStudent(id: number): Promise<import("./entity/students.entity").StudentsModel>;
    addStudent(name: string, age: number, process: number): Promise<{
        name: string;
        age: number;
        process: number;
    } & import("./entity/students.entity").StudentsModel>;
}
