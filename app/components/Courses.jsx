import Link from "next/link";

async function fetchCourses() {
  const response = await fetch("http://localhost:3000/api/courses");
  return await response.json();
}

export default async function Courses() {
  const courses = await fetchCourses();
  return (
    <div className="courses">
      {courses.map((c) => (
        <div key={c.id} className="card">
          <h3> {c.title} </h3>
          <small>Level: {c.level}</small>
          <p>{c.description}</p>
          <Link href={c.link} target="_blank" className="btn">
            Go to Course
          </Link>
        </div>
      ))}
    </div>
  );
}
