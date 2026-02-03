export const TOOLS = [
    {
        name: 'getEmployeeById',
        description: 'Fetch employee details by their unique ID.',
        parameters: {
            type: 'object',
            properties: {
                employeeId: {
                    type: 'string',
                    description: 'The unique identifier of the employee.',
                },
            },
            required: ['employeeId'],
        },
        returnType: 'Employee | null',
    },
    {
        name: 'listAllEmployees',
        description: 'Retrieve a list of all employees in the system.',
        parameters: {
            type: 'object',
            properties: {},
        },
        returnType: 'Employee[]',
    },
    {
        name: 'createEmployee',
        description: 'Create a new employee record.',
        parameters: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                    description: 'Full name of the employee.',
                },
                position: {
                    type: 'string',
                    description: 'Job position of the employee.',
                },
                department: {
                    type: 'string',
                    description: 'Department where the employee works.',
                },
            },
            required: ['name', 'position', 'department'],
        },
        returnType: 'Employee',
    },{
        name: 'deleteEmployee',
        description: 'Delete an employee record by their unique ID.',
        parameters: {
            type: 'object',
            properties: {
                employeeId: {
                    type: 'string',
                    description: 'The unique identifier of the employee to be deleted.',
                },
            },
            required: ['employeeId'],
        },
        returnType: 'boolean',  // returns true if deletion was successful, false otherwise
    },
    {
        name: 'updateEmployee',
        description: 'Update an existing employee record.',
        parameters: {
            type: 'object',
            properties: {
                employeeId: {
                    type: 'string',
                    description: 'The unique identifier of the employee to be updated.',
                },
                name: {
                    type: 'string',
                    description: 'Full name of the employee.',
                },
                position: {
                    type: 'string',
                    description: 'Job position of the employee.',
                },
                department: {
                    type: 'string',
                    description: 'Department where the employee works.',
                },
            },
            required: ['employeeId'],
        },
        returnType: 'Employee | null', // returns updated Employee or null if not found
    },{
        name: 'searchEmployees',
        description: 'Search for employees by name or department.',
        parameters: {
            type: 'object',
            properties: {
                query: {
                    type: 'string',
                    description: 'Search query for employee firstName or lastName or email or department position.',
                },
            },
            required: ['query'],
        },
        returnType: 'Employee[]',
    },
    {
        name: 'getEmployeeCount',
        description: 'Get the total number of employees in the system.',
        parameters: {
            type: 'object',
            properties: {},
        },
        returnType: 'number' // returns the count of employees,   
    }
]
