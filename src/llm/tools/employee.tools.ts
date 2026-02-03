import { Injectable } from '@nestjs/common';
import { EmployeeService } from '../../employee/employee.service';
import { CreateEmployeeDto } from 'src/employee/dto/create-employee.dto';

@Injectable()
export class EmployeeTools {
  constructor(private readonly employeeService: EmployeeService) {}

  async getEmployeeById(args: { employeeId: string }) {
    return this.employeeService.findOne(args.employeeId);
  }

  async listAllEmployees() {
    return this.employeeService.findAll();
  }

  async createEmployee(createEmployeeDto:CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  async updateEmployee(args: {
    employeeId: string;
    name?: string;
    position?: string;
    department?: string;
  }) {
    return this.employeeService.update(args.employeeId, args);
  }

  async deleteEmployee(args: { employeeId: string }) {
    return this.employeeService.remove(args.employeeId);
  }

  async searchEmployees(args: { query: string }) {
    return this.employeeService.search(args.query);
  }

  async getEmployeeCount() {
    return this.employeeService.getEmployeeCounts();
  }
}
