export class User {
    uid?: string;
    email?: string | null;
    displayName?: string;
    password?: string;
    role?: Role;
    photoURL?: string | null;
    emailVerified?: boolean;

    constructor(uid: string, email:string, displayName:string, password: string, role:Role, photoURL: string, emailVerified: boolean) {
        this.uid = uid;
        this.email = email;
        this.displayName = displayName;
        this.password = password;
        this.role = role;
        this.photoURL = photoURL;
    }

    toString() {
        return `uid: ${this.uid}, email: ${this.email}, displayName: ${this.displayName}, password: ${this.password}, role: ${this.role}, photoURL: ${this.photoURL}`;
    } 
}

export class Role { 
    name?: string;
    value?: boolean;

    constructor (name: string, value: boolean) {
        this.name = name;
        this.value = value;
    }

    toString() {
        return `roleName: ${this.name}, roleValue: ${this.value}`;
    }
}

export interface UserWithToken extends User {
    token: string;
}