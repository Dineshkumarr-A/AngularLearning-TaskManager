import { Component, EventEmitter, Input, Output} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  //! -> added to say that value will be set outside the component
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;

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
