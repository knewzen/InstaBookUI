import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
      private router: Router) { }

  ngOnInit() {
  }

  goToUserHome(){
      this.router.navigate(['userHome']);
  }
}
