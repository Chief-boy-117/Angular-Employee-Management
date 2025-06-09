export class Client {
    clientId: number;
    contactPersonName: string;
    companyName: string;
    address: string;
    city: string;
    pincode: string;
    state: string;
    employeeStrength: number;
    gstNo: string;
    contactNo: string;
    regNo: string;

    // constructor();
    constructor(copy?: Client) {
        if (!copy) {
            this.clientId = 0;
            this.contactPersonName = "";
            this.companyName = "";
            this.address = "";
            this.city = "";
            this.pincode = "";
            this.state = "";
            this.employeeStrength = 0;
            this.gstNo = "";
            this.contactNo = "";
            this.regNo = "";
        } else {
            this.clientId = copy.clientId;
            this.contactPersonName = copy.contactPersonName;
            this.companyName = copy.companyName;
            this.address = copy.address;
            this.city = copy.city;
            this.pincode = copy.pincode;
            this.state = copy.state;
            this.employeeStrength = copy.employeeStrength;
            this.gstNo = copy.gstNo;
            this.contactNo = copy.contactNo;
            this.regNo = copy.regNo;
        }
    }
}