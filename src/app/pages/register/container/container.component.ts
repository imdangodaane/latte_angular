import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../../_services/register.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  sex = '';
  agreeTerm = false;
  returnMessage: string;

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  onSubmit(registerForm: any) {
    const data = registerForm.value;
    this.registerService.register(data)
      .subscribe(
        res => {
          if (res) {
            this.returnMessage = 'Đăng ký thành công, đang chuyển về trang đăng nhập.';
            setTimeout(() => this.router.navigate(['/login']), 1500);
          }
        },
        err => {
          console.error(err);
        }
      );
  }

  ngOnInit() {
  }

}
