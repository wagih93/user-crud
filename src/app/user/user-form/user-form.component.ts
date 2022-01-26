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
      const user = this.userService.getUserById(this.userId);
      this.userForm.setValue({
        prenom: user.prenom,
        nom: user.nom,
        email: user.email,
        phone: user.phone,
        rue: user.rue,
        ville: user.ville,
        pays: user.pays,
        codepost: user.codepost,
        poste: user.poste,
        role: user.role,
        imageUrl: user.imageUrl
      });
    }
  }

  onSubmitForm() {
    const user = this.userForm.value as User;
    if (this.userId) {
      this.userService.editUser(this.userId,user);
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
