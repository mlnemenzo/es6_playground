import {addToDom} from "./helpers";
import add from './add'
import SuperPerson from './person';

addToDom("<hr>");

const Bob = new SuperPerson('Bob', 'Bob-man');

const Susan = new SuperPerson('Susan', 'Wonder Susan');

addToDom(Bob.speak('hello there.'));

addToDom(Bob.drinks(5));

addToDom(Susan.speak('Bob you have a problem.'));

addToDom(Susan.sayHeroName());

