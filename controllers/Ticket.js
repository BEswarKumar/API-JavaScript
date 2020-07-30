'use strict';

var utils = require('../utils/writer.js');
var Ticket = require('../service/TicketService');

module.exports.filterCustomer = function filterCustomer (req, res, next) {
  Ticket.filterCustomer()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsTicketInternalDownloadListTicketFaultPOST = function ticketsTicketInternalDownloadListTicketFaultPOST (req, res, next, body, page, size, status, sort, sortBy, custAccntNum, symptomId, startDate, endDate) {
  Ticket.ticketsTicketInternalDownloadListTicketFaultPOST(body, page, size, status, sort, sortBy, custAccntNum, symptomId, startDate, endDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsTicketV1NotifInternalGET = function ticketsTicketV1NotifInternalGET (req, res, next, page, size) {
  Ticket.ticketsTicketV1NotifInternalGET(page, size)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsTicketV2InternalGET = function ticketsTicketV2InternalGET (req, res, next, page, size, status, sort, sortBy, custAccNum, symtompsName, search, startDate, endDate) {
  Ticket.ticketsTicketV2InternalGET(page, size, status, sort, sortBy, custAccNum, symtompsName, search, startDate, endDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsTicketV2InternalTicketIdGET = function ticketsTicketV2InternalTicketIdGET (req, res, next, ticketId) {
  Ticket.ticketsTicketV2InternalTicketIdGET(ticketId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsTicketV2InternalTicketIdPUT = function ticketsTicketV2InternalTicketIdPUT (req, res, next, evidenceFiles, evidenceToCustomer, status, ticketId) {
  Ticket.ticketsTicketV2InternalTicketIdPUT(evidenceFiles, evidenceToCustomer, status, ticketId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsTicketV2InternalTicketIdPUT = function ticketsTicketV2InternalTicketIdPUT (req, res, next, body, ticketId) {
  Ticket.ticketsTicketV2InternalTicketIdPUT(body, ticketId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
