'use strict';


/**
 * filter customer
 *
 * returns filterCustomer
 **/
exports.filterCustomer = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : [ {
    "custAccntNum" : "0004704776",
    "custAccntName" : "Jatis"
  }, {
    "custAccntNum" : "0004704777",
    "custAccntName" : "MDM"
  }, {
    "custAccntNum" : "0004704778",
    "custAccntName" : "IMS"
  }, {
    "custAccntNum" : "0004704779",
    "custAccntName" : "Mitracomm"
  } ],
  "success" : true,
  "meta" : "success get customer for filter",
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
 * download list ticket
 * download list ticket
 *
 * body DownloadListTicketFault 
 * page Integer  (optional)
 * size Integer  (optional)
 * status String  (optional)
 * sort String  (optional)
 * sortBy String  (optional)
 * custAccntNum String  (optional)
 * symptomId String  (optional)
 * startDate String  (optional)
 * endDate String  (optional)
 * returns responsesdownloadListTicketFault
 **/
exports.ticketsTicketInternalDownloadListTicketFaultPOST = function(body,page,size,status,sort,sortBy,custAccntNum,symptomId,startDate,endDate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : {
    "url" : "http://tickets/ticket/v2/internal/downloadListTicketFault/page=1&size=10&status=onprogress&sort=asc&sortBy=ticketId&custAccntNum=0004704777&symptomId=SMS FAULT&startDate=2020-04-08T14:48:00.000Z&endDate=2020-04-12T14:48:00.000Z"
  },
  "success" : true,
  "message" : "success for download"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * notif internal
 *
 * page Integer  (optional)
 * size Integer  (optional)
 * returns notifInternal
 **/
exports.ticketsTicketV1NotifInternalGET = function(page,size) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : [ {
    "notificationId" : "cfcef007-7427-4a22-aebf-5329a9bee02e",
    "date" : "2020-06-04T14:52:19.536Z",
    "type" : "link-internal",
    "title" : "Link Request",
    "message" : "Anda mendapatkan Request Aktivasi Link dari Mitracomm Ekasarana",
    "data" : {
      "orderNumber" : "RL-1591282339471",
      "linkCategory" : [ "Regular", "Premium" ],
      "status" : "customerrequest"
    },
    "isRead" : false
  }, {
    "notificationId" : "11d6f584-6bb9-4344-b6f6-6e42ea92fd27",
    "date" : "2020-06-04T14:31:36.246Z",
    "type" : "link-internal",
    "title" : "Link Request",
    "message" : "Anda mendapatkan Request Aktivasi Link dari Mitracomm Ekasarana",
    "data" : {
      "orderNumber" : "RL-1591281096234",
      "linkCategory" : [ "Regular", "Premium" ],
      "status" : "customerrequest"
    },
    "isRead" : false
  }, {
    "notificationId" : "61c00288-55dd-440f-bda6-d315baa6f95b",
    "date" : "2020-06-04T13:56:03.353Z",
    "type" : "sender-id-internal",
    "title" : "Sender Id Request",
    "message" : "Anda mendapatkan Request Sender ID GRADE dari Mitracomm Ekasarana",
    "data" : {
      "senderTypeId:" : "MitracommEkasaranaGRADE1Reguler",
      "senderId" : "GRADE",
      "orderNumber" : "SID-1591278956593",
      "linkCategoryTypeId" : 1,
      "status" : "checking",
      "detailText" : ""
    },
    "isRead" : false
  }, {
    "notificationId" : "1358e6b8-386c-4f50-b120-03bfadf0892b",
    "date" : "2020-06-04T13:56:03.019Z",
    "type" : "sender-id-internal",
    "title" : "Sender Id Request",
    "message" : "Anda mendapatkan Request Sender ID GRADE dari Mitracomm Ekasarana",
    "data" : {
      "senderTypeId" : "MitracommEkasaranaGRADE1Premium",
      "senderId" : "GRADE",
      "orderNumber" : "SID-1591278956596",
      "status" : "checking",
      "detailText" : ""
    },
    "isRead" : false
  }, {
    "notificationId" : "a9d73095-5d6b-496b-9670-5fc1a41f6bf7",
    "date" : "2020-06-04T03:10:55.849Z",
    "type" : "lba-internal",
    "title" : "LBA Request",
    "message" : "Anda mendapatkan Request Aktivasi LBA untuk Sender ID vcars73 dari",
    "data" : {
      "orderNumber" : "LBA-1591238506591",
      "senderId" : "vcars73",
      "status" : "checking"
    },
    "isRead" : false
  }, {
    "notificationId" : "b214afb8-f722-49e1-ab4a-607517d715fd",
    "date" : "2020-06-04T03:10:55.845Z",
    "type" : "lba-internal",
    "title" : "LBA Request",
    "message" : "Anda mendapatkan Request Aktivasi LBA untuk Sender ID vcars73 dari",
    "data" : {
      "orderNumber" : "LBA-1591238388965",
      "senderId" : "vcars73",
      "status" : "checking"
    },
    "isRead" : false
  } ],
  "success" : true,
  "meta" : {
    "page" : 1,
    "size" : 50,
    "totalData" : 395,
    "totalPage" : 8,
    "unreadNotif" : 283
  },
  "message" : "Success get data list notification for activate"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * filter status
 *
 * page Integer  (optional)
 * size Integer  (optional)
 * status String  (optional)
 * sort String  (optional)
 * sortBy String  (optional)
 * custAccNum String  (optional)
 * symtompsName String  (optional)
 * search String  (optional)
 * startDate String  (optional)
 * endDate String  (optional)
 * returns filterTickets
 **/
exports.ticketsTicketV2InternalGET = function(page,size,status,sort,sortBy,custAccNum,symtompsName,search,startDate,endDate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : [ {
    "applicationType" : "2",
    "senderTypeName" : "VerifyID",
    "endDate" : "2020-04-12T10:15:57.816Z",
    "description" : "test",
    "custAccNum" : "0004704778",
    "picName" : "NameFull",
    "createdAt" : "2020-06-19T01:23:10.489Z",
    "rejectReason" : "rejectReason",
    "picEmail" : "test@gmail.com",
    "ttrAgent" : "0 (Hour)",
    "custAccName" : "IMS",
    "updatedAt" : "2020-06-19T01:23:10.489Z",
    "operatorTypeId" : "4",
    "senderTypeId" : "senderTypeId",
    "picPhoneNumber" : "08121121",
    "userId" : "30000040703662",
    "troubleOccurs" : [ {
      "bNumber" : "081233121212",
      "dateTime" : "2020-06-15T01:22:56.639Z",
      "logRequest" : "success",
      "respond" : "success"
    } ],
    "ttr" : "1.00 (hour)",
    "symtompsName" : "Tes Lainnya",
    "worklog" : [ {
      "step" : 0,
      "status" : "checking",
      "dateTime" : "2020-06-19T01:23:10.491Z",
      "note" : "Tiket sedang di Analisa",
      "createdBy" : "IMS"
    }, {
      "step" : 1,
      "status" : "onprogress",
      "dateTime" : "2020-02-25T04:43:22.019Z",
      "note" : "Tiket Sedang di Tangani",
      "createdBy" : ""
    }, {
      "step" : 2,
      "status" : "customerreview",
      "dateTime" : "2020-06-04T14:12:13.882Z"
    }, {
      "step" : 3,
      "status" : "completed"
    } ],
    "category" : "Sender Id",
    "ticketId" : "INA-1592529790471",
    "categoryId" : "E003",
    "startDate" : "2020-04-08T10:15:57.816Z",
    "status" : "checking"
  }, {
    "applicationType" : "2",
    "senderTypeName" : "VerifyID",
    "endDate" : "2020-04-12T10:15:57.816Z",
    "description" : "test",
    "custAccNum" : "0004704778",
    "picName" : "NameFull",
    "createdAt" : "2020-06-19T01:23:10.489Z",
    "rejectReason" : "rejectReason",
    "picEmail" : "test@gmail.com",
    "ttrAgent" : "0 (Hour)",
    "custAccName" : "IMS",
    "updatedAt" : "2020-06-19T01:23:10.489Z",
    "operatorTypeId" : "4",
    "senderTypeId" : "senderTypeId",
    "picPhoneNumber" : "08121121",
    "userId" : "30000040703662",
    "troubleOccurs" : [ {
      "bNumber" : "081233121212",
      "dateTime" : "2020-06-15T01:22:56.639Z",
      "logRequest" : "success",
      "respond" : "success"
    } ],
    "ttr" : "1.00 (hour)",
    "symtompsName" : "Tes Lainnya",
    "worklog" : [ {
      "step" : 0,
      "status" : "checking",
      "dateTime" : "2020-06-19T01:23:10.491Z",
      "note" : "Tiket sedang di Analisa",
      "createdBy" : "IMS"
    }, {
      "step" : 1,
      "status" : "onprogress",
      "dateTime" : "2020-02-25T04:43:22.019Z",
      "note" : "Tiket Sedang di Tangani",
      "createdBy" : ""
    }, {
      "step" : 2,
      "status" : "customerreview",
      "dateTime" : "2020-06-04T14:12:13.882Z"
    }, {
      "step" : 3,
      "status" : "completed"
    } ],
    "category" : "Sender Id",
    "ticketId" : "INA-1592529790471",
    "categoryId" : "E003",
    "startDate" : "2020-04-08T10:15:57.816Z",
    "status" : "checking"
  } ],
  "success" : true,
  "meta" : {
    "page" : 1,
    "size" : 10,
    "totalPages" : 1,
    "totalData" : 2
  },
  "message" : "berhasil"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * detail ticket internal
 *
 * ticketId String 
 * returns detailTicketInternal
 **/
exports.ticketsTicketV2InternalTicketIdGET = function(ticketId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : {
    "ticketId" : "INA-1591279228478",
    "userId" : 37002443663,
    "applicationType" : 2,
    "senderTypeName" : "",
    "operatorTypeName" : "",
    "categoryId" : "E003",
    "category" : "Link Connectivity",
    "worklog" : {
      "type" : "object",
      "example" : [ {
        "dateTime" : "2020-06-04T14:00:28.490Z",
        "note" : "Tiket sedang di Analisa",
        "createdBy" : "Mitracomm Ekasarana",
        "step" : 0,
        "status" : "checking"
      }, {
        "dateTime" : "2020-06-04T14:11:52.858Z",
        "note" : "Tiket Sedang di Tangani",
        "createdBy" : "occ",
        "step" : 1,
        "status" : "onprogress"
      }, {
        "dateTime" : "2020-06-04T14:12:13.882Z",
        "note" : {
          "type" : "array",
          "example" : [ "Teknisi kurang responsif", "test" ]
        },
        "createdBy" : "occ",
        "rating" : {
          "type" : "object",
          "example" : {
            "dateTime" : "2020-06-09T18:00:18.671Z",
            "nik" : "",
            "fullName" : "Mitracomm Ekasarana",
            "message" : {
              "type" : "array",
              "example" : [ "Teknisi kurang responsif", "test" ]
            },
            "value" : 6
          }
        },
        "step" : 2,
        "status" : "customerreview"
      }, {
        "dateTime" : "2020-06-09T18:00:18.671Z",
        "note" : "Gangguan sudah kami tangani, terima kasih atas laporannya. Silahkan cek attachment dibawah sebagai dokumentasi perbaikan",
        "createdBy" : "Mitracomm Ekasarana",
        "step" : 3,
        "status" : "completed"
      } ]
    },
    "status" : "completed",
    "description" : "uilhasdhl",
    "picName" : "dena",
    "picPhoneNumber" : "082116515155",
    "picEmail" : "dena@gmail.com",
    "symtompsName" : "Link Connectivity",
    "custAccName" : "Mitracomm Ekasarana",
    "custAccNum" : "0004704779",
    "createdAt" : "2020-06-04T14:00:28.486Z",
    "troubleOccursLink" : {
      "type" : "object",
      "example" : {
        "logPingTrace" : "ajkhsdajksdh",
        "ipCustomer" : "192.168l.1.135"
      }
    },
    "evidenceAttachment" : {
      "type" : "object",
      "example" : {
        "ticketId" : "INA-1591279228478",
        "fileName" : "minio-assurance-dev.telkomdigitalsolution.co/tdscustomerpublic/evidence-attachment-ticket/96b40899-4b66-41fa-a494-b6b88bbb9742-Formulir-Permohonan-Catatan-Sipil_2020.pdf",
        "fileUrl" : "http://minio-assurance-dev.telkomdigitalsolution.co/tdscustomerpublic/evidence-attachment-ticket/c297fc84-e29e-4b6f-b111-0a371ee9c606-3.pdf",
        "fileType" : "pdf",
        "evidenceToCustomer" : "evi"
      }
    }
  },
  "success" : true,
  "message" : "Success get list detail ticket internal"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * function for update body/subject email
 * for update body/subject email
 *
 * evidenceFiles byte[]  (optional)
 * evidenceToCustomer String  (optional)
 * status String  (optional)
 * ticketId String 
 * returns responsesUpdateStatus
 **/
exports.ticketsTicketV2InternalTicketIdPUT = function(evidenceFiles,evidenceToCustomer,status,ticketId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "applicationType" : "2",
    "senderTypeName" : "OVO",
    "ipWan" : "ipWan",
    "operatorTypeName" : "Telkomsel",
    "description" : "skldfskljfkls",
    "updateAt" : "2020-03-11T08:09:09.034Z",
    "picName" : "GLE",
    "symptomId" : "SMSFAULT",
    "linkCategoryTypeName" : "Reguler",
    "createdAt" : "2020-03-09T06:10:31.987Z",
    "senderId" : "158",
    "rejectReason" : "rejectReason",
    "picEmail" : "asdasdasd@gmail.com",
    "custAccntNum" : "1280511",
    "updateBy" : "occ",
    "evidence_attachment" : "{\"ticketId\":\"INA-1591075407221\",\"fileName\":\"c297fc84-e29e-4b6f-b111-0a371ee9c606-3.pdf\",\"fileUrl\":\"http://minio-assurance-dev.telkomdigitalsolution.co/tdscustomerpublic/evidence-attachment-ticket/c297fc84-e29e-4b6f-b111-0a371ee9c606-3.pdf\",\"fileType\":\"pdf\",\"evidenceToCustomer\":\"evi\"}",
    "nipnas" : "3000001234",
    "id" : "5e65ddd775faef0014f7ac97",
    "serviceId" : "serviceId",
    "updatedAt" : "2020-03-09T06:10:31.987Z",
    "serviceLocation" : "serviceLocation",
    "logPingTrace" : "logPingTrace",
    "linkCategoryTypeId" : "2",
    "operatorTypeId" : "1",
    "senderTypeId" : "senderTypeId",
    "picPhoneNumber" : "082116515155",
    "serviceName" : "serviceName",
    "userId" : "30000012343661",
    "ipCustomer" : "ipCustomer",
    "ticketNossa" : "ticketNossa",
    "troubleOccurs" : {
      "bNumber" : "082116515155",
      "timeStamp" : "2020-03-08T06:10:13.744Z",
      "logRequest" : "aksjdkajsd",
      "respond" : "akjdkajdklajsdkjlakjsdlkajsd"
    },
    "complaint" : "complaint",
    "ticketPublish" : { },
    "worklog" : [ {
      "step" : 0,
      "status" : "checking",
      "timeStamp" : "2020-03-09T06:10:31.989Z",
      "note" : "Tiket sedang di Analisa",
      "createdBy" : "MDM"
    }, {
      "step" : 1,
      "status" : "onprogress",
      "timeStamp" : "2020-03-11T04:55:04.582Z",
      "note" : "testing api",
      "createdBy" : "occ"
    }, {
      "step" : 2,
      "status" : "customerreview",
      "timeStamp" : "2020-03-11T07:53:25.452Z",
      "createdBy" : "occ"
    }, {
      "step" : 3,
      "status" : "completed",
      "timeStamp" : "2020-03-11T08:09:09.034Z",
      "note" : "Gangguan sudah kami tangani, terima kasih atas laporannya. Silahkan cek attachment dibawah sebagai dokumentasi perbaikan",
      "createdBy" : "occ"
    } ],
    "ticketCompleted" : "{}",
    "bulk" : "reguler",
    "ticketId" : "INA-1583734231978",
    "categoryId" : "E003",
    "status" : "completed"
  },
  "success" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * function for update body/subject email
 * for update body/subject email
 *
 * body UpdateStatus update status (optional)
 * ticketId String 
 * returns responsesUpdateStatus
 **/
exports.ticketsTicketV2InternalTicketIdPUT = function(body,ticketId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "applicationType" : "2",
    "senderTypeName" : "OVO",
    "ipWan" : "ipWan",
    "operatorTypeName" : "Telkomsel",
    "description" : "skldfskljfkls",
    "updateAt" : "2020-03-11T08:09:09.034Z",
    "picName" : "GLE",
    "symptomId" : "SMSFAULT",
    "linkCategoryTypeName" : "Reguler",
    "createdAt" : "2020-03-09T06:10:31.987Z",
    "senderId" : "158",
    "rejectReason" : "rejectReason",
    "picEmail" : "asdasdasd@gmail.com",
    "custAccntNum" : "1280511",
    "updateBy" : "occ",
    "evidence_attachment" : "{\"ticketId\":\"INA-1591075407221\",\"fileName\":\"c297fc84-e29e-4b6f-b111-0a371ee9c606-3.pdf\",\"fileUrl\":\"http://minio-assurance-dev.telkomdigitalsolution.co/tdscustomerpublic/evidence-attachment-ticket/c297fc84-e29e-4b6f-b111-0a371ee9c606-3.pdf\",\"fileType\":\"pdf\",\"evidenceToCustomer\":\"evi\"}",
    "nipnas" : "3000001234",
    "id" : "5e65ddd775faef0014f7ac97",
    "serviceId" : "serviceId",
    "updatedAt" : "2020-03-09T06:10:31.987Z",
    "serviceLocation" : "serviceLocation",
    "logPingTrace" : "logPingTrace",
    "linkCategoryTypeId" : "2",
    "operatorTypeId" : "1",
    "senderTypeId" : "senderTypeId",
    "picPhoneNumber" : "082116515155",
    "serviceName" : "serviceName",
    "userId" : "30000012343661",
    "ipCustomer" : "ipCustomer",
    "ticketNossa" : "ticketNossa",
    "troubleOccurs" : {
      "bNumber" : "082116515155",
      "timeStamp" : "2020-03-08T06:10:13.744Z",
      "logRequest" : "aksjdkajsd",
      "respond" : "akjdkajdklajsdkjlakjsdlkajsd"
    },
    "complaint" : "complaint",
    "ticketPublish" : { },
    "worklog" : [ {
      "step" : 0,
      "status" : "checking",
      "timeStamp" : "2020-03-09T06:10:31.989Z",
      "note" : "Tiket sedang di Analisa",
      "createdBy" : "MDM"
    }, {
      "step" : 1,
      "status" : "onprogress",
      "timeStamp" : "2020-03-11T04:55:04.582Z",
      "note" : "testing api",
      "createdBy" : "occ"
    }, {
      "step" : 2,
      "status" : "customerreview",
      "timeStamp" : "2020-03-11T07:53:25.452Z",
      "createdBy" : "occ"
    }, {
      "step" : 3,
      "status" : "completed",
      "timeStamp" : "2020-03-11T08:09:09.034Z",
      "note" : "Gangguan sudah kami tangani, terima kasih atas laporannya. Silahkan cek attachment dibawah sebagai dokumentasi perbaikan",
      "createdBy" : "occ"
    } ],
    "ticketCompleted" : "{}",
    "bulk" : "reguler",
    "ticketId" : "INA-1583734231978",
    "categoryId" : "E003",
    "status" : "completed"
  },
  "success" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

