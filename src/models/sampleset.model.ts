import { AuthenResDto } from '../dto/authen.dto';
import { samplesetDao } from '../databases/incnv/dao/sampleset.dao';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { HttpException } from '../exceptions/http.exception';

export class SamplesetModel {
  public deleteSampleset = async (samplesetId: number) => {
    const returnValue = await samplesetDao.deleteSampleset(samplesetId);
  };

  public getSamplesets = async (userId: number) => {
    return await samplesetDao.getSamplesets(userId);
  };
}

export const samplesetModel = new SamplesetModel();
