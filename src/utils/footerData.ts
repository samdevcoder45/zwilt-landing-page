interface Link {
  text: string;
  url: string;
}

interface FooterProps {
  header: string;
  links: Link[];
}
export const footerData: FooterProps[] = [
  {
    header: "Platform",
    links: [
      { text: "Find Work", url: "#link1.1" },
      { text: "Find Talent", url: "#link1.2" },
      { text: "Categories", url: "#link1.3" },
      { text: "About Us", url: "#link1.4" },
    ],
  },
  {
    header: "Categories",
    links: [
      { text: "Find Work", url: "#link1.1" },
      { text: "Find Talent", url: "#link1.2" },
      { text: "Categories", url: "#link1.3" },
      { text: "About Us", url: "#link1.4" },
    ],
  },
  {
    header: "HELP",
    links: [
      { text: "FAQ's", url: "#link1.1" },
      { text: "Contact Us", url: "#link1.2" },
    ],
  },
  {
    header: "GET IN TOUCH @",
    links: [
      { text: "Instagram", url: "#link1.1" },
      { text: "LinkedIn", url: "#link1.2" },
      { text: "Twitter", url: "#link1.2" },
    ],
  },
];



export const tableRows = [
  {
    id: 1,
    category: "General",
    question: "I want to work part-time, is that possible",
  },
  {
    id: 2,
    category: "",
    question: "How long are the average projects?",
  },
  {
    id: 3,
    category: "",
    question: "How does the payment works?",
  },
  {
    id: 4,
    category: "",
    question: "How much can I earn?",
  },
  {
    id: 5,
    category: "General",
    category2: "Joining Process",
    question: "I want to work part-time, is that possible",
  },
  {
    id: 6,
    category: "",
    category2: "",
    question: "How long are the average projects?",
  },
  {
    id: 7,
    category: "",
    category2: "",
    question: "How long are the average projects?",
  },
  {
    id: 8,
    category: "",
    category2: "",
    question: "How much can I earn?",
  },
];
