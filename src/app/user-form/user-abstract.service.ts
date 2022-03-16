import { Injectable } from "@angular/core";
import { User } from "./user";

@Injectable()
export abstract class UserAbstractService {

    abstract getUsers(): User[];
    abstract addUser(user: User): Boolean;
    abstract getUserById(id: number): User;
    abstract delete(id: number): void;
    abstract update(user: User): void;
}