import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { EmployeeService } from './employee/employee.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // Swagger Config
  const config = new DocumentBuilder()
    .setTitle('Employee Management API')
    .setDescription('CRUD operations for managing employees')
    .setVersion('1.0')
    .addTag('employees')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory);
  const employeeService = app.get(EmployeeService);

  const employees = [
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice.j@example.com',
      position: 'Senior Dev',
      department: 'Engineering',
      createdAt: { $date: '2025-11-10T09:00:00Z' },
      updatedAt: { $date: '2025-11-10T09:00:00Z' },
      __v: 0,
    },
    {
      firstName: 'Bob',
      lastName: 'Smith',
      email: 'bob.s@example.com',
      position: 'HR Manager',
      department: 'Human Resources',
      createdAt: { $date: '2025-11-15T14:30:00Z' },
      updatedAt: { $date: '2025-11-15T14:30:00Z' },
      __v: 0,
    },
    {
      firstName: 'Charlie',
      lastName: 'Davis',
      email: 'charlie.d@example.com',
      position: 'Product Designer',
      department: 'Design',
      createdAt: { $date: '2025-11-20T11:15:00Z' },
      updatedAt: { $date: '2025-11-20T11:15:00Z' },
      __v: 0,
    },
    {
      firstName: 'Diana',
      lastName: 'Prince',
      email: 'diana.p@example.com',
      position: 'QA Lead',
      department: 'Engineering',
      createdAt: { $date: '2025-12-01T10:00:00Z' },
      updatedAt: { $date: '2025-12-01T10:00:00Z' },
      __v: 0,
    },
    {
      firstName: 'Ethan',
      lastName: 'Hunt',
      email: 'ethan.h@example.com',
      position: 'Security Specialist',
      department: 'IT',
      createdAt: { $date: '2025-12-05T08:45:00Z' },
      updatedAt: { $date: '2025-12-05T08:45:00Z' },
      __v: 0,
    },
    {
      firstName: 'Fiona',
      lastName: 'Gallagher',
      email: 'fiona.g@example.com',
      position: 'Accountant',
      department: 'Finance',
      createdAt: { $date: '2025-12-10T16:20:00Z' },
      updatedAt: { $date: '2025-12-10T16:20:00Z' },
      __v: 0,
    },
    {
      firstName: 'George',
      lastName: 'Miller',
      email: 'george.m@example.com',
      position: 'Sales Rep',
      department: 'Sales',
      createdAt: { $date: '2025-12-12T09:10:00Z' },
      updatedAt: { $date: '2025-12-12T09:10:00Z' },
      __v: 0,
    },
    {
      firstName: 'Hannah',
      lastName: 'Abbott',
      email: 'hannah.a@example.com',
      position: 'Marketing Lead',
      department: 'Marketing',
      createdAt: { $date: '2025-12-15T13:00:00Z' },
      updatedAt: { $date: '2025-12-15T13:00:00Z' },
      __v: 0,
    },
    {
      firstName: 'Ian',
      lastName: 'Wright',
      email: 'ian.w@example.com',
      position: 'DevOps Engineer',
      department: 'Engineering',
      createdAt: { $date: '2025-12-20T10:30:00Z' },
      updatedAt: { $date: '2025-12-20T10:30:00Z' },
      __v: 0,
    },
    {
      firstName: 'Julia',
      lastName: 'Roberts',
      email: 'julia.r@example.com',
      position: 'Recruiter',
      department: 'Human Resources',
      createdAt: { $date: '2025-12-28T15:45:00Z' },
      updatedAt: { $date: '2025-12-28T15:45:00Z' },
      __v: 0,
    },
    {
      firstName: 'Kevin',
      lastName: 'Hart',
      email: 'kevin.h@example.com',
      position: 'Support Analyst',
      department: 'Customer Service',
      createdAt: { $date: '2026-01-02T11:00:00Z' },
      updatedAt: { $date: '2026-01-02T11:00:00Z' },
      __v: 0,
    },
    {
      firstName: 'Laura',
      lastName: 'Palmer',
      email: 'laura.p@example.com',
      position: 'Data Scientist',
      department: 'Engineering',
      createdAt: { $date: '2026-01-05T14:00:00Z' },
      updatedAt: { $date: '2026-01-05T14:00:00Z' },
      __v: 0,
    },
    {
      firstName: 'Michael',
      lastName: 'Scott',
      email: 'michael.s@example.com',
      position: 'Regional Manager',
      department: 'Management',
      createdAt: { $date: '2026-01-08T09:00:00Z' },
      updatedAt: { $date: '2026-01-08T09:00:00Z' },
      __v: 0,
    },
    {
      firstName: 'Nina',
      lastName: 'Simone',
      email: 'nina.s@example.com',
      position: 'UX Researcher',
      department: 'Design',
      createdAt: { $date: '2026-01-10T10:15:00Z' },
      updatedAt: { $date: '2026-01-10T10:15:00Z' },
      __v: 0,
    },
    {
      firstName: 'Oscar',
      lastName: 'Isaac',
      email: 'oscar.i@example.com',
      position: 'Legal Counsel',
      department: 'Legal',
      createdAt: { $date: '2026-01-12T13:45:00Z' },
      updatedAt: { $date: '2026-01-12T13:45:00Z' },
      __v: 0,
    },
    {
      firstName: 'Pam',
      lastName: 'Beesly',
      email: 'pam.b@example.com',
      position: 'Receptionist',
      department: 'Administration',
      createdAt: { $date: '2026-01-15T08:30:00Z' },
      updatedAt: { $date: '2026-01-15T08:30:00Z' },
      __v: 0,
    },
    {
      firstName: 'Quinn',
      lastName: 'Fabray',
      email: 'quinn.f@example.com',
      position: 'PR Specialist',
      department: 'Marketing',
      createdAt: { $date: '2026-01-18T11:50:00Z' },
      updatedAt: { $date: '2026-01-18T11:50:00Z' },
      __v: 0,
    },
    {
      firstName: 'Riley',
      lastName: 'Reid',
      email: 'riley.r@example.com',
      position: 'Backend Dev',
      department: 'Engineering',
      createdAt: { $date: '2026-01-20T14:10:00Z' },
      updatedAt: { $date: '2026-01-20T14:10:00Z' },
      __v: 0,
    },
    {
      firstName: 'Steve',
      lastName: 'Rogers',
      email: 'steve.r@example.com',
      position: 'Security Lead',
      department: 'IT',
      createdAt: { $date: '2026-01-22T09:00:00Z' },
      updatedAt: { $date: '2026-01-22T09:00:00Z' },
      __v: 0,
    },
    {
      firstName: 'Tina',
      lastName: 'Fey',
      email: 'tina.f@example.com',
      position: 'Content Strategist',
      department: 'Marketing',
      createdAt: { $date: '2026-01-25T16:00:00Z' },
      updatedAt: { $date: '2026-01-25T16:00:00Z' },
      __v: 0,
    },
    {
      firstName: 'Ursula',
      lastName: 'Corbero',
      email: 'ursula.c@example.com',
      position: 'System Architect',
      department: 'Engineering',
      createdAt: { $date: '2026-01-28T10:00:00Z' },
      updatedAt: { $date: '2026-01-28T10:00:00Z' },
      __v: 0,
    },
    {
      firstName: 'Victor',
      lastName: 'Stone',
      email: 'victor.s@example.com',
      position: 'Hardware Engineer',
      department: 'Engineering',
      createdAt: { $date: '2026-01-30T13:20:00Z' },
      updatedAt: { $date: '2026-01-30T13:20:00Z' },
      __v: 0,
    },
    {
      firstName: 'Wendy',
      lastName: 'Darling',
      email: 'wendy.d@example.com',
      position: 'Office Manager',
      department: 'Administration',
      createdAt: { $date: '2026-02-01T08:45:00Z' },
      updatedAt: { $date: '2026-02-01T08:45:00Z' },
      __v: 0,
    },
    {
      firstName: 'Xander',
      lastName: 'Cage',
      email: 'xander.c@example.com',
      position: 'Operations',
      department: 'Management',
      createdAt: { $date: '2026-02-02T12:00:00Z' },
      updatedAt: { $date: '2026-02-02T12:00:00Z' },
      __v: 0,
    },
    {
      firstName: 'Yara',
      lastName: 'Shahidi',
      email: 'yara.s@example.com',
      position: 'Junior Designer',
      department: 'Design',
      createdAt: { $date: '2026-02-03T10:00:00Z' },
      updatedAt: { $date: '2026-02-03T10:00:00Z' },
      __v: 0,
    },
  ];

  console.log('🌱 Seeding started...');
  for (const emp of employees) {
    // We remove the $date wrapper and __v so Mongoose handles them correctly
    const formattedEmp = {
      ...emp,
      createdAt: new Date(emp.createdAt.$date),
      updatedAt: new Date(emp.updatedAt.$date),
    };
    delete (formattedEmp as any).__v;

    await employeeService.create(formattedEmp as any);
  }

  console.log('✅ Seeding complete!');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
