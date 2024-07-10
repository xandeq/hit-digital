import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { DataResponse } from '../../models/data.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-introducao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introducao.component.html',
  styleUrls: ['./introducao.component.css']
})
export class IntroducaoComponent implements OnInit {
  data?: DataResponse['data'];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((response) => {
      if (response.status === 'success') {
        this.data = response.data;
        console.log(this.data);
      }
    });
  }
}
