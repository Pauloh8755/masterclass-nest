import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// Para injetar em outros arquivos
@Injectable()
/* 
    Estende o PrismaClient de modo que ao ser instanciado, istancia-se também a 
    conexão com o banco
*/
export class PrismaService extends PrismaClient implements OnModuleInit {
  // Forca conexão com o Banco
  async onModuleInit() {
    await this.$connect();
  }

  // Fecha app ao perder conexão com o banco
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
