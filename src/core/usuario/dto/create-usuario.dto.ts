import { IsEmail, IsEmpty, IsNotEmpty, MaxLength } from 'class-validator';
import { EMensagem } from 'src/shared/enums/mensagem.enum';

export class CreateUsuarioDto {
  @IsEmpty({ message: `ID ${EMensagem.DeveSerVazio}` })
  id: number;

  @IsNotEmpty({ message: `Nome ${EMensagem.NaoPOdeSerVazio}` })
  @MaxLength(60, { message: `Nome ${EMensagem.CaracteresPermitido}` })
  nome: string;

  @IsNotEmpty({ message: `email ${EMensagem.NaoPOdeSerVazio}` })
  @IsEmail({}, { message: `email ${EMensagem.NaoValido}` })
  email: string;

  @IsNotEmpty({ message: `senha ${EMensagem.NaoPodeSerVazio}` })
  senha: string;

  @IsNotEmpty({ message: `senha ${EMensagem.NaoPodeSerVazio}` })
  ativo: boolean;

  @IsNotEmpty({ message: `senha ${EMensagem.NaoPodeSerVazio}` })
  admin: boolean;
}
