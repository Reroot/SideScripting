
function PatientLookupFilterMethod() {
    //debugger;
    //filters for contact type that are patients
    let filter = "<filter type='and'><condition attribute='lai_contacttype' operator='eq' value='120850000' /></filter>";
    Xrm.Page.getControl("lai_contacttype").addCustomFilter(filter);
}
function OpportunityLookUpMethod(executionContext) {
    try {
        //Get the form context
        let formContext = executionContext.getFormContext();
        formContext.getControl("lai_contacttype").addPreSearch(PatientLookupFilterMethod);
    }
    catch (e) {
        Xrm.Utility.alertDialog(e.message);
    }
}



function lookupFilters() {
    
    console.log(formContext.getControl("lai_id_patient"));
    let formContext = executionContext.getFormContext();
    let patientFilter = "<filter type='and'><condition attribute='lai_contacttype' operator='eq' value='808280000'/>  <filter/>";
    formContext.getControl("lai_id_patient").addCustomFilter(patientFilter);
    
    try {
        formContext.getControl("lai_id_patient").addPreSearch(patientLookUpFilter());
    } catch (e) {
        Xrm.Utility.alertDialog(e.message);
    }
}


//Doctor Filter
function DoctorLookupFilter() {
    let docFilter = "<filter type='and'><condition attribute='lai_contacttype' operator='eq' value='808280001'/>  <filter/>";
    formContext.getControl("lai_id_doctor").addCustomFilter(docFilter);
}
function ApplyDoctorFilter(executionContext) {
    try {
        let formContext = executionContext().getFormContext;
        formContext.getControl("lai_id_doctor").addPreSearch(DoctorLookupFilter);
    } catch (e) {
        Xrm.Utility.alertDialog(e.message);
    }
}
}










