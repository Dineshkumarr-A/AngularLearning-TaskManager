import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //! -> added to say that value will be set outside the component
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  get imageUrl()
  {
    return 'assets/users/' + this.avatar; 
  }

  onSelectUser() {  }

}
