import { PaginationMetaDto } from './pagination-meta.dto';

export class PaginationResponseDto<T> {
  data: T[];
  meta: PaginationMetaDto;
}
