import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../core/entities/user.model';
import { UserService } from '../../core/services/user.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  userId: string;
  fulluser!: User;
  constructor(private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
    this.userForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
      rue: ['', Validators.required],
      ville: ['', Validators.required],
      pays: ['', Validators.required],
      codepost: ['', Validators.required],
      poste: ['', Validators.required],
      role: ['', Validators.required],
      imageUrl: ['']
    });
    this.userId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.userId) {
      this.fulluser = this.userService.getUserById(this.userId);
      this.userForm.setValue({
        prenom: this.fulluser.prenom,
        nom: this.fulluser.nom,
        email: this.fulluser.email,
        phone: this.fulluser.phone,
        rue: this.fulluser.rue,
        ville: this.fulluser.ville,
        pays: this.fulluser.pays,
        codepost: this.fulluser.codepost,
        poste: this.fulluser.poste,
        role: this.fulluser.role,
        imageUrl: this.fulluser.imageUrl
      });
    }
  }

  onSubmitForm() {
    const user = this.userForm.value as User;
    if (this.userId) {
      this.fulluser.modificationDate = new Date();
      this.userService.editUser(this.userId, this.fulluser);
      this.router.navigate(['usersPage']);
      console.log('user updated');
    } else {
      user.id = uuidv4();
      user.createdDate = new Date();
      this.userService.addUser(user);
      this.router.navigate(['usersPage']);
      console.log('user added');
    }
  }

}
