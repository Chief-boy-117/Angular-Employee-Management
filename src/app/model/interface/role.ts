export interface IRole {
    roleId: number,
    role: string
}

export interface IDesignation {
    designationId: string,
    designation: number
}

export interface APIResponseModel {
    message: string,
    result: boolean,
    data: any
}

export interface Employee {
    empName: string,
    empId: number,
    empCode: string,
    empEmailId: string,
    empDesignation: string,
    role: string
}