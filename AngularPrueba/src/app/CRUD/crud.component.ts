import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { User } from './user.model';

@Component({
    selector: 'app-crud-component',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.css']
})

export class CrudComponent implements OnInit {

    items: Array<User> = new Array<User>();
    user: User = new User(undefined, undefined);
    showSelected = true;
    ngOnInit() {
        this.items.push(new User('Aitor Bernal', 'aitor@gmail.com'));
        this.items.push(new User('Pepe Botella', 'aitor@gmail.com'));
        this.items.push(new User('Luis', 'aitor@gmail'));
    }
    create() {
        this.items.push(new User(this.user.name, this.user.email));
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
          this.items.splice(index, 1);
        }
    }

    editItem(item) {
        const index = this.items.indexOf(item);
        this.items[index].name = item.name;
        this.items[index].email = item.email;
        console.log('NAME: ' + this.items[index].name);
        console.log('MAIL: ' + this.items[index].email);
    }

    hidden() {
        this.showSelected = false;
    }

}
