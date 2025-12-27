import authorAvatar from "../../public/images/author/devbertskie.jpg";
export const siteConfig = {
  name: "Bảo Toàn Dev",
  description:
    "Blog chia sẻ kiến thức về Java và JavaScript. Nơi học hỏi và chia sẻ kinh nghiệm lập trình.",
  author: "Bảo Toàn",
  authorImage: authorAvatar,
  social: {
    github: "https://github.com/ToanVo2309",
    facebook: "https://www.facebook.com/bao.toan.535017/",
  },
  contact: {
    email: "toanvo3789@gmail.com",
    phone: "0934044503",
  },
};

export type SiteConfig = typeof siteConfig;
