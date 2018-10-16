import {tableHeaderContainer, cell, tableRowContainer, tableContainer} from '../templates/view';
import {snakeCase} from '../utils/common_utils';

export default class Processor {
    constructor(userclassRef) {
        this.userclassRef = userclassRef;
        this.userModel = this.userclassRef.model();
        this.host = "http://localhost:3000";
        this.basepath = "/"
    }
    _constructHeader(data) {
        let arr = [];
        // loop through every declared field 
        // and make heading for the same.
        for(let key in data) {
            arr.push(
                this.userclassRef.cell(data[key].fieldname)
            );
        }
        return this.userclassRef.tableHeaderContainer(arr.join(" "));
    }
    _constructList(data) {
        // data should not be empty and it should be an array.
        if(!data && !Array.isArray(data)) {
            // return empty table row;
            // TO-DO: create a no record/data screen and return that.
            return this.userclassRef.tableRowContainer("");
        }
        // user model fields.
        let userModelFields = Object.keys(this.userModel);
        let rowHtml = "";

        // loop through every item returned from API
        return data.map((item) => {
            rowHtml = "";
            // loop through all fields declared in model
            userModelFields.map((field) => {
                // check if computed property
                if(this.userModel[field].hasOwnProperty("computed")) {
                    try {
                        // call computed function defined in model.
                        rowHtml += this.userclassRef.cell(this.userModel[field]["computed"].call(item));
                    } catch(error) {
                        // leave this.userclassRef.cell blank
                        rowHtml += this.userclassRef.cell();
                        console.error("Error occurred in computing ", field, " property. ERROR: ", error);
                    }
                } else {
                    // if field is present in response from API
                    if(item[field]) {
                        rowHtml += this.userclassRef.cell(item[field]);
                    } else {
                        // leave this.userclassRef.cell blank
                        rowHtml += this.userclassRef.cell();
                    }
                }
            });
            return this.userclassRef.tableRowContainer(rowHtml);
        }).join(" "); // merge
    }
    async _getListData() {
        let result;
        try {
            result = await $.ajax({
                type: "GET",
                url: this.host + this.basepath + snakeCase(this.userclassRef.getClassName())
            });
        } catch(error) {
            console.error("Error occurred while fetching list for ", 
                        this.userclassRef.getClassName(), ". Error: ", error);
        }
        return result;
    }
    main() {
        this.userModel.forEach(element => {
            if(this.userModel[element].hasOwnProperty("computed")) {
                return;
            }
            if(this.userModel[element]==="string") {
                console.log("Its a string type");
            }
        });
    }
    async list() {
        let headerHtml = this._constructHeader(this.userModel);
        let listData = await this._getListData();
        let listHtml = this._constructList(listData);
        return tableContainer(headerHtml + listHtml);
    }
}