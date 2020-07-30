'use strict';

var utils = require('../utils/writer.js');
var TicketCustomer = require('../service/TicketCustomerService');

module.exports.detailListTicketCustomer = function detailListTicketCustomer (req, res, next, ticketId) {
  TicketCustomer.detailListTicketCustomer(ticketId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listTroubleType = function listTroubleType (req, res, next) {
  TicketCustomer.listTroubleType()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsTicketRemoveFileAssurancePOST = function ticketsTicketRemoveFileAssurancePOST (req, res, next, body, fileUrl) {
  TicketCustomer.ticketsTicketRemoveFileAssurancePOST(body, fileUrl)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsTicketUpdateFileAssurancePOST = function ticketsTicketUpdateFileAssurancePOST (req, res, next, fileName, fileUrl, file, fileUrl) {
  TicketCustomer.ticketsTicketUpdateFileAssurancePOST(fileName, fileUrl, file, fileUrl)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsTicketUploadFileAssurancePOST = function ticketsTicketUploadFileAssurancePOST (req, res, next, fileName, fileType) {
  TicketCustomer.ticketsTicketUploadFileAssurancePOST(fileName, fileType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsTicketV1NotifGET = function ticketsTicketV1NotifGET (req, res, next, page, size, type) {
  TicketCustomer.ticketsTicketV1NotifGET(page, size, type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsTicketV2GET = function ticketsTicketV2GET (req, res, next, page, size, status, sort, search, symptomId) {
  TicketCustomer.ticketsTicketV2GET(page, size, status, sort, search, symptomId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsTicketV2POST = function ticketsTicketV2POST (req, res, next, body) {
  TicketCustomer.ticketsTicketV2POST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
