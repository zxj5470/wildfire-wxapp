type NetworkRequestData = MyData | object | ArrayBuffer;

export interface MyData {
    status: number,
    results: object | Array<object>
    message?: string
}

// export interface CompanyInfo {
//     account: string;
//     teamName: string;
//     teamBelong: string;
//     teamLeader: string;
//     teamIntro: string;
// }
