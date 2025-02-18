/* Write your T-SQL query statement below */
SELECT S.student_id, S.student_name,SUB.subject_name,COUNT(E.student_id)AS ATTENDED_EXAMS
FROM STUDENTS S
CROSS JOIN SUBJECTS SUB
LEFT JOIN EXAMINATIONS E
ON S.STUDENT_ID=E.STUDENT_ID
AND SUB.SUBJECT_NAME=E.SUBJECT_NAME
GROUP BY s.student_id, s.student_name, sub.subject_name
ORDER BY s.student_id, sub.subject_name;