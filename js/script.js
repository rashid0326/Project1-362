jQuery(function ($) {
    $('html').removeClass('nojs');
    $("html").addClass("hasjs");
    $("#altbox").on("click", function () {
        $("#age-verification").prop("checked", true);
        $("#altbox").css("background-color", "#26b170");
    });
});

function changeNameLabelColor() {
  if (document.getElementById("namel").value !== "") {
  document.getElementById("namel").style.background = "white";
  } else {
    document.getElementById("namel").style.background = "#D4D4D4";
  }
}

function changePhoneLabelColor() {
  if (document.getElementById("phonel").value !== "") {
  document.getElementById("phonel").style.background = "white";
  } else {
    document.getElementById("phonel").style.background = "#D4D4D4";
  }
}

function changeEmailLabelColor() {
  if (document.getElementById("emaill").value !== "") {
  document.getElementById("emaill").style.background = "white";
  } else {
    document.getElementById("emaill").style.background = "#D4D4D4";
  }
}

changeNameLabelColor();
changePhoneLabelColor();
changeEmailLabelColor();
