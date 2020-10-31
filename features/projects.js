module.exports = function (controller) {
  var json = require("./resume.json");
  if (controller.adapter.name === "Web Adapter") {
    controller.hears(
      async (message) => message.text.toLowerCase().includes("project"),
      "message",
      async (bot, message) => {
        await bot.reply(message, {
          text: "My projects:",
          quick_replies: [
            {
              title: "Full-stack(SQL, Ruby on Rails, Redux, React)",
              payload: "full",
            },
            {
              title: "MERN Stack",
              payload: "mern",
            },
            {
              title: "JavaScript",
              payload: "js",
            },
          ],
        });
      }
    );

    controller.hears(
      async (message) => message.text.toLowerCase().includes("mern"),
      "message",
      async (bot, message) => {
        await bot.reply(message, {
            link: "https://profferly.herokuapp.com/#/",
            username: "Profferly",
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
            text:
              "Profferly is a volunteer app born during the COVID-19 pandemic. As a platform for the community formed around lending a hand, it provides volunteers with opportunities to connect with one another.",
            image: "profferly.png",
            quick_replies: [
              {
                title: "Full-stack(SQL, Ruby on Rails, Redux, React)",
                payload: "full",
              },
              {
                title: "JavaScript",
                payload: "js",
              },
            ],
          });
        }, 1500); 
      }
    );

    controller.hears(
      async (message) => message.text.toLowerCase().includes("js"),
      "message",
      async (bot, message) => {
        await bot.reply(message, {
          link: "https://emina288.github.io/power_up/",
          username: "JavaScript",
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
            text:
              "Power-up is a single-page JavaScript application. The main feature of the app is a data visualization that is being represented by using D3.js. It contains data on four different types of electrical power plants. Clients can choose between hydro, thermal, solar, and wind power plant and get information about electricity generation in a few different countries using the selected power plant. Clients can also see electricity generation over the years in each country and read more about the chosen power plant.",
            image: "javas.png",
            quick_replies: [
              {
                title: "Full-stack(SQL, Ruby on Rails, Redux, React)",
                payload: "full",
              },
              {
                title: "MERN Stack",
                payload: "mern",
              },
            ],
          });
        }, 1500);
      }
    );

    controller.hears(
      async (message) => message.text.toLowerCase().includes("full"),
      "message",
      async (bot, message) => {
          await bot.reply(message, {
            link: "https://good-reads-full-stack.herokuapp.com/#/",
            username: "Full-Stack",
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
            text:
              "Goodreadsfullstack is a full-stack, single-page-application clone of Goodreads. Users can view a list of books from our data base, search up books, create bookshelves and add books to them. Each book can be rated and reviewed.",
            image: "full.png",
            quick_replies: [
              {
                title: "JavaScript",
                payload: "js",
              },
              {
                title: "MERN Stack",
                payload: "mern",
              },
            ],
          });
        }, 1500);
      }
    );

  }
};
