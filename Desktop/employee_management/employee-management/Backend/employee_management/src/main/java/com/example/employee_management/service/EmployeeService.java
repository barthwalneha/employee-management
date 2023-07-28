package com.example.employee_management.service;

import com.example.employee_management.model.Employee;
import com.example.employee_management.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EmployeeService {

    public Employee addEmployee(Employee employee);
    public void  deleteEmployee(long id);
    public Employee updateEmployee( long id, Employee emp);
    public List<Employee> getListOfAllEmployee();
    public Employee findEmployeeById(long id);

}
