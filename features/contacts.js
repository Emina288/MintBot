var json = require("./resume.json");

const detectTypo = function (string, tech_stack_keywords) {
    let words = string.split(" ");
    let suggestedWords = [];
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
  
      for (let j = 0; j < tech_stack_keywords.length; j++) {
        let tech_word = tech_stack_keywords[j];
        let compared = compareWords(word, tech_word, word.length);
  
        if (compared !== undefined) {
          suggestedWords.push(compared);
        }
      }
    }
  
    return suggestedWords;
  };
  
  const compareWords = function (word1, word2, length) {
    let charsCount = 0;
    let charsMatchCount = length - 2;
    let word2Split = word2.split("").sort();
    let word1Split = word1.split("").sort();
  
    if (charsMatchCount < 3) {
      return undefined;
    }
  
    for (let k = 0; k < word1Split.length; k++) {
      let letter1 = word1Split[k];
      if (word2Split.includes(letter1)) {
        charsCount += 1;
      }
    }
  
    if (charsCount >= charsMatchCount) {
      return word2;
    } else {
      return undefined;
    }
  };
  
  // stringify list helper function 
  
  const stringList = function (array) {
    if (array.length === 2) {
      return array[0] + " and " + array[1];
    } else {
      let Str = "";
  
      for (let i = 0; i < array.length; i++) {
        let element = array[i];
  
        if (i < array.length - 1) {
          Str += element + ", ";
        } else {
          Str += "and " + element;
        }
      }
  
      return Str;
    }
  };

module.exports = function (controller) {
    controller.hears(
        async (message) =>
          (message.text &&
          message.text.toLowerCase().includes(
            "contact"
          )),
        "message",
    
        async (bot, message) => {
          await bot.reply(
            message,
            "There are a few different ways to contact me or look into more information."
          );
          setTimeout(async() => {
            await bot.changeContext(message.reference);
            await bot.reply(message, {
              text: "Here are your other options:",
              quick_replies: [
                {
                  title: "Email",
                  payload: "email",
                },
                {
                  title: "Phone",
                  payload: "phone",
                },
                {
                  title: "Portfolio site",
                  payload: "portfolio",
                },
                {
                  title: "Social media",
                  payload: "social",
                },
              ],
            });
          }, 1250); 
        }
      );


  controller.hears(
    async (message) =>
      message.text &&
      message.text.toLowerCase().includes("email"),
    "message",

    async (bot, message) => {
      await bot.reply(message, "You can email me at " + json.basics.email);

      setTimeout(async() => {
        await bot.changeContext(message.reference);
        await bot.reply(message, {
          text: "Here are your other options for contacting me:",
          quick_replies: [
            {
              title: "Phone",
              payload: "phone",
            },
            {
              title: "Portfolio site",
              payload: "portfolio",
            },
            {
              title: "Social media",
              payload: "social media",
            },
          ],
        });
    }, 1250);
    }
  );

  controller.hears(
    async (message) =>
      message.text &&
      detectTypo(message.text.toLowerCase(), ["phone"]).includes("phone") &&
      !detectTypo(message.text.toLowerCase(), ["language"]).includes("language"),
    "message",

    async (bot, message) => {
      await bot.reply(message, "You can call me at: " + json.basics.phone);
      setTimeout(async() => {
        await bot.changeContext(message.reference);
        await bot.reply(message, {
          text: "Here are your other options for contacting me:",
          quick_replies: [
            {
              title: "Email",
              payload: "email",
            },
            {
              title: "Portfolio site",
              payload: "portfolio",
            },
            {
              title: "Social media",
              payload: "social media",
            },
          ],
        });
      }, 1250);
    }
  );

  controller.hears(
    async (message) =>
      message.text &&
      message.text.toLowerCase().includes("portfolio"),
    "message",

    async (bot, message) => {
        await bot.changeContext(message.reference);
        await bot.reply(message, {
          link: "https://emina288.github.io/portfolio/",
          username: "Emina Ramovic",
          quick_replies: [
            {
              title: "",
              payload: "",
            },
          ],
        });

        setTimeout(async () => {
          await bot.changeContext(message.reference);
          await bot.reply(message, {
            text: "Here are your other options for contacting me:",
            quick_replies: [
              {
                title: "Email",
                payload: "email",
              },
              {
                title: "Phone",
                payload: "phone",
              },
              {
                title: "Social media",
                payload: "social media",
              },
            ],
          });
        }, 1250);
    }
  );

//   controller.hears(
//     async (message) =>
//       message.text &&
//       detectTypo(message.text.toLowerCase(), ["portfolio"]).includes(
//         "portfolio"
//       ),
//     "message",

//     async (bot, message) => {
//       await bot.reply(
//         message,
//         "My portfolio site can be found at " + json.basics.url
//       );

//       await bot.reply(message, {
//         text: "Here are your other options for contacting me:",
//         quick_replies: [
//           {
//             title: "Email",
//             payload: "email",
//           },
//           {
//             title: "Phone",
//             payload: "phone",
//           },
//           {
//             title: "Social media",
//             payload: "social media",
//           },
//         ],
//       });
//     }
//   );
};
