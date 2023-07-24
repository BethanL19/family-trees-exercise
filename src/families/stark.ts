import { Person } from "../personTypes";

export function createStarkTree(): Person {
  const eddardKids: Person[] = [
    { name: "Robb", children: [] },
    { name: "Sansa", children: [] },
    { name: "Jon", children: [] },
    { name: "Bran", children: [] },
    { name: "Rickon", children: [] },
    { name: "Arya", children: [] },
  ];

  const richardKids: Person[] = [
    { name: "Benjen", children: [] },
    { name: "Lyanna", children: [] },
    { name: "Eddard", children: eddardKids },
    { name: "Brandon", children: [] },
  ];

  const topPerson: Person = { name: "Rickard", children: richardKids };

  return topPerson;
}
