import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TypePipe implements PipeTransform {
  constructor(private types: string[], private message = 'Invalid type') {
  }
  transform(type: string, metadata: ArgumentMetadata) {
    if (
      type && !this.types.includes(type)
    ) {
      throw new BadRequestException(this.message)
    }
    return type;
  }
}
