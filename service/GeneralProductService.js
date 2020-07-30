'use strict';


/**
 * cek nps tiket complete
 *
 * returns CekNps
 **/
exports.ticketsFaultV1Cek_npsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : [ {
    "USER_ID" : 379333,
    "NAME" : "Create Ticket",
    "CUST_NAME" : "GRATIKA",
    "EMAIL" : "syahrul21rasyid@gmail.com",
    "NCLI" : "C3700029",
    "SYMPTOM_NAME" : "Bandwidth tidak sesuai",
    "PROD" : "VPN Lite",
    "TRACK_ID" : "MY-1595311813650907",
    "SERVICE_ID" : 37000290023581864,
    "ADDR" : "GRATIKA Letjen S. Parman,56,JAKARTA,POST CODE : 99999,03",
    "SYMPTOM" : "C_CONN_001_001_006",
    "CONTACT_NAME" : "Tes NPS myCarrier",
    "MOBILE" : "081233785197",
    "SECONDARY_CONTACT_NAME" : "Tes NPS myCarrier",
    "SECONDARY_MOBILE" : "081233785197",
    "DESCRIPTION" : "Tes NPG GP myCarrier, mohon untuk di completekan",
    "CREATED_DATE" : "21-JUL-20",
    "LINK_URL" : "https://myenterprise.telkom.co.id",
    "TIKET_STATUS" : 2,
    "EMAIL_USER" : "syahrul21rasyid@gmail.com",
    "SOLDTP" : "0003700029",
    "OLO" : "GRATIKA",
    "OCC_APPROVAL" : 401192,
    "APPROVAL_DATE" : "21-JUL-20",
    "ID" : 29434,
    "HARD_COMPLAINT" : 1,
    "FIRST_CALL_RESOLUTION" : 2,
    "URGENCY" : 1,
    "TIKET_NUMBER" : "IN71660651",
    "CONTACT_APPROVAL" : "401192@telkom.co.i",
    "OCCNAME" : "ASEP NURDIN",
    "ISOPENED" : 0,
    "IS_CLOSE" : 0,
    "DESCRIPTION_OCC" : "TES TIKET (DWS) GRATIKA_Tes NPG GP myCarrier"
  } ],
  "success" : true,
  "meta" : {
    "page" : 1,
    "size" : 20,
    "totalPages" : 5,
    "totalData" : 50
  },
  "message" : "Your Request Has Been Processed"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * create nps
 * create nps
 *
 * body CreateNps 
 * ticketId String  (optional)
 * ticketNumber String  (optional)
 * tkPuas1 Integer  (optional)
 * rateScale Integer  (optional)
 * comment String  (optional)
 * troubleHeadline String  (optional)
 * mostValue String  (optional)
 * serviceId String  (optional)
 * returns responsesCreateNps
 **/
exports.ticketsFaultV1Create_npsPOST = function(body,ticketId,ticketNumber,tkPuas1,rateScale,comment,troubleHeadline,mostValue,serviceId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : {
    "userId" : 663041,
    "ticketId" : 23572,
    "ticketNossa" : "IN59456448",
    "trackId" : "MY-1576114760333157",
    "channel" : 27,
    "serviceId" : "3700029-0024859569",
    "serviceName" : "",
    "prod" : "ISDN Pra",
    "description" : "A# 0711371459 tidak bisa akses menggunakan 12077 nada sibuk",
    "progressTicket" : [ {
      "code_tiket" : 2,
      "status" : "COMPLETED",
      "datetime" : "2019-12-12T08:48:36.000Z"
    }, {
      "code_tiket" : 2,
      "status" : "ON PROGRESS",
      "datetime" : "2019-12-12T08:47:00.000Z"
    }, {
      "code_tiket" : 2,
      "status" : "VALID",
      "datetime" : "2019-12-12T08:40:40.000Z"
    }, {
      "code_tiket" : 1,
      "status" : "DRAFT",
      "datetime" : "2019-12-12T08:29:22.000Z"
    } ],
    "worklog" : [ {
      "code_tiket" : 2,
      "status" : "Customer Notification",
      "datetime" : "2019-12-12T08:47:00.000Z"
    }, {
      "code_tiket" : 2,
      "status" : "Ticket Analyzed",
      "datetime" : "2019-12-12T08:45:47.000Z"
    }, {
      "code_tiket" : 2,
      "status" : "Pending Ticket Approval by Customer",
      "datetime" : "2019-12-11T17:16:56.000Z"
    }, {
      "code_tiket" : 2,
      "status" : "Ticket Analyzed",
      "datetime" : "2019-12-11T17:02:20.000Z"
    }, {
      "code_tiket" : 2,
      "status" : "Pending Ticket Approval by Customer",
      "datetime" : "2019-12-11T16:44:40.000Z"
    }, {
      "code_tiket" : 2,
      "status" : "Ticket Analyzed",
      "datetime" : "2019-12-11T16:30:41.000Z"
    }, {
      "code_tiket\"" : 2,
      "status" : "Pending Ticket Approval by Customer",
      "datetime" : "2019-12-11T15:33:44.000Z"
    }, {
      "code_tiket" : 2,
      "status" : "Ticket Analyzed",
      "datetime" : "2019-12-11T13:16:16.000Z"
    } ],
    "status" : 2,
    "createdAt" : "2019-12-12T08:29:22.000Z",
    "picName" : "syahrulras",
    "picPhoneNumber" : "081324008164",
    "picSecondaryName" : "risky",
    "picSecondaryPhoneNumber" : "081366060551",
    "picEmail" : "syahrul21rasyid@gmail.com",
    "serviceLocation" : "nul",
    "rating" : {
      "tkPuas1" : 1,
      "rateScale" : 9,
      "comment" : "nothing",
      "mostValue" : "nothing",
      "troubleHeadline" : "nothing"
    }
  },
  "success" : true,
  "message" : "Thank You for Rating Our Ticket"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * cek ticket closed
 * cek ticket closed
 *
 * body CekTicketClosed 
 * username String  (optional)
 * returns responsescekTicketClosed
 **/
exports.ticketsFaultV1TicketCekTicketClosedPOST = function(body,username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : {
    "fileName" : "IMG_5614.JPG",
    "username" : "Syahrul21rasyid@gmail.com"
  },
  "success" : true,
  "message" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * list ticket general product
 *
 * page Integer  (optional)
 * size Integer  (optional)
 * sort String  (optional)
 * status String  (optional)
 * returns generalProductListTickets
 **/
exports.ticketsFaultV1TicketGET = function(page,size,sort,status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : [ {
    "id" : 29155,
    "sid" : 2211,
    "productName" : "ISDN Pra",
    "productId" : 37,
    "description" : "Tes detaill",
    "serviceId" : 1111,
    "createdDate" : "2020/07/11 12:01:16",
    "ticketStatus" : 3,
    "olo" : "GRATIKA",
    "approvalDate" : "2020/07/11 14:12:10",
    "status" : "REJECTED",
    "rNum" : 1
  }, {
    "id" : 29122,
    "sid" : 22220,
    "productName" : "Metro Ethernet",
    "trackId" : "MY-1594351039046280",
    "description" : "Testing fitur get support",
    "serviceId" : "3700029-0022818533",
    "createdDate" : "2020/07/10 10:15:02",
    "ticketStatus" : 2,
    "olo" : "GRATIKA",
    "approvalDate" : "2020/07/10 10:19:10",
    "ticketNumber" : "IN70896750",
    "rNum" : 2
  }, {
    "id" : 29043,
    "sid" : 22231,
    "productName" : "Metro Ethernet",
    "productId" : 14,
    "description" : "esting fitur",
    "serviceId" : "3700029-0023779545",
    "createdDate" : "2020/07/07 15:09:47",
    "ticketStatus" : 3,
    "olo" : "GRATIKA",
    "approvalDate" : "2020/07/07 20:19:09",
    "status" : "REJECTED",
    "rNum" : 3
  } ],
  "success" : true,
  "meta" : {
    "page" : 1,
    "size" : 20,
    "totalPages" : 5,
    "totalData" : 50
  },
  "message" : "Sukses"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * history ticket
 *
 * noTicket String 
 * returns historyTicket
 **/
exports.ticketsFaultV1TicketHistoryNoTicketGET = function(noTicket) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : [ {
    "class" : "INCIDENT",
    "clientViewable" : 0,
    "createdAt" : "2020-07-10T03:39:49.000Z",
    "createdBy" : 120188,
    "description" : "actual solution SA_12858 by 120188",
    "hasld" : 0,
    "langCode" : "EN",
    "logType" : "AGENTNOTE",
    "modifyBy" : "TELKOM",
    "modifyDate" : "10/07/2020 10:39:49",
    "noTicket" : "IN70896750",
    "rowstamp" : 19444101584,
    "siteId" : "REG-2",
    "workLogId" : 349918975
  }, {
    "class" : "INCIDENT",
    "clientViewable" : 0,
    "createdAt" : "2020-07-10T03:34:57.000Z",
    "createdBy" : "2020-07-10T03:40:57.000Z",
    "description" : "Mohon resolve ticket untuk di closed, terima kasih",
    "hasld" : 0,
    "langCode" : "EN",
    "logType" : "AGENTNOTE",
    "modifyBy" : "TELKOM",
    "modifyDate" : "10/07/2020 10:36:26",
    "noTicket" : "IN70896750",
    "rowstamp" : 19444021861,
    "siteId" : "REG-2",
    "workLogId" : 349916231
  } ],
  "success" : true,
  "meta" : {
    "page" : 1,
    "size" : 20,
    "totalPages" : 5,
    "totalData" : 50
  },
  "message" : "Sukses"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * submit ticket
 * submit ticket
 *
 * body SubmitTicket 
 * productId String  (optional)
 * serviceId String  (optional)
 * address String  (optional)
 * contactName String  (optional)
 * mobile String  (optional)
 * secondaryContactName String  (optional)
 * secondaryMobile String  (optional)
 * description String  (optional)
 * productName String  (optional)
 * returns responsesSubmitTicket
 **/
exports.ticketsFaultV1TicketPOST = function(body,productId,serviceId,address,contactName,mobile,secondaryContactName,secondaryMobile,description,productName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : "",
  "success" : true,
  "message" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update ticket
 * update ticket
 *
 * referenceId String  (optional)
 * status String  (optional)
 * note String  (optional)
 * ticketNumber String  (optional)
 * trackId String  (optional)
 * referenceId String 
 * returns 200updateTicket
 **/
exports.ticketsFaultV1TicketReferenceIdPUT = function(referenceId,status,note,ticketNumber,trackId,referenceId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : "",
  "success" : true,
  "message" : "update ticket success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update ticket
 * update ticket
 *
 * body BodyUpdateTicket update status (optional)
 * referenceId String 
 * returns 200updateTicket
 **/
exports.ticketsFaultV1TicketReferenceIdPUT = function(body,referenceId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : "",
  "success" : true,
  "message" : "update ticket success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

