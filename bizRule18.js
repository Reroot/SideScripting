function preferredmethod(executionContext) {
    formContext = executionContext.getFormContext();
    var d = new Date();
    var n = d.getFullYear();
    var agefix = 0;//get age from birthday
    try {
       debugger;
       agefix = (n) - formContext.getAttribute("lai_birthdate").getValue().getFullYear();
       console.log((n) - formContext.getAttribute("lai_birthdate").getValue().getFullYear());
       if(agefix > 18) {
            Xrm.Page.getControl("lai_guardian_name").setVisible(false);
            Xrm.Page.getControl("lai_guardian_phone").setVisible(false);
        } else {
            Xrm.Page.getControl("lai_guardian_name").setVisible(true);
            Xrm.Page.getControl("lai_guardian_phone").setVisible(true);
        }
    }
    catch (e)
    {
        Xrm.Utility.alertDialog(e.message);
    }
}