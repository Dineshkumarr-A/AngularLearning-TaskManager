import { Component, EventEmitter, Input, Output} from '@angular/core';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }


interface User {
  id: string;
  avatar: string;
  name: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  //! -> added to say that value will be set outside the component
  @Input({required: true}) user!: User;

  //Using decorator
  @Output() select = new EventEmitter();

  //Using output function
  //select = output<string>()
 
  get imageUrl()
  {
    return 'assets/users/' + this.user.avatar; 
  }

  onSelectUser() { 
    this.select.emit(this.user.id);
   }

}
