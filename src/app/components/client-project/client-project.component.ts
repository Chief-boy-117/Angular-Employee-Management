import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, ClientProject, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    clientId: new FormControl(""),
  });

  clientSrv = inject(ClientService);
  clientList: Client[] = [];
  employeeList: Employee[] = [];

  firstName = signal("Angular signal");
  projectList = signal<ClientProject[]>([]);

  ngOnInit(): void {
    this.getAllClient();
    this.getAllEmployee();
    this.getAllClientProjects();
  }

  changeFname = () => {
    this.firstName.set("Angular signal changed");
  }

  getAllClientProjects() {
    this.clientSrv.getAllClientProjects().subscribe((res: APIResponseModel) => {
      this.projectList.set(res.data);
    });
  }

  getAllEmployee() {
    this.clientSrv.getAllEmployee().subscribe((res: APIResponseModel) => {
      this.employeeList = res.data;
    })
  }

  getAllClient() {
    this.clientSrv.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    })
  }

  onSaveProject() {
    const formValue = this.projectForm.value;

    this.clientSrv.addUpdateClientProject(formValue).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("Project created successfully");
      } else {
        alert(res.message);
      }
    })
  }
}
