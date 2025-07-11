const Student = require('../models/studentModel');

// GET /api/students?class=A1&search=John&page=1&limit=5
exports.getAllStudents = async (req, res) => {
  try {
    const { search, class: className, page = 1, limit = 10 } = req.query;

    const query = {};

    // Search by name (case-insensitive)
    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }

    // Filter by class
    if (className) {
      query.class = className;
    }

    const students = await Student.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Student.countDocuments(query);

    res.json({
      page: Number(page),
      limit: Number(limit),
      total,
      students,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// POST /api/students
exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: 'Error creating student', error: err.message });
  }
};
