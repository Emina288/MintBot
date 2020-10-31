/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */


module.exports = function(controller) {
  var json = require("./resume.json");

    if (controller.adapter.name === 'Web Adapter') {

        controller.hears(
          async (message) =>
            (message.text.toLowerCase().includes("yourself")) ||
            (message.text.toLowerCase().includes("basic")) ||
            (message.text.toLowerCase().includes("introduce")),

          "message",
          async (bot, message) => {
            await bot.reply(message, {
              text: "What would you like to know?",
              quick_replies: [
                {
                  title: "Email",
                  payload: "email",
                },
                {
                  title: "Phone number",
                  payload: "phone",
                },
                {
                  title: "Description",
                  payload: "description",
                },
                {
                  title: "Summary",
                  payload: "summary",
                },
                {
                  title: "Location",
                  payload: "location",
                },
                {
                  title: "Profiles",
                  payload: "profiles",
                },
                {
                  title: "Work",
                  payload: "work",
                },
                {
                  title: "Volunteer",
                  payload: "volunteer",
                },
                {
                  title: "Education",
                  payload: "education",
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
                {
                  title: "References",
                  payload: "references",
                },
                {
                  title: "Ideal company",
                  payload: "ideal"
                }
              ],
            });
          }
        );

        
        controller.hears(
          async (message) => message.text.toLowerCase().includes("description"),
          "message",
          async (bot, message) => {
            await bot.reply(message, `I am a ${json.basics.description}`);

            setTimeout(async () => {
              await bot.changeContext(message.reference);
              await bot.reply(message, {
                text: "There is so much more to know about me!:)",
                quick_replies: [
                  {
                    title: "Email",
                    payload: "email",
                  },
                  {
                    title: "Phone number",
                    payload: "phone",
                  },
                  {
                    title: "Summary",
                    payload: "summary",
                  },
                  {
                    title: "Location",
                    payload: "location",
                  },
                  {
                    title: "Profiles",
                    payload: "profiles",
                  },
                  {
                    title: "Work",
                    payload: "work",
                  },
                  {
                    title: "Volunteer",
                    payload: "volunteer",
                  },
                  {
                    title: "Education",
                    payload: "education",
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
                  {
                    title: "References",
                    payload: "references",
                  },
                  {
                    title: "Ideal company",
                    payload: "ideal",
                  },
                ],
              });
            }, 1500);
          }
        );

        controller.hears(
          async (message) =>
            message.text.toLowerCase().includes("profiles") ||
            message.text.toLowerCase().includes("social"),
          "message",
          async (bot, message) => {
            await bot.reply(message, {
              text: "Wich profile would you like?",
              quick_replies: [
                {
                  title: "GitHub",
                  payload: "github",
                },
                {
                  title: "LinkedIn",
                  payload: "linkedin",
                },
                {
                  title: "AngelList",
                  payload: "angellist",
                },
              ],
            });
          }
        );

        controller.hears(
            (async (message) => message.text.toLowerCase().includes("github")),
          "message",
          async (bot, message) => {
            await bot.reply(message, "My GitHub profile:")

            setTimeout(async() => {
              await bot.changeContext(message.reference);
              await bot.reply(message, {
                link: "https://github.com/Emina288",
                username: "Emina288",
                quick_replies: [
                  {
                    title: "LinkedIn",
                    payload: "linkedin",
                  },
                  {
                    title: "AngelList",
                    payload: "angellist",
                  },
                  {
                    title: "Email",
                    payload: "email",
                  },
                  {
                    title: "Phone number",
                    payload: "phone",
                  },
                ],
              });
            }, 1250);
        }
      );

      controller.hears(
        async (message) => message.text.toLowerCase().includes("linkedin"),
        "message",
        async (bot, message) => {
          await bot.reply(message, "My LinkedIn profile:");

          setTimeout(async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, {
              link: "https://www.linkedin.com/in/emina-ramovic-858835187/",
              username: "Emina Ramovic",
              quick_replies: [
                {
                  title: "GitHub",
                  payload: "github",
                },
                {
                  title: "AngelList",
                  payload: "angellist",
                },
                {
                  title: "Email",
                  payload: "email",
                },
                {
                  title: "Phone number",
                  payload: "phone",
                },
              ],
            });
          }, 1250);
        }
      );

      controller.hears(
        async (message) => message.text.toLowerCase().includes("angellist"),
        "message",
        async (bot, message) => {
          await bot.reply(message, "My AngelList profile:");

          setTimeout(async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, {
              link: "https://angel.co/u/emina-ramovic",
              username: "Emina Ramovic",
              quick_replies: [
                {
                  title: "LinkedIn",
                  payload: "linkedin",
                },
                {
                  title: "GitHub",
                  payload: "github",
                },
                {
                  title: "Email",
                  payload: "email",
                },
                {
                  title: "Phone number",
                  payload: "phone",
                },
              ],
            });
          }, 1250);
        }
      );

        controller.hears(

          async (message) => message.text.toLowerCase().includes("summary"),
          "message",
          async (bot, message) => {
            await bot.reply(message, `${json.basics.summary}`)

            setTimeout(async() => {
              await bot.changeContext(message.reference);
              await bot.reply(message, {
                text: "Find out more about me!:)",
                quick_replies: [
                  {
                    title: "Email",
                    payload: "email",
                  },
                  {
                    title: "Description",
                    payload: "description",
                  },
                  {
                    title: "Location",
                    payload: "location",
                  },
                  {
                    title: "Profiles",
                    payload: "profiles",
                  },
                  {
                    title: "Work",
                    payload: "work",
                  },
                  {
                    title: "Volunteer",
                    payload: "volunteer",
                  },
                  {
                    title: "Education",
                    payload: "education",
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
                  {
                    title: "Ideal company",
                    payload: "ideal",
                  },
                ],
              });}, 1250);
          }
        );

        controller.hears(
          async (message) => message.text.toLowerCase().includes("location"),
          "message",
          async (bot, message) => {
            await bot.reply(message, "I am currently living and looking for work in New York, NY")
            setTimeout(async() => {
              await bot.changeContext(message.reference);
              await bot.reply(message, {
                text: "Find out more about me!:)",
                quick_replies: [
                  {
                    title: "Email",
                    payload: "email",
                  },
                  {
                    title: "Description",
                    payload: "description",
                  },
                  {
                    title: "Summary",
                    payload: "summary",
                  },
                  {
                    title: "Profiles",
                    payload: "profiles",
                  },
                  {
                    title: "Work",
                    payload: "work",
                  },
                  {
                    title: "Volunteer",
                    payload: "volunteer",
                  },
                  {
                    title: "Education",
                    payload: "education",
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
                  {
                    title: "Ideal company",
                    payload: "ideal",
                  },
                ],
              });
            }, 1250)
          })

          controller.hears(
            async (message) =>
              message.text.toLowerCase().includes("ideal") ||
              message.text.toLowerCase().includes("dream"),
            "message",
            async (bot, message) => {
              await bot.reply(
                message,
                "My ideal company would present exciting challenges that allow me to use my interest in and experience with growing sustainability efforts. Google was one of the companies that I had dreamed about ever since I was in high school."
              );
              setTimeout(async () => {
                await bot.changeContext(message.reference);
                await bot.reply(message, {
                  text: "Find out more about me!:)",
                  quick_replies: [
                    {
                      title: "Email",
                      payload: "email",
                    },
                    {
                      title: "Description",
                      payload: "description",
                    },
                    {
                      title: "Summary",
                      payload: "summary",
                    },
                    {
                      title: "Profiles",
                      payload: "profiles",
                    },
                    {
                      title: "Work",
                      payload: "work",
                    },
                    {
                      title: "Volunteer",
                      payload: "volunteer",
                    },
                    {
                      title: "Education",
                      payload: "education",
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
              }, 1250);
            }
          );



    }

}