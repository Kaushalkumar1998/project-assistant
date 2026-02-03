import { Module } from '@nestjs/common';
import { LlmService } from './llm.service';
import { LlmController } from './llm.controller';
import { ToolRouter } from './tool.router';
import { EmployeeTools } from './tools/employee.tools';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [EmployeeModule ],
  controllers: [LlmController],
  providers: [LlmService, ToolRouter, EmployeeTools],
})
export class LlmModule {}
