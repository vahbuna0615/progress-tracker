const express = require('express');
const { createTask, getAllTasks, getTotalDuration, updateTask, deleteTask } = require('../controllers/task.controller');
const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: API for tracking task progress
 */

/**
 * @swagger
 *  paths:
 *   /tasks:
 *    post:
 *     tags: [Tasks]
 *     summary: Create entry for completed task
 *     description: Creates new entry with details of completed task
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          name:
 *           type: string
 *           description: Name of the Task
 *           example: default name
 *          description: 
 *           type: string
 *           description: Task description
 *           example: default description
 *          duration: 
 *           type: number
 *           description: task duration
 *           example: 1
 *     responses:
 *      201:
 *        description: Successfully creates new task entry
 *      500:
 *        description: Other error
 */
router.post('/', createTask)

/**
 * @swagger
 *  paths:
 *   /tasks:
 *    get:
 *     tags: [Tasks]
 *     summary: Get all tasks
 *     description: Retrieves all tasks
 *     parameters:
 *      - in: query
 *        name: from
 *        description: lower limit of date filter
 *        schema:
 *          type: string
 *      - in: query
 *        name: to
 *        description: upper limit of date filter
 *        schema:
 *          type: string
 *      - in: query
 *        name: page
 *        description: Page number
 *        schema:
 *          type: number
 *      - in: query
 *        name: limit
 *        description: No of items per page
 *        schema:
 *          type: number
 *     responses:
 *      200:
 *        description: Successfully retrieves tasks 
 *      500:
 *        description: Other error
 */
router.get('/', getAllTasks)

/**
 * @swagger
 *  paths:
 *   /tasks/duration:
 *    get:
 *     tags: [Tasks]
 *     summary: Get total work duration
 *     description: Returns the total work duration
 *     parameters:
 *      - in: query
 *        name: from
 *        description: lower limit of date filter
 *        schema:
 *          type: string
 *      - in: query
 *        name: to
 *        description: upper limit of date filter
 *        schema:
 *          type: string
 *      - in: query
 *        name: currentDay
 *        description: Returns duration worked for the current day
 *        schema:
 *          type: boolean
 *     responses:
 *      200:
 *        description: Successfully returns total duration
 *      500:
 *        description: Other error
 */
router.get('/duration', getTotalDuration)

/**
 * @swagger
 *  paths:
 *   /tasks/{id}:
 *    put:
 *     tags: [Tasks]
 *     summary: Update task entry
 *     description: Updates task entry using id
 *     parameters:
 *      - in: path
 *        name: id
 *        description: id of task instance
 *        schema:
 *          type: string
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          name:
 *           type: string
 *           description: Name of the Task
 *           example: default name
 *          description: 
 *           type: string
 *           description: Task description
 *           example: default description
 *          duration: 
 *           type: number
 *           description: task duration
 *           example: 1
 *     responses:
 *      200:
 *        description: Successfully updates given task entry
 *      500:
 *        description: Other error
 */
router.put('/:id', updateTask)

/**
 * @swagger
 *  paths:
 *   /tasks/{id}:
 *    delete:
 *     tags: [Tasks]
 *     summary: Delete task entry
 *     description: Removes task entry using id
 *     parameters:
 *      - in: path
 *        name: id
 *        description: id of task instance
 *        schema:
 *          type: string
 *     responses:
 *      204:
 *        description: Successfully deleted given task entry
 *      500:
 *        description: Other error
 */
router.delete('/:id', deleteTask)

module.exports = router;