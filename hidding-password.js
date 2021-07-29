const btnShow = document.querySelector("#show-pass");
      const windowsPass = document.querySelector("#password");
      const div = document.querySelector("div");

      btnShow.addEventListener("click", () => {
        if (windowsPass.type === "password") {
          windowsPass.type = "text";
        } else {
          windowsPass.type = "password";
        }
      });