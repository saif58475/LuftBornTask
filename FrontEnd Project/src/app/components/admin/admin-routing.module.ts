import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewDepartmentComponent } from "./Department/view-department/view-department.component";
import { InsertDepartmentComponent } from "./Department/insert-department/insert-department.component";
import { InsertEmployeeComponent } from "./Employee/insert-employee/insert-employee.component";
import { ViewEmployeeComponent } from "./Employee/view-employee/view-employee.component";
import { ViewUserComponent } from "./User/view-user/view-user.component";
import { InsertUserComponent } from "./User/insert-user/insert-user.component";

const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "ViewDepartment",
                component: ViewDepartmentComponent,
            },
            {
                path: "InsertDepartment",
                component: InsertDepartmentComponent,
            },
            {
                path: "ViewEmployee",
                component: ViewEmployeeComponent,
            },
            {
                path: "InsertEmployee",
                component: InsertEmployeeComponent,
            },
            {
                path: "ViewUser",
                component: ViewUserComponent,
            },
            {
                path: "InsertUser",
                component: InsertUserComponent,
            },
],
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
})
export class AdminRoutingModule { }
