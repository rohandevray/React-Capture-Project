//Import Images
import ignite from "./img/pic1.jpg";
import event from "./img/impre.jpg";
import disk from "./img/disk.jpg";
import ignite2 from "./img/project1.jpg";
import event2 from "./img/lptop.jpg";
import dance from "./img/dance.jpg";

export const MovieState = () => {
  return [
    {
      title: "Ignite Games",
      mainImg: ignite,
      secondaryImg: ignite2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Description",
          description:
            "It's an IMDB type clone app for games where you can find bunch of games that are played worldwide.It's a react app embedded with react-redux store and made with the help of rawg.io api.",
        },

        {
          title: "GitHub Repository",
          description:
            "It made using many animations using framer-motions and vanilla JS. Link: https://github.com/rohandevray/React-GameInfo-Project",
        },
      ],
    },
    {
      title: "Lo-Fi Player",
      mainImg: disk,
      url: "/work/good-times",
      secondaryImg: dance,
      awards: [
        {
          title: "Description",
          description:
            "It's a react app plays atleast ten lofi beats. Its like mini music player complied with several css effects over player status bar and library.",
        },
        {
          title: "GitHub Repository",
          description:
            "Its complete responsive music player deployed on heroku server. Link: https://github.com/rohandevray/React-App ",
        },
      ],
    },
    {
      title: "Impresario",
      mainImg: event,
      url: "/work/the-racer",
      secondaryImg: event2,
      awards: [
        {
          title: "Description",
          description:
            "It's an Django web application using PostgreSQL as a database to keep the track of organisations, their members and the event organised between them. Also added with Google Calender API for event reminders.",
        },
        {
          title: "GitHub Repository",
          description:
            "It's an event management system complied using card animations & Figma. Link: https://github.com/rohandevray/impresario-prod ",
        },
      ],
    },
  ];
};
