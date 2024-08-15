/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { EMensagem } from '../enums/mensagem.enum';
import { IFindAllFilter } from '../interfaces/find-all-fiter.interface';

@Injectable()
export class ParseFindAllOrderPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    try {
      if (value) {
        return JSON.parse(value as unknown as string) as
          | IFindAllFilter
          | IFindAllFilter[];
      }
    } catch (error) {
      throw new Error(EMensagem.FilterInvalido);
    }
  }
}
