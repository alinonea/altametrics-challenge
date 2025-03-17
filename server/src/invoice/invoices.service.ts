import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoicesService {
  constructor(private readonly prisma: PrismaService) {}

  private logger = new Logger('Invoice service');

  async findAll(): Promise<Invoice[] | null> {
    this.logger.log('Find all invoices');

    try{
      const invoices = await this.prisma.invoice.findMany();

      return invoices
    } catch(e) {
      this.logger.error(`Error on find all invoices: ${e}`);

      return null;
    }

  }

  async findById(id: number): Promise<Invoice | null>{
    this.logger.log('Find invoice by id');

    try{
      const invoice = await this.prisma.invoice.findUnique( { where: {id}});

      return invoice
    } catch(e) {
      this.logger.error(`Error on find all invoices: ${e}`);

      return null;
    }
  }
}
