import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../_services/register.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  sex = '';
  agreeTerm = false;

  constructor(
    private registerService: RegisterService
  ) {}

  onSubmit(registerForm: any) {
    this.registerService.register(registerForm.value)
      .subscribe();
  }

  ngOnInit() {
  }

}
