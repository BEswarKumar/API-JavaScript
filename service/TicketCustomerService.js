'use strict';


/**
 * detail list ticket customer
 *
 * ticketId String 
 * returns detailListTicketCustomer
 **/
exports.detailListTicketCustomer = function(ticketId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : {
    "ticketId" : "INA-1578379038688",
    "applicationType" : 2,
    "categoryName" : "E003",
    "worklog" : [ {
      "dateTime" : "2020-01-07T06:37:18.694Z",
      "note" : "",
      "createdBy" : "Adithya Visnu",
      "step" : 0,
      "status" : "checking",
      "evidence_attachment" : {
        "fileName" : "minio-assurance-dev.telkomdigitalsolution.co/tdscustomerpublic/evidence-attachment-ticket/b040c8cd-9327-4894-a1ac-16fa4a2dd9b0-2019-12-13 (1).png",
        "fileType" : "image",
        "timeStamp" : "2020-04-08T14:48:00.000Z"
      }
    }, {
      "createdBy" : "",
      "step" : 1,
      "status" : "onprogress",
      "evidence_attachment" : {
        "fileName" : "minio-assurance-dev.telkomdigitalsolution.co/tdscustomerpublic/evidence-attachment-ticket/b040c8cd-9327-4894-a1ac-16fa4a2dd9b0-2019-12-13 (1).png",
        "fileType" : "image",
        "timeStamp" : "2020-04-08T14:48:00.000Z"
      }
    }, {
      "step" : 2,
      "status" : "customerreview",
      "evidence_attachment" : {
        "fileName" : "minio-assurance-dev.telkomdigitalsolution.co/tdscustomerpublic/evidence-attachment-ticket/b040c8cd-9327-4894-a1ac-16fa4a2dd9b0-2019-12-13 (1).png",
        "fileType" : "image",
        "timeStamp" : "2020-04-08T14:48:00.000Z"
      }
    }, {
      "step" : 3,
      "status" : "completed"
    } ],
    "statusTicket" : "checking",
    "provider" : "Indosat",
    "createdAt" : "2020-01-07T06:37:18.692Z",
    "custAccntName" : "IMS",
    "senderIdName" : "CICIL.co.id",
    "evidence_attachment" : {
      "fileName" : "minio-assurance-dev.telkomdigitalsolution.co/tdscustomerpublic/evidence-attachment-ticket/b040c8cd-9327-4894-a1ac-16fa4a2dd9b0-2019-12-13 (1).png",
      "fileType" : "image",
      "timeStamp" : "2020-04-08T14:48:00.000Z"
    },
    "troubleOccurs" : {
      "dateTime" : "2020-01-07T06:37:05.481Z",
      "logRequest" : "error",
      "bNumber" : "081434349343",
      "respond" : "error"
    },
    "updatedAt" : "2020-01-07T06:37:18.692Z",
    "rating" : {
      "type" : "string",
      "example" : {
        "value" : 0,
        "message" : "",
        "dateTime" : "",
        "createdBy" : ""
      }
    },
    "description" : "erro",
    "picName" : "sidik hadiwijaya",
    "picPhoneNumber" : "081316050318",
    "picEmail" : "sdkhadiwijaya@gmail.com",
    "senderTypeName" : "AKUGROSIR",
    "linkCategoryTypeName" : "Reguler",
    "symtompsName" : "Delivery Report"
  },
  "success" : true,
  "message" : "ere are the detail for INA-1578379038688"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * list trouble type
 *
 * returns listTroubleType
 **/
exports.listTroubleType = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : [ "Tidak Menerima Delivery Report", "Respon di Delivery Report Undelivered", "SMS Masuk namun Delay Diterima Pelanggan", "Pelanggan Tidak Menerima SMS", "Terdapat Respon Error dari Bulks Apps", "Lainnya", "LBA" ],
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
 * remove file lba assurance customer
 * remove file lba assurance customer
 *
 * body RemoveFileAssurance 
 * fileUrl String  (optional)
 * returns responsesremoveFileAssurance
 **/
exports.ticketsTicketRemoveFileAssurancePOST = function(body,fileUrl) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : {
    "fileName" : "IMG_5614.JPG",
    "fileUrl" : "http://minio-assurance-dev.telkomdigitalsolution.co/tdscustomerpublic/attach-lba-assurance/BANK MANDIRI/IMG_5614.JPG"
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
 * update file lba assurance customer
 * remove file lba assurance customer
 *
 * fileName String 
 * fileUrl String 
 * file String  (optional)
 * fileUrl String  (optional)
 * returns responsesupdateFileAssurance
 **/
exports.ticketsTicketUpdateFileAssurancePOST = function(fileName,fileUrl,file,fileUrl) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : {
    "fileName" : "IMG_5614.JPG",
    "fileUrl" : "http://minio-assurance-dev.telkomdigitalsolution.co/tdscustomerpublic/attach-lba-assurance/BANK MANDIRI/IMG_5614.JPG"
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
 * upload file lba assurance customer
 * upload file lba assurance customer
 *
 * fileName String 
 * fileType String  (optional)
 * returns responsesuploadFileAssurance
 **/
exports.ticketsTicketUploadFileAssurancePOST = function(fileName,fileType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : {
    "fileName" : "IMG_5614.JPG",
    "fileUrl" : "http://minio-assurance-dev.telkomdigitalsolution.co/tdscustomerpublic/attach-lba-assurance/BANK MANDIRI/IMG_5614.JPG"
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
 * notif customer
 *
 * page Integer  (optional)
 * size Integer  (optional)
 * type String  (optional)
 * returns notifTicketAssuranceCustomer
 **/
exports.ticketsTicketV1NotifGET = function(page,size,type) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
  "data" : {
    "summary" : [ [ {
      "notificationId" : "519abe22-d6e9-4cf0-a3c0-078965a3817b",
      "date" : "2020-06-15T07:05:20.714Z",
      "type" : "ticket-assurance-customer",
      "title" : "Ticket Internal Request",
      "message" : "Your Ticket INA-1592121889341 is being processed. Trouble Type : Delivery Report",
      "data" : {
        "ticketId" : "INA-1592121889341",
        "symptomId" : "Delivery Report",
        "linkCategoryTypeName" : "Sender Id",
        "senderTypeName" : "eatigo",
        "status" : "customerreview",
        "detailText" : ""
      },
      "custAccntNum" : 1280510,
      "isRead" : false
    }, {
      "notificationId" : "f8d77a20-0559-45f3-98cf-01a7b44aad67",
      "date" : "2020-06-16T01:47:11.400Z",
      "type" : "ticket-assurance-customer",
      "title" : "Ticket Internal Request",
      "message" : "Your Ticket INA-1592270595508 is being processed. Trouble Type : Link Connectivity",
      "data" : {
        "ticketId" : "INA-1592270595508",
        "symptomId" : "Link Connectivity",
        "linkCategoryTypeName" : "Link Connectivity",
        "senderTypeName" : "",
        "status" : "onprogress",
        "detailText" : ""
      },
      "custAccntNum" : 1280510,
      "isRead" : false
    } ], [ {
      "notificationId" : "519abe22-d6e9-4cf0-a3c0-078965a3817b",
      "date" : "2020-06-15T07:05:20.714Z",
      "type" : "ticket-assurance-customer",
      "title" : "Ticket Internal Request",
      "message" : "Your Ticket INA-1592121889341 is being processed. Trouble Type : Delivery Report",
      "data" : {
        "ticketId" : "INA-1592121889341",
        "symptomId" : "Delivery Report",
        "linkCategoryTypeName" : "Sender Id",
        "senderTypeName" : "eatigo",
        "status" : "customerreview",
        "detailText" : ""
      },
      "custAccntNum" : 1280510,
      "isRead" : false
    }, {
      "notificationId" : "f8d77a20-0559-45f3-98cf-01a7b44aad67",
      "date" : "2020-06-16T01:47:11.400Z",
      "type" : "ticket-assurance-customer",
      "title" : "Ticket Internal Request",
      "message" : "Your Ticket INA-1592270595508 is being processed. Trouble Type : Link Connectivity",
      "data" : {
        "ticketId" : "INA-1592270595508",
        "symptomId" : "Link Connectivity",
        "linkCategoryTypeName" : "Link Connectivity",
        "senderTypeName" : "",
        "status" : "onprogress",
        "detailText" : ""
      },
      "custAccntNum" : 1280510,
      "isRead" : false
    } ] ]
  },
  "success" : true,
  "meta" : {
    "page" : 1,
    "size" : 5,
    "totalData" : 554,
    "totalPage" : 111,
    "unclickNotif" : true,
    "unreadNotif" : 485
  },
  "message" : "Successfully get notif ticket assurance customer"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * ticket customer
 *
 * page Integer  (optional)
 * size Integer  (optional)
 * status String  (optional)
 * sort String  (optional)
 * search String  (optional)
 * symptomId String  (optional)
 * returns customerTickets
 **/
exports.ticketsTicketV2GET = function(page,size,status,sort,search,symptomId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : [ {
    "ticketId" : "INA-1589173024830",
    "userId" : 30000040703662,
    "applicationType" : 2,
    "linkCategoryTypeId" : 2,
    "linkCategoryTypeName" : "Premium",
    "senderTypeName" : "GRAB",
    "status" : "checking",
    "troubleCategory" : "DELIVERY REPORT",
    "createdAt" : "2020-05-11T04:57:04.849Z",
    "updatedAt" : "2020-05-11T04:57:04.849Z",
    "rating" : {
      "value" : 0,
      "message" : "",
      "dateTime" : "",
      "createdBy" : ""
    }
  }, {
    "ticketId" : "INA-1589082673473",
    "userId" : 30000012343662,
    "applicationType" : 2,
    "linkCategoryTypeId" : 2,
    "linkCategoryTypeName" : "Premium",
    "senderTypeName" : "NXSMS",
    "status" : "onprogress",
    "troubleCategory" : "SMS FAULT",
    "createdAt" : "2020-05-10T03:51:13.485Z",
    "updatedAt" : "2020-05-12T03:33:49.612Z",
    "rating" : {
      "value" : 0,
      "message" : "",
      "dateTime" : "",
      "createdBy" : ""
    }
  }, {
    "ticketId" : "INA-1588565932867",
    "userId" : 37002443663,
    "applicationType" : 2,
    "linkCategoryTypeId" : 2,
    "linkCategoryTypeName" : "Premium",
    "senderTypeName" : "Bukalapak",
    "status" : "customerreview",
    "troubleCategory" : "DELIVERY REPORT",
    "createdAt" : "2020-05-04T04:18:52.878Z",
    "updatedAt" : "2020-05-12T03:50:41.323Z",
    "rating" : {
      "value" : 0,
      "message" : "",
      "dateTime" : "",
      "createdBy" : ""
    }
  }, {
    "ticketId" : "INA-1588210792578",
    "applicationType" : 2,
    "categoryId" : "E003",
    "ipCustomer" : "192.168.19.19",
    "logPingTrace" : 123,
    "description" : "Description report",
    "status" : "onprogress",
    "picName" : "Contact person",
    "picPhoneNumber" : "0812121212",
    "picEmail" : "contact@gmail.com",
    "troubleCategory" : "Link Connectivity",
    "createdAt" : "2020-04-30T01:39:52.585Z",
    "updatedAt" : "2020-04-30T01:44:23.567Z",
    "rating" : {
      "value" : 0,
      "message" : "",
      "dateTime" : "",
      "createdBy" : ""
    }
  }, {
    "ticketId" : "INA-1587574931390",
    "userId" : 37002443663,
    "applicationType" : 2,
    "linkCategoryTypeId" : 4,
    "linkCategoryTypeName" : "Reguler",
    "senderTypeName" : "Telegram",
    "status" : "onprogress",
    "troubleCategory" : "DELIVERY REPORT",
    "createdAt" : "2020-04-22T17:02:11.400Z",
    "updatedAt" : "2020-04-26T09:41:33.255Z",
    "rating" : {
      "value" : 0,
      "message" : "",
      "dateTime" : "",
      "createdBy" : ""
    }
  }, {
    "ticketId" : "INA-1587414242604",
    "userId" : 30000041033660,
    "applicationType" : 2,
    "linkCategoryTypeId" : 3,
    "linkCategoryTypeName" : "LBA",
    "senderTypeName" : "OVO",
    "status" : "checking",
    "troubleCategory" : "DELIVERY REPORT",
    "createdAt" : "2020-04-20T20:24:02.950Z",
    "updatedAt" : "2020-04-20T20:24:02.950Z",
    "rating" : {
      "value" : 0,
      "message" : "",
      "dateTime" : "",
      "createdBy" : ""
    }
  }, {
    "ticketId" : "INA-1587413684732",
    "userId\"" : 30000041033660,
    "applicationType" : 2,
    "linkCategoryTypeId" : 3,
    "linkCategoryTypeName" : "Reguler",
    "senderTypeName" : "OVO",
    "status" : "checking",
    "troubleCategory" : "DELIVERY REPORT",
    "createdAt" : "2020-04-20T20:14:44.746Z",
    "updatedAt" : "2020-04-20T20:14:44.746Z",
    "rating" : {
      "value" : 0,
      "message" : "",
      "dateTime" : "",
      "createdBy" : ""
    }
  }, {
    "ticketId" : "INA-1587413634124",
    "userId" : 30000041033660,
    "applicationType" : 2,
    "linkCategoryTypeId" : 1,
    "linkCategoryTypeName" : "Reguler",
    "senderTypeName" : "OVO",
    "status" : "onprogress",
    "troubleCategory" : "DELIVERY REPORT",
    "createdAt" : "2020-04-20T20:13:54.136Z",
    "updatedAt" : "2020-04-20T20:13:54.136Z",
    "rating" : {
      "value" : 0,
      "message" : "",
      "dateTime" : "",
      "createdBy" : ""
    }
  }, {
    "ticketId" : "INA-1585283966455",
    "userId" : 558837521031901,
    "applicationType" : 2,
    "linkCategoryTypeId" : 1,
    "linkCategoryTypeName" : "Reguler",
    "senderTypeName" : "AL AZHAR",
    "status" : "onprogress",
    "troubleCategory" : "SMS FAULT",
    "createdAt" : "2020-03-27T04:39:26.463Z",
    "updatedAt" : "2020-03-27T04:39:26.463Z",
    "rating" : {
      "value" : 0,
      "message" : "",
      "dateTime" : "",
      "createdBy" : ""
    }
  }, {
    "ticketId" : "INA-1584012541108",
    "userId" : 30000012343661,
    "applicationType" : 2,
    "linkCategoryTypeId" : 1,
    "linkCategoryTypeName" : "Reguler",
    "senderTypeName" : "OLEHA",
    "status" : "customerreview",
    "troubleCategory" : "SMS FAULT",
    "createdAt" : "2020-03-12T11:29:01.123Z",
    "updatedAt" : "2020-03-12T11:29:01.123Z",
    "rating" : {
      "value" : 0,
      "message" : "",
      "dateTime" : "",
      "createdBy" : ""
    }
  } ],
  "success" : true,
  "meta" : {
    "page" : 1,
    "size" : 10,
    "totalPages" : 2,
    "totalData" : 14
  },
  "message" : "Success get list ticket"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * create new product
 * create new product
 *
 * body CreateTicket 
 * returns responsesCreateTicket
 **/
exports.ticketsTicketV2POST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : {
    "operationTypeId" : "1",
    "applicationType" : "2",
    "logPingTrace" : "logPingTrace",
    "linkCategoryTypeId" : "2",
    "senderTypeId" : "2",
    "description" : "Test Sms Fault Description",
    "lbaCategory" : "LBA",
    "picPhoneNumber" : "0812345687",
    "picName" : "DDS Admin",
    "symptomId" : "SMSFAULT",
    "serviceCategory" : "Sender ID",
    "ipCustomer" : "192.168.10.1",
    "troubleOccurs" : [ {
      "bNumber" : "0811234567",
      "timeStamp" : "2019-12-16T08:09:09.034Z",
      "logRequest" : "",
      "respond" : ""
    } ],
    "picEmail" : "admin@ddstelkom.co"
  },
  "success" : true,
  "message" : "Your Request Has Been Processed"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

