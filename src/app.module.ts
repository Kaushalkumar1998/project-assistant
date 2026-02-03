import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LlmModule } from './llm/llm.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/employee_db'),
    EmployeeModule,
    LlmModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
