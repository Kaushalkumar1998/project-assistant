import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<Employee>,
  ) {}

  async create(dto: CreateEmployeeDto): Promise<Employee> {
    return new this.employeeModel(dto).save();
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }

  async getEmployeeCounts(): Promise<number> {
    return this.employeeModel.countDocuments().exec();
  }

  async findOne(id: string): Promise<Employee> {
    const emp = await this.employeeModel.findById(id).exec();
    if (!emp) throw new NotFoundException('Employee not found');
    return emp;
  }

  async update(id: string, dto: Partial<CreateEmployeeDto>): Promise<Employee> {
    const updatedEmployee = await this.employeeModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();

    if (!updatedEmployee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }

    return updatedEmployee;
  }

  async remove(id: string) {
    return this.employeeModel.findByIdAndDelete(id).exec();
  }

  async search(query: string): Promise<Employee[]> {
    return this.employeeModel
      .find({
        $or: [
          { firstName: { $regex: query, $options: 'i' } },
          { lastName: { $regex: query, $options: 'i' } },
          { position: { $regex: query, $options: 'i' } },
          { email: { $regex: query, $options: 'i' } },
          { department: { $regex: query, $options: 'i' } },
        ],
      })
      .exec();
  }
}
