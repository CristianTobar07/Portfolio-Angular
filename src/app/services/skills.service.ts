import { Injectable } from '@angular/core';

export type SkillTech = {
  name: string;
  percentage: number;
};

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private skillsTech: SkillTech[] = [
    { name: 'JavaScript', percentage: 95 },
    { name: 'TypeScript', percentage: 95 },
    { name: 'React', percentage: 95 },
    { name: 'Angular', percentage: 95 },
    { name: 'Node.js', percentage: 90 },
  ];

  getSkillsTech() {
    return this.skillsTech;
  }
}
