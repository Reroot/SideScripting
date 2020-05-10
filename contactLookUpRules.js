function applyFilters(params) {
//hit methods
    ApplyDoctorFilter(DoctorLookupFilter());
    ApplyPatientFilter(patientLookUpFilter());
}


//Filter Patient
function patientLookUpFilter() {
    let patientFilter = "<filter type='and'><condition attribute='lai_contacttype' operator='eq' value='808280000'/>  <filter/>";
    formContext.getControl("lai_id_patient").addCustomFilter(patientFilter);
}
//Apply Patient
function ApplyPatientFilter(executionContext) {
    try {
        let formContext = executionContext().getFormContext;
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






