const NAME_REGEX = /^\w{2,}(\s\w{2,})?\s\w{2,}$/i
const LETTERS_ONLY = /^[a-z ]+$/i
const SPACE_REGEX = /^[\S]+(\s+[^\s]+)*$/i
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i

$().ready(function() {

  $("#subscribe-form").validate({
    rules: {
      EMAIL: {
      required: true,
      email: true
      }
    },
    messages: {
      EMAIL: {
      required: "This Field is Required",
      email: "Plase Enter Valid Email Address"
      }
    }
  });

  $("#contact-form").validate({
    rules: {
      fullname: {
      required: true,
      validName: true,
      lettersOnly: true,
      noSpace: true
      },
      email: {
      required: true,
      email: true
      },
      mobile: {
      required: true,
      number: true,
      minlength: 7,
      maxlength: 16
      },
      company: {
      required: true,
      noSpace: true
      },
      message: {
      required: true,
      minlength: 20
      }
    },
    messages: {
      fullname: {
      required: "This Field is Required",
      validName: "Please Enter Valid Name",
      lettersOnly: "Please Enter Only Alphabets",
      noSpace: "Please Remove Unnecessary white-spaces"
      },
      email: {
      required: "This Field is Required",
      email: "Please Enter Valid Email Address"
      },
      mobile: {
      required: "This Field is Required",
      number: "Please Enter Numbers Only",
      minlength: "Please Enter Valid Mobile Number",
      maxlength: "Please Enter Valid Mobile Number"
      },
      company: {
      required: "This Field is Required",
      noSpace: "Please Remove Unnecessary white-spaces"
      },
      message: {
      required: "This Field is Required",
      minlength: "Minimum 20 Characters Required"
      }
    }
  });

  $("#supplier-form-modal").validate({
    rules: {
      fullname: {
      required: true,
      validName: true,
      lettersOnly: true,
      noSpace: true
      },
      email: {
      required: true,
      email: true
      },
      mobile: {
      required: true,
      number: true,
      minlength: 7,
      maxlength: 16
      },
      company: {
      required: true,
      noSpace: true
      },
      message: {
      required: true,
      minlength: 20
      },
      AdharCardNumber:{
        required: true
      },
      ProductsAvailable:{
        required: true
      },
      RegistrationNumber:{
        required: true
      }
    },
    messages: {
      fullname: {
      required: "This Field is Required",
      validName: "Please Enter Valid Name",
      lettersOnly: "Please Enter Only Alphabets",
      noSpace: "Please Remove Unnecessary white-spaces"
      },
      email: {
      required: "This Field is Required",
      email: "Please Enter Valid Email Address"
      },
      mobile: {
      required: "This Field is Required",
      number: "Please Enter Numbers Only",
      minlength: "Please Enter Valid Mobile Number",
      maxlength: "Please Enter Valid Mobile Number"
      },
      company: {
      required: "This Field is Required",
      noSpace: "Please Remove Unnecessary white-spaces"
      },
      message: {
      required: "This Field is Required",
      minlength: "Minimum 20 Characters Required"
      },
      AdharCardNumber:{
        required: "This Field is Required"
      },
      ProductsAvailable:{
        required: "This Field is Required"
      },
      RegistrationNumber:{
        required: "This Field is Required"
      }
    }
  });

  // Accept Only Alphabets and Max one Space.
  // First Name with minimum 2 Alphabets
  // Last name with Minimum 2 Alphabets.
    jQuery.validator.addMethod("validName", function(value, element) {
      return this.optional(element) || NAME_REGEX.test(value);
  });

    jQuery.validator.addMethod("lettersOnly", function(value, element) {
      return this.optional(element) || LETTERS_ONLY.test(value);
  });

  // First and Last name shall be seperated by Space
    jQuery.validator.addMethod("noSpace", function(value, element) {
      return this.optional(element) || SPACE_REGEX.test(value);
  });
  // First and Last name shall be seperated by Space
    jQuery.validator.addMethod("email", function(value, element) {
      return this.optional(element) || EMAIL_REGEX.test(value);
  });
});


