import { EmployeeTools } from './tools/employee.tools';

export type ToolHandler = (args: any) => Promise<any>;

export function createToolRegistry(employeeTools: EmployeeTools) {
  return {
    getEmployeeById: (args) =>
      employeeTools.getEmployeeById(args),

    listAllEmployees: () =>
      employeeTools.listAllEmployees(),

    createEmployee: (args) =>
      employeeTools.createEmployee(args),

    updateEmployee: (args) =>
      employeeTools.updateEmployee(args),

    deleteEmployee: (args) =>
      employeeTools.deleteEmployee(args),

    searchEmployees: (args) =>
      employeeTools.searchEmployees(args),

    getEmployeeCount: () =>
      employeeTools.getEmployeeCount(),
  } as const;
}
