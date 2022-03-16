import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from './user';
import { UserAbstractService } from './user-abstract.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private userService: UserAbstractService) { }

  ngOnInit(): void {
  }

  model = new User(18, 'Pepe', 'Soto', '38115089C');

  submitted = false;

  onSubmit() { this.submitted = true; }

  SaveUser() {
    const user: User = {
      id: this.model.id,
      name: this.model.name,
      surname: this.model.surname,
      dni: this.model.dni
    }
    this.userService.addUser(user);
    console.log(user);
    Swal.fire('Students', 'The student is inserted', 'success');
  }
}
