export interface districtinfo{
state: string,
districtData: [districtData]
}

export interface districtData{
    confirmed:string,
    deceased:string,
    recoverd:string,
    active:string
}