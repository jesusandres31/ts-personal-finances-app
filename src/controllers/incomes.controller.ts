import { NextFunction, Request, Response } from 'express';
import { incomesSvcs } from '../services';

class IncomesCtrl {
  /* public getTaxes = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const taxes = await taxesSvcs.getTaxes();
      return res.status(200).json(taxes);
    } catch (e) {
      return next(e);
    }
  }; */
}

export const incomesCtrl = new IncomesCtrl();
