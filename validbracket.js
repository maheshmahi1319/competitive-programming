

    var isValid = function (s) {
        var obj = {
          "(": ")",
          "[": "]",
          "{": "}",
          "<": ">"
        };
      
        var stack = [];
      
        for (var i = 0; i < s.length; i++) {
          var el = s[i];
          if (obj[el]) {
            stack.push(obj[el]);
          } else {
            if (el !== stack.pop()) {
              return false;
            }
          }
        }
      
        return stack.length === 0;
      };
      
      console.log(isValid("([{<>}])"));
      