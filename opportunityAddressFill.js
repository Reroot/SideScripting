//on change
function opportunityAddressFill(executionContext) {
    var req = new XMLHttpRequest();
    req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/contacts?$select=address1_addressid,address1_addresstypecode,address1_city,address1_country,address1_county,address1_line1,address1_line2,address1_line3,address1_postalcode,address1_postofficebox,lai_address,nickname,yomifirstname,yomifullname,yomilastname", true);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
    req.onreadystatechange = function() {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            let load = req.onload() = () => {
                console.log(xhr.response);
            }

            if (this.status === 200) {
                var results = JSON.parse(this.response);
                for (var i = 0; i < results.value.length; i++) {
                    var address1_addressid = results.value[i]["address1_addressid"];
                    var address1_addresstypecode = results.value[i]["address1_addresstypecode"];
                    var address1_addresstypecode_formatted = results.value[i]["address1_addresstypecode@OData.Community.Display.V1.FormattedValue"];
                    var address1_city = results.value[i]["address1_city"];
                    var address1_country = results.value[i]["address1_country"];
                    var address1_county = results.value[i]["address1_county"];
                    var address1_line1 = results.value[i]["address1_line1"];
                    var address1_line2 = results.value[i]["address1_line2"];
                    var address1_line3 = results.value[i]["address1_line3"];
                    var address1_postalcode = results.value[i]["address1_postalcode"];
                    var address1_postofficebox = results.value[i]["address1_postofficebox"];
                    var lai_address = results.value[i]["lai_address"];
                    var nickname = results.value[i]["nickname"];
                    var yomifirstname = results.value[i]["yomifirstname"];
                    var yomifullname = results.value[i]["yomifullname"];
                    var yomilastname = results.value[i]["yomilastname"];
                }
            } else {
                Xrm.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send();

    console.log(req.results);
    //var formContext = executioncontext.getFormContext();
}

