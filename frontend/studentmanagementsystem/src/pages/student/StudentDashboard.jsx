import { useState } from "react";
import {
  DashboardLayout,
  OverviewPanel,
  AssignmentList,
  SubmitAssignmentModal,
} from "../../components/index";
import { useAuth } from "../../hooks/useAuth"
import useStudentDashboard from "../../hooks/useStudentDashboard";
import useSubmitAssignment from "../../hooks/useSubmitAssignment";

function StudentDashboard() {
  const { logout } = useAuth();
  const { data, loading, error, refetch } = useStudentDashboard();
  const { submitAssignment, loading: submitting } = useSubmitAssignment(() => {
    refetch();
    setIsSubmitOpen(false);
    setSelectedAssignment(null);
  });
  const [activeTab, setActiveTab] = useState("Overview");

  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const normalizedData = {
    student: {
      name: data.student.full_name,
      email: data.student.email,
    },
    mentor: data.mentor
    ? {
      name: data.mentor.full_name || "Not assigned",
      email: data.mentor.email,
    }
    : null,
    
    courses: data.courses.map((c) => ({
      id: c.id,
      title: c.name,
    })),
    assignments: data.assignments.map((a) => ({
      id: a.id,
      title: a.title,
      course: a.course,
      status: a.status,
    })),
    progress: data.progress,
  };

  const sidebar = (
    <div className="flex flex-col h-full p-6">
      <div className="space-y-2">
        {["Overview", "My Assignments"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full text-left px-4 py-2 rounded-lg ${activeTab === tab
                ? "bg-indigo-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
              }`}
          >
            {tab}
          </button>
        ))}
         <div className="mt-auto pt-6 border-t border-slate-200">
        <button
          onClick={logout}
          className="w-full text-left px-4 py-2 rounded-lg text-red-600 hover:bg-red-50"
        >
          Logout
        </button>
      </div>
      </div>

     
    </div>
  );

  const header = (
    <h1 className="text-2xl font-bold text-slate-900">{activeTab}</h1>
  );

  const handleOpenSubmit = (assignment) => {
    setSelectedAssignment(assignment);
    setIsSubmitOpen(true);
  };

  const handleCloseSubmit = () => {
    setIsSubmitOpen(false);
    setSelectedAssignment(null);
  };

  return (
    <>
      <DashboardLayout sidebar={sidebar} header={header}>
        {activeTab === "Overview" && (
          <OverviewPanel
            student={normalizedData.student}
            mentor={normalizedData.mentor}
            courses={normalizedData.courses}
            assignments={normalizedData.assignments}
            progress={normalizedData.progress}
          />
        )}

        {activeTab === "My Assignments" && (
          <AssignmentList
            assignments={normalizedData.assignments}
            showActions
            onSubmit={handleOpenSubmit}
          />
        )}

        <SubmitAssignmentModal
          open={isSubmitOpen}
          assignment={selectedAssignment}
          onClose={handleCloseSubmit}
          onSubmit={submitAssignment}
          loading={submitting}
        />
      </DashboardLayout>
    </>
  );
}

export default StudentDashboard;
