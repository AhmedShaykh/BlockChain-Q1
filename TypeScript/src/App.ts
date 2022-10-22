const abc: string = "TS";
const num: number = 123;
const bool: boolean = true;
let undef: undefined;
let nul: null = null;

console.log(abc);
console.log(num);
console.log(bool);
console.log(undef);
console.log(nul);

let firstName: string = "Ahmed";
console.log(firstName.length);

let boolean: boolean = Math.random() > 0.5 ? true : false;
console.log(boolean);

let nam: string = "Ahmed Shaykh";
nam = "Ahmed Shaikh";

console.log(nam);

let rocket: string = "Rocket";
console.log(rocket.toUpperCase());
console.log(rocket.toLowerCase());

let myName: string;
myName = "Ahmed Saleem Shaikh";
console.log(myName);

import { metaVerse } from "./index";
import { Course } from "./index";

export const course: Course = {
    name: "Web 3 & Metaverse Developer",
    classDay: "Wednesday",
    startUp: "DAO",
    classTiming: 6
}

console.log(metaVerse);
console.log(course);

// ========== Unions Types ========== //

let mathematician = Math.random() > 0.5 ? 123 : "Mark Goldberg";
console.log(mathematician);

let thinker: string | null = null;

if (Math.random() > 0.5) {
    thinker = "DataScript";
}

console.log(thinker);

let leader = Math.random() > 0.5 ? "Imran Khan" : 70;
leader.toString();

console.log(leader);

// ========== Narrowing ========== //

let admiral: number | string;
admiral = "Grace Hopper";

console.log(admiral);
console.log(typeof admiral);

let inventor: number | string = "Warren Buffett";

console.log(inventor.toUpperCase());

let scientist = Math.random() > 0.5 ? "Thomas Edison" : 87.6;

if (scientist === "Thomas Edison") {
    console.log(scientist.toUpperCase());
}
else if (scientist === 87.6) {
    console.log(scientist.toFixed());
}

let researcher = Math.random() > 0.5 ? "Rosalind Franklin" : 51.08341254;

typeof researcher !== "string" ? console.log(researcher.toFixed()) : console.log(researcher.toUpperCase());

// ========== Literal Types ========== //

let literal: number | string = "String";
console.log(literal);

literal = 44;
console.log(literal);

let science: number | string;
science = Math.random() > 0.5 ? "Science" : 404;

if (science === "science") {
    science.toUpperCase();
}

console.log(science);

let biologist = Math.random() > 0.5 && "Rachel Carson"; // String | False
console.log(biologist);

let program: string;
program = "Smart Contract";

console.log(program.length);

let maths: string | undefined;
console.log(maths?.length); // Optional

maths = "Data Sorting";
console.log(maths.length);

// ========== Type Alias ========== //

type RawData = boolean | number | string;

let rawDataFirst: RawData;
let rawDataSecond: RawData;
let rawDataThird: RawData;

console.log(rawDataFirst = true);
console.log(rawDataSecond = "AHMED");
console.log(rawDataThird = 4000);

type Id = boolean | string;
type IdMaybe = Id | undefined | null;

let typeFirst: IdMaybe;
let typeSecond: IdMaybe;
let typeThird: IdMaybe;
let typeFourth: IdMaybe;

console.log(typeFirst = 'Ahmed');
console.log(typeSecond);
console.log(typeThird = null);
console.log(typeFourth = false);

// ========== Objects ========== //

let engineer: {
    born: number;
    name: string;
};

engineer = {
    born: 1999,
    name: "Elon Musk"
}

console.log(engineer);
console.log(engineer.name);

type Poet = {
    year: number;
    name: string;
};

let poetLater: Poet;

poetLater = {
    year: 2001,
    name: "Dayyan",
};

console.log(poetLater);

type WithFirstName = {
    firstName: string;
};

type WithLastName = {
    lastName: string;
};

const hasBoth = {
    firstName: "Defence",
    lastName: "Clifton",
};

let withFirstName: WithFirstName = hasBoth;
console.log(withFirstName.firstName);

let withLastName: WithLastName = hasBoth;
console.log(withLastName.lastName);

type FirstAndLastNames = {
    first: string;
    last: string;
};

const fullName: FirstAndLastNames = {
    first: "Sabrina",
    last: "Carpenter",
};

console.log(fullName);

const namOnlyOne: FirstAndLastNames = {
    first: "Mariam Nawaz",
    last: "Gunji"
};

console.log(namOnlyOne);
console.log(`Nawaz Sharif Ki Beti ` + namOnlyOne.last);

let transGender: string | boolean = true;

if (typeof boolean) {
    console.log(`Bilawal is a SheMale ??? ` + transGender);
}

else {
    console.log(`Jab Baarish Hoti Hai To Bilawal Ata Hai`);
}

type TimeRange = {
    start: Date;
}

const myDate: TimeRange = {
    start: new Date()
}

console.log(myDate);

type Poem = {
    author: {
        firstName: string;
        lastName: string;
    };
    name: string;
};

const poemMatch: Poem = {
    author: {
        firstName: "Sylvia",
        lastName: "Plath",
    },
    name: "Lady Lazarus",
};

console.log(poemMatch);

type Author = {
    firstName: string;
    lastName: string;
};

type Writer = {
    author: Author;
    name: string;
};

const poemMismatch: Poem = {
    author: {
        firstName: "Abdul Dayyan",
        lastName: "Ali Khan"
    },
    name: "Tulips",
};

console.log(poemMismatch);

type Book = {
    author?: string;
    pages: number;
};

const book1: Book = {
    author: "Rita Ora",
    pages: 80,
};

const book2: Book = {
    pages: 75
};

console.log(book1);
console.log(book2);

type Writers = {
    author: string | undefined;
    editor?: string;
};

const missingWriters: Writers = {
    author: undefined,
};

const hasWriters: Writers = {
    author: "William Shakespeare",
    editor: "Adobe"
}

console.log(missingWriters);
console.log(hasWriters);

const series = Math.random() > 0.5 ? {
    name: "Vikings",
    storyLine: "Reality",
} : {
    name: "Stranger Things",
    fantasy: true,
}

console.log(typeof series.name, series.name);
console.log(typeof series.storyLine, series.storyLine);
console.log(typeof series.fantasy, series.fantasy);

type PoemWithPages = {
    name: string;
    page: number;
    type: string;
};

type PoemWithRhymes = {
    name: string;
    rhymes: boolean;
    type: string;
};

type Poems = PoemWithPages | PoemWithRhymes;

const poem: Poems = Math.random() > 0.5
    ? { name: "The Double Image", page: 7, type: 'Pages' }
    : { name: "Her Kind", rhymes: true, type: 'Rhymes' };

console.log(poem.name);

if ("page" in poem) {
    console.log(poem.page);
}

else {
    console.log(poem.rhymes);
}

console.log(poem.type);

type Artwork = {
    genre: string;
    name: string;
};

type Writing = {
    pages: number;
    name: string;
};

type WrittenArt = Artwork & Writing;

const workArt: WrittenArt = {
    genre: "Techno",
    name: "AHM X",
    pages: 44,
};

console.log(workArt);

type ShortPoem = { author: string } & (
    | { kigo: string; type: "haiku"; }
    | { meter: number; type: "villanelle"; }
);

const morningGlory: ShortPoem = {
    author: "Fukuda Chiyo-ni",
    kigo: "Morning Glory",
    type: "haiku",
};

const oneArt: ShortPoem = {
    author: "Elizabeth Bishop",
    type: "villanelle",
    meter: 66,
};

console.log(oneArt);
console.log(morningGlory);

type ShortPoemBase = { author: string };

type Haiku = ShortPoemBase & { name: string; type: "haiku" };

type Villanelle = ShortPoemBase & { meter: number; type: "villanelle" };

type ShortPoems = Haiku | Villanelle;

const oneArtwork: ShortPoems = {
    author: "Elizabeth Bishop",
    type: "villanelle",
    meter: 101,
};

console.log(oneArtwork);

// ========== Function ========== //

function sing(song: string) {
    console.log(`Singing: ${song}!`);
}

sing("Ole Ole");

function announceSong(song: string, singer?: string) {
    console.log(`Song: ${song}`);

    if (singer) {
        console.log(`Singer: ${singer}`);
    }
}

announceSong("Dreamer");
announceSong("On My Way", "Sabrina Carpenter");

function announceSongBy(song: string, singer: string | undefined) {
    console.log(`Song: ${song}`);

    if (singer) {
        console.log(`Singer: ${singer}`);
    }
    else {
        console.log(singer);
    }
}

announceSongBy("Greensleeves", undefined);

function edm(song: string, rating = 0) {
    console.log(`${song} Gets Rating ${rating}/10`);
}

edm("Hardwell - Mad World", 9);
edm("Will Sparks - Dreaming", 10);

function song(singer: string, ...songs: string[]) {

    for (const var1 of songs) {
        console.log(`${var1} Feat. ${singer}`)
    }
}

song("Akcent", "Thats My Name", "Stay With Me", "King Of Disco");

function technoTrance(techno: string[]) {

    for (let trance of techno) {
        console.log(`${trance}`);
    }

    return techno.length;
}

technoTrance(["Will Sparks - L.S.D", "MADDIX - Formula"]);

function getSongAt(songs: string, index: number) {
    return index < songs.length ? songs[index] : undefined;
}

console.log(getSongAt("Revealed", 4));

function getSongRecordingDate(song: string): Date | undefined | string {
    switch (song) {
        case "Summertime Sadness":
            return new Date();
        case "Lockdown":
            return "14 August, 2018";
        default:
            return undefined;
    }
}

console.log(getSongRecordingDate("Lockdown"));
console.log(getSongRecordingDate("Summertime Sadness"));

function fun1(callback: Function) {
    setTimeout(() => {
        callback();
    }, 2000);
    console.log("Please Wait...");
}

function fun2() {
    console.log("Working Done!")
}

fun1(fun2);

let phonk: (genre: string) => string;

phonk = function (genre) {
    return `InterWood: ${genre.toUpperCase()}!`;
};

console.log(phonk("Metamorphosis"));

let data1 = ['text2', 'text3', 'text4'];

data1.forEach((data, index) => {
    console.log(data, index);
});

type StringToNumber = (input: string) => number;

let stringToNumber: StringToNumber;

stringToNumber = (input) => input.length;

console.log(stringToNumber("Four"));

type NumberToString = (input: number) => string;

function usesNumberToString(NumberToString: NumberToString) {
    console.log(`The String is: ${NumberToString(1234)}`);
}

usesNumberToString((input) => `${input}! Hooray!`);

type dataS = (abc: number) => number;

function funName(data2: dataS): void {
    console.log(data2(404));
}

funName((abc) => 4843657453);

let songLogger: (song: string) => void;

songLogger = (song) => {
    console.log(`${song}`);
};

songLogger("Feel It");

// ========== Overloads ========== //

function overload(a: String, b: String): String;
function overload(a: number, b: number): number;
function overload(a: any, b: any): any {
    return a + b;
};

console.log(overload("Hello ", "World"));
console.log(overload(112, 88));

// ========== Arrays ========== //

let newArray = ["array", "array2", 123, 456, true];

newArray.pop();
newArray.push(789, false);
console.log(newArray);

let arrayOfNumbers: number[];
arrayOfNumbers = [4, 8, 15, 16, 23, 42];

console.log(arrayOfNumbers);

let createStrings: () => string[];

createStrings = () => ["Ahmed", "Dayyan", "Usama"];

console.log(createStrings());

let arrayTS: (string | number)[];
arrayTS = ["Data", "Type", 345, 864];
console.log(arrayTS)

let arrayVar: string | number[];
arrayVar = [1, 2, 3, 4], "Pakistan";
console.log(arrayVar);

// ========== 2 Dimensional Array ========== //

let arrayDim: (string | number)[][];

arrayDim = [
    ["Mon", "Tue", "Wed"],
    [4, 6, 10]
];

for (let Days in arrayDim) {
    console.log(arrayDim[Days]);
};

let Coins: string[] = ["BTC", "ETH", "BNB"];

for (let data in Coins) {
    console.log(Coins[data]);
};

const soldiers = ["Harriet Tubman", "Joan of Arc", "Khutulun"];

const soldierAges = [90, 19, 45];

const conjoined = [...soldiers, ...soldierAges];
console.log(conjoined);

function logWarriors(greeting: string, ...names: string[]) {
    for (const name of names) {
        console.log(`${greeting}, ${name}!`);
    }
};

const warriors = ["Cathay Williams", "Lozen", "Nzinga"];
logWarriors("Hello", ...warriors);

// ========== Tuple ========== //

let tuple: [number, string] = [4, "TenUp"];
console.log(tuple);

let tupleValue: [number, number] = [4, 6];
console.log(tupleValue);

let [year, warrior] = Math.random() > 0.5
    ? [340, "Archidamia"]
    : [1828, "Rani of Jhansi"];

console.log(warrior);
console.log(year);

const tupleThree: [boolean, number, string] = [false, 1583, "Ninga"];
const tupleTwoExact: [boolean, number] = [tupleThree[0], tupleThree[1]];

console.log(tupleTwoExact);

let ourTuple: [number, boolean, string];

ourTuple = [5, false, 'Coding God Was Here'];

ourTuple.push('Something New & Wrong');
console.log(ourTuple);

function logPair(name: string, value: number) {
    console.log(`${name} has ${value}`);
}

const pairTupleCorrect: [string, number] = ["Amenda", 1];
logPair(...pairTupleCorrect);

let tupleConst = ["React Token", true, 505] as const;
console.log(tupleConst);

// ========== Interfaces ========== //

interface Crypto {
    supply: number;
    name: string;
}

let cryptoCoin: Crypto;

cryptoCoin = {
    supply: 10000,
    name: "Lamda Coin",
};

console.log(cryptoCoin);

interface Ethereum {
    founder: string;
    price: number;
    nationality?: string;
}

let ether: Ethereum = {
    founder: "Vitalik Buterin",
    price: 1050,
    nationality: "Russian Canadian",
};

console.log(ether);

interface Topic {
    readonly text: string;
    pageNumbers?: number;
}

let topic: Topic = {
    text: "TypeScript",
    pageNumbers: 343,
}

console.log(topic);
console.log(topic.text);

interface HasBothFunctionTypes {
    property: () => string;
    method(): string;
}

const hasFunction: HasBothFunctionTypes = {
    property: () => "Check TypeScript!",
    method() {
        return "Serverless";
    }
};

console.log(hasFunction.method());
console.log(hasFunction.property());

interface CallSignature {
    (input: string): number;
}

const typedFunctionAlias: CallSignature = (input) => input.length;

console.log(typedFunctionAlias("Interface"));

interface FunctionWithCount {
    count: number;
    (): void;
}

let hasCallCount: FunctionWithCount;

function keepsTrackOfCalls() {
    keepsTrackOfCalls.count += 2;
    console.log(`I've been called ${keepsTrackOfCalls.count} times!`);
};

keepsTrackOfCalls.count = 0;

hasCallCount = keepsTrackOfCalls;

keepsTrackOfCalls();

interface WordCounts {
    [i: string]: number;
};

const counts: WordCounts = {};

console.log(counts.apple = 0);
console.log(counts.banana = 1);

interface DatesByName {
    [i: string]: Date;
};

const publishDates: DatesByName = {
    Frankenstein: new Date("1 January 2030"),
};

publishDates.Frankenstein;
console.log(publishDates.Frankenstein.toString());

interface ChapterStarts {
    preface: 0; // Value Fix 0
    [i: string]: number;
};

const correctPreface: ChapterStarts = {
    preface: 0,
    night: 1,
    shopping: 5
};

console.log(correctPreface);

const wrongPreface: ChapterStarts = {
    preface: 0,
};

console.log(wrongPreface);

interface MoreNarrowNumbers {
    [i: number]: string;
    [i: string]: string | undefined;
};

const mixesNumbersAndStrings: MoreNarrowNumbers = {
    0: 'One',
    key1: 'Two',
    key2: undefined,
};

console.log(mixesNumbersAndStrings);

interface Novel {
    author: {
        name: string;
    };
    setting: Setting;
};

interface Setting {
    place: string;
    year: number;
};

let myNovel: Novel;

myNovel = {
    author: {
        name: 'Jane Austen',
    },
    setting: {
        place: 'England',
        year: 1812,
    }
};

console.log(myNovel.setting);

interface Writinng {
    title: string;
};

interface Novella extends Writinng {
    pages: number;
};

let myNovella: Novella = {
    pages: 195,
    title: "Ethan Frome",
};

console.log(myNovella);