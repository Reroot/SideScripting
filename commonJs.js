function getCommonRetrive(query)
{
    var getReturn = null;
    var req = new XMLHttpRequest();
    req.open("GET", Xrm.Page.context.getClientUrl() + query, false);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
    req.send();
    if (req.status === 200) {
        var results = JSON.parse(req.response);
        if (results != null && results.value.length > 0) {
            getReturn = results;
        }
    }
    else {
        Xrm.Utility.alertDialog("Error while getCommonRetrive :" + req.statusText);
    }
    return getReturn;
}

function retriveSingle(query) {
    var getReturn = null;
    var req = new XMLHttpRequest();
    req.open("GET", Xrm.Page.context.getClientUrl() + query, false);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
    req.send();
    if (req.status === 200) {
        var results = JSON.parse(req.response);
        if (results != null) {
            getReturn = results;
        }
    }
    else {
        Xrm.Utility.alertDialog("Error while retriveSingle :" + req.statusText);
    }
    return getReturn;
}

function Update(query, entity) {

    var result = false;

    var req = new XMLHttpRequest();
    req.open("PATCH", Xrm.Page.context.getClientUrl() + query, false);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");

    req.onreadystatechange = null;
    req.send(JSON.stringify(entity));

    if (req.status === 204) {
        result = true;
    }
    else {
        Xrm.Utility.alertDialog("Error while Update :" + req.statusText);
        return result;
    }

    return result;
}


function SetLookUpNull(query) {

    var result = false;

    var req = new XMLHttpRequest();
    req.open("DELETE", Xrm.Page.context.getClientUrl() + query, false);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");

    req.onreadystatechange = null;
    req.send();

    if (req.status == 204) {
        result = true;
    }
    else {
        Xrm.Utility.alertDialog("Error while SetLookUpNull :" + req.statusText);
        result = false;
    }

    return result;
}


function SetLookUp(fieldName, fieldType, fieldId, value) {

    // *** FUNCTION: SetLookUp
    // *** PARAMS:
    // ***    fieldName = The name of the lookup field  
    // ***    fieldType = The type of field (contact, account etc)
    // ***    fieldId = The ID of the value to set (GUID)
    // ***    value = the value(name) to set


    if (fieldType != undefined && fieldId != undefined && value != undefined) {
        var object = new Array();
        object[0] = new Object();
        object[0].id = fieldId;
        object[0].name = value;
        object[0].entityType = fieldType;
        Xrm.Page.getAttribute(fieldName).setValue(object);
    }

}

function IsAdminUser() {
    var ConditionString = "System Administrator";
    var req = new XMLHttpRequest();

    req.open("GET", encodeURI(Xrm.Page.context.getClientUrl() + "/api/data/v9.1/roles?$select=name,roleid&$filter=name eq '" + ConditionString + "'"), false);

    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
    req.send();

    if (req.status === 200) {

        var results = JSON.parse(req.response);
        var Name = results.value[0]["name"];
        var RoleId = results.value[0]["roleid"];
        var currentUserRoles = Xrm.Page.context.getUserRoles();

        //Check whether current user roles has the role passed as argument
        for (var i = 0; i < currentUserRoles.length; i++) {
            var userRole = currentUserRoles[i];
            if (GuidsAreEqual(userRole, RoleId)) {
                return true;
            }
        }
    }
    else {

        Xrm.Utility.alertDialog("Error Odata in IsAdminUser: " + req.statusText);
    }

    return false;
}

function GuidsAreEqual(guid1, guid2) {

    var isEqual = false;

    if (guid1 == null || guid2 == null) {
        isEqual = false;
    }
    else {
        isEqual = (guid1.replace(/[{}]/g, "").toLowerCase() == guid2.replace(/[{}]/g, "").toLowerCase());
    }
    return isEqual;
}



function ShowHideAttribute(attribute, showhide) {

    if (Xrm.Page.getControl(attribute) != null)
        Xrm.Page.getControl(attribute).setVisible(showhide)
}

function SetFieldRequiredLevel(attribute, yesno) {

    if (Xrm.Page.getAttribute(attribute) != null)
        Xrm.Page.getAttribute(attribute).setRequiredLevel(yesno);
}

function ChangeFieldLabel(attribute, Label) {

    if (Xrm.Page.getControl(attribute) != null)
        Xrm.Page.getControl(attribute).setLabel(Label);
}

function ShowHideSession(tab, section, showhide) {

    if (Xrm.Page.ui.tabs.get(tab) != null && Xrm.Page.ui.tabs.get(tab).sections.get(section) != null)
        Xrm.Page.ui.tabs.get(tab).sections.get(section).setVisible(showhide);
}

function ShowHideTab(tab, showhide) {

    if (Xrm.Page.ui.tabs.get(tab) != null)
        Xrm.Page.ui.tabs.get(tab).setVisible(showhide);
}

function ZipCodeValidation(executionContext) {
    var formContext = executionContext.getFormContext();
    if (formContext.getAttribute("address1_postalcode") != null && formContext.getAttribute("address1_postalcode").getValue() != null) {
        try {

            var ZipCode = formContext.getAttribute("address1_postalcode").getValue();
            var validation = /[^0-9a-z\-+]/ig;
            if (validation.test(ZipCode)) {
                formContext.getControl("address1_postalcode").setNotification('Invalid value, Special Character are not allowed');
                // var ZipCodeVal = ZipCode.getValue().replace(/[^0-9,A-Z,a-z]/g, "");
                //formContext.getAttribute("address1_postalcode").setValue(ZipCodeVal);

            }
            else {
                formContext.getControl("address1_postalcode").clearNotification();
            }


        }
        catch (e) {
        }
    }
}

function refreshRollup(Entity, GuidId, fieldname) {
    var requestUrl = Xrm.Page.context.getClientUrl() + "/api/data/v9.0/CalculateRollupField(Target=@tid,FieldName=@fn)?@tid={'@odata.id':'" + Entity + "(" + GuidId + ")'}&@fn='" + fieldname + "'";
    var req = new XMLHttpRequest();
    req.open("GET", requestUrl, false);
    req.send();
}

function RedirectToForm(GuidId, EntityName) {
    var entityFormOptions = {};
    entityFormOptions["entityName"] = EntityName
    entityFormOptions["entityId"] = GuidId;

    // Open the form.
    if (GuidId != null) {
        Xrm.Navigation.openForm(entityFormOptions).then(
            function (success) {
                console.log(success);
            },
            function (error) {
                console.log(error);
            });
    }
}// JavaScript source code
