import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SkillsService, SkillTech } from '../../services/skills.service';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  skillsTech: SkillTech[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    this.skillsTech = this.skillsService.getSkillsTech();
  }
}
