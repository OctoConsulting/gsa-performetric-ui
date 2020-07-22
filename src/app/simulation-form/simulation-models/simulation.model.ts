import { Exec } from './exec.model';

export class Simulation {
  simulationName?: string;
  baseUrl?: string;
  execs?: Exec[];
  constantConcurrentUsers?: number;
  rampConcurrentUsersStart?: number;
  rampConcurrentUsersEnd?: number;
  duration?: number;
}
