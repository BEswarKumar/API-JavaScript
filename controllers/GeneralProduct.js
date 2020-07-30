'use strict';

var utils = require('../utils/writer.js');
var GeneralProduct = require('../service/GeneralProductService');

module.exports.ticketsFaultV1Cek_npsGET = function ticketsFaultV1Cek_npsGET (req, res, next) {
  GeneralProduct.ticketsFaultV1Cek_npsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsFaultV1Create_npsPOST = function ticketsFaultV1Create_npsPOST (req, res, next, body, ticketId, ticketNumber, tkPuas1, rateScale, comment, troubleHeadline, mostValue, serviceId) {
  GeneralProduct.ticketsFaultV1Create_npsPOST(body, ticketId, ticketNumber, tkPuas1, rateScale, comment, troubleHeadline, mostValue, serviceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsFaultV1TicketCekTicketClosedPOST = function ticketsFaultV1TicketCekTicketClosedPOST (req, res, next, body, username) {
  GeneralProduct.ticketsFaultV1TicketCekTicketClosedPOST(body, username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsFaultV1TicketGET = function ticketsFaultV1TicketGET (req, res, next, page, size, sort, status) {
  GeneralProduct.ticketsFaultV1TicketGET(page, size, sort, status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsFaultV1TicketHistoryNoTicketGET = function ticketsFaultV1TicketHistoryNoTicketGET (req, res, next, noTicket) {
  GeneralProduct.ticketsFaultV1TicketHistoryNoTicketGET(noTicket)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsFaultV1TicketPOST = function ticketsFaultV1TicketPOST (req, res, next, body, productId, serviceId, address, contactName, mobile, secondaryContactName, secondaryMobile, description, productName) {
  GeneralProduct.ticketsFaultV1TicketPOST(body, productId, serviceId, address, contactName, mobile, secondaryContactName, secondaryMobile, description, productName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsFaultV1TicketReferenceIdPUT = function ticketsFaultV1TicketReferenceIdPUT (req, res, next, referenceId, status, note, ticketNumber, trackId, referenceId) {
  GeneralProduct.ticketsFaultV1TicketReferenceIdPUT(referenceId, status, note, ticketNumber, trackId, referenceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsFaultV1TicketReferenceIdPUT = function ticketsFaultV1TicketReferenceIdPUT (req, res, next, body, referenceId) {
  GeneralProduct.ticketsFaultV1TicketReferenceIdPUT(body, referenceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
