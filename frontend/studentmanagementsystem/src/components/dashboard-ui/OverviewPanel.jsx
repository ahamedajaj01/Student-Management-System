import React from 'react'
import StudentInfoCard from './student-panel/StudentInfoCard'
import MentorInfoCard from './student-panel/MentorInfoCard'
import CourseList from './student-panel/CourseList'
import AssignmentList from './student-panel/AssignmentList'
import ProgressBar from "./student-panel/ProgressBar"

function OverviewPanel({ student, mentor, courses, assignments, progress }) {

  return (
    <>
      <div className="space-y-6">
        <StudentInfoCard
          name={student.name}
          email={student?.email}
        />

        <MentorInfoCard
          name={mentor?.name}
          email={mentor?.email}
        />

        <CourseList courses={courses} />

        <AssignmentList assignments={assignments} />
        <ProgressBar value={progress} />
      </div>
    </>
  )
}

export default OverviewPanel
