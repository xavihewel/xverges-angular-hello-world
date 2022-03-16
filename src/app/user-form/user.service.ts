import { Injectable } from "@angular/core";
import { User } from "./user";
import { UserAbstractService } from "./user-abstract.service";

@Injectable()
export class UserService implements UserAbstractService {

    private users$: User[] = [];

    getUsers(): User[] {
        return this.users$;
    }

    addUser(user: User): Boolean {
        this.users$.push(user);
        console.log('Users array count ' + this.users$.length);
        console.log(this.users$);
        return true;
    }

    getUserById(id: number): User {
        const user = this.users$.find(u => u.id === id);
        if (typeof user !== 'undefined') return user;
        return new User(0, '', '', '');
    }

    delete(id: number): void {
        const index = this.users$.findIndex(u => u.id === id);
        if (index >= 0) this.users$.splice(index, 1);
    }

    update(user: User): void {
        const index = this.users$.findIndex(u => u.id === user.id);
        if (index >= 0) this.users$.splice(index, 1, user);
    }
}