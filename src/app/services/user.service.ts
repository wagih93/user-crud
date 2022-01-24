import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject: Subject<User[]>;
  private users: User[];

  constructor() {

    this.users = [
      {
        id: '1',
        nom: 'belghith',
        prenom: 'wajih',
        email: 'wajih.belg@gmail.com',
        phone: 52670306,
        rue: '8 rue habib ammar',
        ville: 'dar chabaane el fehri',
        pays: 'tunisia',
        codepost: 8011,
        imageUrl: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3Mzg1Mzg5MzI4NDQzMDYz/tupac_shakur_photo_by_steve_eichner_archive_photos_getty_83928439.jpg',
        poste: 'CEO',
        role: 'ADMIN',
        createdDate: new Date()
      },
      {
        id: '2',
        nom: 'belghith',
        prenom: 'adam',
        email: 'adam.belg@gmail.com',
        phone: 22788111,
        rue: '8 rue habib ammar',
        ville: 'dar chabaane el fehri',
        pays: 'tunisia',
        codepost: 8011,
        imageUrl: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3Mzg1Mzg5MzI4NDQzMDYz/tupac_shakur_photo_by_steve_eichner_archive_photos_getty_83928439.jpg',
        poste: 'Co-founder',
        role: 'USER',
        createdDate: new Date()
      },
    ];
    this.userSubject = new BehaviorSubject<User[]>(this.users);
  }
  getUsers(): Observable<User[]> {
    return this.userSubject;
  }
  addUser(user: User) {
    this.users.push(user);
    this.userSubject.next(this.users);
  }
  getUserById(id: string): User {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      throw new Error('user Not Found')
    } else {
      return user;
    }
  }
  editUser(id: string, data: User) {
    let index = this.users.findIndex(x => x.id === id);
    this.users[index] = data;
    console.log('user with'+index+'updated');
  }

  deleteUser(id: string) {
    let index = this.users.findIndex(x => x.id === id);
    this.users.splice(index, 1);
  }

}
