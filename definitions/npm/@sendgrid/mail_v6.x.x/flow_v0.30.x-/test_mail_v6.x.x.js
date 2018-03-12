import mail from '@sendgrid/mail';

mail.setApiKey('myApiKey');
// Waiting for issue: https://github.com/facebook/flow/issues/5943
// mail.send({
//   from: {email: "test@example.com"},
// });
