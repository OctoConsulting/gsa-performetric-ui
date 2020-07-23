import { Steps } from './exec.model';

export class Simulation {
  simulationName?: string;
  baseUrl?: string;
  steps?: any[];
  constantConcurrentUsers?: string;
  rampConcurrentUsersStart?: string;
  rampConcurrentUsersEnd?: string;
  duration?: string;
  rampUpDuration?: string;
}
