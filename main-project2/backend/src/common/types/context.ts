import { Request, Response } from 'express';
import { UnauthorizedException } from '@nestjs/common';

export interface IContext {
  req: Request;
  res: Response;
}
