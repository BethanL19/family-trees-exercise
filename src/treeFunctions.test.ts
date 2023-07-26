import { createLannisterTree } from "./families/lannister";
import { createStarkTree } from "./families/stark";
import {
  countAllPeopleInTree,
  isDescendant,
  listAllPeopleInTreeWithQueue,
  logIfInTreeBoolean,
} from "./treeFunctions";

test("test listAllPeopleInTreeWithQueue function", () => {
  expect(listAllPeopleInTreeWithQueue(createStarkTree())).toStrictEqual([
    "Rickard",
    "Benjen",
    "Lyanna",
    "Eddard",
    "Brandon",
    "Robb",
    "Sansa",
    "Jon",
    "Bran",
    "Rickon",
    "Arya",
  ]);
});

test("test countAllPeopleInTree function", () => {
  expect(countAllPeopleInTree(createStarkTree())).toBe(11);
});

test("test logIfInTreeBoolean function", () => {
  expect(logIfInTreeBoolean("Jon", createStarkTree())).toBe(true);
  expect(logIfInTreeBoolean("Jon", createLannisterTree())).toBe(false);
});

test("test isDescendant function", () => {
  expect(isDescendant("Jon", "Eddard", createStarkTree())).toBe(true);
  expect(isDescendant("Rickard", "Eddard", createStarkTree())).toBe(false);
  expect(isDescendant("Lyanna", "Eddard", createStarkTree())).toBe(false);
  expect(isDescendant("Jon", "Eddard", createLannisterTree())).toBe(false);
});
