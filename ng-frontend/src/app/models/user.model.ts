export class User {
    uid?: number | string;
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
        this.emailVerified = emailVerified;
    }

    toString() {
        return `uid: ${this.uid}, email: ${this.email}, displayName: ${this.displayName}, password: ${this.password}, role: ${this.role}, photoURL: ${this.photoURL}`;
    } 
}

export type Role = 'candidate' | 'company' | 'admin';

// export class Role { 
//     name?: string;
//     value?: boolean;

//     constructor (name: string, value: boolean) {
//         this.name = name;
//         this.value = value;
//     }

//     toString() {
//         return `roleName: ${this.name}, roleValue: ${this.value}`;
//     }
// }

export interface UserWithToken extends User {
    token: string;
}

// Firestore data converter
export const userConverter = {
    toFirestore: (user: User) => {
        return {
            uid: user.uid,
            email: user.email,
            password: user.password,
            displayName: user.displayName,
            photoURL: user.photoURL,
            role: user.role,
            };
    },
    fromFirestore: (snapshot: { data: (arg0: any) => any; }, options: any) => {
        const data = snapshot.data(options);
        return new User(data.uid, data.email, data.displayName, data.password, data.role, data.photoURL, data.emailVerified);
    }
};
