
//Filter Patient
function patientLookUpFilter() {
    let patientFilter = "<filter type='and'><condition attribute='lai_contacttype' operator='eq' value='808280000'/>  <filter/>";
    formContext.getControl("lai_id_patient").addCustomFilter(patientFilter);
}
function ApplyPatientFilter(executionContext) {
    try {
        let formContext = executionContext().getFormContext;
        formContext.getControl().addPreSearch(insuranceLookupFilter);
    } catch (e) {
        Xrm.Utility.alertDialog(e.message);
    }
}

//Doctor Filter
function DoctorLookupFilter() {
    let docFilter = "<filter type='and'><condition attribute='lai_contacttype' operator='eq' value='808280001'/>  <filter/>";
    formContext.getControl("lai_id_doctor").addCustomFilter(docFilter);
}

//Disabling by contact type
function Type() {
    let formContext = executionContext().getControl();
    let contactType = formContext.getAttribuite("lai_contact_type").getValue();
    let age = formContext.getAttribuite("lai_age").getValue();
    disable();
}


function disable() {
    //if patient is a contact type, show body stuff and hie the liseense stuff
    if(contactType == '808280000') {
        formContext.getControl("lai_id_insuranceplan").setVisible(true);
        formContext.getControl("lai_id_serviceprovier").setVisible(true);
        formContext.getControl("lai_id_serviceprovier").setRequiredLevel("none");
        formContext.getControl("lai_id_height_cm").setVisible(true);
        formContext.getControl("lai_id_weight_cm").setVisible(true);
        formContext.getControl("lai_bodymassindex").setVisible(true);
        formContext.getControl("lai_licensetype").setValue(null);
        formContext.getControl("lai_licensetype").setVisible(false);
        formContext.getControl("lai_specialty").setVisible(false);
    }
}

    //get account/contact type console.log(Xrm.Page.getControl("lai_accounttype")._options[1].text);
    // console.log(Xrm.Page.getControl("lai_accounttypename"));
    // console.log(Xrm.Page.getControl("accountclassificationcodename"));
    //let filter1 = "<filter type='and'><condition attribute='lai_accounttype' operator='eq' value='808280000'/><filter/>";
    //Xrm.Page.getControl("accountid").addCustomFilter(filter1);
    //console.log(Xrm.Page.getControl("lai_accounttype").getValue());
    //.addCustomFilter(""));
    // if (Xrm.Page.getControl("lai_accounttype")._options[1].text == "Insurance Company") {

        //console.log(Xrm.Page.getControl("lai_companytype.fieldControl-option-set-select".getValue()));
        //Xrm.Page.getControl("lai_companytype".setVisible(true));
        //Xrm.Page.getControl("lai_accounttype")._options[1].
        //
        //Xrm.Page.getControl("lai_accounttype".setVisible(false));
        //console.log(Xrm.Page.getControl("lai_insuranceparticipationname"));
        //         for(let i = 1;i<3;i++) {
        //           console.log(Xrm.Page.getControl("lai_accounttype")._options[i]);
        //           Xrm.Page.getControl("lai_accounttype")._options[i].setVisible(false);
        //         
        //}
    // } else if ((Xrm.Page.getControl("lai_accounttype")._options[2].text) == "Service Provider") {
    //     //Xrm.Page.getControl("lai_providertypename".setVisible(true));
    // } else {
    // }

    //console.log(Xrm.Page.getControl("lai_accounttype").getAttribuite('808280000'));
    //console.log(Xrm.Page.getControl("lai_accounttype").getAttribuite());
    //let filterw = "<filter type='and'><condition attribute='lai_accounttype' operator='eq' value='808280000'/>  <filter/>";
    // 808280000
    //Xrm.Page.getControl("lai_accounttype").addCustomFilter(filter);
    // Xrm.Page.getControl("lai_accounttype").getAttribuite();
    //.addCustomFilter(filterProvider);

  //console.log(Xrm.Page.getControl("lai_accounttype").getAttribuite('808280000'));
  //console.log(Xrm.Page.getControl("lai_accounttype").getAttribuite());
  //let filter1 = "<filter type='and'><condition attribute='lai_accounttype' operator='eq' value='808280000'/>  <filter/>";
  // 808280000

 //Xrm.Page.getControl("lai_accounttype").addCustomFilter(filter);
 // Xrm.Page.getControl("lai_accounttype").getAttribuite();
  //.addCustomFilter(filterProvider);
//Replace Business Rule for the following use cases:
// for the Account Type: 
// If the account is an insurance company, show the field for "Company Type"  (i.e. Private Company, or Government Sponsored).
// Else if the account is a service provider, show the field for "Provider Type"  (i.e. Private Practice, Urgent Care, Hospital, etc.)


var fetchXml = [
    "<fetch top='50'>",
    "  <entity name='account'>",
    "    <attribute name='lai_address' />",
    "    <attribute name='lai_accounttype' />",
    "    <attribute name='lai_providertypename' />",
    "    <attribute name='accountcategorycodename' />",
    "    <attribute name='accountid' />",
    "    <attribute name='lai_companytypename' />",
    "    <attribute name='name' />",
    "    <attribute name='accountratingcodename' />",
    "    <attribute name='accountnumber' />",
    "    <attribute name='lai_accounttypename' />",
    "    <attribute name='lai_insuranceparticipationname'>",
    "      <!---->",
    "    </attribute>",
    "    <attribute name='accountclassificationcodename' />",
    "    <filter />",
    "  </entity>",
    "</fetch>",
        ].join("");