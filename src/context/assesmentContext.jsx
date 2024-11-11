// import React, { createContext, useState, useEffect, useContext } from 'react';
// import { JobContext } from './jobContext'; // Import JobContext

// export const AssessmentContext = createContext();

// export const AssessmentProvider = ({ children }) => {
//   const [assessments, setAssessments] = useState(() => {
//     const storedAssessments = localStorage.getItem('assessments');
//     return storedAssessments ? JSON.parse(storedAssessments) : [];
//   });

//   // Access jobs from JobContext
//   const { jobs } = useContext(JobContext);

//   // Sync assessments with localStorage on change
//   useEffect(() => {
//     localStorage.setItem('assessments', JSON.stringify(assessments));
//   }, [assessments]);

//   // Clean up assessments if corresponding job is deleted
//   useEffect(() => {
//     setAssessments((prevAssessments) =>
//       prevAssessments.filter((assessment) => jobs.some((job) => job.id === assessment.jobId))
//     );
//   }, [jobs]); // Trigger cleanup whenever jobs list changes

//   // Function to add a new assessment for a job, only if job exists
//   const createAssessment = (jobId) => {
//     const jobExists = jobs.some((job) => job.id === jobId);
//     if (!jobExists) {
//       console.warn(`Job with ID ${jobId} does not exist. Assessment creation aborted.`);
//       return; // Abort if job does not exist
//     }

//     setAssessments((prevAssessments) => {
//       const existingAssessment = prevAssessments.find((assessment) => assessment.jobId === jobId);
//       if (existingAssessment) return prevAssessments; // Skip if assessment already exists

//       const newAssessment = { jobId, questions: [] };
//       return [...prevAssessments, newAssessment];
//     });
//   };

//   // Function to add a question to an assessment
//   const addQuestion = (jobId, newQuestion) => {
//     setAssessments((prevAssessments) => {
//       const updatedAssessments = prevAssessments.map((assessment) => {
//         if (assessment.jobId === jobId) {
//           return {
//             ...assessment,
//             questions: [...assessment.questions, newQuestion],
//           };
//         }
//         return assessment;
//       });
//       return updatedAssessments;
//     });
//   };

//   // Function to delete a question from an assessment
//   const deleteQuestion = (jobId, questionIndex) => {
//     setAssessments((prevAssessments) => {
//       const updatedAssessments = prevAssessments.map((assessment) => {
//         if (assessment.jobId === jobId) {
//           const updatedQuestions = assessment.questions.filter((_, i) => i !== questionIndex);
//           return { ...assessment, questions: updatedQuestions };
//         }
//         return assessment;
//       });
//       return updatedAssessments;
//     });
//   };

//   return (
//     <AssessmentContext.Provider value={{ assessments, createAssessment, addQuestion, deleteQuestion }}>
//       {children}
//     </AssessmentContext.Provider>
//   );
// };


// import React, { createContext, useState, useEffect, useContext } from 'react';
// import { JobContext } from './jobContext';

// export const AssessmentContext = createContext();

// export const AssessmentProvider = ({ children }) => {
//   const [assessments, setAssessments] = useState(() => {
//     const storedAssessments = localStorage.getItem('assessments');
//     return storedAssessments ? JSON.parse(storedAssessments) : [];
//   });

//   // Access jobs from JobContext
//   const { jobs } = useContext(JobContext);

//   // Sync assessments with localStorage on change
//   useEffect(() => {
//     localStorage.setItem('assessments', JSON.stringify(assessments));
//   }, [assessments]);

//   // Clean up assessments if corresponding job is deleted
//   useEffect(() => {
//     setAssessments((prevAssessments) =>
//       prevAssessments.filter((assessment) => jobs.some((job) => job.id === assessment.jobId))
//     );
//   }, [jobs]);

//   // Function to add a new assessment for a job, only if job exists
//   const createAssessment = (jobId) => {
//     const jobExists = jobs.some((job) => job.id === jobId);
//     if (!jobExists) {
//       console.warn(`Job with ID ${jobId} does not exist. Assessment creation aborted.`);
//       return;
//     }

//     setAssessments((prevAssessments) => {
//       const existingAssessment = prevAssessments.find((assessment) => assessment.jobId === jobId);
//       if (existingAssessment) return prevAssessments;

//       const newAssessment = { jobId, questions: [] };
//       return [...prevAssessments, newAssessment];
//     });
//   };

//   // Function to add a question to an assessment
//   const addQuestion = (jobId, newQuestion) => {
//     setAssessments((prevAssessments) => {
//       const updatedAssessments = prevAssessments.map((assessment) => {
//         if (assessment.jobId === jobId) {
//           return {
//             ...assessment,
//             questions: [...assessment.questions, newQuestion],
//           };
//         }
//         return assessment;
//       });
//       return updatedAssessments;
//     });
//   };

//   // Function to delete a question from an assessment
//   const deleteQuestion = (jobId, questionIndex) => {
//     setAssessments((prevAssessments) => {
//       const updatedAssessments = prevAssessments.map((assessment) => {
//         if (assessment.jobId === jobId) {
//           const updatedQuestions = assessment.questions.filter((_, i) => i !== questionIndex);
//           return { ...assessment, questions: updatedQuestions };
//         }
//         return assessment;
//       });
//       return updatedAssessments;
//     });
//   };

//   return (
//     <AssessmentContext.Provider value={{ assessments, createAssessment, addQuestion, deleteQuestion }}>
//       {children}
//     </AssessmentContext.Provider>
//   );
// };



import React, { createContext, useState, useEffect, useContext } from 'react';
import { JobContext } from './jobContext';

export const AssessmentContext = createContext();

export const AssessmentProvider = ({ children }) => {
  const [assessments, setAssessments] = useState(() => {
    const storedAssessments = localStorage.getItem('assessments');
    return storedAssessments ? JSON.parse(storedAssessments) : [];
  });

  // Access jobs from JobContext
  const { jobs } = useContext(JobContext);

  // Sync assessments with localStorage on any change
  useEffect(() => {
    localStorage.setItem('assessments', JSON.stringify(assessments));
  }, [assessments]);

  // Cleanup assessments when jobs update
  // useEffect(() => {
  //   if (jobs && jobs.length > 0) {
  //     setAssessments((prevAssessments) =>
  //       prevAssessments.filter((assessment) => jobs.some((job) => job.id === assessment.jobId))
  //     );
  //   }
  // }, [jobs]);

  const createAssessment = (jobId) => {
    const jobExists = jobs.some((job) => job.id === jobId);
    if (!jobExists) {
      console.warn(`Job with ID ${jobId} does not exist. Assessment creation aborted.`);
      return;
    }

    setAssessments((prevAssessments) => {
      const existingAssessment = prevAssessments.find((assessment) => assessment.jobId === jobId);
      if (existingAssessment) return prevAssessments;

      const newAssessment = { jobId, questions: [] };
      return [...prevAssessments, newAssessment];
    });
  };

  const addQuestion = (jobId, newQuestion) => {
    setAssessments((prevAssessments) => {
      const updatedAssessments = prevAssessments.map((assessment) => {
        if (assessment.jobId === jobId) {
          return {
            ...assessment,
            questions: [...assessment.questions, newQuestion],
          };
        }
        return assessment;
      });
      return updatedAssessments;
    });
  };

  const deleteQuestion = (jobId, questionIndex) => {
    setAssessments((prevAssessments) => {
      const updatedAssessments = prevAssessments.map((assessment) => {
        if (assessment.jobId === jobId) {
          const updatedQuestions = assessment.questions.filter((_, i) => i !== questionIndex);
          return { ...assessment, questions: updatedQuestions };
        }
        return assessment;
      });
      return updatedAssessments;
    });
  };

  const deleteAssessment = (jobId)=>{
    setAssessments((prevAssessments)=>prevAssessments.filter((assessment)=>assessment.jobId!==jobId));
  }

  return (
    <AssessmentContext.Provider value={{ assessments, createAssessment, addQuestion, deleteQuestion, deleteAssessment }}>
      {children}
    </AssessmentContext.Provider>
  );
};



