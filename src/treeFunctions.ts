import { createStarkTree } from "./families/stark";
import { Person } from "./personTypes";

export function listAllPeopleInTreeWithQueue(topPerson: Person): string[] {
  const workQueue: Person[] = [];
  workQueue.push(topPerson);
  const peopleList: string[] = [];
  while (workQueue.length) {
    const currentPerson = workQueue.shift() as Person;
    peopleList.push(currentPerson.name);
    for (const child of currentPerson.children) {
      workQueue.push(child);
    }
  }
  // console.log(peopleList)
  return peopleList;
}

listAllPeopleInTreeWithQueue(createStarkTree());

export function countAllPeopleInTree(topPerson: Person): number {
  const workQueue: Person[] = [];
  workQueue.push(topPerson);
  const peopleList: string[] = [];
  while (workQueue.length) {
    const currentPerson = workQueue.shift() as Person;
    peopleList.push(currentPerson.name);
    for (const child of currentPerson.children) {
      workQueue.push(child);
    }
  }
  // console.log(peopleList)
  return peopleList.length;
}

export function logIfInTree(targetName: string, topOfTree: Person): void {
  const list = listAllPeopleInTreeWithQueue(topOfTree);
  list.includes(targetName)
    ? console.log(`FOUND ${targetName}`)
    : console.log(`CAN'T FIND ${targetName}`);
}

export function logIfInTreeBoolean(
  targetName: string,
  topOfTree: Person,
): boolean {
  const list = listAllPeopleInTreeWithQueue(topOfTree);
  return list.includes(targetName) ? true : false;
}

/*
check if both des & anc are in the tree - if not return false
find anc in tree, list all people below them
check if des is in that new list - if is return true, if not return false
*/
// export function isDescendant(descendantName: Person, ancestorName: Person, topOfTree:Person): boolean {
//   if(listAllPeopleInTreeWithQueue(topOfTree).includes(ancestorName) && listAllPeopleInTreeWithQueue(topOfTree).includes(descendantName)){
//     const peopleQueue: Person[] = []
//     peopleQueue.push(topOfTree)
//     while(peopleQueue.length){
//       const currentPerson = peopleQueue.shift() as Person
//       if(currentPerson.name === ancestorName){
//         for(const child of currentPerson.children){

//           return child.name === descendantName
//         }
//       }
//       else{peopleQueue.push(child)}
//     }
//     return false
//   }
// else {return false}
// }

export function listAllPeopleObjectsInTree(topPerson: Person): Person[] {
  const workQueue: Person[] = [];
  workQueue.push(topPerson);
  const peopleList: Person[] = [];
  while (workQueue.length) {
    const currentPerson = workQueue.shift() as Person;
    peopleList.push(currentPerson);
    for (const child of currentPerson.children) {
      workQueue.push(child);
    }
  }
  // console.log(peopleList)
  return peopleList;
}

// Is direct descendent

export function isDescendant(
  descendantName: string,
  ancestorName: string,
  topOfTree: Person,
): boolean {
  if (
    listAllPeopleInTreeWithQueue(topOfTree).includes(ancestorName) &&
    listAllPeopleInTreeWithQueue(topOfTree).includes(descendantName)
  ) {
    const listOfPeople = listAllPeopleObjectsInTree(topOfTree);
    const ancesterObject = listOfPeople.find(
      (person) => person.name === ancestorName,
    ) as Person;
    for (const child of ancesterObject.children) {
      if (child.name === descendantName) {
        return true;
      }
    }
    return false;
  } else {
    return false;
  }
}

//Recursive descendant

export function isRecursiveDescendant(
  descendantName: string,
  ancestorName: string,
  topOfTree: Person,
): boolean {
  if (
    listAllPeopleInTreeWithQueue(topOfTree).includes(ancestorName) &&
    listAllPeopleInTreeWithQueue(topOfTree).includes(descendantName)
  ) {
    const listOfPeople = listAllPeopleObjectsInTree(topOfTree);
    const ancesterObject = listOfPeople.find(
      (person) => person.name === ancestorName,
    ) as Person;
    for (const child of ancesterObject.children) {
      if (child.name === descendantName) {
        return true;
      }
      isRecursiveDescendant(descendantName, ancestorName, child);
    }
    return false;
  } else {
    return false;
  }
}
