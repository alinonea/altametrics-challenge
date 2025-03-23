import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, InternalServerErrorException } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.invoicesService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoicesService.findById(parseInt(id));
  }
}
