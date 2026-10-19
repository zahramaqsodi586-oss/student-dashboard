import HeaderCard from "./components/HeaderCard";
import StatusCard from "./components/StatusCard"
import StudentCard from "./components/StudentCard"
import students from "./data/students"



function App() {

  const totalStudents = students.length;
  const averageStudents = students.reduce((total, student) => total + student.score, 0) / totalStudents;
  const passedStudents = students.filter((student) => student.score >= 50).length;
  const failedStudents = students.filter((student) => student.score < 50).length;



 
  return (


<div className="flex h-screen bg-slate-100">  
   <HeaderCard />

    <main className="flex flex-col">

    
     


    <section className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 m-2">

      <StatusCard title="Total Students" value={totalStudents} description="Currently enrolled" icon="👩🏻‍🎓"  />
      <StatusCard title="Average Score" value={averageStudents} description="Across all students" icon="📈"  />
      <StatusCard title="Passed" value={passedStudents} description="Students above 50%" icon="✅" />
      <StatusCard title="Failed" value={failedStudents} description="Students below 50%" icon="❌"  />
    </section>




    <section>
      <h2 className="font-bold mb-4 text-xl text-slate-900">Students</h2>
   <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
    {students.map((student) => (
      <StudentCard 
      key={student.id}
      student={student} />

    ))}
   </div>
   </section>


   </main>
   </div>  
  )
}

export default App
