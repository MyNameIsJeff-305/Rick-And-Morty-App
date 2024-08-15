export interface RickAndMortyCharacters {
    readonly info:    Info;
    readonly results: Result[];
}

export interface Info {
    readonly count: number;
    readonly pages: number;
    readonly next:  string;
    readonly prev:  null;
}

export interface Result {
    readonly id:       number;
    readonly name:     string;
    readonly status:   Status;
    readonly species:  Species;
    readonly type:     string;
    readonly gender:   Gender;
    readonly origin:   Location;
    readonly location: Location;
    readonly image:    string;
    readonly episode:  string[];
    readonly url:      string;
    readonly created:  Date;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    readonly name: string;
    readonly url:  string;
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}
