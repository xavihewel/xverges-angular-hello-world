import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('this is init method');
  }

  simpleAlert() {
    Swal.fire('Hell world');
  }

  alertWithSuccesss() {
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success');
  }

  confirmBox() {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancellled',
          'Your imaginary file is safe',
          'error'
        )
      }
    })
  }
  erroralert(){
    Swal.fire({
      icon: 'error',
      title: 'Ooops..',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>'
    })
  }
}
