export class User {
    uid?: string;
    email?: string | null;
    displayName?: string | null;
    password?: string;
    roles?: Role | boolean;
    photoURL?: string | null;
    emailVerified?: boolean;

    constructor(authData:User) {
        this.uid            = authData.uid
        this.email          = authData.email
        this.displayName    = authData.displayName
        this.roles          = authData.roles
        this.photoURL       = authData.photoURL
        this.emailVerified  = authData.emailVerified
    }
}

export class Role { 
    // reader?: boolean;
    candidate?: boolean = true;
    company?: boolean = true;
    admin?: boolean = true;
}

export interface UserWithToken extends User {
    token: string;
}