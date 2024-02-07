export type MovieTypes = {
  moviename: string;
  actor: string;
  actress: string;
  release_date?: string;
  rating?: number;
};

export const movieData: MovieTypes[] = [
  {
    moviename: "Shershaah",
    actor: "Sidharth Malhotra",
    actress: "Kiara Advani",
    release_date: "12 August 2021",
    rating: 8.3,
  },
  {
    moviename: "Satyaprem Ki Katha",
    actor: "Kartik Aryan",
    actress: "Kiara Advani",
    release_date: "29 June 2023",
    rating: 9.2,
  },
  {
    moviename: "M.S. Dhoni: The Untold Story",
    actor: "Sushant Singh Rajput",
    actress: "Kiara Advani",
    release_date: "30 September 2016",
    rating: 7.9,
  },
  {
    moviename: "Bhool Bhulaiyaa 2",
    actor: "Kartik Aryan",
    actress: "Kiara Advani",
    release_date: "20 May 2022",
    rating: 5.7,
  },
  {
    moviename: "Kabir Singh",
    actor: "Shahid Kapoor",
    actress: "Kiara Advani",
    release_date: "21 June 2019",
  },
  {
    moviename: "Good Newwz",
    actor: "Akshay Kumar",
    actress: "Kareena Kapoor Khan",
    release_date: "27 December 2019",
    rating: 7.6,
  },
  {
    moviename: "Mission Mangal",
    actor: "Akshay Kumar",
    actress: "Vidya Balan",
    release_date: "15 August 2019",
    rating: 7.8,
  },
  {
    moviename: "Ludo",
    actor: "Rajkummar Rao",
    actress: "Fatima Sana Shaikh",
    release_date: "12 November 2020",
    rating: 7.6,
  },
  {
    moviename: "Andhadhun",
    actor: "Ayushmann Khurrana",
    actress: "Radhika Apte",
    release_date: "5 October 2018",
    rating: 8.3,
  },
  {
    moviename: "Gully Boy",
    actor: "Ranveer Singh",
    actress: "Alia Bhatt",
    release_date: "14 February 2019",
    rating: 8.2,
  },
];
