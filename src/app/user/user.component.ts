import { Component, signal , computed} from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';


//It will give u a number between 0 to dummy user length
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


  //Change detection mechanism using SIGNALS
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imageUrl = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // get imageUrl() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser()
  {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }


}
