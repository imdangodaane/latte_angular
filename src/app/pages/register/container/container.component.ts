import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../../_services/register.service';
import { NbToastrService} from '@nebular/theme';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  sex = '';
  agreeTerm = false;
  returnMessage: string;
  returnCode: number;

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private toastrService: NbToastrService,
  ) {}

  onSubmit(registerForm: any) {
    const data = registerForm.value;
    this.registerService.register(data)
      .subscribe(
        res => {
          if (res) {
            // this.returnMessage = 'Đăng ký thành công, đang chuyển về trang đăng nhập';
            this.showToast('Đang chuyển về trang đăng nhập', 'Đăng ký thành công', 'top-right', 'success');
            setTimeout(() => this.router.navigate(['/login']), 1500);
          }
        },
        err => {
          if (err.error.detail === 'Username existed') {
            this.showToast('Tên tài khoản đã tồn tại', 'Đăng ký thất bại', 'top-right', 'danger');
            // this.returnMessage = 'Tên tài khoản đã tồn tại';
          } else if (err.error.detail === 'Email existed') {
            this.showToast('Email đã tồn tại', 'Đăng ký thất bại', 'top-right', 'danger');
            // this.returnMessage = 'Email đã tồn tại';
          } else {
            this.showToast('Lỗi chưa xác định', 'Đăng ký thất bại', 'top-right', 'danger');
            // this.returnMessage = 'Lỗi chưa xác định';
          }
          // this.returnCode = +err.status;
          // setTimeout(() => {
          //   this.returnMessage = '';
          //   this.returnCode = 0;
          // }, 3000);
        }
      );
  }

  showToast(message: string, title: string, position: any, status: any) {
    this.toastrService.show(
      message,
      title,
      { position, status }
    );
  }

  ngOnInit() {
  }

}
