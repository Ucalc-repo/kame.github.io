
        var $input = $(".form-control me-2");
        $input.form-control me-2({
            source: [
                "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttar Pradesh",
                "Uttarakhand",
                "West Bengal",
            ],
            autoSelect: true,
        });
  
        $input.change(function () {
            var current = $input.form-control me-2("getActive");
            matches = [];
  
            if (current) {
  
                // Some item from your input matches
                // with entered data
                if (current.name == $input.val()) {
                    matches.push(current.name);
                }
            }
        });
