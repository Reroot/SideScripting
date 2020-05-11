
var req = new XMLHttpRequest();
req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/contacts(00000000-0000-0000-0000-000000000000)?$select=lai_address,lai_age,lai_birthdate,lai_bodymassindex,lai_contacttype,lai_dummy_licensetype,lai_email,lai_gender,lai_guardian_name,lai_guardian_phone,lai_height_cm,_lai_id_insuranceplan_value,_lai_id_serviceprovider_value,lai_licensetype,lai_phone,lai_specialty", true);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
req.onreadystatechange = function() {
    if (this.readyState === 4) {
        req.onreadystatechange = null;
        if (this.status === 200) {
            var result = JSON.parse(this.response);
            var lai_address = result["lai_address"];
            var lai_age = result["lai_age"];
            var lai_age_formatted = result["lai_age@OData.Community.Display.V1.FormattedValue"];
            var lai_birthdate = result["lai_birthdate"];
            var lai_bodymassindex = result["lai_bodymassindex"];
            var lai_bodymassindex_formatted = result["lai_bodymassindex@OData.Community.Display.V1.FormattedValue"];
            var lai_contacttype = result["lai_contacttype"];
            var lai_contacttype_formatted = result["lai_contacttype@OData.Community.Display.V1.FormattedValue"];
            var lai_dummy_licensetype = result["lai_dummy_licensetype"];
            var lai_dummy_licensetype_formatted = result["lai_dummy_licensetype@OData.Community.Display.V1.FormattedValue"];
            var lai_email = result["lai_email"];
            var lai_gender = result["lai_gender"];
            var lai_gender_formatted = result["lai_gender@OData.Community.Display.V1.FormattedValue"];
            var lai_guardian_name = result["lai_guardian_name"];
            var lai_guardian_phone = result["lai_guardian_phone"];
            var lai_height_cm = result["lai_height_cm"];
            var lai_height_cm_formatted = result["lai_height_cm@OData.Community.Display.V1.FormattedValue"];
            var _lai_id_insuranceplan_value = result["_lai_id_insuranceplan_value"];
            var _lai_id_insuranceplan_value_formatted = result["_lai_id_insuranceplan_value@OData.Community.Display.V1.FormattedValue"];
            var _lai_id_insuranceplan_value_lookuplogicalname = result["_lai_id_insuranceplan_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
            var _lai_id_serviceprovider_value = result["_lai_id_serviceprovider_value"];
            var _lai_id_serviceprovider_value_formatted = result["_lai_id_serviceprovider_value@OData.Community.Display.V1.FormattedValue"];
            var _lai_id_serviceprovider_value_lookuplogicalname = result["_lai_id_serviceprovider_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
            var lai_licensetype = result["lai_licensetype"];
            var lai_phone = result["lai_phone"];
            var lai_specialty = result["lai_specialty"];
        } else {
            Xrm.Utility.alertDialog(this.statusText);
        }
    }
};
req.send();