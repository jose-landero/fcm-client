const { initializeApp, applicationDefault } = require("firebase-admin/app");

const { getMessaging } = require("firebase-admin/messaging");

initializeApp({
  credential: applicationDefault(),
});

const message = {
  data: {
    purchase_id: "01FNSBR609RJ2E603F2AYMAW6P",
  },
  token:
    "cZMzrO36SsO-N95TUHeHDd:APA91bEkM2RpdNkblg2DEn9hhHIZ5mzFelLX0gRhs8QV12mOtQYOZz3WNpgtg40RWZ6OONgvtQcesPlN33xxuy7vvmYstipA29Rie5kmAF1Kxdi0FRfLDA4WbeqKPuCL5TDDu9GSOe2J",
  notification: {
    title: "Pedido confirmado",
    body: "Tu pedido MXOC-PA21110008297 ha sido confirmado. Te avisaremos cuando este en preparación. 🙂",
  },

  android: {
    notification: {
      imageUrl:
        "https://play-lh.googleusercontent.com/uOQIfWTb2NckGI9Gem2aVsU8-DzCnwvBpA6ehp8qF_q41VER_RKao6MtJ545NRLFvA=s180-rw",
    },
  },
};

getMessaging()
  .send(message)
  .then((response) => {
    console.log("Successfuly sent message", response);
  })
  .catch((error) => {
    console.log("Error sending message", error);
  });
