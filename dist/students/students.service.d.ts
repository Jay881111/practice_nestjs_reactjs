import { StudentsModel } from './entity/students.entity';
import { Repository } from 'typeorm';
export declare class StudentsService {
    private readonly studentsRepository;
    constructor(studentsRepository: Repository<StudentsModel>);
    getAllStudents(): Promise<StudentsModel[]>;
    getOneStudent(id: number): Promise<StudentsModel>;
    addStudent(name: string, age: number, process: number): Promise<{
        name: string;
        age: number;
        process: number;
    } & StudentsModel>;
}
