import mail from '@sendgrid/mail';

mail.setApiKey('myApiKey');
mail.send({
  from: {email: "test@example.com"},
});
