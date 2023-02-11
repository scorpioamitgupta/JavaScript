class Employee {

    setEmpDetails (name, id, phoneNo) //name, id, phoneNo are arguements
                                      // setEmpDetails is the function
    {
            this.name = name; //setting the class variable
            this.id = id;
            this.phoneNo = phoneNo;
        
    }

    getEmpName() {                   //get methods
        return this.name;}
    getEmpID() {
        return this.id;  }
    getEmpPhoneNo() {     
        return this.phoneNo;}

        
    }
    
    let emp1 = new Employee(); //to instantiate the class
    emp1.setEmpDetails("John", 1002, 4083686143);
    
    emp1.getEmpID;
    emp1.getEmpName;
    emp1.getEmpPhoneNo;
    
    console.log(emp1.name);
    console.log(emp1.id);
    console.log(emp1.phoneNo);