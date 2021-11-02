import { Employer } from './employer';

export interface Experience {
    employer: Employer;
    positionTitle: string;
    achievements: string[];
    start: string;
    end: string;
    order: number;
}