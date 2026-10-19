

function StudentCard({student}){
  const passed = student.score >= 50;


  return(
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex justify-between">
        <div>
          <div className="mb-4">
            <h2 className="text-lg font-bold text-gray-800">{student.name}</h2>
            <p className="text-sm text-gray-500">{student.email}</p>
          </div>

          <div className="space-y-2 text-sm">
            <p>
              <span className="font-medium">Course: </span> {student.course}
            </p>

             <p>
              <span className="font-medium">Score: </span> {student.score}
            </p>
          </div>
        </div>

        <div>
          <div className="mt-4">
            {passed ? (
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">Passed
              </span>
            ) : (
                <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">Passed
              </span>
            )}


          </div>
        </div>






      </div>

    
    </div>

  )
}

export default StudentCard;