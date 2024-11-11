// // AssessmentDetail.js
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// const initialAssessments = JSON.parse(localStorage.getItem('assessments')) || [
//   {
//     jobId: 'job1',
//     questions: [
//       {
//         questionText: 'What is the capital of France?',
//         options: {
//           option1: 'Berlin',
//           option2: 'Madrid',
//           option3: 'Paris',
//           option4: 'Rome',
//         },
//         correctOption: 'option3',
//       },
//       {
//         questionText: 'Which planet is known as the Red Planet?',
//         options: {
//           option1: 'Earth',
//           option2: 'Mars',
//           option3: 'Venus',
//           option4: 'Jupiter',
//         },
//         correctOption: 'option2',
//       },
//     ],
//   },
//   // other jobs...
// ];

// const AssessmentDetail = () => {
//   const { jobId } = useParams();
//   const [assessments, setAssessments] = useState(initialAssessments);
//   const [newQuestion, setNewQuestion] = useState('');
//   const [options, setOptions] = useState({ option1: '', option2: '', option3: '', option4: '' });
//   const [correctOption, setCorrectOption] = useState('option1');

//   let assessment = assessments.find((a) => a.jobId === jobId);
//   if (!assessment) {
//     assessment = { jobId, questions: [] };
//     setAssessments([...assessments, assessment]);  // Add the new assessment to the state
//     localStorage.setItem('assessments', JSON.stringify([...assessments, assessment]));
//   }

//   const handleAddQuestion = () => {
//     const updatedAssessment = {
//       ...assessment,
//       questions: [
//         ...assessment.questions,
//         {
//           questionText: newQuestion,
//           options: { ...options },
//           correctOption,
//         },
//       ],
//     };

//     const updatedAssessments = assessments.map((a) => (a.jobId === jobId ? updatedAssessment : a));
//     setAssessments(updatedAssessments);
//     localStorage.setItem('assessments', JSON.stringify(updatedAssessments));

//     // Clear form fields
//     setNewQuestion('');
//     setOptions({ option1: '', option2: '', option3: '', option4: '' });
//     setCorrectOption('option1');
//   };

//   // Handler to delete a question
//   const handleDeleteQuestion = (index) => {
//     const updatedQuestions = assessment.questions.filter((_, i) => i !== index);
//     const updatedAssessment = { ...assessment, questions: updatedQuestions };
//     const updatedAssessments = assessments.map((a) => (a.jobId === jobId ? updatedAssessment : a));
    
//     setAssessments(updatedAssessments);
//     localStorage.setItem('assessments', JSON.stringify(updatedAssessments));
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 py-8">
//       <div className="max-w-2xl mx-auto px-4">
        
//         {/* get name of job & append assessment at the end of it to display the name of assessment */}
//         <div className="text-white text-4xl text-center">Software Engineering Assessment</div>



//         <h1 className="text-3xl font-bold text-gray-800 mb-6">{assessment.title}</h1>
//         <div className="space-y-6">
//           {assessment.questions.map((question, index) => (
//             <div key={index} className="relative border-2 border-dashed border-gray-600 p-4 bg-[#1F2937] rounded-lg shadow-sm">
//               {/* Delete Button */}
//               <button
//                 onClick={() => handleDeleteQuestion(index)}
//                 className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 focus:outline-none"
//                 aria-label="Delete question"
//               >
//                 {/* SVG icon for dustbin */}
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//               <p className="text-lg font-medium mb-2 text-gray-300">{index + 1}. {question.questionText}</p>
//               <ul className="ml-4 space-y-1">
//                 {Object.entries(question.options).map(([key, option]) => (
//                   <li key={key} className={key === question.correctOption ? 'text-green-600 font-semibold' : 'text-gray-300'}>
//                     {key.slice(-1).toUpperCase()}. {option}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-sm">
//           <h2 className="text-xl font-semibold text-white mb-4">Add a New Question</h2>
//           <input
//             type="text"
//             placeholder="Enter question text"
//             value={newQuestion}
//             onChange={(e) => setNewQuestion(e.target.value)}
//             className="w-full p-2 border-2 border-dashed border-gray-600 rounded-lg mb-4 bg-gray-900"
//           />
//           {['option1', 'option2', 'option3', 'option4'].map((opt) => (
//             <input
//               key={opt}
//               type="text"
//               placeholder={`Option ${opt.slice(-1).toUpperCase()}`}
//               value={options[opt]}
//               onChange={(e) => setOptions({ ...options, [opt]: e.target.value })}
//               className="w-full p-2 rounded-lg mb-2 bg-gray-900 border-2 border-dashed border-gray-600"
//             />
//           ))}
//           <select value={correctOption} onChange={(e) => setCorrectOption(e.target.value)} className="w-full p-2 border-2 border-dashed border-gray-600 text-gray-400 rounded-lg mb-4 bg-gray-900">
//             <option value="option1">Option A</option>
//             <option value="option2">Option B</option>
//             <option value="option3">Option C</option>
//             <option value="option4">Option D</option>
//           </select>
//           <button onClick={handleAddQuestion} className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm font-semibold leading-5 text-gray-300 hover:border-gray-600 hover:text-gray-200 hover:shadow-sm focus:ring focus:ring-gray-600/40 active:border-gray-700 active:shadow-none">
//             Add Question
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AssessmentDetail;

import React, { useState, useContext, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { AssessmentContext } from '../context/assesmentContext';

const AssessmentDetail = () => {
  const { jobId } = useParams();
  const location = useLocation();
  const jobTitle = location.state?.jobTitle || "Job Not Found";
  const { assessments, createAssessment, addQuestion, deleteQuestion } = useContext(AssessmentContext);
  const [newQuestion, setNewQuestion] = useState('');
  const [options, setOptions] = useState({ option1: '', option2: '', option3: '', option4: '' });
  const [correctOption, setCorrectOption] = useState('option1');

  // Check if the assessment exists, if not create one
  useEffect(() => {
    if (!assessments.some((assessment) => assessment.jobId === jobId)) {
      createAssessment(jobId);  // Create assessment if it doesn't exist
    }
  }, [jobId, assessments, createAssessment]);

  const assessment = assessments.find((a) => a.jobId === jobId) || { jobId, questions: [] };

  const handleAddQuestion = async () => {
    const newQuestionData = {
      questionText: newQuestion,
      options: { ...options },
      correctOption,
    };
    await addQuestion(jobId, newQuestionData);
    // Clear form fields
    setNewQuestion('');
    setOptions({ option1: '', option2: '', option3: '', option4: '' });
    setCorrectOption('option1');
  };

  const handleDeleteQuestion = (index) => {
    deleteQuestion(jobId, index);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-white text-4xl text-center">{jobTitle} Assessment</div>
        {/* <h1 className="text-3xl font-bold text-gray-800 mb-6">{assessment.jobId}</h1> */}
        <div className="mt-4 space-y-6">
          {assessment.questions.map((question, index) => (
            <div key={index} className="relative border-2 border-dashed border-gray-600 p-4 bg-[#1F2937] rounded-lg shadow-sm">
              <button
                onClick={() => handleDeleteQuestion(index)}
                className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 focus:outline-none"
                aria-label="Delete question"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <p className="text-lg font-medium mb-2 text-gray-300">{index + 1}. {question.questionText}</p>
              <ul className="ml-4 space-y-1">
                {Object.entries(question.options).map(([key, option]) => (
                  <li key={key} className={key === question.correctOption ? 'text-green-600 font-semibold' : 'text-gray-300'}>
                    {key.slice(-1).toUpperCase()}. {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-white mb-4">Add a New Question</h2>
          <input
            type="text"
            placeholder="Enter question text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            className="w-full p-2 border-2 border-dashed border-gray-600 rounded-lg mb-4 bg-gray-900 text-white"
          />
          {['option1', 'option2', 'option3', 'option4'].map((opt) => (
            <input
              key={opt}
              type="text"
              placeholder={`Option ${opt.slice(-1).toUpperCase()}`}
              value={options[opt]}
              onChange={(e) => setOptions({ ...options, [opt]: e.target.value })}
              className="w-full p-2 rounded-lg mb-2 bg-gray-900 border-2 border-dashed border-gray-600 text-white"
            />
          ))}
          <select value={correctOption} onChange={(e) => setCorrectOption(e.target.value)} className="w-full p-2 border-2 border-dashed border-gray-600 text-gray-400 rounded-lg mb-4 bg-gray-900">
            <option value="option1">Option A</option>
            <option value="option2">Option B</option>
            <option value="option3">Option C</option>
            <option value="option4">Option D</option>
          </select>
          <button onClick={handleAddQuestion} className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm font-semibold leading-5 text-gray-300 hover:border-gray-600 hover:text-gray-200 hover:shadow-sm focus:ring focus:ring-gray-600/40 active:border-gray-700 active:shadow-none">
            Add Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentDetail;

