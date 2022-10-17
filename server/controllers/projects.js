import express from "express";
import mongoose from "mongoose";

import Project from "../models/Project.js";

const router = express.Router();

export const getProjects = async (req, res) => {
  try {
    const Project = await Project.find();

    res.status(200).json(Project);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProject = async (req, res) => {
  const { id } = req.params;

  try {
    const Project = await Project.findById(id);

    res.status(200).json(Project);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  const { title, message, selectedFile, creator, tags } = req.body;

  const newProject = new Project({
    title,
    message,
    selectedFile,
    creator,
    tags,
  });

  try {
    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Project with id: ${id}`);

  const updatedProject = {
    creator,
    title,
    message,
    tags,
    selectedFile,
    _id: id,
  };

  await Project.findByIdAndUpdate(id, updatedProject, { new: true });

  res.json(updatedProject);
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Project with id: ${id}`);

  await Project.findByIdAndRemove(id);

  res.json({ message: "Project deleted successfully." });
};

export const likeProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Project with id: ${id}`);

  const Project = await Project.findById(id);

  const updatedProject = await Project.findByIdAndUpdate(
    id,
    { likeCount: Project.likeCount + 1 },
    { new: true }
  );

  res.json(updatedProject);
};

export default router;
