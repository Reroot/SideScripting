// JavaScript source code
function preferredmethod(executionContext) {
    formContext = executionContext.getFormContext();
    try {
       debugger;
        v_preferredmethodtxt = Xrm.Page.getAttribute("preferredcontactmethodcode").getText();
        v_preferredmethod = Xrm.Page.getAttribute("preferredcontactmethodcode").getValue();
        if (v_preferredmethod == 2)
        {
            formContext.getAttribute("emailaddress1").setRequiredLevel("required");
            formContext.getAttribute("telephone1").setRequiredLevel("none");
            formContext.getAttribute("mobilephone").setRequiredLevel("none");
            formContext.getAttribute("fax").setRequiredLevel("none");
            formContext.getAttribute("address1_composite").setRequiredLevel("none");
        }
        if (v_preferredmethod == 3) {
            formContext.getAttribute("emailaddress1").setRequiredLevel("none");
            formContext.getAttribute("telephone1").setRequiredLevel("required");
            formContext.getAttribute("mobilephone").setRequiredLevel("required");
            formContext.getAttribute("fax").setRequiredLevel("none");
            formContext.getAttribute("address1_composite").setRequiredLevel("none");
        }
        if (v_preferredmethod == 4) {
            formContext.getAttribute("emailaddress1").setRequiredLevel("none");
            formContext.getAttribute("telephone1").setRequiredLevel("none");
            formContext.getAttribute("mobilephone").setRequiredLevel("none");
            formContext.getAttribute("fax").setRequiredLevel("required");
            formContext.getAttribute("address1_composite").setRequiredLevel("none");
        }
        if (v_preferredmethod == 5) {
            Xrm.Page.getAttribute("emailaddress1").setRequiredLevel("none");
            Xrm.Page.getAttribute("telephone1").setRequiredLevel("none");
            Xrm.Page.getAttribute("mobilephone").setRequiredLevel("none");
            Xrm.Page.getAttribute("fax").setRequiredLevel("none");
            Xrm.Page.getAttribute("address1_composite").setRequiredLevel("required");
        }
        if (v_preferredmethod == 1) {
            Xrm.Page.getAttribute("emailaddress1").setRequiredLevel("required");
            Xrm.Page.getAttribute("telephone1").setRequiredLevel("required");
            Xrm.Page.getAttribute("mobilephone").setRequiredLevel("required");
            Xrm.Page.getAttribute("fax").setRequiredLevel("required");
            Xrm.Page.getAttribute("address1_composite").setRequiredLevel("required");
        }
    }
    catch (e)
    {
        Xrm.Utility.alertDialog(e.message);
    }
}