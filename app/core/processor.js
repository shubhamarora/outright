import {tableHeader} from '../templates/view';

export default class Processor {
    constructor(userclassRef) {
        this.userclassRef = userclassRef;
        this.userModel = this.userclassRef.model();
    }
    _constructHeader(data) {
        let arr = [];
        for(let key in data) {
            arr.push(data[key].fieldname);
        }
        return tableHeader(arr);
    }
    _constructData() {
        $.ajax({
            type: "GET",
            url: ""
        })
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
    view() {
        return this._constructHeader(this.userModel);
    }
}