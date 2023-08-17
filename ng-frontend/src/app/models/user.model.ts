export interface User {
    uid?: string;
    email?: string | null;
    displayName?: string;
    password?: string;
    role?: boolean | any ;
    photoURL?: string | null;
    emailVerified?: boolean;

    // constructor(authData:User) {
    //     this.uid            = authData.uid
    //     this.email          = authData.email
    //     this.displayName    = authData.displayName
    //     this.role          = authData.role?.valueOf
    //     this.photoURL       = authData.photoURL
    //     this.emailVerified  = authData.emailVerified
    // }
}

export class Role { 
    // reader?: boolean;
    candidate?: boolean = false;
    company?: boolean = false;
    admin?: boolean = false;
}

export interface UserWithToken extends User {
    token: string;
}