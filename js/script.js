if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}


// So Companies know that this is a work in progress website | which means we can keep applying once we add the disclaimer 
// Alert box function, to allow the employers to know this is a work in progress.
function showAlert() { 

  // create a var 
  var myText = "WARNING DISCLAIMER:\nThis portfolio is a work in progress. While some sections and features are under development, the site is a reflection of my dedication to continuously improving my skills and showcasing my projects."
  var myText2 = "Thank you for visiting! I am actively working on my first Steam game and fine-tuning this portfolio to provide the best experience. Your patience is appreciated, and I hope you'll consider me for your team."

  // Show the alert box with the disclaimer
  alert(myText + "\n\n" + myText2);

}