import { Resend } from 'resend';

const resend = new Resend('re_NrktA5fb_HDcysYNornGn1J146Ea7TJ66');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'anigam629@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});