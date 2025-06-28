import type { Provider } from '@nestjs/common';
import Redis from 'ioredis';

export const redisProvider: Provider = {
  provide: 'REDIS_CLIENT',
  useFactory: () => {
    return new Redis({
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
      password: process.env.REDIS_PASSWORD,
    });
  },
};
