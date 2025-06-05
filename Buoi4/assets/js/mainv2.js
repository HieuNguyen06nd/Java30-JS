
const grades = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' }
];

// 1. Trung bình cả lớp
const averageGrade = students =>
  students.reduce((sum, s) => sum + s.grade, 0) / students.length;

console.log(averageGrade(grades))

// 2. Trung bình nam
const averageMaleGrade = students =>
  averageGrade(students.filter(s => s.sex === 'M'));

console.log(averageMaleGrade(grades))

// 3. Trung bình nữ
const averageFemaleGrade = students =>
  averageGrade(students.filter(s => s.sex === 'F'));

console.log(averageFemaleGrade(grades))

// 4. Nam có điểm cao nhất
const topMaleStudent = students =>
  students.filter(s => s.sex === 'M').reduce((top, s) => s.grade > top.grade ? s : top);

console.log(topMaleStudent(grades))

// 5. Nữ có điểm cao nhất
const topFemaleStudent = students =>
  students.filter(s => s.sex === 'F').reduce((top, s) => s.grade > top.grade ? s : top);

console.log(topFemaleStudent(grades))

// 6. Nam có điểm thấp nhất
const bottomMaleStudent = students =>
  students.filter(s => s.sex === 'M').reduce((bottom, s) => s.grade < bottom.grade ? s : bottom);

console.log(bottomMaleStudent(grades))
// 7. Nữ có điểm thấp nhất
const bottomFemaleStudent = students =>
  students.filter(s => s.sex === 'F').reduce((bottom, s) => s.grade < bottom.grade ? s : bottom);

console.log(bottomFemaleStudent(grades))

// 8. Điểm cao nhất
const highestGrade = students =>
  Math.max(...students.map(s => s.grade));

console.log(highestGrade(grades))

// 9. Điểm thấp nhất
const lowestGrade = students =>
  Math.min(...students.map(s => s.grade));

console.log(lowestGrade(grades));

// 10. Danh sách nữ
const femaleStudents = students =>
  students.filter(s => s.sex === 'F');

console.log(femaleStudents(grades));

// 11. Sắp xếp theo tên (A-Z)
const sortByNameAsc = students =>
  [...students].sort((a, b) => a.name.localeCompare(b.name));

console.log(sortByNameAsc(grades));

// 12. Sắp xếp theo điểm giảm dần
const sortByGradeDesc = students =>
  [...students].sort((a, b) => b.grade - a.grade);

console.log(sortByGradeDesc(grades));

// 13. Nữ tên bắt đầu bằng “J”
const femaleNamesStartWithJ = students =>
  students.filter(s => s.sex === 'F' && s.name.startsWith('J'));

console.log(femaleNamesStartWithJ(grades));

// 14. Top 5 điểm cao nhất
const top5Students = students =>
  sortByGradeDesc(students).slice(0, 5);

console.log(top5Students(grades));
