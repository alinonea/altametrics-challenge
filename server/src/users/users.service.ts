import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}
    
    private logger = new Logger('User service')

    async findByEmail(email: string): Promise<User | null>{
        this.logger.log('Find user by email')

        try{
            const user = await this.prisma.user.findUnique({where: { email }})

            return user;
        } catch(e) {
            this.logger.error(`Error on find user by email: ${e}`);

            throw new InternalServerErrorException(e);
        }
    }
}
