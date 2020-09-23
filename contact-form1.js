var template_params = {
   "reply_to": "reply_to_value",
   "contact_name": "contact_name_value",
   "contact_email": "contact_email_value",
   "contact_service": "contact_service_value",
   "contact_message": "contact_message_value"
}

var service_id = "default_service";
var template_id = "template_xjtTQojD_clone";
emailjs.send(service_id, template_id, template_params);