import swal from "sweetalert2";

// $ExpectError (Can't have 0 arguments)
swal();
swal("Hello!");
swal("Oops...", "Something went wrong!", "error");

// $ExpectError (Must be a valid alert type)
swal("The Internet?", "That thing is still around?", "questin");
swal("The Internet?", "That thing is still around?", "question");

// $ExpectError (imageHeight should be a number)
swal({
  imageUrl: "./images/robot.jpg",
  imageHeight: "1512",
  imageAlt: "A tall image"
});
swal({
  imageUrl: "./images/robot.jpg",
  imageHeight: 1512,
  imageAlt: "A tall image"
});

// $ExpectError (DismissReason enum should have correct values)
const badCancel: "close" = swal.DismissReason.cancel;
const goodCancel: "cancel" = swal.DismissReason.cancel;

/**
 * Examples from website should work without error
 */

swal("Any fool can use a computer");

swal("The Internet?", "That thing is still around?", "question");

swal({
  type: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: "<a href>Why do I have this issue?</a>"
});

swal({
  imageUrl: "./images/robot.jpg",
  imageHeight: 1512,
  imageAlt: "A tall image"
});

swal({
  title: "<i>HTML</i> <u>example</u>",
  type: "info",
  html:
    "You can use <b>bold text</b>, " +
    '<a href="//github.com">links</a> ' +
    "and other HTML tags",
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
  confirmButtonAriaLabel: "Thumbs up, great!",
  cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
  cancelButtonAriaLabel: "Thumbs down"
});

swal({
  position: "top-end",
  type: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});

swal({
  title: "jQuery HTML example",
  html: "<div>hi</div>",
  animation: false,
  customClass: "animated tada"
});

swal({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(result => {
  if (result.value) {
    swal("Deleted!", "Your file has been deleted.", "success");
  }
});

swal({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  confirmButtonClass: "btn btn-success",
  cancelButtonClass: "btn btn-danger",
  buttonsStyling: false,
  reverseButtons: true
}).then(result => {
  if (result.value) {
    swal("Deleted!", "Your file has been deleted.", "success");
  } else if (result.dismiss === swal.DismissReason.cancel) {
    swal("Cancelled", "Your imaginary file is safe :)", "error");
  }
});

swal({
  title: "Sweet!",
  text: "Modal with a custom image.",
  imageUrl: "https://unsplash.it/400/200",
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: "Custom image",
  animation: false
});

swal({
  title: "Custom width, padding, background.",
  width: 600,
  padding: 100,
  background: "#fff url(/images/trees.png)",
  backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    center left
    no-repeat
  `
});

swal({
  title: "Auto close alert!",
  text: "I will close in 5 seconds.",
  timer: 5000,
  onOpen: () => {
    swal.showLoading();
  }
}).then(result => {
  if (result.dismiss === swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});

let container: HTMLElement;

swal({
  title: "هل تريد الاستمرار؟",
  confirmButtonText: "نعم",
  cancelButtonText: "لا",
  showCancelButton: true,
  showCloseButton: true,
  target: container
});

swal({
  title: "Submit email to run ajax request",
  input: "email",
  showCancelButton: true,
  confirmButtonText: "Submit",
  showLoaderOnConfirm: true,
  preConfirm: email => {
    return new Promise(resolve => {
      setTimeout(() => {
        if (email === "taken@example.com") {
          swal.showValidationError("This email is already taken.");
        }
        resolve();
      }, 2000);
    });
  },
  allowOutsideClick: () => !swal.isLoading()
}).then(result => {
  if (result.value) {
    swal({
      type: "success",
      title: "Ajax request finished!",
      html: "Submitted email: " + result.value
    });
  }
});

swal.setDefaults({
  input: "text",
  confirmButtonText: "Next &rarr;",
  showCancelButton: true,
  progressSteps: ["1", "2", "3"]
});

var steps = [
  {
    title: "Question 1",
    text: "Chaining swal2 modals is easy"
  },
  "Question 2",
  "Question 3"
];

swal.queue(steps).then(result => {
  swal.resetDefaults();

  if (result.value) {
    swal({
      title: "All done!",
      html: "Your answers: <pre>" + JSON.stringify(result.value) + "</pre>",
      confirmButtonText: "Lovely!"
    });
  }
});

var fakeAPI = "https://jsonplaceholder.typicode.com/posts/1";

swal.queue([
  {
    title: "Your public IP",
    confirmButtonText: "Show my public IP",
    text: "Your public IP will be received " + "via AJAX request",
    showLoaderOnConfirm: true,
    preConfirm: () => {
      return fetch(fakeAPI)
        .then(res => res.json())
        .then(json => swal.insertQueueStep(json))
        .catch(() => {
          swal.insertQueueStep({
            type: "error",
            title: "Unable to your public IP"
          });
        });
    }
  }
]);
