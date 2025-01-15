const Task = require('../models/task.model');

const createTask = async (req, res, next) => {
  
  const { name, description, duration } = req.body;

  try {

    const task = await Task.create({
      name,
      description,
      duration
    })

    return res.status(201).json(task)

  } catch (err) {
    next(err)
  }
}

const getAllTasks = async (req, res, next) => {
  
  const { from, to } = req.query;
  
  try {

    let dateObj = {}

    if (from) {
      dateObj["$gte"] = new Date(from);
    }
    if (to) {
      dateObj["$lte"] = new Date(to);
    }

    let filter = {}

    if (from || to) {
      filter.createdAt = dateObj;
    }

    const tasks = await Task.find(filter);

    return res.status(200).json(tasks);

  } catch (err) {
    next(err)
  }
}

const getTotalDuration = async (req, res, next) => {
  
  const { from, to } = req.query;

  try {

    let dateObj = {}

    if (from) {
      dateObj["$gte"] = new Date(from);
    }

    if (to) {
      dateObj["$lte"] = new Date(to);
    }

    let filter = {}

    if (from || to) {
      filter.createdAt = dateObj;
    }

    const tasks = await Task.find(filter);

    let duration = 0;

    tasks.map((task) => {
      duration += task.duration
    })

    return res.status(200).json({
      duration
    })

  } catch (err) {
    next(err)
  }
}

const updateTask = async (req, res, next) => {

  const { id } = req.params;
  const { name, description, duration } = req.body;

  try {

    const task = await Task.findById(id)

    if (!task) {
      res.status(404)
      throw new Error("Task with given id not found")
    }

    const updatedTask = await Task.findByIdAndUpdate(id, { name, description, duration }, { new: true })

    return res.status(200).json(updatedTask)

  } catch (err) {
    next(err)
  }
}

const deleteTask = async (req, res, next) => {

  const { id } = req.params;

  try {

    const task = await Task.findById(id);

    if (!task) {
      res.status(404)
      throw new Error("Task with given id not found")
    }

    await task.deleteOne();

    return res.status(204).json({
      message: "task deleted"
    });

  } catch (err) {
    next(err)
  }
}

module.exports = {
  createTask,
  getAllTasks,
  getTotalDuration,
  updateTask,
  deleteTask
}