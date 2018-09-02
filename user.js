export default class User {
    constructor() {
        this.endpoint = "/api/v1/getuser";
    }

    model() {
        return {
            fname: {
                fieldname: "First Name",
                type: "string",
                required: true, // boolean,
            },
            lname: {
                fieldname: "Last Name",
                type: "string"
            },
            fullname: {
                fieldname: "Full Name",
                type: "string",
                computed: function() {
                    return this.fname + this.lname ;
                }
            },
        }
    }

    template() {
        return {
            // overridden handlebar object.
        }
    }

    role() {
        return [] // array of role type who can access this page.
    }

    validation() {
        // function to execute before submit.
    }
}

