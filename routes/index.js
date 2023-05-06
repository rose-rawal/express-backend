import { Router } from "express";
import userSchema from "../models/userSchema.js";


const router = Router()

/**
 * GET api for fetching all users
 */
async function getAllUsers(req, res) {
    const users = await userSchema.find();
    res.json(users);
    res.end();
}
router.get('/users', getAllUsers);

/**
 * GET api for fetching a user by id 
 */
async function getUserById(req, res) {
    const user = await userSchema.findOne({
        _id: req.params.id
    });
    res.json(user);
    res.end();
}
router.get('/users/:id', getUserById);

/**
 * POST api for creating a new user
 */
async function addUser(req, res) {
    const { name, age } = req.body;
    const user = await userSchema.create({
        name,
        age
    });
    return res.json(user);
}
router.post('/users', addUser);

/**
 * PUT api for updating a user by id
 */
async function updateUser(req, res) {
    const { name, age } = req.body;
    const user = await userSchema.findOneAndUpdate({
        _id: req.params.id
    }, {
        name,
        age
    }, {
        new: true
    });
    return res.json(user);
}
router.put('/users/:id', updateUser);

/**
 * DELETE api for deleting a user by id
 */
async function deleteUser(req, res) {
    const user = await userSchema.findOneAndDelete({ _id: req.params.id });
    return res.json(user);
}
router.delete('/users/:id', deleteUser);

export default router