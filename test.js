function OnChange(executionContext) {

	var fetchXml = [
        "<fetch top='10' distinct='true'>",
        "  <entity name='contact'>",
        "    <attribute name='lai_age' />",
        "    <attribute name='lai_birthdate' />",
        "    <attribute name='contactid' />",
        "    <attribute name='address1_name' />",
        "    <attribute name='lai_guardian_name' />",
        "    <attribute name='lai_guardian_phone' />",
        "  </entity>",
        "</fetch>",
            ].join("");
    try {
        if(fetchXml.getAttribute("lai_age").getValue() > 18) {
            Xrm.Page.getControl("lai_guardian_name").setVisible(false);
            Xrm.Page.getControl("lai_guardian_phone").setVisible(false);
        } else {
            Xrm.Page.getControl("lai_guardian_name").setVisible(true);
            Xrm.Page.getControl("lai_guardian_phone").setVisible(true);
        }

        // for(var c in fetchXml.getAttribute("lai_age"))  {
        //     System.Console.WriteLine(fetchXml.getAttribute("lai_age").getValue() > 18);
        //     //fetchXml.getAttribute("lai_age").getValue() > 18
        // }
        

        // if(fetchXml.Attributes["name"]) > 18) {

        // }
        // function TickerChange() {
        //     if(Xrm.Page.getAttribute("tickersymbol").getValue() == null) {
        //         Xrm.Page.getControl("fax").setVisible(false);
        //     }
        //     else {
        //         Xrm.Page.getControl("fax").setVisible(true);
        //     }
        //  }





        //Get the form context
        var formContext = executionContext.getFormContext();
        //Sample code for On Load Event
        //Xrm.Utility.alertDialog("This is an alert for On Load Event.");
    }
    catch (e) {
        System.Console.WriteLine(fetchXml.getAttribute("lai_age").getValue());
        
        Xrm.Utility.alertDialog(e.message);
    }
}

// Replace Business Rule for Age of Patient(less or greater 18) with a 
//Web Resource.
// Write a function in JS that gets execution context as a parameter 
//and sets the fields as visible/required and vice-versa based on the
// condition.
// Add it as Web Resource to Dynamics 365 Solution.

// Register the library to the event handler(OnChange) 
//on the age/date of birth field(depending on your solution) and define 
//which function the event handler should fire.

// As a user when I enter Patient's details, if age is less than 18 
//I want to see the Patient's parents' details/fields, otherwise they 
//should be hidden.
// https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls