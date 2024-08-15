import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { IFindAllFilter } from '../../shared/interfaces/find-all-fiter.interface';
import { IFindAllOrder } from '../../shared/interfaces/find-all-order.interface';
import { ParseFindAllOrderPipe } from '../../shared/pípes/parse-find-all-order.pipe';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get(':page/:size/:order')
  findAll(
    @Param('page') page: number,
    @Param('size') size: number,
    @Param('order', ParseFindAllOrderPipe) order: IFindAllOrder,
    @Query('filter', ParseFindAllOrderPipe)
    filter: IFindAllFilter | IFindAllFilter[],
  ) {
    return this.usuarioService.findAll(page, size, order, filter);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  unactivate(@Param('id') id: string) {
    return this.usuarioService.unactivate(+id);
  }
}
