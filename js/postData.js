function postToGoogle(){
  var ques1 = $("input[type='radio'][name='ques1']:checked").val();
  var ques2 = $("input[type='radio'][name='ques2']:checked").val();
  var ques3 = $("input[type='radio'][name='ques3']:checked").val();
  var ques4 = $("input[type='radio'][name='ques4']:checked").val();
  var ques5 = $("input[type='radio'][name='ques5']:checked").val();
  var ques6 = $("input[type='radio'][name='ques6']:checked").val();
  var ques7 = $("input[type='radio'][name='ques7']:checked").val();
  var ques8 = $("input[type='radio'][name='ques8']:checked").val();
  var ques9 = $("input[type='radio'][name='ques9']:checked").val();

  var submitButton = $('#submitButton');
  submitButton.val('Submitting...');

  $.ajax({
          url: "https://docs.google.com/forms/d/e/1FAIpQLSeTfyX3KIli1yc5SUqMezHH0FQhvNNI42zxEXkd3hooTQaUHA/formResponse",
          data: {
            "entry.109541851": ques1,
            "entry.250324031": ques2,
            "entry.143116557": ques3,
            "entry.1053710366": ques4,
            "entry.1077793610": ques5,
            "entry.1815364850": ques6,
            "entry.882634491": ques7,
            "entry.1843222538": ques8,
            "entry.268551523": ques9
          },
          type: "POST",
          dataType: "xml",
        statusCode: {
                0: function() {
                  window.location.replace("thankYou.html");
                },
                200: function() {
                    window.location.replace("thankYou.html");
                }
            }
    });
}
