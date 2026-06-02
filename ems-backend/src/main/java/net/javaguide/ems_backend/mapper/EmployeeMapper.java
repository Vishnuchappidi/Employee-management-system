package net.javaguide.ems_backend.mapper;

import net.javaguide.ems_backend.dto.EmployeeDto;
import net.javaguide.ems_backend.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto  mapToEmployeeDto(Employee employee){
return new EmployeeDto(
employee.getId(),
employee.getFirstName(),
employee.getLastName(),
employee.getEmail());
}
public static Employee mapToEmployee(EmployeeDto employeeDto){
return new Employee(
        employeeDto.getId(),
        employeeDto.getFirstName(),
        employeeDto.getLastName(),
        employeeDto.getEmail()
     );
}
}