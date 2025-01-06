// src/constants/menuItems.ts
export const MENU_ITEMS = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/explore",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/notifications",
    icon: "notification.svg", 
  },
  {
    id: 4,
    name: "Messages",
    link: "/messages",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Profile",
    link: "/profile",
    icon: "profile.svg",
  },
  {
    id: 6,
    name: "More",
    link: "/more",
    icon: "more.svg",
  }
] as const;
 
export const USER_INFO = {
  name: "Johanso",
  username: "@johansodev",
  avatar: "/general/avatar.jpg"
} as const;