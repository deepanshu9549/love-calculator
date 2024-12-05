var loveQuotes = [
  "You're like socks—perfectly matched and a little quirky! Please KISSSSSSSS!",
  "You're like two peas in a pod, just with more snacks! CUUUUUDDDDLLLLEEESSS",
  "You're like Wi-Fi and passwords—can't function without each other!",
  "Like a lock and key—perfectly made to fit! Ask him to put his key in her lock xD",
];

var sadQuotes = [
  "You're like oil and water—just don't mix! Your aura - infinity for choosing him/her.",
  "Like ketchup and pancakes—completely offbeat! Even the breakfast gods are confused.",
  "You're like a puzzle missing pieces—never quite fitting! But hey, at least you're good at being incomplete.",
  "Like socks and sandals—definitely not a match! It's like fashion's worst nightmare.",
  "You’re like a phone without signal—disconnected! Even the Wi-Fi gives up on you.",
];

$("form").submit(function (e) {
  e.preventDefault();

  var partnerName1 = capitalizeString($("#partner-input-1").val()).trim();
  var partnerName2 = capitalizeString($("#partner-input-2").val()).trim();

  $("#partner-input-1").val(partnerName1);
  $("#partner-input-2").val(partnerName2);

  if (partnerName1 != "" && partnerName2 != "") {
    if (partnerName1 === partnerName2) {
      $(".result-h1").text("Yes! I know you love yourself you psychopath.");
    } else if (
      (partnerName1.includes("Deepanshu") && partnerName2.includes("Goral")) ||
      (partnerName1.includes("Goral") && partnerName2.includes("Deepanshu"))
    ) {
      var random = Math.floor(Math.random() * loveQuotes.length);
      $(".result-h1").text(loveQuotes[random]);
    } else {
      var random = Math.floor(Math.random() * sadQuotes.length);
      $(".result-h1").text(sadQuotes[random]);
    }
    $("#result").css("display", "block");
  } else {
    $("#result").css("display", "none");
  }
});

$("#reset-button").click(function () {
  $("#partner-input-1").val("");
  $("#partner-input-2").val("");
  $("#result").css("display", "none");
});

function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
