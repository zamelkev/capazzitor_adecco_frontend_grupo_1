export class User {
    uid?: string;
    email?: string | null;
    displayName?: string;
    password?: string;
    role?: Role;
    photoURL?: string | null;
    emailVerified?: boolean;

    constructor() {}
}

// export class Role { 
//     // reader?: boolean;
//     candidate?: boolean = false;
//     company?: boolean = false;
//     admin?: boolean = false;
// }

export class Role { 
    name?: string;
    value?: boolean;

    constructor (name: string, value: boolean) {
        this.name = name;
        this.value = value;
    }
}

export interface UserWithToken extends User {
    token: string;
}