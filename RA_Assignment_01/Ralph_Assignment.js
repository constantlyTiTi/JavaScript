function mainFunction()
{
    let employeeNumber=prompt ("Enter the employee Number:");
    let employeeName=prompt("Enter the employee Name: ");
    let department=prompt("Enter the department: ");
    let hours=Number(prompt("Enter how many hours did the employee work? "));
    for (;isFinite(hours)!=true;)
    {
        window.alert("Invalid Enter: please enter a Number");
        hours=Number(prompt("Pls Enter how many hours did the employee work? "));
    }
    let employeeCode=prompt("Enter the employee type code: ");
    let grossSalary;
    let netPaySalary;
    let deductionSalary;

    
    for (;employeeCode!="F"&&employeeCode!="f"&&employeeCode!="r"&&employeeCode!="R";)
    {
        window.alert("Invalid Enter: please enter valid code");
        employeeCode=prompt("Enter the employee type code: ");
    }
     
    if (employeeCode=="F"||employeeCode=="f")
        {
            let facultyQualificationCode=prompt("Enter the qualification code: ");
                for (;isFinite(facultyQualificationCode)!=true;)
                {
                    window.alert("Invalid Enter: please enter a code");
                    facultyQualificationCode=prompt("Pls Enter the qualification code: ");
                }
                
            grossSalary=faculty(facultyQualificationCode,hours);
        }
    else (employeeCode=="R"||employeeCode=="r")
        {
            let fixGrossSalary=Number(prompt("Enter the fixed gross salary: "));
            for (;isFinite(fixGrossSalary)!=true;)
            {   
                window.alert("Invalid Enter: please enter a Number");
                fixGrossSalary=Number(prompt("Enter the fixed gross salary: "));
            }
        grossSalary=regularSalary(fixGrossSalary,hours);
    }        
   
    deductionSalary=deduction(grossSalary);
    netPaySalary=netPay(deductionSalary,grossSalary);
    console.log("Employee name is "+employeeName+", "+" id ["+employeeNumber+"], department is "+department+", worked for "+hours+"h, "
                + " gross salary is $"+grossSalary+", deduction is "+deductionSalary+", the net pay is $"+netPaySalary);
}


function regularSalary(fixGrossSalary,actualWorkHours)
{
    const clockHours=160;
    let actualGrossSalary;
    let ratePay=fixGrossSalary/clockHours;

    if (actualWorkHours<clockHours)
    {
        actualGrossSalary= ratePay*actualWorkHours;
    }
    else if (actualWorkHours==clockHours)
    {
        actualGrossSalary=fixGrossSalary;
    }
    else
    {
        actualGrossSalary=2*ratePay*(actualWorkHours-clockHours)+fixGrossSalary;
    }
    return actualGrossSalary;
}

function faculty(facultyQualificationCode,actualWorkHours)
{
    let actualGrossSalary;
    const masterPayRate=175.00;
    const masterTeachAllownce=1500.00
    const bachelorPayRate=100.00;
    const bachelorTeachAllowce=600.00;

    if (facultyQualificationCode=="M"||facultyQualificationCode=="m")
    {
        actualGrossSalary=masterPayRate*actualWorkHours+masterTeachAllownce;
    }
    else if (facultyQualificationCode=="B"||facultyQualificationCode=="b")
    {
        actualGrossSalary=bachelorPayRate*actualWorkHours+bachelorTeachAllowce;
    }
    return actualGrossSalary;
}

function deduction(actualGrossSalary)
{
    const highHealthInsur=33;
    const lowHealthInsur=19.2;
    const salaryLimit=3000;
    const taxFree=2500;
    let deduction;
    const taxRate=0.25;
    if (actualGrossSalary<=taxFree)
    {
        deduction=lowHealthInsur;
    }
    else
    {
        if (actualGrossSalary>salaryLimit)
        {
            deduction=(actualGrossSalary-taxFree)*taxRate+highHealthInsur;
        }
        else
        {
            deduction=(actualGrossSalary-taxFree)*taxRate+lowHealthInsur;
        }
    }
    return deduction;
}
function netPay(deduction,actualGrossSalary)
{
    let netPaySalary;
    netPaySalary=actualGrossSalary-deduction;
    return netPaySalary;
}