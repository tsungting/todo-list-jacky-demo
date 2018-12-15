import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Jacky';
  todoList = ['thing1', 'thing2', 'thing3'];
  john;
  jacky;
  switchName(){
    if (this.name === 'Jacky'){
      this.name = 'John'
    }
    else if (this.name === 'John'){
      this.name = 'Jacky'
    }
    const test = this.completeItem('thing3');
  }

  completeItem(item){
    const itemsRemaining = this.todoList.filter((todoListItem) => todoListItem !== item);

    this.todoList = itemsRemaining;
  }

  receiveData(data){
    this.todoList = this.todoList.concat(data);
  }

  saveData(data){
    this.john = data.target.value;
  }

  sendData(john){
    this.jacky = john;
  }
}
