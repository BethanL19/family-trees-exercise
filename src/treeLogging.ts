import { Person } from "./personTypes";

/*
function logAllPeopleInTree(topPerson)
    workStack = empty stack of Person objects
    push topPerson onto workStack

		while workStack is not empty: 
        currentPerson = pop person off workStack
        log the name property of currentPerson
        push each element of currentPerson's children onto the workStack
*/
export function logAllPeopleInTree(topPerson: Person): void {
  const workStack: Person[] = [];
  workStack.push(topPerson);

  while (workStack.length) {
    const currentPerson = workStack.pop() as Person;
    console.log(currentPerson.name);
    for (const child of currentPerson.children) {
      workStack.push(child);
    }
  }
}

/*
function logAllPeopleInTreeWithQueue(topPerson)
    workQueue = empty queue of Person objects
    push topPerson onto workQueue

		while workQueue is not empty: 
        currentPerson = shift person off workQueue (1st person)
        log the name property of currentPerson
        push each element of currentPerson's children onto the workQueue
*/

export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
  const workQueue: Person[] = [];
  workQueue.push(topPerson);

  while (workQueue.length) {
    const currentPerson = workQueue.shift() as Person;
    console.log(currentPerson.name);
    for (const child of currentPerson.children) {
      workQueue.push(child);
    }
  }
}
