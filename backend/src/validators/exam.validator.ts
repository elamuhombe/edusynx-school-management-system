//src/validators/exam.validator.ts
import { z } from "zod";

const ExamValidator = z.object({
  examName: z.string().min(1, "Exam name is required"),
  examDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD expected)"),
  term: z.string().min(1, "Term is required"),
});

export type IExam = z.infer<typeof ExamValidator>;
export{ExamValidator}
