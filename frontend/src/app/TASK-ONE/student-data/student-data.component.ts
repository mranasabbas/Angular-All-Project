import { Component } from '@angular/core';
import { StudentDataService } from '../../services/student-data.service';
// import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})


export class StudentDataComponent {


  // Declaring Properties

  newdata: any = { users: [] };
  favUser: any = [];
  display = 'none';
  selectedUser: any;


  // Constructor / instance

  constructor(
    private userAPIData: StudentDataService,
    private toast: ToastrService,
    private route: ActivatedRoute
  ) { }


  UserClicked(user: any) {
    const selectedUser = [{ ...user }];
    this.display = 'block';
    this.selectedUser = selectedUser;
    console.log(selectedUser);
  }


  limit: number = 10;

  loadUsers() {
    this.limit += 10;
    this.userAPIData.getdata(this.limit)
      .subscribe({
        next: (resp) => {
          this.newdata = resp;
        }
      })
  }


  ngOnInit(): void {
    // this.userAPIData.getdata().subscribe((res) => {
    //   console.log(res);
    //   this.newdata = res;
    // });

    this.newdata = this.route.snapshot.data['data']
  }


  moveToFavorite(user: any) {
    this.favUser.unshift(user);
    this.toast.success('Successfully', 'User Added To Favorite')
    // console.log(this.favUser);

  }

  removeItem(user: any) {

    const index = this.favUser.valueOf(user);

    if (index !== -1) {
      this.favUser.splice(index, 1);
      this.toast.info('Removed!', 'User Removed From Favorite!');
    }
  }

  openModal() {
    this.display = "block";

  }
  onCloseHandled() {
    this.display = "none";
  }






}




