import { QueryParam } from './query-params.model';
import { AuthHeader } from './auth-header.model';

export class Exec {
      requestName?: string;
      requestType?: string;
      route?: string;
      queryParams?: QueryParam[];
      authHeader?: AuthHeader[];
      pause?: number;
}
