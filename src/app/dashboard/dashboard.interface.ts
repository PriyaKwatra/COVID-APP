import { casesbytime } from './casesbytime.interface';
import { statedata } from './statedata.interface';

export interface dashboard {
    cases_time_series: [casesbytime]
    statewise: [statedata]
}