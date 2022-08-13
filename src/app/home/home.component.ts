import { Component, OnInit } from '@angular/core';
import { GitprofileService } from '../service/gitprofile.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  profile: any;
  constructor(private GitprofileService: GitprofileService) {}

  ngOnInit(): void {
    this.getuser();
  }

  getuser() {
    this.GitprofileService.getuser().subscribe((res) => {
      this.profile = res;
      console.log('Data response', JSON.stringify(this.profile));
    });
  }
}
