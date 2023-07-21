export interface User {
    uid?: number;
    email?: string;
    username?: string;
    password?: string;
    rol?: number;
    photoURL: string;
   emailVerified: boolean;
}

// const users: User[] = [
//     {
//         uid: 1,
//         email: "candidato1@candidato.es",
//         username: "Candidato1",
//         password: "1234",
//         rol: 1
//     },
//     {
//         uid: 2,
//         email: "empresa1@empresa.es",
//         username: "Empresa1",
//         password: "1234",
//         rol: 1
//     },
//     {
//         uid: 0,
//         email: "admin@admin.es",
//         username: "Admin",
//         password: "admin",
//         rol: 1
//     }
    
// ]
