const lib = require('messagemedia-webhooks-sdk');

function setup(){
  var controller;
  // Configuration parameters and credentials
  lib.Configuration.basicAuthUserName = "API_KEY";
  lib.Configuration.basicAuthPassword = "API_SECRET";
  controller = lib.WebhooksController;
  return controller;
}

function createWebhook(){
  var controller = setup();
  var body = new lib.CreateWebhookRequest({
      "url": "http://webhook.com",
      "method": "POST",
      "encoding": "JSON",
      "events": [
          "RECEIVED_SMS"
      ],
      "template": "{\"id\":\"$mtId\",\"status\":\"$statusCode\"}"
  });

  controller.createWebhook(body, function(error, response, context) {
      console.log(response);
  });
}

function retrieveWebhook(){
  var controller = setup();
  var page = 0;
  var pageSize = 0;

  controller.retrieveWebhook(page, pageSize, function(error, response, context) {
      console.log(response);
  });
}

function updateWebhook(){
  var controller = setup();
  var webhookId = "WEBHOOK_ID";

  var body = new lib.UpdateWebhookRequest({
      "url": "https://myurl.com",
      "method": "POST",
      "encoding": "FORM_ENCODED",
      "events": [
          "ENROUTE_DR"
      ],
      "template": "{\"id\":\"$mtId\", \"status\":\"$statusCode\"}"
  });

  controller.updateWebhook(webhookId, body, function(error, response, context) {
      console.log(response);
  });
}

function deleteWebhook(){
  var controller = setup();

  var webhookId = "WEBHOOK_ID";

  controller.deleteWebhook(webhookId, function(error, response, context) {
      console.log(response);
  });
}

// Call the functions here
createWebhook();
