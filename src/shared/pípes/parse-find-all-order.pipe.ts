/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { EMensagem } from '../enums/mensagem.enum';
import { IFindAllOrder } from '../interfaces/find-all-order.interface';

@Injectable()
export class ParseFindAllOrderPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    try {
      return JSON.parse(value as unknown as string) as IFindAllOrder;
    } catch (error) {
      throw new Error(EMensagem.OrderInvalido);
    }
  }
}
