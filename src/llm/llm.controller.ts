import { Body, Controller, Post } from '@nestjs/common';
import { LlmService } from './llm.service';
import { ReqLlmDto } from './dto/req-llm.dto';

@Controller('llm')
export class LlmController {
  constructor(private readonly llmService: LlmService) {}

  @Post('ask')
  async ask(@Body() reqLlmDto: ReqLlmDto) {
    return this.llmService.ask(reqLlmDto.question);
  }
}
