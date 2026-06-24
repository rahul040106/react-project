import React from 'react'

import Card from "./components/Card.jsx"

const jobOpenings = [
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    companyName: "Google",
    datePosted: "Posted 2 days ago",
    post: "Software Engineer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$120k - $150k",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    companyName: "Apple",
    datePosted: "Posted 5 days ago",
    post: "Frontend Developer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$110k - $145k",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    companyName: "Meta",
    datePosted: "Posted 8 days ago",
    post: "React Developer",
    tag: "No Time",
    tag2: "Mid Level",
    pay: "$130k - $160k",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/amazon",
    companyName: "Amazon",
    datePosted: "Posted 10 days ago",
    post: "Backend Developer",
    tag: "Part Time",
    tag2: "Junior Level",
    pay: "$100k - $135k",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    companyName: "Netflix",
    datePosted: "Posted 12 days ago",
    post: "Full Stack Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$160k - $210k",
    location: "Remote, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/microsoft",
    companyName: "Microsoft",
    datePosted: "Posted 4 days ago",
    post: "Cloud Engineer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$115k - $150k",
    location: "Noida, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/tesla",
    companyName: "Tesla",
    datePosted: "Posted 7 days ago",
    post: "AI Software Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$170k - $230k",
    location: "Pune, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/nvidia",
    companyName: "NVIDIA",
    datePosted: "Posted 3 days ago",
    post: "Machine Learning Engineer",
    tag: "Full Time",
    tag2: "Mid Level",
    pay: "$150k - $200k",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/adobe",
    companyName: "Adobe",
    datePosted: "Posted 6 days ago",
    post: "UI Engineer",
    tag: "Part Time",
    tag2: "Junior Level",
    pay: "$60k - $90k",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/oracle",
    companyName: "Oracle",
    datePosted: "Posted 9 days ago",
    post: "Database Engineer",
    tag: "Full Time",
    tag2: "Mid Level",
    pay: "$105k - $140k",
    location: "Hyderabad, India"
  }
];

const App = () => {
  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return <Card key={idx} comp={elem.companyName} logo={elem.brandLogo} postD={elem.datePosted} post={elem.post} time={elem.tag} pay={elem.pay} loc={elem.location}/>
      })}
    </div>
  )
}

export default App