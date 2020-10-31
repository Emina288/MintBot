module.exports = function (controller) {
  var json = require("./resume.json");
  if (controller.adapter.name === "Web Adapter") {
    controller.hears(
      async (message) =>
        (message.text.toLowerCase().includes("education")) ||
        (message.text.toLowerCase().includes("school")),
      "message",
      async (bot, message) => {
        await bot.reply(
          message,
          `${json.education[0].institution}, ${json.education[0].area}. ${json.education[0].startDate} - ${json.education[0].endDate}`
        );

        await bot.reply(
          message,
          `${json.education[1].institution}, ${json.education[1].area}. ${json.education[1].startDate} - ${json.education[1].endDate}`
        );
        await bot.reply(message, {
          text: `${json.education[2].institution}, ${json.education[2].area}. ${json.education[2].startDate} - ${json.education[2].endDate}`,
          quick_replies: [
            {
              title: "Basic",
              payload: "basic",
            },
            {
              title: "Volunteer",
              payload: "volunteer",
            },
            {
              title: "Work",
              payload: "work",
            },
            {
              title: "Skills",
              payload: "skills",
            },
            {
              title: "Languages",
              payload: "languages",
            },
            {
              title: "Projects",
              payload: "projects",
            },
          ],
        });
      }
    );
  };
}
